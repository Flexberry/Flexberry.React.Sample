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
          navigation.navigate('Comments')
        }
      />
      <Button
        title="Customers"
        onPress={() =>
          navigation.navigate('Customers')
        }
      />
      <StatusBar style="auto" />
    </View>
  );
};
