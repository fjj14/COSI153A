import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Task = (props) => {
  const [message, setMessage] = useState("");
  const [taskName, setTaskName] = useState(""); 
  const [task, setTask] = useState("eee");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState(0);
      return (
  <View style={styles.container}>
    <Text style={styles.header}>
       Create a new task
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
          <TextInput
          style={styles.textinput}
          onChangeText={text => {setTaskDueDate(parseInt(text))}}
          placeholder="Days left until due"
          />
          <Button
          color='blue' title='Add task' alignText='center'
          onPress = {() =>
          {
            let newTask ="";
            setTask('Name: '+ taskName +'\nDescription: '+taskDescription+'\nDays Left: '+taskDueDate) ;
            newTask ='Name: '+ taskName +'\nDescription: '+taskDescription+'\nDays Left: '+taskDueDate;
            setMessage('Congrats '+ props.username+', you created a new task!\n'+newTask);
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
