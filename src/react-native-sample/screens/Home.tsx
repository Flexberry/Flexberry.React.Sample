import { StatusBar } from 'expo-status-bar';
import {
  Button,
  View,
} from 'react-native';

export const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="О нас"
        onPress={() =>
          navigation.navigate('About')
        }
      />
      <Button
        title="Comments"
        onPress={() =>
          navigation.navigate('CommentsL')
        }
      />
      <Button
        title="Customers"
        onPress={() =>
          navigation.navigate('CustomersL')
        }
      />
      <Button
        title="Requests"
        onPress={() =>
          navigation.navigate('Requests')
        }
      />
      <StatusBar style="auto" />
    </View>
  );
};
