import { View, Text, TextInput, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import validUrl from 'valid-url';
import { useNavigation } from "@react-navigation/native";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required."),
  caption: Yup.string().max(2200, "Caption has reached the character limit."),
});

// const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1607277126387-0a1592dddfb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
const PLACEHOLDER_IMG =
  "https://img.icons8.com/fluency-systems-regular/96/ffffff/image.png";

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values)
        console.log('Your post has been submitted successfully!')
        navigation.goBack()
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {/* all of these inputs are from formik */}
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContet: "space-between",
              flexDirection: "row",
            }}
          >
            <Image source={{ uri: validUrl.isUri(thumbnailUrl)? thumbnailUrl: PLACEHOLDER_IMG }} style={styles.image} />
            <View style={{ flex: 1, marginLeft: 15 }}>
              <TextInput
                style={{ color: "white", fontSize: 18 }}
                placeholder="Write a caption ..."
                placeholderTextColor="grey"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider />
          <TextInput
            style={{ color: "white", marginTop: 15, marginLeft: 15 }}
            placeholder="Enter image URL"
            placeholderTextColor="grey"
            onChange ={(e)=> setThumbnailUrl(e.nativeEvent.text)}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text
              style={{ fontSize: 10, color: "red", marginLeft: 15, margin: 5 }}
            >
              {errors.imageUrl}
            </Text>
          )}

          <Button onPress={handleSubmit} title="Post" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: "lightgrey",
    borderRadius: 5,
    width: 100,
    height: 100,
  },
});
export default FormikPostUploader;
