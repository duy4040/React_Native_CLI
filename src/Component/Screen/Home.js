import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../../utils/CustomButton';

export default function Home({ navigation }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            await AsyncStorage.getItem('UserData').then((value) => {
                if (value !== null) {
                    let user = JSON.parse(value);
                    setName(user.name);
                    setAge(user.age);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const updateData = async () => {
        if (name.length === 0) {
            Alert.alert('Warning!', 'Please write your data.');
        } else {
            try {
                var user = {
                    name,
                };
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                Alert.alert('Success!', 'Your data has been updated.');
            } catch (error) {
                console.log(error);
            }
        }
    };

    const removeData = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
        }
    };

    const Logout = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Welcome {name} !</Text>
            <Text style={styles.text}>Your age is {age}</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                placeholderTextColor={'#ccc'}
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <CustomButton title="Update" color="#ff7f00" onPressFunction={updateData} />
            <CustomButton title="Remove" color="#f40100" onPressFunction={removeData} />
            <CustomButton title="Logout" color="#51CCEA" onPressFunction={Logout} />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
        fontWeight: 'bold',
        color: '#000',
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
        marginTop: 130,
        color: '#000',
    },
});
