import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Task =(props) =>{
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    item : {
        width: 100,
        height: 100,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        margin: 1,
    },
    itemLeft : {
    },

    itemText : {
        maxWidth: '100%',
    },

});

export default Task;