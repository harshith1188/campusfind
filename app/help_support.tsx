import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export  default function  Help(){
    return(
        <ImageBackground  source={require("../assets/images/helpScreen.png")} style={{flex:1}}>
            <SafeAreaView style={{flex:1}}>
                <ScrollView style={{flex:1}}contentContainerStyle={{alignItems:'center',justifyContent:'space-evenly',padding:10,paddingBottom:50}}>
                <View style={styles.b1}>

            <View style={styles.b1_boxes}>
             <View style={styles.b1_icon1}>
              <MaterialIcons name="report" size={28} color={"rgb(0, 102, 255)"}/>
            </View>
             <View style={styles.b1_text}>
               <Text style={styles.h2}>How to Report an Item</Text>
               <Text style={styles.h3}>Learn how to report lost or found items on CampusFind</Text>
            </View>
            <TouchableOpacity style={styles.b1_icon2}>
              <MaterialIcons name="navigate-next" size={28} color={"rgb(0, 102, 255)"}/>
            </TouchableOpacity>
          </View>
             {/* b2 */}
            
            <View style={styles.b1_boxes}>
             <View style={styles.b1_icon1}>
              <MaterialIcons name="question-mark" size={28} color={"rgb(0, 102, 255)"}/>
            </View>
             <View style={styles.b1_text}>
               <Text style={styles.h2}>General FAQ's</Text>
               <Text style={styles.h3}>Find answers to most common questions</Text>
            </View>
            <TouchableOpacity style={styles.b1_icon2} onPress={()=>{router.navigate("/faqsScreen")}}>
              <MaterialIcons name="navigate-next" size={28} color={"rgb(0, 102, 255)"}/>
            </TouchableOpacity>
          </View>
            {/* b3 */}

             <View style={styles.b1_boxes}>
             <View style={styles.b1_icon1}>
              <MaterialIcons name="mail" size={28} color={"rgb(0, 102, 255)"}/>
            </View>
             <View style={styles.b1_text}>
               <Text style={styles.h2}>Contact Support</Text>
               <Text style={styles.h3}>can't find what you're looking for ?</Text>
            </View>
            <TouchableOpacity style={styles.b1_icon2} onPress={()=>{router.navigate('/contactScreen')}}>
              <MaterialIcons name="navigate-next" size={28} color={"rgb(0, 102, 255)"}/>
            </TouchableOpacity>
          </View>

          <View style={styles.b1_boxes}>
             <View style={styles.b1_icon1}>
              <MaterialIcons name="timelapse" size={30} color={"rgb(0, 102, 255)"}/>
            </View>
             <View style={styles.b1_text}>
               <Text style={styles.h2}>Support Hours</Text>
               <Text style={styles.h3}>Monday-Friday</Text>
               <Text style={[styles.h2,{color:"rgb(0, 102, 255)"}]}>9:00 AM - 6:00 PM</Text>
            </View>
          </View>

            
               
            </View>            
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles=StyleSheet.create({
  b1:{
    minHeight:600,
    width:'100%',
    marginTop:'40%',
    padding:10,
    gap:30,
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  b1_boxes:{
   minHeight:150,
   borderRadius:10,
   width:'100%',
   gap:10,
   borderWidth:0.1,
   paddingHorizontal:20,
   paddingVertical:5,
   backgroundColor:'rgba(255,255,255,0.5)',
   alignItems:'center',
   flexDirection:'row',
   justifyContent:'space-evenly'
  },
  b1_icon1:{
    padding:10,
    backgroundColor:'rgba(102, 155, 235, 0.36)',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
   b1_icon2:{
    padding:10,
    backgroundColor:'rgba(102, 155, 235, 0.36)',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
  b1_text:{
    minHeight:100,
    width:"70%",
    padding:10
  },
  h2:{
    fontSize:20,
    fontWeight:'bold'
  },
  b1_texts:{
    padding:10,
    width:"80%",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'yellow'
  },
  h3:{
    fontSize:16
  }

})