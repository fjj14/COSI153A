import React, { useEffect, useState } from "react";
import 'react-native-gesture-handler';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import {  Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from '@react-navigation/native';
const Task = () => {
  useEffect(() => {name()}
  ,[])
  
    const [date, setDate] = useState(new Date())
    const onChange = date => {

      setDate(date)
    }
  const saveItems= async(given) => { 
    const items = await AsyncStorage.getItem(date.toDateString()) ;
    let data = []
    if(items){
      data = JSON.parse(items)
    }
    data.push(given);
       
   await AsyncStorage.setItem(date.toDateString(), JSON.stringify(data));
   
  } 
  const navigation = useNavigation();
  const name = async () => {
     try{
      var jsonValue = await AsyncStorage.getItem('@profile_info');
       var data = null
      if (jsonValue!=null) {
        data = JSON.parse(jsonValue)
        console.log(data)
        console.log(data.username)
        setUsername(data.username)
        return data.username
      }else{
       console.log("wronnggg")
       return "something wrong"
      }
  } catch(e) {
    // read error
  }
  return "something wrong"
  console.log('Done.')

}




  
  const user = name().then(res => {setUsername(res)});
  const [username, setUsername] = useState("wronf")
  const [message, setMessage] = useState("");
  const [taskName, setTaskName] = useState(""); 
  const [task, setTask] = useState("eee");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState(0);
      return (
       
  <View style={styles.container}>
    <Text style={styles.header} >
    
       Create a new task {username}
    </Text>
    <View style={styles.flex}>
    <TextInput
          style={styles.textinput}
          onChangeText={text => {setTaskName(text)}}
          placeholder="What is this task called?"
          />
      <TextInput
          style={styles.textinput}
          onChangeText={text => {setTaskDescription(text)}}
          placeholder="Describe the task"
          />
         
          <div>
          <Calendar
        onChange={onChange}
        value={date}
        className="react-calendar"
      />
      </div>
          <Button
          color='blue' title='Add task' alignText='center'
          onPress = {() =>
          {
            let newTask ="";
            setTask('Name: '+ taskName +'\nDescription: '+taskDescription+'\nDays Left: '+date.toDateString()) ;
            newTask ='Name: '+ taskName +'\nDescription: '+taskDescription+'\nDays Left: '+date.toDateString();
            saveItems({"name":taskName, "Description":taskDescription, "due": date.toDateString(), "id": new Date().getTime().toString(16)})
            console.log("adddessssss:" +date.toDateString())
            setMessage('Congrats '+ username+', you created a new task!\n'+newTask);
            }}
         />
         </View>
        
         <Text>{message}</Text>
  </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput:{
      margin:20,
      marginLeft:53,
      fontSize:20
    },
    flex:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    header: {
      fontSize:40,
      color:'blue'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default Task;
