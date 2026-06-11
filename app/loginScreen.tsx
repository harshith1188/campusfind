import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { BlurView } from "expo-blur";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function LoginScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/loginScreen.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ alignItems: "center", justifyContent: "space-evenly",flexGrow: 1 }}>
        {/* b1 */}
        <View style={styles.b1}>
            <Image source={require("../assets/images/logo.png")} style={{ width: "100%", height: "100%",borderRadius:100 }} />
        </View>
        {/* b2 */}
        <BlurView intensity={50} style={styles.b2}>
            <Text style={styles.h1}>Welcome Back!</Text>
            <Text style={[styles.h3,{ fontWeight:'bold'}]}>Sign in to your account to continue</Text>
            
            <TextInput placeholder="Email" style={styles.input} placeholderTextColor={"rgb(0, 102, 255)"} />
            <TextInput placeholder="Password" style={styles.input} placeholderTextColor={"rgb(0, 102, 255)"}/>
            <Text style={[styles.h3,{ alignSelf:'flex-end', marginRight:20,color:'rgb(0, 102, 255)', fontWeight:'bold'}]}>Forgot password?</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}><Text><MaterialIcons name="login" size={25}/> Sign in</Text></Text>
            </TouchableOpacity>

            <Text style={styles.h3}>don't have an account? <Text style={{color:'rgb(0, 102, 255)', fontWeight:'bold'}}>Sign Up</Text></Text>

        </BlurView>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles=StyleSheet.create({
 b1:{
    height:200,
    width:200,
    borderRadius:100,
    backgroundColor:'rgba(255,255,255,0.4)', 
     alignItems: "center",
     justifyContent: "center",
 },
 b2:{
    minHeight:550,
    width:"90%",
    borderRadius:20,
    backgroundColor:'rgba(255,255,255,0.4)',
    borderWidth:2,
    borderColor:'rgb(0, 102, 255)',
    alignItems: "center",
     justifyContent: "space-evenly",
     padding:20,
 },
 h1:{
    fontSize:35,
    fontWeight:'bold',
     color:"rgb(0, 102, 255)",
 },
 h2:{
    fontSize:20,
    color:'black',
     textAlign:'center',
      marginTop:20,
       paddingHorizontal:10,
 },
 h3:{
    fontSize:16,
    color:'black',
     textAlign:'center',
      marginTop:20,
       paddingHorizontal:10,
 },
 input:{
    width: "90%", 
    height: 60, 
    backgroundColor: "rgba(255,255,255,0.8)", 
    borderRadius: 10, 
    paddingHorizontal: 10,
    borderWidth:0.2,
    fontSize:20,
    color:'rgb(0, 102, 255)',
    textAlign:'center', 
 },
 btn:{
    width: "60%", 
    height: 60, 
    backgroundColor: "rgb(0, 102, 255)",
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
     marginTop:20,
      borderWidth:1,
      borderColor:'rgba(255,255,255,0.8)',
 }
})