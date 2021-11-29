import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const SubmitButton = props => {
    return (<TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
<View style={styles.Button}>
<Text style={styles.ButtonText}>{props.children}</Text>
</View>
    
</TouchableOpacity> )
};

const styles = StyleSheet.create({

    Button : {
        backgroundColor : '#071a42',
        paddingVertical : 15, 
        paddingHorizontal: 35,
        borderRadius : 40,
        borderColor : 'white',
        borderWidth : 2,
    },
    ButtonText: {
        color: 'white',
        fontFamily: 'open-sans-bold',
        fontSize: 12,
    }
});

export default SubmitButton;