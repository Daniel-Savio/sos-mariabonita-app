import {
  View,
  Text,
  Alert,
  Pressable,
  StyleSheet,
  Animated,
} from "react-native";
import { Header } from "../../components/header";
import tw from "../../../tailwind";
import { useEffect, useRef, useState } from "react";

export const Home = () => {
  
  const scale = useRef(new Animated.Value(1)).current; //? Initial Value for the property

  useEffect(() => {
    //? Deixa as animações em loop
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.1, duration:1000, useNativeDriver: false }),
        Animated.timing(scale, { toValue: 1, useNativeDriver: false }),
      ])
    ).start();

    //? Permite a animação do scale  até o valor 2?//
  });

  return (
    <View style={tw`h-full flex bg-primary-100 w-full`}>
      <Header title={"SOS - Maria Bonita"} />
      <View style={tw`h-screen flex items-center justify-center`}>
        <Pressable
          onPress={() => {
            Alert.alert("Eu sou um alerta");
          }}
        >
          <View style={tw`relative h-48 w-54`}>
            <Animated.Image
              style={[tw`absolute inset-0 z-10`, { transform: [{ scale }] }]}
              source={require("../../assets/Botao_Pulsante.png")}
            />
            {/* <Animated.View
              style={tw`absolute -top-4 right-2 h-52 w-52 rounded-full border-salmon-500 border-4 z-0`}
            /> */}
          </View>
        </Pressable>
        <Pressable
          style={tw`rounded-md bg-primary-std p-2 mt-10`}
          onPress={() => {
            Alert.alert("Eu sou um alerta");
          }}
        >
          <Text style={tw`text-slate-50   font-display`}>
            Cadastrar contatos
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
