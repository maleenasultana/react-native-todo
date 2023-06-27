import { StyleSheet, TextInput, View,Button } from 'react-native'
import React, {useState} from 'react'

export default function AddTodo({submitHandler}) {
    const[text,setText]=useState('');
    
    const changeHandler = (val) => {
        setText(val);
    };
    const pressHandler=()=>{
      submitHandler(text);
      setText('')
    }

  return (
    <View>
      <TextInput
      style={styles.input}
      placeholder='new Todo...'
      onChangeText={changeHandler}
      value={text} 
      />
      <Button color='coral' onPress={pressHandler}title="Add todo"/>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    },
});