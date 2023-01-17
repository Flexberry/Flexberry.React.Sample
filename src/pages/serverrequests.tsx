import { useEffect, useState } from 'react';
import useSWR from "swr"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { GetData, PutData, PostData, DeleteData } from '../utils/requestController';

export enum TipObjekta {
    Comment = 'comments',
    Customer = 'customers',
}

const ServerRequests = () => {
  const [enumValue, setEnumValue] = useState(TipObjekta.Comment);
  const [idRecord, setIdRecord] = useState("");
  const [queryResult, setQueryResult] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEnumValue(TipObjekta[event.target.value as keyof typeof TipObjekta]);
  };

  const handleGet = () => {
    //const { data, error } = useSWR(`${process.env.API_URL}/${enumValue}/${idRecord}`, GetData)
    GetData(`${process.env.API_URL}/${enumValue}/${idRecord}`).then((res) => {
      setQueryResult(res.data)
    });
  };

  const handlePost = () => {
    //const { data, error } = useSWR(`${process.env.API_URL}/${enumValue}`, GetData)
  };

  const handlePut = () => {
    //const { data, error } = useSWR(`${process.env.API_URL}/${enumValue}`, GetData)
  };

  const handleDelete = () => {
    //const { data, error } = useSWR(`${process.env.API_URL}/${enumValue}`, GetData)
  };

  return (
    <div className="Form">
      <Form.Select  style={{ width: '18rem' }} aria-label={enumValue} onChange={handleChange}>
        {(Object.keys(TipObjekta) as Array<keyof typeof TipObjekta>).map((key) => (
          <option value={key} key={key}>{key}</option>
        ))}
      </Form.Select>
      <Form.Control
         type="text"
         style={{ width: '18rem' }}
         value={idRecord}
         onChange={(e) => setIdRecord(e.target.value)}
       />

       <Form.Group>
         <Form.Label>POST body</Form.Label>
         <Form.Control
           as="textarea"
           rows={5}
           style={{ width: '18rem' }}
           value={idRecord}
           onChange={(e) => setIdRecord(e.target.value)}
         />
       </Form.Group>

      <Button as="input" type="button" value="GET" onClick={handleGet} />{' '}
      <Button as="input" type="button" value="POST" onClick={handlePost} />{' '}
      <Button as="input" type="button" value="PUT" onClick={handlePut} />{' '}
      <Button as="input" type="button" value="DELETE" onClick={handleDelete} />

      <Card style={{ width: '50rem' }}>
        <Card.Body>{queryResult}</Card.Body>
      </Card>

    </div>
  );
}

export default ServerRequests;
