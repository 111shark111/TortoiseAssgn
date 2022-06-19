
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer independent={true} >
        <Stack.Navigator initialRouteName={'HomeScreen'} >
          <Stack.Screen name="HomeScreen" >
            {(stackprops) => <HomeScreen {...stackprops} options={{ headerShown: false }}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );

}