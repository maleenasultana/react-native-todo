// 

// import React, {useState} from "react";
// import {StyleSheet, View, Text, ScrollView} from 'react-native';


// export default function App() {
//   const [people, setPeople] = useState([
//     { name: 'shaun', id: '1' },
//     { name: 'yoshi', id: '2' },
//     { name: 'mario', id: '3' },
//     { name: 'luigi', id: '4' },
//     { name: 'peach', id: '5' },
//     { name: 'toad', id: '6' },
//     { name: 'bowser', id: '7' },
//   ]);
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//       {people.map((item)=>(
// <View key={item.id}>
// <Text style={styles.item}>{item.name}</Text>
// </View>
//       ))}
//       </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:"#fff",
//     paddingTop: 40,
//     paddingHorizontal:20
//   },
//   item:{
//     marginTop:24,
//     padding:30,
//     backgroundColor:"pink",
//     fontSize:24
//   }
// });


// import { StyleSheet, Text, View,FlatList} from 'react-native'
// import React, {useState} from 'react'

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: 'shaun', id: '1' },
//     { name: 'yoshi', id: '2' },
//     { name: 'mario', id: '3' },
//     { name: 'luigi', id: '4' },
//     { name: 'peach', id: '5' },
//     { name: 'toad', id: '6' },
//     { name: 'bowser', id: '7' },
//   ]);
//   return (
//     <View style={styles.container}>
//       <FlatList
//       numColumns={2}
//       keyExtractor={(item)=>item.id}
//       data={people}
//       renderItem={({
//         item})=>(
//           <Text style={styles.item}>{item.name}</Text>
//         )}
//         />
      
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   item: {
//     flex: 1,
//     marginHorizontal: 10,
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: 'pink',
//     fontSize: 24,
//   },
// });


// Todo list

import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});