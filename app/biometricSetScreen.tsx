import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Biometric(){

    const[islock,setislock]=useState(false);
    const[lockstatus,setlockstatus]=useState('');

    useFocusEffect(
        useCallback(()=>{
            const  handle=async()=>{
                let status=await  AsyncStorage.getItem('biometric');
                if(status=='true'){
                    setislock(true);
                    setlockstatus('Enabled biometric authentication')
                }
                else{
                    setislock(false);
                    setlockstatus('Disabled biometric authentication')
                }
            }
            handle()
        },[])
    )

    const handlelock=async()=>{
      await AsyncStorage.setItem('biometric','true')
            Alert.alert(
                "Enabled",
                "Biometric authentication has been enabled"
            )
            setlockstatus('Enabled biometric authentication')
            router.navigate('/(drawer)/(tabs)');
    }


    const handlecancel=async()=>{
            await AsyncStorage.setItem('biometric','false');
            setislock(false)
            Alert.alert(
                "Disabled",
                "Biometric authentication has been  disabled"
            )
            setlockstatus('Disabled biometric authentication')
         
     }

    return(
        <ImageBackground source={require('../assets/images/biometric.png')} style={{flex:1}}>
            <SafeAreaView  style={{flex:1}}>
                <ScrollView  style={{flex:1}} contentContainerStyle={{alignItems:'center',justifyContent:'space-evenly',padding:10,gap:30}}>
                    
                    <View style={styles.b1}>
                    <MaterialIcons  name="fingerprint"  size={100} color="rgb(0, 102, 255)" />
                    </View>
                    
                    {/* b2 */}
                    <View style={styles.b2}>
                        <Text  style={styles.h1}>Biometric Authentication</Text>
                        <Text  style={styles.h2}>secure your account with your fingerprint</Text>
                    </View>

                    {/* b3 */}
                    <View style={styles.b3}>
                        {/* enhanced  security */}
                        <View style={styles.b3_1}>
                            <View style={styles.b3_icon}>
                                <MaterialIcons  name="lock"  size={28} color={"rgb(0, 102, 255)"}  />
                            </View>
                            
                            <View style={styles.b3_text}>
                                <Text  style={styles.h3}>Enhanced Security</Text>
                                <Text style={styles.h4}>Protect your account with biometric authentication</Text>
                            </View>
                        </View>

                        {/* quick access */}
                        <View style={styles.b3_1}>
                            <View style={styles.b3_icon}>
                                <MaterialIcons  name="electric-bolt"  size={28} color={"rgb(0, 102, 255)"}  />
                            </View>
                            
                            <View style={styles.b3_text}>
                                <Text  style={styles.h3}>Quick Access</Text>
                                <Text style={styles.h4}>Login faster and easier using your fingerprint</Text>
                            </View>
                        </View>

                       {/* quick access */}
                        <View style={styles.b3_1}>
                            <View style={styles.b3_icon}>
                                <MaterialIcons  name="verified"  size={28} color={"rgb(0, 102, 255)"}  />
                            </View>
                            
                            <View style={styles.b3_text}>
                                <Text  style={styles.h3}>Your Data, Your Control</Text>
                                <Text style={styles.h4}>Biometric data stays on your device</Text>
                            </View>
                        </View>

                    </View>
                    {/* closing  b3 */}

                    <Text style={[styles.h2,{color:islock ? "green" :'red' }]}>{lockstatus}</Text>

                    <TouchableOpacity style={[styles.on_btn,islock && {backgroundColor:'gray'}]} onPress={handlelock} disabled={islock} >
                        <Text  style={[styles.h3,{color:'white'}]}>Set Biometric</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.off_btn} onPress={handlecancel}>
                        <Text  style={[styles.h3,{color:'white'}]}>cancel</Text>
                    </TouchableOpacity>



                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}
const  styles= StyleSheet.create({
    b1:{
     minHeight:180,
     width:"40%",
     borderWidth:1,
     borderColor:'rgb(0, 102, 255)',
     borderRadius:100,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'rgba(39, 139, 221, 0.2)',
     marginTop:"20%"
    },
    b2:{
        minHeight:130,
        width:"90%",
        alignItems:'center',
        justifyContent:'space-evenly',
        padding:10
    },
    h2:{
        fontSize:20,
        color:'gray',
        textAlign:'center'
    },
    h1:{
        fontSize:26,
        fontWeight:'bold'
    },
    h3:{
        fontSize:18,
        fontWeight:'bold'
    },
    h4:{
        fontSize:16,
        color:'gray'
    },
    b3:{
        minHeight:450,
        width:'90%',
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:10,
    },
    b3_1:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'100%',
        borderRadius:20,
        borderWidth:0.07,
        minHeight:100,
        gap:10,
    },
    b3_icon:{
        padding:10,
        borderRadius:10,
        backgroundColor:'rgba(39, 139, 221, 0.2)'
    },
    b3_text:{
        padding:5,
        alignItems:'flex-start',
        justifyContent:'space-evenly'
    },
    on_btn:{
        minHeight:80,
        width:'50%',
        padding:5,
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:10,
        backgroundColor:"rgba(40, 74, 228, 0.97)"
    },
    off_btn:{
        minHeight:80,
        width:'50%',
        padding:5,
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:10,
        backgroundColor:'red'
    }

})