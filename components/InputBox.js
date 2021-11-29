import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputBox = (props) => {
  return <TextInput {...props} style={{...styles.input, ...props.style }}/>;
};

const styles = StyleSheet.create({
    input : {
        color: '#fff',
        height : 30,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginVertical:10,
        
    }
});

export default InputBox;