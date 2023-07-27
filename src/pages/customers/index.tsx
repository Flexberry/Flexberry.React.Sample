import { useRouter } from 'next/navigation'
import useSWR from "swr";
import Table from 'react-bootstrap/Table';
import { GetData } from '../../utils/requestController';

// Customers list form.
const CustomerListForm = () => {
  const router = useRouter()

  // Example SWR, get models.
  const fetcher = (url) => GetData(url).then((res) => res.data);
  const { data } = useSWR(`${process.env.API_URL}/customers`, fetcher);

  return (
    <div>
      <h2>Customer list form</h2>
      <Table striped bordered hover>
         <thead>
           <tr>
             <th>Name</th>
             <th>Age</th>
             <th>Comments count</th>
           </tr>
         </thead>
         <tbody>
           {(data == null ? [] : data).map((prop) => (
             <tr key={prop.primarykey} onClick={() => router.push(`/customers/${prop.primarykey}`)}>
               <td>{prop.name}</td>
               <td>{prop.age}</td>
               <td>{prop.comments.length}</td>
             </tr>
           ))}
         </tbody>
      </Table>
    </div>
  );
}

export default CustomerListForm;
