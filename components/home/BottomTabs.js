import { View, Pressable, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Divider } from "react-native-elements";
import { bottomTabIcons as icons } from "./icons";
import firebase from "../../firebase"

const db = firebase.firestore();

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

  const getUserName = async () => {
    const user = await firebase.auth().currentUser;
    const unsubscribe = db
      .collection("users")
      .where("owner_uid", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          });
        })
      );
    return unsubscribe;
  };

  useEffect(() => {
    getUserName();
  }, []);

  const Icon = ({ icon }) => {
    return (
      <Pressable onPress={() => setActiveTab(icon.name)}>
        <Image
          source={{
            uri: activeTab === icon.name ? icon.active : icon.inactive,
          }}
          style={[
            styles.icon,
            icon.name === "Profile" && styles.profilePic(),
            activeTab === "Profile" &&
              icon.name === "Profile" &&
              styles.profilePic(activeTab),
          ]}
        />
      </Pressable>
    );
  };
  return (
    <View style={styles.wrapper}>
      <Divider />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
{/* TODO: currentLoggedInUser is null */}
        <Pressable onPress={() => setActiveTab("Profile")}>
          <Image
            source={{
              uri: currentLoggedInUser.profilePicture,
            }}
            style={[
              styles.icon,
              styles.profilePic(),
              activeTab === "Profile" && styles.profilePic(activeTab),
            ]}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // position:'absolute',
    // width:'100%',
    // bottom:'3%',
    zIndex: 999,
    // backgroundColor:'black'
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },

  icon: {
    height: 30,
    width: 30,
  },

  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "white",
  }),
});
export default BottomTabs;
