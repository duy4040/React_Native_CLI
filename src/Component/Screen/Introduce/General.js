import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function General() {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Contact Information</Text>
            <ScrollView>
                <View style={styles.list}>
                    <View style={styles.item}>
                        <Text style={styles.label}>Name</Text>
                        <Text style={styles.content}>Nguyễn Vũ Duy</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.label}>Birth</Text>
                        <Text style={styles.content}>04/04/2001</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.label}>Phone</Text>
                        <Text style={styles.content}>0879659113</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.content}>duy20913@gmail.com</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.label}>Address</Text>
                        <Text style={styles.content}>Hà Nội, Việt Nam</Text>
                    </View>
                </View>
            </ScrollView>

            <Text style={styles.title}>Skills</Text>
            <ScrollView>
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
        </View>
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
