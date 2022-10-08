// export default App;
import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import Register from './screens/Register';
import Home from './screens/Home';
import AddNewVehicleInfo from './screens/AddNewVehicleInfo';
import VehicleInfo from './screens/VehicleInfo';
import Update from './screens/Update';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddNewVehicleInfo" component={AddNewVehicleInfo} />
        <Stack.Screen name="VehicleInfo" component={VehicleInfo} />
        <Stack.Screen name="Update" component={Update} />
      
    </Stack.Navigator>
    </NavigationContainer>
  
  )
}