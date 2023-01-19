import { useState } from 'react';
import useSWR from "swr";
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { v4 } from 'uuid';
import { GetData, PutData, PostData, DeleteData } from '../utils/requestController';

// Enum models.
export enum TipObject {
    Comment = 'comments',
    Customer = 'customers',
}

// Model objects for table.
const ModelObject = {
  comments: {
    commentDate: '',
    commentText: '',
    customer: {
      primarykey: ''
    }
  },
  customers: {
    name: '',
    age: ''
  }
}

const ServerRequests = () => {
  const [enumValue, setEnumValue] = useState(TipObject.Comment);
  const [idRecord, setIdRecord] = useState('');
  const [queryResult, setQueryResult] = useState('');
  const [typeEnterData, setTypeEnterData] = useState('table');
  const [enterData, setEnterData] = useState('{}');

  // Example SWR, get models.
  const fetcher = (url) => GetData(url).then((res) => res.data);
  const { data } = useSWR(`${process.env.API_URL}/${enumValue}`, fetcher);

  // Select model.
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEnumValue(TipObject[event.target.value as keyof typeof TipObject]);
  };

  // Get data for POST and PUT requests.
  const getEnterData = () => {
    const data = typeEnterData === 'table' ? ModelObject[enumValue] : JSON.parse(enterData);

    return Object.assign({}, data);
  };

  // GET requests.
  const handleGet = () => {
    GetData(`${process.env.API_URL}/${enumValue}/${idRecord}`).then((res) => {
      const json = JSON.stringify(res.data);
      setQueryResult(json);
    });
  };

  // POST requests.
  const handlePost = () => {
    var data = getEnterData();
    data.primarykey = v4();

    PostData(`${process.env.API_URL}/${enumValue}`, data).then((res) => {
      const json = JSON.stringify(res.data);
      setQueryResult(json);
    });
  };

  // PUT requests.
  const handlePut = () => {
    var data = getEnterData();
    data.primarykey = idRecord;

    PutData(`${process.env.API_URL}/${enumValue}`, data).then((res) => {
      const json = JSON.stringify(res.data);
      setQueryResult(json);
    });
  };

  // DELETE requests.
  const handleDelete = () => {
    DeleteData(`${process.env.API_URL}/${enumValue}/${idRecord}`).then((res) => {
      setQueryResult(`Successfully deleted, status ${res.status}`);
    });
  };

  return (
    <div className="Form">
      <Form.Label>Model name</Form.Label>
      <Form.Select  style={{ width: '18rem' }} aria-label={enumValue} onChange={handleChange}>
        {(Object.keys(TipObject) as Array<keyof typeof TipObject>).map((key) => (
          <option value={key} key={key}>{key}</option>
        ))}
      </Form.Select>
      <Form.Label>ID model (for GET, PUT and DELETE request)</Form.Label>
      <Form.Select  style={{ width: '18rem' }} aria-label={idRecord} onChange={(e) => setIdRecord(e.target.value)}>
          <option value='' key='empty'></option>
        {(data == null ? [] : data).map((key) => (
          <option value={key.primarykey} key={key.primarykey}>{key.primarykey}</option>
        ))}
      </Form.Select>

      <Form.Label>POST body (for PUT and POST request)</Form.Label>
      <Tabs
        defaultActiveKey="table"
        id="tab"
        onSelect={(e) => setTypeEnterData(e)}
      >
         <Tab eventKey="table" title="Table">
           <Table striped bordered hover style={{ width: '40rem' }}>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
              {(Object.keys(ModelObject[enumValue]).map((prop, index) => {
                return (
                  <tr key={index}>
                    <td>{prop}</td>
                    <td>
                      <Form.Control
                        type="text"
                        style={{ width: '18rem' }}
                        onChange={(e) => {
                          var value = ModelObject[enumValue][prop];
                          if (prop === 'customer') {
                            value.primarykey = e.target.value
                          } else {
                            value = e.target.value
                          }
                        }}
                     />
                    </td>
                  </tr>
                )
              }))}
              </tbody>
           </Table>
         </Tab>
         <Tab eventKey="textarea" title="Textarea">
           <Form.Group>
             <Form.Control
               as="textarea"
               rows={5}
               style={{ width: '18rem' }}
               value={enterData}
               onChange={(e) => setEnterData(e.target.value)}
             />
           </Form.Group>
         </Tab>
       </Tabs>

      <Button as="input" type="button" value="GET" onClick={handleGet} />{' '}
      <Button as="input" type="button" value="POST" onClick={handlePost} />{' '}
      <Button as="input" type="button" value="PUT" onClick={handlePut} />{' '}
      <Button as="input" type="button" value="DELETE" onClick={handleDelete} />

      <Form.Label>Request result</Form.Label>
      <Card style={{ width: '50rem' }}>
        <Card.Body>{queryResult}</Card.Body>
      </Card>
    </div>
  );
}

export default ServerRequests;
