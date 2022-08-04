import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style = {styles.unreadBadge}>
          <Text style = {styles.unreadBadgeText}>11</Text>
        </View>
        <Image
          style={styles.icon}
          source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'}}
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
    fontWeight:600,
  }
});

export default Header;
