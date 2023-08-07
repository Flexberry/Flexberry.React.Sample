import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

// Comments edit form.
export const CommentEditForm = ({ route }) => {
  const { id } = route.params;
  return (
    <View>
      <Text>Comments edit form {id}</Text>
      <StatusBar style="auto" />
    </View>
  );
};
