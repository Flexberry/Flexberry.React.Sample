import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Home,
  About,
  CommentListForm,
  CommentEditForm,
  CustomerListForm,
  CustomerEditForm
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
          name="CommentsL"
          component={CommentListForm}
          options={{title: 'Comment list form'}}
        />
        <Stack.Screen
          name="CustomersL"
          component={CustomerListForm}
          options={{title: 'Customer list form'}}
        />
        <Stack.Screen
          name="CommentsE"
          component={CommentEditForm}
          options={{title: 'Comment edit form'}}
        />
        <Stack.Screen
          name="CustomersE"
          component={CustomerEditForm}
          options={{title: 'Customer edit form'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
