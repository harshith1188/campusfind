import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Label } from "@react-navigation/elements";
import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";

export default function  EditScreen(){
    const[sem,setSem]=useState(null);
    const[dep,setDep]=useState("");


    const semister=[
        {Label:"1st semister", value:1},
        {Label:"2nd semister", value:2},
        {Label:"3rd semister", value:3},
        {Label:"4th semister", value:4},
        {Label:"5th semister", value:5},
        {Label:"6th semister", value:6},
        {Label:"7th semister", value:7},
        {Label:"8th semister", value:8},
      
    ]
    const department=[
        {Label:"CSE Department" ,value:"cse"},
        {Label:"ISE Department" ,value:"ise"},
        {Label:"EC Department" ,value:"ec"},
        {Label:"EEE Department" ,value:"eee"},
        {Label:"CSD Department" ,value:"csd"},
        {Label:"CIVIL Department" ,value:"civil"},
    ]

    return(
    <ImageBackground source={require("../assets/images/found_lost_screen_bg.png")} style={{flex:1}}>
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={{flex:1}} contentContainerStyle={{gap:30,alignItems:'center',justifyContent:'center',padding:20}}>
                
                {/* b1 and profile_pic */}
                <View style={styles.b1}>
                    <TouchableOpacity style={styles.profile_pic}>
                    <Image source={require("../assets/images/logo.png")} style={{width:"100%",height:"100%",borderRadius:100}}/>
                    </TouchableOpacity>
                </View>
               
                {/* b2  name*/}
               <View style={styles.b2}>
                
                 <View style={styles.b2_icon}>
                    <MaterialIcons name={"person-2"} size={30}/>
                 </View>
                 <View style={styles.b2_label}>
                    <Label style={styles.h3}>Name</Label>
                    <TextInput style={styles.inputs} placeholder=""/>           
                 </View>

              </View> 
             
                {/* b2 semsiter */}
             <View style={styles.b2}>
                
                 <View style={styles.b2_icon}>
                    <MaterialIcons name={"class"} size={30}/>
                 </View>
                 <View style={styles.b2_label}>
                    <Label style={styles.h3}>Semister</Label>
                    <Dropdown
                       search
                       style={styles.drop_down}
                        data={semister}
                        labelField="Label"
                        valueField="value"
                        placeholder="Select Semister"
                        value={sem}
                        onChange={(item)=>{setSem(item.value)
                        }}/>
                 </View>
        
              </View>
              
              {/* b2 department  */}
           
               <View style={styles.b2}>
                
                 <View style={styles.b2_icon}>
                    <MaterialIcons name={"school"} size={30}/>
                 </View>
                 <View style={styles.b2_label}>
                    <Label style={styles.h3}>Name</Label>
                    <Dropdown
                    search 
                      styl
                      e={styles.drop_down}
                      data={department}
                      labelField="Label"
                      placeholder="Select Department"
                      valueField="value"
                      value={dep}
                      onChange={(item)=>{setDep(item.value)                        
                      }}/>
                 </View>
                
              </View> 
             {/* b2  email*/}
               <View style={styles.b2}>
                
                 <View style={styles.b2_icon}>
                    <MaterialIcons name={"email"} size={30}/>
                 </View>
                 <View style={styles.b2_label}>
                    <Label style={styles.h3}>Email</Label>
                    <TextInput style={styles.inputs} placeholder="" editable={false}/>           
                 </View>

              </View> 
            
             {/* b2  USN*/}
               <View style={styles.b2}>
                
                 <View style={styles.b2_icon}>
                    <MaterialIcons name={"badge"} size={30}/>
                 </View>
                 <View style={styles.b2_label}>
                    <Label style={styles.h3}>USN</Label>
                    <TextInput style={styles.inputs} placeholder="" editable={false}/>           
                 </View>

              </View> 
                      
            {/* b2  PHONE NUMBER*/}
               <View style={styles.b2}>
                
                 <View style={styles.b2_icon}>
                    <MaterialIcons name={"phone"} size={30}/>
                 </View>
                 <View style={styles.b2_label}>
                    <Label style={styles.h3}>Contact Number</Label>
                    <TextInput style={styles.inputs} placeholder="" keyboardType={"number-pad"} maxLength={10}/>           
                 </View>
              </View> 
                      
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.cancels}>
                      <Text style={[styles.h2,{color:"rgb(0, 102, 255)"}]}><MaterialIcons name="cancel" size={28} color={"rgb(0, 102, 255)"}/>Cancel</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity style={styles.save}>
                        <Text style={[styles.h2,{color:'white'}]}><MaterialIcons name="save" size={28} color={"white"}/>Save</Text>
                </TouchableOpacity>
                
            </View>
                    

            </ScrollView> 
        </SafeAreaView>
     </ImageBackground>
    )
}

const styles=StyleSheet.create({
    b1:{
        minHeight:200,
        width:"95%",
        backgroundColor:'rgba(39, 139, 221, 0.2)',
        borderRadius:10,
        padding:10,
        alignItems:"center",
        justifyContent:'space-evenly',
        marginTop:"10%"
    },
    profile_pic:{
        height:150,
        width:150,
        borderWidth:2,
        borderColor:"rgb(0, 102, 255)",
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(39, 139, 221, 0.2)',
    },
    b2:{
        minHeight:100,
        width:"95%",
        backgroundColor:'rgba(39, 139, 221, 0.05)',
        borderWidth:0.2,
        borderRadius:20,
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    b2_icon:{
        padding:15,
        backgroundColor:"rgba(0, 102, 255,0.3)",
        borderRadius:10,
    },
    b2_label:{
        padding:15,
        gap:10,
        width:'85%',
    },
    inputs:{
        minHeight:50,
        width:'100%',
        fontSize:18,
        padding:10,
        textAlign:'center',
        borderWidth:1,
        borderRadius:10
    },
    h3:{
        fontSize:16,
        fontWeight:'bold'
    },
    drop_down:{
        width:'100%',
        borderWidth:1,
        padding:10,
        borderRadius:10,
        fontSize:18
    },
    buttons:{
        padding:10,
        width:"90%",
        gap:30,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-evenly'
    },

    cancels:{
        paddingVertical:10,
        paddingHorizontal:5,
        width:"45%",
        backgroundColor:"white",
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    save:{
        paddingVertical:10,
        paddingHorizontal:5,
        width:"45%",
        backgroundColor:"rgb(0, 102, 255)",
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    h2:{
        fontSize:20,
        fontWeight:'bold',
        textTransform:'capitalize'
    }
    


})