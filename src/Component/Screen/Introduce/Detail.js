import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Detail() {
    return (
        <ScrollView style={styles.body}>
            <View style={styles.title}>
                <View style={styles.icon}>
                    <FontAwesome5 name="briefcase" color={'#fff'} size={20} />
                </View>
                <Text style={styles.text}>Work Experience</Text>
            </View>
            <ScrollView>
                <View style={styles.list}>
                    <View style={styles.item}>
                        <Text style={styles.time}>01/2018 - Present</Text>
                        <View style={styles.content}>
                            <Text style={styles.job}>F8 TECHNOLOGY EDUCATION</Text>
                            <Text style={styles.detail}>Full-stack Developer</Text>
                            <Text style={styles.detail}>- Programme outsourcing projects</Text>
                            <Text style={styles.detail}>
                                - Create coding frames and design database based on project descriptions
                            </Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.time}>07/2015 - 03/2018</Text>
                        <View style={styles.content}>
                            <Text style={styles.job}>AI&T JSC</Text>
                            <Text style={styles.detail}>Full-stack Developer</Text>
                            <Text style={styles.detail}>- Programme outsourcing projects</Text>
                            <Text style={styles.detail}>
                                - Create coding frames and design database based on project descriptions
                            </Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.time}>01/2015 - 07/2015</Text>
                        <View style={styles.content}>
                            <Text style={styles.job}>FREELANCER</Text>
                            <Text style={styles.detail}>Full-stack Developer</Text>
                            <Text style={styles.detail}>- Develop web module on given projects.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.title}>
                <View style={styles.icon}>
                    <FontAwesome5 name="graduation-cap" color={'#fff'} size={20} />
                </View>
                <Text style={styles.text}>Education</Text>
            </View>
            <ScrollView>
                <View style={styles.list}>
                    <View style={styles.item}>
                        <Text style={styles.time}>2011/10 – 2014/09</Text>
                        <View style={styles.content}>
                            <Text style={styles.job}>FPT Polytechnic</Text>
                            <Text style={styles.detail}>- Website, Mobile Programming Level - Good</Text>
                            <Text style={styles.detail}>
                                - 1st place in 2 "North – South – Central POLY & FE Creation" contests
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.title}>
                <View style={styles.icon}>
                    <FontAwesome5 name="star" color={'#fff'} size={20} />
                </View>
                <Text style={styles.text}>Awards</Text>
            </View>
            <ScrollView>
                <View style={styles.list}>
                    <View style={styles.item}>
                        <Text style={styles.time}>06/2016</Text>
                        <View style={styles.content}>
                            <Text style={styles.job}>Poly Creative Competition 2016</Text>
                            <Text style={styles.detail}>Poly creation contest: https://goo.gl/BVP5kE</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.time}>08/2016</Text>
                        <View style={styles.content}>
                            <Text style={styles.job}>FE Creative Competition 2016</Text>
                            <Text style={styles.detail}>FE creation contest: https://goo.gl/86ULiw</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.title}>
                <View style={styles.icon}>
                    <FontAwesome5 name="briefcase" color={'#fff'} size={20} />
                </View>
                <Text style={styles.text}>Projects</Text>
            </View>
            <ScrollView>
                <View style={styles.list}>
                    <View style={styles.item}>
                        <Text style={styles.time}>07/2023</Text>
                        <View style={styles.content}>
                            <Text style={styles.job}>Todo List</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.time}>07/2023</Text>
                        <View style={styles.content}>
                            <Text style={styles.job}>Time Down</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        color: '#458966',
        paddingVertical: 8,
        marginHorizontal: 20,
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomColor: '#dadada',
        borderBottomWidth: 1,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        width: 30,
        height: 30,
        borderRadius: 900,
        backgroundColor: '#458966',
    },
    text: {
        color: '#458966',
        fontSize: 20,
        fontWeight: 'bold',
    },
    list: {
        padding: 25,
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 3,
    },
    time: {
        width: 80,
        color: '#000',
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
    },
    job: {
        color: '#000',
        fontWeight: 'bold',
    },
    detail: {
        color: '#000',
    },
});
