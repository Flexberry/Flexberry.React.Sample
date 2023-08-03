import { View } from 'react-native';
import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import { Text } from 'react-native-paper';
import useSWR from "swr";
import { GetData } from '../../utils/requestController';

export const CustomerEditForm = ({ route }) => {
  const { id } = route.params;
  const fetcher = (url) => GetData(url).then((res) => res.data);
  // const { data } = useSWR(`${process.env.API_URL}/customers/${id}`, fetcher);
  const { data } = useSWR(`http://localhost:8081/service/backend/api/customers/${id}`, fetcher);
  const { name, age, comments} = data || {};

  return (
    <View>
      <Text>Customers edit form {id}</Text>
      <TextInput
        label="Name"
        value={name}
      />
      <TextInput
        label="Age"
        value={age}
      />
      <Text variant="labelLarge">Comments</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Comments</DataTable.Title>
        </DataTable.Header>
        {(comments == null ? [] : comments).map((prop: { primarykey: any; commentDate: any; commentText: string | any[]; }) => (
          <DataTable.Row key={prop.primarykey}>
            <DataTable.Cell>{prop.commentDate}</DataTable.Cell>
            <DataTable.Cell>{prop.commentText}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};
