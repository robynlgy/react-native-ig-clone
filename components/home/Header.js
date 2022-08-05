import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { headerIcons } from "./icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
      <TouchableOpacity onPress={()=>navigation.push('NewPostScreen')}>
        <Image
          style={styles.icon}
          source={{uri:headerIcons.newPost}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={{uri:headerIcons.likes}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style = {styles.unreadBadge}>
          <Text style = {styles.unreadBadgeText}>11</Text>
        </View>
        <Image
          style={styles.icon}
          source={{uri:headerIcons.messages}}
        />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: "contain",
  },

  iconsContainer:{
    flexDirection: 'row'
  },

  icon:{
    width:32,
    height:32,
    marginLeft:10,
    resizeMode:'contain'
  },

  unreadBadge:{
    backgroundColor:'#FF3250',
    position:'absolute',
    left:25,
    bottom:18,
    width:25,
    height:18,
    borderRadius:25,
    alignItems:'center',
    justifyCenter :'center',
    zIndex:100
  },

  unreadBadgeText:{
    color: 'white',
    fontWeight:'600',
  }
});

export default Header;
