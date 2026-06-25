import { router } from "expo-router";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Verifys(){
  return(
    <ImageBackground source={require('../assets/images/verify.png')} style={{flex:1}}>
      <SafeAreaView  style={{flex:1}}>
        <ScrollView style={{flex:1}} contentContainerStyle={{padding:10,alignItems:'center',justifyContent:'flex-start'}}>
          <TouchableOpacity  onPress={()=>{router.replace('/loginScreen')}} style={styles.btn}>
            <Text style={styles.h3}>Go to Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles=StyleSheet.create({
  btn:{
    minHeight:60,
    width:'60%',
    padding:10,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'space-evenly',
    borderRadius:10,
    marginTop:'170%'
  },
  h3:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
    textTransform:"capitalize"
  }

})