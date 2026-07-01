import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function ProfileScreen(){
 
  return(
  <ImageBackground source={require("../../assets/images/profile_logo.png")}
    style={{flex:1}}
    resizeMode="cover">
  
  <SafeAreaView style={{flex:1}}>
    <ScrollView style={{flex:1}}contentContainerStyle={{alignItems:"center",justifyContent:"space-evenly",padding:70,gap:25}}>
     

      <View style={styles.v2}>
        <View style={styles.v2_1}>
          <Image source={{uri:
            "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}style={styles.profile}/>
          <TouchableOpacity style={styles.btn1}>
            <Ionicons
            name="camera"
            size={26}
            color="white" />
          </TouchableOpacity>
        </View>
      
      <Text style={styles.t2}>deeksha</Text>
      <View style={styles.v2_2}>
        <Text style={styles.t3}>USN:1RR23CS030</Text>
      </View>
</View>

<View style={styles.v3}>
   <View style={styles.v3_1}>
    <MaterialIcons
      name="email"
      size={26}
      color="#0D6EFD"
      />
      <Text style={styles.t4}>Email</Text>
      <Text style={styles.t5}>deekshadp45@gamil.com</Text>
   </View>

   <View style={styles.v3_1}>
      <MaterialIcons
      name="call"
      size={26}
      color="#0D6EFD"
      />
      <Text style={styles.t4}>Contact Number</Text>
      <Text style={styles.t5}>7975207873</Text>
   </View>

   <View style={styles.v3_1}>
    <MaterialIcons
      name="school"
      size={26}
      color="#0D6EFD"
      />
      <Text style={styles.t4}>Semester</Text>
      <Text style={styles.t5}>4th Semester</Text>
   </View>

   <View style={styles.v3_1}>
    <MaterialIcons
      name="account-balance"
      size={26}
      color="#0D6EFD"
      />
      <Text style={styles.t4}>Branch</Text>
      <Text style={styles.t5}>Computer Science And Engineering</Text>
   </View>

   <View style={styles.v3_1}>
    <MaterialIcons
      name="groups"
      size={26}
      color="#0D6EFD"
      />
      <Text style={styles.t4}>Section</Text>
      <Text style={styles.t5}>A</Text>
   </View>

   <View style={styles.v3_1}>
    <MaterialIcons
      name="calendar-month"
      size={26}
      color="#0D6EFD"
      />
      <Text style={styles.t4}>Year</Text>
      <Text style={styles.t5}>3rd Year</Text>
   </View>
</View>

<TouchableOpacity style={styles.btn2}>
  <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}><MaterialIcons 
  name="edit"
  size={25}
  color="white"/>Edit Profile</Text>
</TouchableOpacity>

    </ScrollView>
  </SafeAreaView>
  

      
    </ImageBackground>
  )
}

const styles=StyleSheet.create({
  

  v2:{
    padding:15,
    backgroundColor: 'rgba(39, 139, 221, 0.2)',
    margin: 20,
    borderRadius: 25,
    alignItems: "center",
    minHeight:250,
    width:"150%"
    },

  v2_1:{
      position:"relative"
      
  },

  profile: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "#0D6EFD"
  },

  btn1:{
    position: "absolute",
    bottom: 5,
    right:-6,
    backgroundColor: "#0D6EFD",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  t2:{
    marginTop:6,
    textTransform:"capitalize",
    fontSize:20,
    fontWeight:"bold"
  },
  v2_2: {
    marginTop:3,
    backgroundColor:"white",
    height:42,
    width:"60%",
    alignItems:"center",
    justifyContent:"space-evenly",
    borderRadius:20
  },


  t3:{
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },


  v3:{
    padding:15,
    backgroundColor: "white",
    width:"150%",
    minHeight:430,
    borderRadius: 20
    
  },

  v3_1:{
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },

  t4:{
  width: 120,
  fontSize: 18,
  fontWeight: "bold",
  marginLeft: 10,
},

t5:{
  flex: 1,
  textAlign: "right",
  fontSize: 16,
  color: "black",
},
 btn2:{
    width: "150%", 
    height: 50, 
    backgroundColor: "rgb(0, 102, 255)",
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    borderWidth:1,
    borderColor:'rgba(255,255,255,0.8)'
}
  


})

