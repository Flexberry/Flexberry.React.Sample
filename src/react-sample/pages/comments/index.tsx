import { useRouter } from 'next/navigation'
import useSWR from "swr";
import Table from 'react-bootstrap/Table';
import { GetData } from '../../utils/requestController';

// Comments list form.
const CommentListForm = () => {
  const router = useRouter()

  const fetcher = (url) => GetData(url).then((res) => res.data);
  const { data } = useSWR(`${process.env.API_URL}/comments`, fetcher);

  return (
    <div>
      <h2>Comment list form</h2>
      <Table striped bordered hover>
         <thead>
           <tr>
             <th>Date</th>
             <th>Text</th>
             <th>Customer name</th>
             <th>Customer age</th>
           </tr>
         </thead>
         <tbody>
           {(data == null ? [] : data).map((prop) => (
             <tr key={prop.primarykey} onClick={() => router.push(`/comments/${prop.primarykey}`)}>
               <td>{prop.commentDate}</td>
               <td>{prop.commentText}</td>
               <td>{prop.customer.name}</td>
               <td>{prop.customer.age}</td>
             </tr>
           ))}
         </tbody>
      </Table>
    </div>
  );
}

export default CommentListForm;
