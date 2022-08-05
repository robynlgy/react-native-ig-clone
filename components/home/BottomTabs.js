import { View, Pressable, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { bottomTabIcons as icons } from "./icons";

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => {
    return (
      <Pressable onPress={() => setActiveTab(icon.name)}>
        <Image
          source={{
            uri: activeTab === icon.name ? icon.active : icon.inactive,
          }}
          style={[
            styles.icon,
            icon.name === 'Profile' && styles.profilePic(),
            activeTab === 'Profile' && icon.name === 'Profile' && styles.profilePic(activeTab),
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

  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === 'Profile'? 2 : 0,
    borderColor: "white",
  }),
});
export default BottomTabs;
