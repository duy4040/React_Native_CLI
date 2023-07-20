import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Task = ({ num, job, onDelete }) => {
    const numbg = num % 2 === 0 ? styles.even : styles.odd;
    const number = num < 9 ? `0${num + 1}` : num + 1;

    return (
        <TouchableOpacity onPress={onDelete}>
            <View style={styles.item}>
                <Text style={[styles.num, numbg]}>{number}</Text>
                <Text style={styles.job}>{job}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginBottom: 10,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'centers',
        borderRadius: 8,
    },
    num: {
        paddingVertical: 7,
        paddingHorizontal: 14,
        marginRight: 8,
        borderRadius: 8,
        color: '#fff',
        fontSize: 20,
    },
    job: {
        flex: 1,
        padding: 7,
        justifyContent: 'center',
        fontSize: 20,
        color: '#000',
    },
    even: {
        backgroundColor: '#51CCEA',
    },
    odd: {
        backgroundColor: '#4CF049',
    },
});

export default Task;
