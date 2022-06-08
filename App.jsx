import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/components/TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notifications from './src/screens/Notifications';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='TabNavigator' component={TabNavigator} />
        <Stack.Screen name='Notification' component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
