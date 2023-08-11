import * as React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import useSWR from "swr";
import { GetData } from '../../utils/requestController';

// Comments edit form.
export const CommentEditForm = ({ route }) => {
  const { id } = route.params;
  const fetcher = (url) => GetData(url).then((res) => res.data);
  // const { data } = useSWR(`${process.env.API_URL}/comments/${id}`, fetcher);
  const { data } = useSWR(`http://localhost:8081/service/backend/api/comments/${id}`, fetcher);
  let { commentDate, commentText, customer} = data || {};
  const { name } = customer || {};

  var [, setInputDate] = React.useState(commentDate);
  return (
    <SafeAreaProvider>
      <View>
        <Text>Comments edit form {id}</Text>
        <DatePickerInput
          locale="ru"
          label="Date"
          value={commentDate}
          onChange={(inputDate) => setInputDate(inputDate)}
          inputEnabled={true}
          inputMode="start"
        />

        <TextInput
          label="Comment"
          value={commentText}
          multiline
        />

        <TextInput
          label="Client"
          value={name}
        />
      </View>
    </SafeAreaProvider>    
  );
};
