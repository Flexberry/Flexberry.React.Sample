import React from 'react';
import useSWR from "swr";
import { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';
import { GetData } from '../../utils/requestController';

// Comments edit form.
const CommentEditForm = () => {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = (url) => GetData(url).then((res) => res.data);
  const { data } = useSWR(`${process.env.API_URL}/comments/${id}`, fetcher);

  const { commentDate, commentText, customer} = data || {};
  const { name } = customer || {};

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Form">
      <Form.Label>Comment</Form.Label>
      <Form.Group>
        <Form.Label>Дата</Form.Label>
        <Form.Control
          type="date"
          style={{ width: '18rem' }}
          defaultValue={commentDate}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Комментарий</Form.Label>
        <Form.Control
          as="textarea"
          style={{ width: '18rem' }}
          placeholder="(нет значения)"
          defaultValue={commentText}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Клиент</Form.Label>
        <Form.Control
          type="text"
          style={{ width: '18rem' }}
          placeholder="(нет значения)"
          defaultValue={name}
        />
      </Form.Group>
    </div>
  );
}

export default CommentEditForm;
