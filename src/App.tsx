/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerComponent from './Component/navigation/Drawer';
import Login from './Component/Screen/Login';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#0080ff',
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="CV" component={DrawerComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
