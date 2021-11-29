import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Keyboard,
  Linking,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import * as Font from "expo-font";
import axios from "axios";
import AppLoading from "expo-app-loading";
import TextBox from "./components/TextBox";
import InputBox from "./components/InputBox";
import FormCard from "./components/FormCard";
import SubmitButton from "./components/SubmitBotton";
import Communications from "react-native-communications";



const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

const body = name + '\n' + mobile + '\n' + email + '\n' + message;
  //  const nameList = [name, mobile, email, message];
  // const body = JSON.stringify(nameList)
  const openEmail = () => {
    Communications.email(
      ["shad.ahmad0311@gmail.com", "info@redpositive.in"],  
      null,
      null,
      "Test Message",            
      body
    );
  };

  

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <KeyboardAvoidingView>
          <SafeAreaView style={styles.container}>
            <FormCard style={styles.card}>
              <TextBox style={styles.Header}>Contact Form</TextBox>
              <TextBox style={styles.text}>Name</TextBox>
              <InputBox
                placeholder="Enter Name"
                style={styles.input}
                placeholderTextColor="#808080"
                value={name}
                onChangeText={(name) => setName(name)}
                defaultValue={name}
              />

              <TextBox style={styles.text}>Mobile Number</TextBox>
              <InputBox
                placeholder="Enter Mobile Number"
                keyboardType="numeric"
                placeholderTextColor="#808080"
                maxLength={10}
                style={styles.input}
                value={mobile}
                onChangeText={(mobile) => setMobile(mobile)}
                defaultValue={mobile}
              />
              <TextBox style={styles.text}>Email</TextBox>
              <InputBox
                placeholder="Enter Email"
                placeholderTextColor="#808080"
                style={styles.input}
                keyboardType="email-address"
                value={email}
                onChangeText={(email) => setEmail(email)}
                defaultValue={email}
              />
              <TextBox style={styles.text}>Message</TextBox>
              <InputBox
                placeholder="Your Message"
                placeholderTextColor="#808080"
                style={styles.input}
                value={message}
                multiline={true}
                // multiline={multiline || false}
                onChangeText={(message) => setMessage(message)}
                defaultValue={message}
              />
              <View style={styles.buttonContainer}>
                <SubmitButton style={styles.button} onPress={openEmail}>
                  Submit{" "}
                </SubmitButton>
              </View>
            </FormCard>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  Header: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "open-sans-bold",
  },

  button: {
    justifyContent: "flex-end",
  },
  buttonContainer: {
    marginVertical: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  text: {
    fontSize: 13,
    color: "#fff",
    textAlign: "left",
  },
  input: {
    width: 290,
    textAlign: "left",
    paddingLeft: 2,
    paddingBottom: 10,
  },

  card: {
    marginTop: 150,
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
  },
});
