import React from 'react';
import { StyleSheet, Text, View,Dimensions,TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons"

const TodoItem = () => {
    return (
    <View style={styles.todoContent}> 
        <View>
            <TouchableOpacity>
            <AntDesign name = "checkcircle" size = {20} style={style, checkbtn}/>
            </TouchableOpacity>
            <Text style={styles.todoitem}>{text}</Text>
        </View>

        <View>
            <TouchableOpacity>
            <AntDesign name = "closecircle" size = {20}/>
            </TouchableOpacity>

            <Text style={styles.todoitem}>곧 끝납니다</Text>
        </View>

    </View>
    );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    todoContainer: {
        padding: 5,
        marginTop:20,
        borderBottomWidth: 1,
        width: width-40,
    },
    todoitem: {
        fontSize:20,
    },
    lineContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    checkbtn: {
        marginRight:20,
    },
    makerow:{
        flexDirection:'row',
    },
})

export default TodoItem;