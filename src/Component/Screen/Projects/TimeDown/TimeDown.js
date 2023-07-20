import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

import Count from './Count';
import Input from './Input';

export default function TimeDown() {
    const [count, setCount] = useState(0);

    const handleAddCount = (countInput) => {
        setCount(countInput);
    };

    return (
        <View style={styles.container}>
            <Count countRender={count} />
            <Input onAddCount={handleAddCount} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#7B9DAF',
    },
});
