import React from 'react';
import MealSharing from './MealSharing'
import {  Text,  View } from "react-native";

export default function App() {
    return (
      <View>
          <MealSharing tipRate={15}  />
          <MealSharing tipRate={20}  />
          </View>
);
}
