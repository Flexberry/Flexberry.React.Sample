import { DataTable } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import useSWR from "swr";
import { GetData } from '../../utils/requestController';

// Customers list form.
export const CustomerListForm = ({ navigation }) => {

  // Example SWR, get models.
  const fetcher = (url: string) => GetData(url).then((res: { data: any; }) => res.data);
  const { data } = useSWR(`${process.env.EXPO_PUBLIC_API_URL}/customers`, fetcher);

  return (
    <View>
      <Text>Customer list form</Text>
      <StatusBar style="auto" />
      <DataTable>
         <DataTable.Header>
           <DataTable.Title>Name</DataTable.Title>
           <DataTable.Title>Age</DataTable.Title>
           <DataTable.Title>Comments count</DataTable.Title>
         </DataTable.Header>
           {(data == null ? [] : data).map((prop: { primarykey: any; name: any; age: any; comments: string | any[]; }) => (
             <DataTable.Row key={prop.primarykey} onPress={() => navigation.navigate('CustomersE', { id: prop.primarykey })}>
               <DataTable.Cell>{prop.name}</DataTable.Cell>
               <DataTable.Cell numeric>{prop.age}</DataTable.Cell>
               <DataTable.Cell numeric>{prop.comments.length}</DataTable.Cell>
             </DataTable.Row>
           ))}
      </DataTable>
    </View>
  );
}
