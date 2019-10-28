import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return (
    <View style={styles.headerContent}> 
        <Text style={styles.headertext}>오늘의 할 일</Text>
    </View>
)
}

const styles = StyleSheet.create({
    headerContainer: {
      marginTop:70,
      marginBottom:40,
    },
    text: {
      fontSize:26,
      fontWeight:'bold',
      color:'#3f4e66',
    }
  });
  

export default Header;
