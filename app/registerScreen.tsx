import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { registerUser } from "./firebase/auth";
import { addUser, getdepartment } from "./firebase/firestore";

export default function RegisterScreen(){
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[usn,setUsn]=useState('');
const[pass,setPass]=useState('');
const[cpass,setCpass]=useState('');
const[num,setnum]=useState('');
const[year,setyear]=useState('');
const regexusn = /^1rr(23|24|25|26)(cs|is|ec|ee)\d{3}$/i;
const emailRegex =/^[a-z]+[a-z0-9]*1rr(23|24|25|26)(cs|is|ec|ee)\d{3}rrce@gmail\.com$/i;
const mobileRegex = /^[6-9]\d{9}$/;
const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_\-+=])[A-Za-z\d@$!%*?&#^()_\-+=]{8,}$/;



const  handleRegsiter=async()=>{
  let  converted_email=email.toLowerCase();
  await AsyncStorage.setItem('loggin','false');
   let converted_usn=usn.toLowerCase();
   let extracted_usn=converted_email.match(/1rr(23|24|25|26)(cs|is|ec|ee)\d{3}/i)?.[0];

  if(!name || !email ||!pass || !cpass || !usn|| !num){
      Alert.alert(
        'Error',
        'Fill all the Fields'
      )
      return
  }
  else if(!emailRegex.test(converted_email)){
     Alert.alert(
      'Invalid Email',
      'email must be in the format  name+initial+usn+rrce@gmail.com  \n\n Eg:harshithkc1rr23cse047rrce@gmail.com'
     )
       return
  }
  else if(!regexusn.test(converted_usn)){
    Alert.alert(
      "Invalid USN",
      "usn must be like  1rr23cs047 etc"
    )
    return
  }
 else if (!passwordRegex.test(pass)) {
  Alert.alert(
    "Weak Password",
    "Password must contain:\n\n" +
    "• At least 8 characters\n" +
    "• One uppercase letter (A-Z)\n" +
    "• One lowercase letter (a-z)\n" +
    "• One number (0-9)\n" +
    "• One special character (@$!%*?&# etc.)"
  );
  return;
}

  else if(pass!=cpass){

    Alert.alert(
      'Password Error',
      'confirm password not matching with the password'
    )
    return
  }

  else if(!mobileRegex.test(num)){
    Alert.alert(
      'Invalid phone  number',
      'enter a valid Indian 10 digit mobile number'
    )
    return
  }
  else if (converted_usn !== extracted_usn) {
    Alert.alert(
      "USN Mismatch",
      "The USN entered does not match the USN present in your college email."
    );
    return;
  }
 
  else{
    try{
      const usercreadentials=await registerUser(email,pass);
      const user=usercreadentials.user
      let dept=getdepartment(converted_email);
      console.log(user);
      await addUser(
        user.uid,
        name,
        email,
        num,
        converted_usn,
        dept,
      );

      Alert.alert(
        'Email  verification',
        '6 digit code has been sent to the specified email'
      )
      router.replace('/codeConfirm');
    }
    catch(error:any){
      Alert.alert(
        "Registration failed",
        error.message
      )
      console.log(error.message);
    }
  }


}

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
            <TextInput style={styles.t1} placeholder="Enter Your Full Name" value={name}  onChangeText={setName}/>
            </View>

            <View style={styles.demo}>
              <MaterialIcons name="email" size={28}/>
              <TextInput 
             style={styles.t1}placeholder=" Enter Your College Email"  value={email}  onChangeText={setEmail}    />
             </View>

              <View style={styles.demo}>
                <MaterialIcons name="school" size={28}/>
              <TextInput style={styles.t1}placeholder="Enter Your USN" value={usn} onChangeText={setUsn}  />
               </View>

                 <View style={styles.demo}>
                <MaterialIcons name="phone" size={28}/>
              <TextInput style={styles.t1}placeholder="Enter mobile no" value={num} onChangeText={setnum} keyboardType="number-pad" maxLength={10}  />
               </View>


              <View style={styles.demo}>
                <MaterialIcons name="lock-outline" size={28}/>
               <TextInput style={styles.t1}placeholder=" Create a Password" value={pass} onChangeText={setPass}  />
                </View>

               <View style={styles.demo}>
                <MaterialIcons name="lock-outline" size={28}/>
                <TextInput style={styles.t1}placeholder="Confirm Password" value={cpass} onChangeText={setCpass} secureTextEntry  />
                 </View>

                

               <TouchableOpacity style={styles.btn1}  onPress={handleRegsiter}>
                <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}> <Text><MaterialIcons name="login" size={25}/> Sign Up</Text></Text>
                </TouchableOpacity> 

                

               
                 <Text style={styles.text1}>Already have an account? <Text style={{color:'rgb(0, 102, 255)', fontWeight:'bold'}} onPress={()=>{router.navigate('/loginScreen')}}>Sign In</Text></Text>

                

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
    padding:15,
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





















