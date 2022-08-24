/* eslint-disable prettier/prettier */
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/lo.png")} />
 
      <StatusBar style="auto" />

         <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="username."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
   <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="confirm password."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <TouchableOpacity style={styles.signup}>
        <Text> SIGNUP</Text>
      </TouchableOpacity> 


    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8ed1fc",
    alignItems: "center",
    justifyContent: "center",
  },


  image: {
    flex: 1,
    width: "150%",
    height: "150%",
    resizeMode: 'contain'
  },
 
  inputView: {

    backgroundColor: "#d0e2ed",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {

    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  signup: {
    width: "70%",
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    bottom:20,

    backgroundColor: "#cfded9",
  },
})