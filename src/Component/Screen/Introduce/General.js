import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getProfile } from '../../../Redux/actions';

export default function General({ navigation, route }) {
    const { profiles } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const user = {};

    const { itemID } = route.params;
    console.log(itemID);

    profiles.map((profile) => {
        if (profile.id === itemID) {
            user = { ...user, profile };
            console.log(user);
        }
    });

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    return (
        <ScrollView style={styles.body}>
            <Text style={styles.title}>Contact Information</Text>
            <FlatList
                data={profiles}
                renderItem={({ item }) => (
                    <View style={styles.list}>
                        <View style={styles.item}>
                            <Text style={styles.label}>Name</Text>
                            <Text style={styles.content}>{item.name}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Birth</Text>
                            <Text style={styles.content}>{item.birth}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Phone</Text>
                            <Text style={styles.content}>{item.phone}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Email</Text>
                            <Text style={styles.content}>{item.email}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Address</Text>
                            <Text style={styles.content}>{item.address}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />

            <Text style={styles.title}>Skills</Text>
            <View style={styles.list}>
                <View style={styles.item}>
                    <Text style={styles.label}>Main</Text>
                    <Text style={styles.content}>- HTML, CSS, JavaScript(ReactJS, React Native)</Text>
                    <Text style={styles.content}>- PHP(Lavarel, Symfony, Codeigniter)</Text>
                    <Text style={styles.content}>- Node(ExpressJS)</Text>
                    <Text style={styles.content}>- MySQL, SQLServer</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>Other</Text>
                    <Text style={styles.content}>- Ruby(Ruby on Rails)</Text>
                    <Text style={styles.content}>- Git</Text>
                    <Text style={styles.content}>- Python</Text>
                    <Text style={styles.content}>- Java</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#458966',
    },
    title: {
        paddingVertical: 8,
        color: '#fff',
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#376E52',
    },
    list: {
        padding: 25,
    },
    item: {
        paddingVertical: 3,
    },
    label: {
        paddingLeft: 20,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        paddingLeft: 30,
        color: '#fff',
        fontSize: 16,
    },
});
