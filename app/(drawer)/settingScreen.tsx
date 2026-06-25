import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Alert, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { logoutUser } from "../firebase/auth";

export default function SettingScreen(){

  const asklogout=()=>{
    
    Alert.alert(
      "LOG OUT",
      "Do you want to  logout ?",
      [
        {
          text:'cancel',
          style:'cancel'
        },
        {
          text:'log out',
          style:'destructive',
          onPress:handlelogout
        }
      ]
    )

  }


  const  handlelogout=async()=>{
    try{
      await logoutUser
       await AsyncStorage.setItem('loggin','false');
       router.replace('/loginScreen');
    }
    catch(error){
      console.log(error);
  }
 
}


  return(
    <ImageBackground 
      source={require("../../assets/images/found_lost_screen_bg.png")}
      style={{flex:1}}>
        <SafeAreaView style={{flex:1}}>
        <ScrollView style={{flex:1}}  contentContainerStyle={{gap:30,alignItems:'center',justifyContent:'space-evenly',padding:20}}> 
        
        {/* b1 */}
        <View style={styles.b1}>
          <Text style={styles.h1}>Settings</Text>
          <Text style={styles.
            
            h2}>Manage your prefernces</Text>
        </View>

        <View style={styles.b2}>
          <View style={styles.b2_boxes}>
            <View style={styles.b2_icon1}>
              <MaterialIcons name="notification-add" size={28} color={"rgb(0, 102, 255)"}/>
            </View>
               <Text style={styles.h3}>Notifications</Text>
            <TouchableOpacity style={styles.b2_icon2}>
              <MaterialIcons name="navigate-next" size={28} color={"rgb(0, 102, 255)"}/>
            </TouchableOpacity>
          </View>
        
            <View style={styles.b2_boxes}>
            <View style={styles.b2_icon1}>
              <MaterialIcons name="lock" size={28} color={"rgb(0, 102, 255)"}/>
            </View>
               <Text style={styles.h3}>Privacy & Security</Text>
            <TouchableOpacity style={styles.b2_icon2}>
              <MaterialIcons name="navigate-next" size={28} color={"rgb(0, 102, 255)"}/>
            </TouchableOpacity>
          </View>

           <View style={styles.b2_boxes}>
            <View style={styles.b2_icon1}>
              <MaterialIcons name="help-center" size={28} color={"rgb(0, 102, 255)"}/>
            </View>
               <Text style={styles.h3}>Help & Support</Text>
            <TouchableOpacity style={styles.b2_icon2} onPress={()=>{router.navigate("/help_support")}}>
              <MaterialIcons name="navigate-next" size={28} color={"rgb(0, 102, 255)"}/>
            </TouchableOpacity>
          </View>
          
          <View style={styles.b2_boxes}>
            <View style={styles.b2_icon1}>
              <MaterialIcons name="info" size={28} color={"rgb(0, 102, 255)"}/>
            </View>
               <Text style={styles.h3}>About CampusFind</Text>
            <TouchableOpacity style={styles.b2_icon2} onPress={ ()=>{ router.navigate('/about') } }>
              <MaterialIcons name="navigate-next" size={28} color={"rgb(0, 102, 255)"}/>
            </TouchableOpacity>
          </View>
        

           <View style={styles.b2_boxes}>
            <View style={styles.b2_icon1}>
              <MaterialIcons name="logout" size={28} color={"red"}/>
            </View>
               <Text style={styles.h3} >Logout</Text>
            <TouchableOpacity style={styles.b2_icon2} onPress={asklogout}>
              <MaterialIcons name="navigate-next" size={28} color={"red"}/>
            </TouchableOpacity>
          </View>
        
        </View>

        </ScrollView>
        </SafeAreaView>
      </ImageBackground>

  )
}



const styles =StyleSheet.create({
  b1:{
    minHeight:100,
    width:"90%",
    padding:10,
    backgroundColor:'rgba(255,255,255,0.8)',
    borderRadius:20,
    marginTop:"28%",
    alignItems:'flex-start',
    justifyContent:'space-evenly'
  },
  h1:{
    fontSize:30,
    fontWeight:'bold'
  },
  h2:{
    fontSize:20,
    color:"gray"
  },
  h3:{
    fontSize:18
  },
  b2:{
    minHeight:600,
    width:'100%',
    padding:20,
    alignItems:'center',
    justifyContent:'space-evenly',
    gap:10,
  },
  b2_boxes:{
    flexDirection:'row',
    minHeight:80,
    gap:25,
    width:"100%",
    alignItems:'center',
    justifyContent:'space-evenly',
    backgroundColor:'white',
    borderRadius:10,
    borderWidth:0.05
  },
  b2_icon1:{
    padding:10,
    borderRadius:10,
    backgroundColor:'rgba(102, 155, 235, 0.36)',
  },
  b2_icon2:{
    padding:10,
    borderRadius:10,
    backgroundColor:'rgba(102, 155, 235, 0.36)',
  }
})