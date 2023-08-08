import { useState } from 'react';
import { Button, SegmentedButtons,  TextInput, Card } from 'react-native-paper';
import { View, Text } from 'react-native';
import uuid from 'react-native-uuid';
import { GetData, PutData, PostData, DeleteData } from '../utils/requestController';

// Enum models.
export enum TipObject {
    Comment = 'comments',
    Customer = 'customers',
}

export const ServerRequests = ({ navigation }) => {
  const [enumValue, setValue] = useState(TipObject.Comment.toString());

  const [idRecord, setIdRecord] = useState('');
  const [queryResult, setQueryResult] = useState('');
  const [enterData, setEnterData] = useState('{}');

  // Get data for POST and PUT requests.
  const getEnterData = () => {
    const modelType = enumValue === 'comments' ? TipObject.Comment : TipObject.Customer;
    const data = JSON.parse(enterData);

    return Object.assign({}, data);
  };

  // GET requests.
  const handleGet = () => {
    GetData(`${process.env.EXPO_PUBLIC_API_URL}/${enumValue}/${idRecord}`).then((res) => {
    const json = JSON.stringify(res.data);
      setQueryResult(json);
      setEnterData(json);
    });
  };

  // POST requests.
  const handlePost = () => {
    var data = getEnterData();
    data.primarykey = idRecord;

    PostData(`${process.env.EXPO_PUBLIC_API_URL}/${enumValue}`, data).then((res) => {
      const json = JSON.stringify(res.data);
      setQueryResult(json);
    });
  };

  // PUT requests.
  const handlePut = () => {
    var data = getEnterData();
    data.primarykey = uuid.v4();

    PutData(`${process.env.EXPO_PUBLIC_API_URL}/${enumValue}`, data).then((res) => {
      const json = JSON.stringify(res.data);
      setQueryResult(json);
      setEnterData(json);
    });
  };

  // DELETE requests.
  const handleDelete = () => {
    DeleteData(`${process.env.EXPO_PUBLIC_API_URL}/${enumValue}/${idRecord}`).then((res) => {
      setQueryResult(`Successfully deleted, status ${res.status}`);
    });
  };

  return (
    <View>
      <Text>Model name</Text>
      <SegmentedButtons
        value={enumValue}
        onValueChange={setValue}
        buttons={[
          {
            value: 'comments',
            label: 'Comments',
          },
          {
            value: 'customers',
            label: 'Customers',
          },
        ]}
      />
      <Text>ID model (for GET, PUT and DELETE request)</Text>
      <TextInput
        label="ID"
        value={idRecord}
        onChangeText={setIdRecord}
      />
      <TextInput
        label="RecordData"
        multiline
        numberOfLines={4}
        value={enterData}
        onChangeText={setEnterData}
      />

      <Button mode="outlined" onPress={handleGet}>Get</Button>{' '}
      <Button mode="outlined" onPress={handlePost}>POST</Button>{' '}
      <Button mode="outlined" onPress={handlePut}>PUT</Button>{' '}
      <Button mode="outlined" onPress={handleDelete}>DELETE</Button>

      <Text>Request result</Text>
      <Card>
        <Card.Content>{queryResult}</Card.Content>
      </Card>
    </View>
  );
}

export default ServerRequests;
