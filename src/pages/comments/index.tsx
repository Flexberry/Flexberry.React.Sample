import React, { useState } from 'react';
import useSWR from "swr";
import Link from 'next/link';
import { Form } from 'react-bootstrap';
import { GetData } from '../../utils/requestController';

// Customers edit form.
const CommentListForm = () => {
  const [id, setId] = useState('');

  const fetcher = (url) => GetData(url).then((res) => res.data);
  const { data } = useSWR(`${process.env.API_URL}/comments`, fetcher);

  return (
    <div className="Form">
      <Form.Label>Comments</Form.Label>
      <Form.Group>
        <Form.Label>ID model</Form.Label>
        <Form.Select  style={{ width: '18rem' }} aria-label={id} onChange={(e) => setId(e.target.value)}>
            <option value='' key='empty'></option>
          {(data == null ? [] : data).map((key) => (
            <option value={key.primarykey} key={key.primarykey}>{key.primarykey}</option>
          ))}
        </Form.Select>
      </Form.Group>
      {id ? (
        <Link href={`/comments/${id}`} className="nav-link" passHref legacyBehavior>Edit Form</Link>
      ) : ('')}
      </div>
  );
}

export default CommentListForm;
