/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { Store } from './Redux/store';

import DrawerComponent from './Component/navigation/Drawer';
import Login from './Component/Screen/Login';
import General from './Component/Screen/Introduce/General';

const Stack = createStackNavigator();

function App() {
    return (
        <Provider store={Store}>
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
                    <Stack.Screen name="General" component={General} />
                </Stack.Navigator>
                {/* <DrawerComponent /> */}
            </NavigationContainer>
        </Provider>
    );
}

export default App;
