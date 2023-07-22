import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

import { setName, getProfile } from '../../Redux/actions';
import CustomButton from '../../utils/CustomButton';

const Login = ({ navigation }) => {
    const { name, profiles } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const idRef = useRef(0);

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    const checkHasUsername = (name) => {
        let isHasUsername = false;
        profiles.map((profile) => {
            if (name === profile.name) {
                isHasUsername = true;
            }
        });

        return isHasUsername;
    };

    const login = async () => {
        if (name.length === 0) {
            Alert.alert('Warning!', 'Please write your name.');
        } else if (checkHasUsername(name) === false) {
            Alert.alert('Warning!', 'Please write correct your name.');
        } else {
            try {
                dispatch(setName(name));
                navigation.navigate('General', { itemID: 1 });
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Call API</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                placeholderTextColor={'#ccc'}
                value={name}
                onChangeText={(value) => dispatch(setName(value))}
                clearTextOnFocus={true}
            />
            <CustomButton title="Login" color="#1eb900" onPressFunction={login} />
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
