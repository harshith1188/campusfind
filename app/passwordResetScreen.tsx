import { MaterialIcons } from "@expo/vector-icons";
import { Label } from "@react-navigation/elements";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { sendPasswordReset } from "./firebase/auth";


export default function PasswordReset() {

    const[email,setemail]=useState('');
    const[loading,setloading]=useState(false);
    

const handelreset=async()=>{
    if(!email){
        Alert.alert(
            "Error",
            "Enter the Email"
        )
        return
    }
    else{
        setloading(true);
    try{
        
    await new Promise(resolve => setTimeout(resolve, 3000));
    await sendPasswordReset(email)

    Alert.alert(
        "Success",
         "Password reset link sent to your email.",
         [
            {
                text:"ok",
                onPress:()=>router.back()
            }
         ]
    )
    }
    catch(error:any){
        Alert.alert(
            "Error",
            error.message
        )
    }
    finally{
         setloading(false);
   
    }
    
    }
}
 
 
 
 return(
        <ImageBackground  resizeMode="cover" style={{flex:1}}>
            <SafeAreaView style={{flex:1}}>
                <ScrollView  contentContainerStyle={{justifyContent:'space-evenly',alignItems:'center',padding:20}} style={{flex:1}}>
                    
                    <View style={styles.c1}>
                        <View style={styles.c1_1}>
                            <MaterialIcons  name="mark-email-read" color="blue" size={90}/>
                        </View>
                        <Text style={styles.h1}>forgot password?</Text>
                        <Text style={styles.h3}>Enter your registered college email and we'll send you a link to reset your password</Text>
                    </View>
                    {/* closing c1 */}

                    <View style={styles.c2}>
                        <Label style={{fontWeight:'bold',fontSize:16}}>College Email</Label>
                        <TextInput placeholder="nameusnrrce@gamil.com"  style={styles.input} value={email}  onChangeText={setemail}/>
                        <View style={styles.c2_2}>
                            <Text  style={styles.h3}>
                                <MaterialIcons name="info" color="blue" size={28}/>
                                please enter the same email you used during resgistration
                            </Text>
                        </View>
                    </View>
                    {/* closing  c2 */}
                    
                    <TouchableOpacity style={styles.btn1}  onPress={handelreset} disabled={loading}>
                        {loading ? (<ActivityIndicator size={"small"} color={"white"}/>)  : (<Text style={styles.btntext}>Send Reset Link</Text>)}
                    </TouchableOpacity>
                     
                     <Text style={[styles.h3,{marginTop:30}]}>--------------------OR--------------------</Text>
                    <TouchableOpacity style={styles.btn2}  onPress={()=>{router.navigate('/loginScreen')}}>
                        <Text style={[styles.btntext,{color:'rgba(108, 140, 230,0.97)'}]}>Back to Login</Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}
const  styles=StyleSheet.create({
    c1:{
        minHeight:200,
        width:"90%",
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:10,
        padding:10,
        marginTop:"10%",
        gap:40
    },
    c1_1:{
        minHeight:150,
        width:150,
        padding:10,
        alignItems:'center',
        backgroundColor:'rgba(68, 113, 236, 0.2)',
        justifyContent:'space-evenly',
        borderRadius:100,
    },
    h1:{
        textTransform:'capitalize',
        fontSize:35,
        fontWeight:'bold'
    },
    h3:{
        fontSize:16,
        color:'grey',
        textAlign:"center"
    },

    c2:{
        minHeight:200,
        width:'100%',
        marginTop:50,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    input:{
        minHeight:50,
        width:'90%',
        borderRadius:10,
        borderWidth:0.5,
        paddingHorizontal:20
    },
    c2_2:{
        minHeight:50,
        width:'90%',
        alignItems:'flex-start',
        justifyContent:'space-evenly',
        borderWidth:0.5,
        padding:10,
        gap:20,
        flexDirection:'row',
        borderRadius:10
    },
    btn1:{
        minHeight:70,
        width:'80%',
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:10,
        backgroundColor:'rgba(108, 140, 230, 0.97)'
    },
    btntext:{
        fontSize:18,
        color:"white",
        textAlign:'center',
        fontWeight:'bold'
    },
    btn2:{
        minHeight:70,
        width:'80%',
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderWidth:0.7,
        borderRadius:10,
    }


})