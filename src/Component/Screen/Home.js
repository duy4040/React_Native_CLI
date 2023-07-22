import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { openDatabase } from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';

import { setAge, setName, getProfile } from '../../Redux/actions';

import CustomButton from '../../utils/CustomButton';

const db = openDatabase(
    {
        name: 'MainDB.db',
        location: 'default',
    },
    () => {},
    (error) => {
        console.log(error);
    },
);

export default function Home({ navigation }) {
    const { name, age, profile } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');

    useEffect(() => {
        getData();
        dispatch(getProfile());
    }, []);

    const getData = async () => {
        try {
            // await AsyncStorage.getItem('UserData').then((value) => {
            //     if (value !== null) {
            //         let user = JSON.parse(value);
            //         setName(user.name);
            //         setAge(user.age);
            //     }
            // });
            db.transaction((tx) => {
                tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
                    var len = results.rows.length;
                    if (len > 0) {
                        var userName = results.rows.item(len - 1).Name;
                        var userAge = results.rows.item(len - 1).Age;
                        dispatch(setName(userName));
                        dispatch(setAge(userAge));
                    }
                });
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
                // var user = {
                //     name,
                // };
                // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                db.transaction((tx) => {
                    tx.executeSql(
                        'UPDATE Users SET Name = ?',
                        [name],
                        () => {
                            Alert.alert('Success!', 'Your data has been updated.');
                        },
                        (error) => {
                            console.log(error);
                        },
                    );
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    const removeData = async () => {
        try {
            // await AsyncStorage.clear();
            db.transaction((tx) => {
                tx.executeSql(
                    'DELETE FROM Users',
                    [],
                    () => {
                        dispatch(setName(''));
                        navigation.navigate('Login');
                    },
                    (error) => {
                        console.log(error);
                    },
                );
            });
        } catch (error) {
            console.log(error);
        }
    };

    const Logout = () => {
        dispatch(setName(''));
        dispatch(setAge(''));
        navigation.navigate('Login');
    };

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Welcome {name} !</Text>

            <FlatList
                data={profile}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.content}>{item.name}</Text>
                        <Text style={styles.content}>{item.birth}</Text>
                        <Text style={styles.content}>{item.phone}</Text>
                        <Text style={styles.content}>{item.email}</Text>
                        <Text style={styles.content}>{item.address}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
            {/* <Text style={styles.text}>Your age is {age}</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                placeholderTextColor={'#ccc'}
                value={name}
                onChangeText={(value) => dispatch(setName(value))}
            />
            <CustomButton title="Update" color="#ff7f00" onPressFunction={updateData} />
            <CustomButton title="Remove" color="#f40100" onPressFunction={removeData} />
            <CustomButton title="Logout" color="#51CCEA" onPressFunction={Logout} /> */}
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
    item: {
        backgroundColor: '#red',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        margin: 7,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        color: '#000',
    },
});
