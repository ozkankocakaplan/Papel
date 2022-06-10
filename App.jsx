import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './src/components/TabNavigator';
import Notifications from './src/screens/Notifications';
import ShareDetails from './src/screens/ShareDetails';
import CreateShare from './src/screens/CreateShare';
import Expenses from './src/screens/Expenses';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='Home' component={TabNavigator} />
        <Stack.Screen name='Notification' component={Notifications} />
        <Stack.Screen name='ShareDetails' component={ShareDetails} />
        <Stack.Screen name='CreateShare' component={CreateShare} />
        <Stack.Screen name='Expenses' component={Expenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
