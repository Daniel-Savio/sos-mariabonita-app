import {
  View,
  Text,
  Alert,
  Pressable,
  Modal,
  Animated,
  ActivityIndicator,
  TextInput,
  ImageBackground,
} from "react-native";
import { Header } from "../../components/header";
import tw from "../../../tailwind";
import { useEffect, useRef, useState } from "react";
import { CaretLeft } from "phosphor-react-native";
import * as SQlite from "expo-sqlite";

export const Home = () => {
  //?Database
  const db = SQlite.openDatabase("database");
  let [isLoading, setIsLoading] = useState("");
  let [names, setNames] = useState([]);

  

  //? Animation
  const scale = useRef(new Animated.Value(1)).current; //? Initial Value for the property
  useEffect(() => {
    //? Deixa as animações em loop
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(scale, { toValue: 1, useNativeDriver: false }),
      ])
    ).start();

    //? Permite a animação do scale  até o valor 2?//
  });

  //? Modal
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
      source={require("../../../assets/bg.png")}
      style={tw`h-full flex  w-full`}
    >
      <Header title={"SOS - Maria Bonita"} />

      <View style={tw`h-screen flex items-center justify-center`}>
        {/* Botão de SOS */}
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

        {/* Botão para chamar modal  */}
        <Pressable
          style={tw`rounded-md bg-primary-std p-2 mt-10`}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={tw`text-slate-50 font-display`}>Cadastrar contatos</Text>
        </Pressable>
      </View>

      <Modal animationType="slide" visible={modalVisible}>
        <View
          style={tw`flex flex-row bg-primary-std w-full p-2 justify-center`}
        >
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={tw`flex-none mr-4`}
          >
            <CaretLeft color="#FCF2E2" weight="fill" size={24} />
          </Pressable>
          <Text style={tw` font-title text-xl  text-center text-slate-50 `}>
            Contatos de Emergência
          </Text>
        </View>

        <View style={tw`flex h-full pl-2  bg-primary-100 `}>
          <View style={tw`flex pl-2 pr-2 mb-5 mt-5`}>
            <Text style={tw`font-display-bold text-primary-std text-xl `}>
              Cadastrar contato
            </Text>
            <TextInput
              style={tw`h-10 mb-4 w-full border-b-2 border-primary-std`}
              placeholder="Nome"
            ></TextInput>
            <TextInput
              style={tw`h-10 mb-4 w-full border-b-2 border-primary-std`}
              placeholder="Telefone"
            ></TextInput>

            <Pressable
              style={tw`rounded-md bg-primary-std p-2 m-auto w-48 mt-5`}
            >
              <Text style={tw`text-slate-50 text-center font-display`}>
                Cadastrar contato
              </Text>
            </Pressable>
          </View>
          <View style={tw`flex pl-2 pr-2 h-32 mb-5 mt-5`}>
            <Text style={tw`font-display-bold text-primary-std text-xl `}>
              Contatos salvos
            </Text>

            <ActivityIndicator
              style={tw`${isLoading}`}
              size="small"
              color="#FC8585"
            />
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};
