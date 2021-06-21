import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const MealSharing = (props) => {
  const [cost, setCost] = useState(0);
  const [tipRate, setTipRate] = useState(parseInt(props.tipRate));
  const [guest, setGuest] = useState(0);
  const [costPerMeal, setCostPerMeal] = useState(0);
      return (
  <View style={styles.container}>
    <Text style={styles.header}>
       Meal Sharing Calculator for Tip Rate= {props.tipRate}
    </Text>
    <View style={styles.flex}>
      <TextInput
          style={styles.textinput}
          onChangeText={text => {setCost(parseFloat(text))}}
          placeholder="Cost of the meal"
          />
          <TextInput
          style={styles.textinput}
          onChangeText={text => {setTipRate(parseInt(text))}}
          placeholder="Adjust Tip Rate"
          />
          <TextInput
          style={styles.textinput}
          onChangeText={text => {setGuest(parseFloat(text))}}
          placeholder="Number of Guests"
          />
          <Button
          color='red' title='Calculate Cost Per Meal' alignText='center'
          onPress = {() =>
           setCostPerMeal((((tipRate/100)+ 1) *cost)/guest)       }
         />
         </View>
    <Text> The cost for each person is {costPerMeal} </Text>
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

export default MealSharing;
