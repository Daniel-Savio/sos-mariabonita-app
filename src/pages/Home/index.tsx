import React from "react";
import {View, Text, Alert, StyleSheet, Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import {Background} from "../../components/Background";


export const Home = () => {
  const tailwind = useTailwind();

  return (
    <Background>
    <View style = {tailwind("h-full flex items-center justify-center")}>
      <Pressable onPress = {() =>{Alert.alert("Eu sou um alerta")}} style = {tailwind("rounded-md bg-primary-std p-2") } >
        <Text style = {tailwind("text-slate-50 font-bold")}>SOS - Maria Bonita</Text>
      </Pressable>
    </View>
    </Background>
  );
};
