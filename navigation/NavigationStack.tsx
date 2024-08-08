import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const NavigationStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="UserList" component={UserListScreen} />
        <Stack.Screen name="UserDetails" component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
