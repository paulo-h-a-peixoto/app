import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PreloadScreen from '../screens/PreloadScreen';
import LoginScreen from '../screens/LoginScreen';
import ChoosePropertyScreen from '../screens/ChoosePropertyScreen';
import MainDrawer from '../stacks/MainDrawer';
const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="PreloadScreen"
                component={PreloadScreen}
                options={{headerShown: false}}
            />
             <Stack.Screen 
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown: false}}
            />
            
            <Stack.Screen 
                name="MainDrawer"
                component={MainDrawer}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}