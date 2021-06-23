import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Task from './Task'
import { Button, Text,  View,  StyleSheet, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();
export default function App() {
    return ( <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={loginScreen}
          options={{ title: 'Welcome',headerStyle: { backgroundColor: 'blue' },
          headerTitleStyle: { color: 'white' }, headerTitleAlign:'center',}}
          
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Task" component={TaskScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  };
  const loginScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    return (
      <View>
       <Button
        title="About"
        onPress={() =>
          navigation.navigate('About', { name: name})
        }
      />
      <View style={styles.start}>
      <Text > Login to create tasks</Text>
       <TextInput
          style ={styles.input}
          onChangeText={text => {setName(text)}}
          placeholder="Input your name"
          />
      <Button 
        
        title="Start Creating Tasks"
        onPress={() =>
          navigation.navigate('Task', { name: name})
        }
      />
      </View>
      </View>
    );
  };
  const AboutScreen = ({  route }) => {
    return <Text style={styles.info}>This is my app. It was built by a college student named Fatumata.
    I wanted to create a place for people to manage their time by creating and tracking tasks.
    </Text>;
  };

  const HomeScreen = ({ route }) => {
    return <Text style={styles.info}>This is where you can see your current Tasks </Text>;

  };
  const TaskScreen = ({ route }) => {
    return <Task username={route.params.name}  />;

  };
  const styles = StyleSheet.create({
    info: {
      color: 'blue',
      fontSize: 40,
      textAlign: 'center',
    },
    input: {
      border: 'none',  
      alignSelf: 'center',
      alignContent: 'center', 
    },
   start:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-between',
    marginTop: 300,
    textAlign: 'center',
    marginBottom: 100,
    alignSelf: 'center', 
    maxWidth: 300,
    alignContent: 'center',
    height: 200,
  
   },
   input:{
     textAlign:'center',
   },
   welcome:{
     textAlign:'center',
   },
  });
