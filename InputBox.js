import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputBox = (props) => {

    const ( value, changeText, addTodo) = props

    return(
    <TextInput
    style = {StyleSheet.input}
    onChange ={changeText}
    onEndEditing={addTodo}
    style = {styles, input}
    placeholder={"입력해주세요"}
    returnKeyType="done"/>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize:25,
        padding:15,
    }
})

export default InputBox;