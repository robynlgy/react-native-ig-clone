import { View,Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import SignupForm from '../components/signup.js/SignupForm';

const INSTAGRAM_LOGO = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'

const SignupScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri:INSTAGRAM_LOGO, height:100,width:100}}/>
      </View>
      <SignupForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    paddingTop:50,
    paddingHorizontal: 12
  },

  logoContainer:{
    alignItems: 'center',
    marginTop: 80,
  }
})

export default SignupScreen