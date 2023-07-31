import React from 'react';
import useSWR from "swr";
import { useRouter } from 'next/router';
import { Form, Table } from 'react-bootstrap';
import { GetData } from '../../utils/requestController';

// Customers edit form.
const CustomerEditForm = () => {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = (url) => GetData(url).then((res) => res.data);
  const { data } = useSWR(`${process.env.API_URL}/customers/${id}`, fetcher);

  const { name, age, comments} = data || {};

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Form">
      <Form.Label>Customer</Form.Label>
      <Form.Group>
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          style={{ width: '18rem' }}
          placeholder="(нет значения)"
          defaultValue={name}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Возраст</Form.Label>
        <Form.Control
          type="number"
          style={{ width: '18rem' }}
          placeholder="(нет значения)"
          defaultValue={age}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Комментарии</Form.Label>
        <Table striped bordered hover style={{ width: '40rem' }}>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            {comments.map(({ primarykey, commentDate, commentText }) => {
              return (
                <tr key={primarykey}>
                  <td>{commentDate}</td>
                  <td>{commentText}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Form.Group>
    </div>
  );
}

export default CustomerEditForm;
