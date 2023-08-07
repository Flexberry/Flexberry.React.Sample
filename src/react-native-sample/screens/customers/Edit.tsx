import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

// Customers edit form.
export const CustomerEditForm = ({ route }) => {
  const { id } = route.params;
  return (
    <View>
      <Text>Customers edit form {id}</Text>
      <StatusBar style="auto" />
    </View>
  );
};
