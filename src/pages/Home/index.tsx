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
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Header } from "../../components/header";
import { ContactItem } from "../../components/contactItem";
import tw from "../../../tailwind";
import { useCallback, useEffect, useRef, useState } from "react";
import { CaretLeft } from "phosphor-react-native";
import * as SQlite from "expo-sqlite";

export const Home = () => {
  //? Database
  const db = SQlite.openDatabase("database");
  let [isLoading, setIsLoading] = useState("");
  let [contacts, setContacts] = useState([]);
  let [currentName, setCurrentName] = useState("");
  let [currentPhone, setCurrentPhone] = useState("");

  //? Create and select all rows from the database
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXIST "contacts"(
        "id"	INTEGER,
        "Name"	TEXT NOT NULL,
        "Phone"	TEXT,
        PRIMARY KEY("id" AUTOINCREMENT)
      );`
      );
    });

    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM contacts", null, (txObj, resultSet) => {
        setContacts(resultSet.rows._array);
      });
    });

    setIsLoading("hidden");
  }, []);

  //? Add contact
  const addContact = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO contacts (Name, Phone) VALUES ("${currentName}", "${currentPhone}");`,
        null,
        (txObj, resultSet) => {
          let existingContacts = [...contacts];

          existingContacts.push({
            Name: currentName,
            Phone: currentPhone,
            id: resultSet.insertId
          });

          setContacts(existingContacts);
          console.log(contacts);
          setCurrentName("")
          setCurrentPhone("")

        }
      );
    });
    
  };

  //? Drops the table contacts
  const dropTable = () => {
    db.transaction((tx) => {
      tx.executeSql(`DROP TABLE contacts;`);
    });
  };

  //? Refresh
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
        <Pressable onPress={dropTable}>
          <View style={tw`relative h-48 w-54`}>
            <Animated.Image
              style={[tw`absolute inset-0 z-10`, { transform: [{ scale }] }]}
              source={require("../../assets/Botao_Pulsante.png")}
            />
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
              value={currentName}
              cursorColor={"#FC8585"}
              onChangeText={setCurrentName}
            ></TextInput>

            <TextInput
              style={tw`h-10 mb-4 w-full border-b-2 border-primary-std`}
              placeholder="Telefone"
              value={currentPhone}
              cursorColor={"#FC8585"}
              onChangeText={setCurrentPhone}
            ></TextInput>

            <Pressable
              style={tw`rounded-md bg-primary-std p-2 m-auto w-48 mt-5`}
              onPress={addContact}
            >
              <Text style={tw`text-slate-50 text-center font-display`}>
                Cadastrar contato
              </Text>
            </Pressable>
          </View>
          <View style={tw`flex pl-2 pr-2  mb-5 mt-5`}>
            <Text style={tw`font-display-bold text-primary-std text-xl `}>
              Contatos salvos
            </Text>

            <ActivityIndicator
              style={tw`${isLoading}`}
              size="small"
              color="#FC8585"
            />
            <FlatList
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              data={contacts}
              extraData={contacts}
              renderItem={({ item }) => (
                <ContactItem name={item.Name} phone={item.Phone} />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};
