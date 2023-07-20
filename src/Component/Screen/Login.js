import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../../utils/CustomButton';

// API : https://mocki.io/v1/34009842-9c95-4c2c-9f0a-a63e70a35f62

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            await AsyncStorage.getItem('UserData').then((value) => {
                if (value !== null) {
                    navigation.navigate('CV');
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const setData = async () => {
        if (name.length === 0 || age.length === 0) {
            Alert.alert('Warning!', 'Please write your data.');
        } else {
            try {
                var user = {
                    name,
                    age,
                };
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                setName('');
                navigation.navigate('CV');
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Async Storage</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                placeholderTextColor={'#ccc'}
                value={name}
                onChangeText={(value) => setName(value)}
                clearTextOnFocus={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your age"
                placeholderTextColor={'#ccc'}
                value={age}
                onChangeText={(value) => setAge(value)}
                clearTextOnFocus={true}
            />
            <CustomButton title="Login" color="#1eb900" onPressFunction={setData} />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    text: {
        marginTop: 200,
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 130,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        color: '#000',
    },
});
