import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Input = (props) => {
    const [countInput, setCountInput] = useState('');

    const handleAddCount = () => {
        if (countInput.length === 0) {
            Alert.alert('Thông báo', 'Vui lòng nhập thời gian', [
                {
                    text: 'OK',
                    onPress: () => {},
                },
            ]);
            return false;
        } else if (isNaN(countInput)) {
            Alert.alert('Thông báo', 'Thời gian phải là số', [
                {
                    text: 'OK',
                    onPress: () => {},
                },
            ]);
            return false;
        }

        props.onAddCount(countInput);

        setCountInput('');
    };

    return (
        <View style={styles.form}>
            <TextInput
                value={countInput}
                onChangeText={(e) => setCountInput(e)}
                style={styles.input}
                placeholder="Enter your count"
                placeholderTextColor="#ccc"
                clearTextOnFocus={true}
            ></TextInput>

            <TouchableOpacity onPress={handleAddCount}>
                <View style={styles.add}>
                    <FontAwesome name="plus" color={'#fff'} size={40} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        paddingHorizontal: 25,
        paddingVertical: 12,
        width: '90%',
        borderRadius: 90,
        fontSize: 20,
        color: '#000',
    },
    add: {
        width: 62,
        height: 62,
        backgroundColor: '#21a3d0',
        borderRadius: 900,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
