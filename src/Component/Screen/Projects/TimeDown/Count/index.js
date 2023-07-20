import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Count = ({ countRender }) => {
    const [count, setCount] = useState(0);
    const [action, setAction] = useState(false);
    const [isPlay, setIsPlay] = useState(true);

    useEffect(() => {
        setCount(countRender);
    }, [countRender]);

    const handlePlay = () => {
        console.log('play');
        setAction(true);
        if (count > 0) {
            setIsPlay(false);
        }
    };

    const handlePause = () => {
        console.log('pause');
        setAction(false);
        setIsPlay(true);
    };

    const handleReset = () => {
        console.log('reset');
        setAction(false);
        setIsPlay(true);
        setCount(countRender);
    };

    useEffect(() => {
        let timeID;

        if (count > 0 && action) {
            timeID = setInterval(() => {
                console.log(count, count - 1);
                setCount(count - 1);
            }, 1000);
        }

        return () => {
            clearInterval(timeID);
        };
    }, [count, action]);

    return (
        <View style={styles.body}>
            <View style={styles.count}>
                <Text style={styles.text}>{count}</Text>
            </View>

            <View style={styles.actionList}>
                <TouchableOpacity onPress={isPlay ? handlePlay : handlePause}>
                    <FontAwesome name={isPlay ? 'play-circle' : 'pause-circle'} color="#fff" size={80} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleReset}>
                    <FontAwesome name="rotate-right" color="#fff" size={80} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        width: 400,
    },
    count: {
        marginTop: 150,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 130,
        color: '#fff',
        fontWeight: 'bold',
    },
    actionList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 150,
        padding: 40,
    },
});

export default Count;
