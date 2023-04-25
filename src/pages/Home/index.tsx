
import {View, Text, Alert, Pressable, Image, useAnimatedValue } from "react-native";
import { Header } from "../../components/header";
import tw from "../../../tailwind";

export const Home = () => {
  
  return (
    
      <View style = {tw`h-full flex bg-primary-100 w-full`}>
        <Header title ={"SOS - Maria Bonita"}/>
        <View style= {tw`h-screen flex items-center justify-center`}>

        <Pressable onPress = {() =>{Alert.alert("Eu sou um alerta")}} >
          <Image source={require('../../assets/Botao_Pulsante.png')} />
        </Pressable>
        <Pressable style = {tw`rounded-md bg-primary-std p-2 mt-10` } onPress = {() =>{Alert.alert("Eu sou um alerta")}} >
          <Text style = {tw`text-slate-50   font-display`}> Cadastrar contatos </Text>
        </Pressable>
        </View>
      </View>
   
   
  );
};
