import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebase/config";
import { getUserDetail } from "../firebase/firestore";
export default function ProfileScreen(){

  const [sname, setSname] = useState("");
  const [semail, setSemail] = useState("");
  const [snum, setSnum] = useState("");
  const [susn, setSusn] = useState("");
  const [loading, setLoading] = useState(true);
  const[dept,setdept]=useState('');
    
  
 useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {

        if (!user) {
            console.log("User not restored yet");
            return;
        }

        console.log("Logged in UID:", user.uid);

        const data:any = await getUserDetail();

        if (data) {
            setSname(data.name);
            setSemail(data.email);
            setSnum(data.num);
            setSusn(data.usn);
            setdept(data.dept);
            console.log(data.dept);
        }

        setLoading(false);

    });

    return unsubscribe;

}, []);
 
const  handlepcik=()=>{
  Alert.alert(
    "upcoming",
    "Feature yet to be added"
  )
}
return (
<ImageBackground
source={require("../../assets/images/profile_logo.png")}
style={{ flex: 1 }}
resizeMode="cover">

<SafeAreaView style={{ flex: 1 }}>
<ScrollView
contentContainerStyle={{
alignItems: "center",
padding: 20,
paddingBottom: 40,
}}
>

<View style={styles.v2}>

<View style={styles.v2_1}>
<Image
source={{
uri:"https://cdn-icons-png.flaticon.com/512/149/149071.png",
}}
style={styles.profile}
/>

<TouchableOpacity style={styles.btn1} onPress={handlepcik}>
<Ionicons name="camera" size={25} color="white"/>
</TouchableOpacity>

</View>

<Text style={styles.t2}>
{loading ? "Loading..." : sname}
</Text>

<View style={styles.v2_2}>
<Text style={styles.t3}>
USN : {loading ? "..." : susn.toUpperCase()}
</Text>
</View>

</View>

<View style={styles.v3}>

<View style={styles.v3_1}>

<View style={styles.v3_icon}>
<MaterialIcons
name="email"
size={25}
color="#0D6EFD"
/>
</View>

<View style={styles.v3_text}>
<Text style={styles.t4}>Email</Text>
<Text style={styles.t5}>
{loading ? "Loading..." : semail}
</Text>
</View>

</View>

<View style={styles.v3_1}>

<View style={styles.v3_icon}>
<MaterialIcons
name="call"
size={25}
color="#0D6EFD"
/>
</View>

<View style={styles.v3_text}>
<Text style={styles.t4}>Contact Number</Text>
<Text style={styles.t5}>
{loading ? "Loading..." : snum}
</Text>
</View>

</View>



{/* department */}
<View style={styles.v3_1}>

<View style={styles.v3_icon}>
<MaterialIcons
name="account-balance"
size={25}
color="#0D6EFD"
/>
</View>

<View style={styles.v3_text}>
<Text style={styles.t4}>Branch</Text>
<Text style={styles.t5}>{dept}</Text>
</View>

</View>



</View>


</ScrollView>
</SafeAreaView>

</ImageBackground>
)}

const styles=StyleSheet.create({
  

  v2:{
    padding:15,
    backgroundColor: 'rgba(39, 139, 221, 0.2)',
    margin: 20,
    borderRadius: 25,
    alignItems: "center",
    minHeight:250,
    width:"100%"
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
v3: {
  width: "100%",
  backgroundColor: "white",
  borderRadius: 20,
  padding: 15,
},

v3_1: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 18,
  borderBottomWidth: 1,
  borderBottomColor: "#ECECEC",
},

v3_icon: {
  width: 50,
  height: 50,
  borderRadius: 12,
  backgroundColor: "#EAF3FF",
  justifyContent: "center",
  alignItems: "center",
},

v3_text: {
  marginLeft: 15,
  flex: 1,
},

t4: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#222",
},

t5: {
  marginTop: 4,
  fontSize: 15,
  color: "#666",
},

btn2: {
  width: "100%",
  height: 55,
  marginTop: 20,
  backgroundColor: "#0D6EFD",
  borderRadius: 12,
  justifyContent: "center",
  alignItems: "center",
},  


})
