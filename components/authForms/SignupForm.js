import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";

const SignupForm = () => {
  const navigate = useNavigation();

  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "A username is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to have at least 6 characters"),
  });

  const getRandomProfilePicture = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };

  const onSignup = async (email, username, password) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log("Account successfully created!");

      firebase
        .firestore()
        .collection("users")
        .doc(authUser.user.email)
        .set({
          owner_uid: authUser.user.uid,
          username: username,
          email: authUser.user.email,
          profile_picture: await getRandomProfilePicture(),
        });
    } catch (error) {
      Alert.alert("Oops!", error.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => {
          onSignup(values.email, values.username, values.password);
        }}
        validationSchema={SignupFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "grey"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="grey"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                values={values.email}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.username.length < 1 || values.username.length >= 2
                      ? "grey"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="grey"
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="username"
                autoFocus={true}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                values={values.username}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.password.length < 1 || values.password.length >= 6
                      ? "grey"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="grey"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                values={values.password}
              />
            </View>

            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigate.goBack()}>
                <Text style={{ color: "#0096F6" }}> Log In</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
    marginHorizontal: 30,
  },

  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "grey",
  },

  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),

  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 16,
  },

  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default SignupForm;
