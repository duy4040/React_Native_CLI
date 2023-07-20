import { StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useReducer } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// init state
// const intiState = {
//     job: '',
//     jobs: [],
// };

// Actions
// export const SET_JOB = 'set_job';
// const ADD_JOB = 'add_job';

// const setJob = (payload) => {
//     return {
//         type: SET_JOB,
//         payload,
//     };
// };

// const addJob = (payload) => {
//     return {
//         type: ADD_JOB,
//         payload,
//     };
// };
// Reducer
// const reducer = (state, action) => {
//     switch (action.type) {
//         case SET_JOB:
//             return {
//                 ...state,
//                 job: action.payload,
//             };
//         case ADD_JOB:
//             return {
//                 ...state,
//                 jobs: [...state.jobs, action.payload],
//             };
//         default:
//             throw new Error('Invalid action');
//     }
// };

const Input = (props) => {
    const [job, setJob] = useState('');

    const handleAdd = () => {
        if (job.length === 0) {
            Alert.alert('Thông báo', 'Vui lòng nhập công việc', [
                {
                    text: 'OK',
                    onPress: () => {},
                },
            ]);
            return false;
        }

        props.onAdd(job);

        setJob('');
    };

    return (
        <View style={styles.form}>
            <TextInput
                value={job}
                onChangeText={(e) => setJob(e)}
                style={styles.input}
                placeholder="Your task"
                placeholderTextColor="#ccc"
                clearTextOnFocus={true}
            />

            <TouchableOpacity onPress={handleAdd}>
                <View style={styles.add}>
                    <FontAwesome5 name="plus" color={'#fff'} size={40} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginVertical: 20,
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

export default Input;
