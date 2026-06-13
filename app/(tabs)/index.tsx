import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default  function HomeScreen(){
  return(
    <ImageBackground source={require("../../assets/images/found_lost_screen_bg.png")} style={{flex:1}}>  
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1}} contentContainerStyle={{padding:20,alignItems:"center",justifyContent:'space-evenly'}}>
        {/* search bar  b1*/}
        <View style={styles.b1}>
        
        </View> 
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>

  )
}
const styles=StyleSheet.create({
  b1:{
    minHeight:100,
    width:"100%",
    marginTop:150,
    borderRadius:10,
    alignItems:'center',
    backgroundColor:"rgba(39, 139, 221, 0.2)",
  },

})