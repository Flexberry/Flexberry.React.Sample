import { DataTable } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import useSWR from "swr";
import { GetData } from '../../utils/requestController';

// Comments list form.
export const CommentListForm = ({ navigation }) => {

  const fetcher = (url: string) => GetData(url).then((res: { data: any; }) => res.data);
  const { data } = useSWR(`${process.env.EXPO_PUBLIC_API_URL}/comments`, fetcher);

  return (
    <View>
      <Text>Comments list form</Text>
      <StatusBar style="auto" />
      <DataTable>
         <DataTable.Header>
           <DataTable.Title>Date</DataTable.Title>
           <DataTable.Title>Text</DataTable.Title>
           <DataTable.Title>Customer name</DataTable.Title>
           <DataTable.Title>Customer age</DataTable.Title>
         </DataTable.Header>
           {(data == null ? [] : data).map((prop: { primarykey: any; commentDate: any; commentText: any; customer: { name: any; age: any; }; }) => (
             <DataTable.Row key={prop.primarykey} onPress={() => navigation.navigate('CommentsE', { id: prop.primarykey })}>
               <DataTable.Cell>{prop.commentDate}</DataTable.Cell>
               <DataTable.Cell>{prop.commentText}</DataTable.Cell>
               <DataTable.Cell>{prop.customer.name}</DataTable.Cell>
               <DataTable.Cell numeric>{prop.customer.age}</DataTable.Cell>
             </DataTable.Row>
           ))}
      </DataTable>
    </View>
  );
};
