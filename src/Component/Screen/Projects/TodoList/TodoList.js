import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Alert } from 'react-native';

import Task from './Task';
import Input from './Input';

export default function TodoList() {
    const [jobs, setJobs] = useState([]);

    const handleAdd = (job) => {
        setJobs((prevJobs) => [...prevJobs, job]);
        console.log(job, jobs);
    };

    const handleDelete = (index) => {
        Alert.alert('Thông báo', 'Bạn có muốn xóa công việc này', [
            {
                text: 'OK',
                onPress: () => {
                    let jobsTmp = [...jobs];
                    jobsTmp.splice(index, 1);
                    setJobs(jobsTmp);
                },
            },
            {
                text: 'Hủy',
                onPress: () => {},
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.header}>Todo List</Text>
                <ScrollView>
                    {jobs.map((job, index) => {
                        return <Task key={index} job={job} num={index} onDelete={() => handleDelete(index)} />;
                    })}
                </ScrollView>
            </View>
            <Input onAdd={handleAdd} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff7f8',
    },
    body: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 18,
    },
    header: {
        paddingBottom: 20,
        fontSize: 24,
        color: '#24a3d0',
        fontWeight: 'bold',
    },
    item: {
        marginTop: 25,
    },
});
