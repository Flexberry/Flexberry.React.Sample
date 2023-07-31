import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  Home,
  About,
  CommentListForm,
  CustomerListForm
} from './screens/@ScreensExports';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Главная'}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{title: 'О нас'}}
        />
        <Stack.Screen
          name="Comments"
          component={CommentListForm}
          options={{title: 'Comment list form'}}
        />
        <Stack.Screen
          name="Customers"
          component={CustomerListForm}
          options={{title: 'Customer list form'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
