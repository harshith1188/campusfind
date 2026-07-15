import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { BlurView } from "expo-blur";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen(){
  return(

    <ImageBackground source={require("../assets/images/register_logo.png")}
    style={{flex:1}}
    resizeMode="cover"
    >
      <SafeAreaView style={{flex:1}}>
        <ScrollView style={{flex:1}}contentContainerStyle={{alignItems:"center",justifyContent:"space-evenly",padding:15,gap:25}}>
          <View style={styles.b1}>
            <Image source={require("../assets/images/logo.jpg")} 
            style={{width:"100%",height:"100%",borderRadius:100}}/>
          </View>
          <BlurView intensity={50} style={styles.b2}>

            <Text style={styles.h1}> create your account!</Text>
            <Text style={styles.h3}>sign up to get started with campusfind</Text>
            
            <View style={styles.demo}>
              <MaterialIcons name="person" size={28}/>
            <TextInput style={styles.t1} placeholder="Enter Your Full Name"/>
            </View>

            <View style={styles.demo}>
              <MaterialIcons name="email" size={28}/>
              <TextInput 
             style={styles.t1}placeholder=" Enter Your College Email"/>
             </View>

              <View style={styles.demo}>
                <MaterialIcons name="school" size={28}/>
              <TextInput style={styles.t1}placeholder="Enter Your USN"/>
               </View>

              <View style={styles.demo}>
                <MaterialIcons name="lock-outline" size={28}/>
               <TextInput style={styles.t1}placeholder=" Create a Password"/>
                </View>

               <View style={styles.demo}>
                <MaterialIcons name="lock-outline" size={28}/>
                <TextInput style={styles.t1}placeholder="Confirm Password"/>
                 </View>

                

               <TouchableOpacity style={styles.btn1}>
                <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}> <Text><MaterialIcons name="login" size={25}/> Sign Up</Text></Text>
                </TouchableOpacity> 

                

               
                 <Text style={styles.text1}>Already have an account? <Text style={{color:'rgb(0, 102, 255)', fontWeight:'bold'}}>Sign In</Text></Text>

                

          </BlurView>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>

   
  )
}

const styles=StyleSheet.create({
  b1:{
    width:180,
    height:180,
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  b2:{
    width:"100%",
    minHeight:500,
    alignItems:"center",
    justifyContent:"space-evenly",
    borderWidth:2,
    borderColor:"blue",
    borderRadius:10,
    backgroundColor:"rgba(255,255,255,0.5)",
    padding:10
    
  },
  h1:{
   color:"blue",
   fontSize:25,
   fontWeight:"bold",
   textTransform:"capitalize"
  },
  h3:{
   fontSize:15,
   fontWeight:"bold"
  },
  t1:{
    height:50,
    width:"95%",
    borderWidth:1,
    borderRadius:5,
    backgroundColor:"rgba(255,255,255,0.7)"
  },
  demo:{
    minHeight:100,
    width:"90%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:2
  },
  btn1:{
     width: "60%", 
    height: 60, 
    backgroundColor: "rgb(0, 102, 255)",
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    borderWidth:1,
    borderColor:'rgba(255,255,255,0.8)'
    
  },
  h2:{
    fontSize:20,
    textAlign:"center",
    padding:5
  },
  text1:{
    fontSize:18,
    color:'black',
    textAlign:'center',
    marginTop:20,
    paddingHorizontal:10,
  
  },
 

})