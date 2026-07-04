
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LostScreen(){
    return(
        <ImageBackground source={require("../../../assets/images/profile_logo.png")}
        style={{flex:1}}
        resizeMode="cover">
        
        <SafeAreaView style={{flex:1}}>
        <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:"center",justifyContent:"space-evenly",padding:10,gap:30}}>
            <View style={styles.c1}>
                <View style={styles.c1_1}>
                <MaterialIcons 
                name="lock-outline"
                size={24}
                color="pink"/>
                </View>

                <View style={styles.c1_2}>
                <Text style={styles.h1}>Lost an Item?</Text>
                <Text style={styles.h3}>Fill in the details below to report your lost item.We'll help you find it</Text>
                </View>

                <View style={styles.c1_3}>
                    <Image source={require("../../../assets/images/lost item.png")}
                    style={{width:80, height:80,borderRadius:10,borderWidth:0.3}}/>
                </View>
                </View>
            {/* container 2 */}
            <View style={styles.c2}> 
                <Text style={styles.h2}>Item Photo(optional)</Text>
                <View style={styles.c2_1}>
                    <View style={styles.c2_1_1}>
                        <MaterialIcons
                        name="camera"
                        size={35}
                        color="blue"/>
                        <Text style={styles.h4}>Take Photo</Text>
                    </View>
                    <View style={styles.c2_1_2}>
                        <MaterialIcons
                        name="image"
                        size={35}
                        color="blue"/>
                        <Text style={styles.h4}>No image selected</Text>
                    </View>
                </View>
                </View>

                <View style={styles.c3}>
                    <Text style={styles.h2}>Item Details</Text>
                    <View style={styles.c3_1}>
                        <MaterialIcons
                        name="inventory-2"
                        size={24}
                        color="blue"/>

                        <TextInput style={styles.input1} placeholder="Enter the name of the item"/>
                    </View>

                    <View style={styles.c3_1}>
                        <MaterialIcons
                        name="category"
                        size={24}
                        color="blue"/>
                        <TextInput style={styles.input1} placeholder="Select category"/>
                    </View>

                    <View style={styles.c3_1}>
                        <MaterialIcons
                        name="location-on"
                        size={24}
                        color="blue"/>
                        <TextInput style={styles.input1} placeholder="Enter the location where you lost it"/>
                    </View>

                    <View style={styles.c3_2}>
                        <View style={styles.c3_2_1}>
                            <MaterialIcons 
                            name="calendar-month"
                            size={24}
                            color="blue"/>

                            <TextInput style={styles.input2}placeholder="Select date"/>
                        </View>

                        <View style={styles.c3_2_2}>
                            <MaterialIcons 
                            name="access-time"
                            size={24}
                            color="blue"/>

                            <TextInput style={styles.input2} placeholder="Select time"/>
                        </View>
                    </View>

                    <View style={styles.c3_1}>
                        <MaterialIcons
                        name="description"
                        size={24}
                        color="blue"/>
                        <TextInput style={styles.desinput} 
                        placeholder="Describe your lost item(color,brand ,any unique features,etc)"
                        multiline
                        numberOfLines={4}/>
                          
                    </View>
                </View>

                <View style={styles.c4}>
                    <Text style={styles.h2}>Contact Information</Text>
                    <View style={styles.c4_1}>
                        <MaterialIcons
                        name="phone"
                        size={24}
                        color="blue"/>
                    <TextInput style={styles.input1}placeholder="Enter your contact number"/>
                        </View>
                </View>

                
                <TouchableOpacity  style={styles.btn1}>
                   <MaterialIcons 
                    name="send"
                    size={25}
                    color="white"/>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginLeft:10}}>Report Lost Item </Text>
                </TouchableOpacity>
                
                
            
        </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    )
}

const styles=StyleSheet.create({
    c1:{
        minHeight:150,
        width:"95%",
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"space-evenly",
        borderRadius:10,
        flexDirection:"row",
        marginTop:"20%"
    },
    c1_1:{
        padding:10,
        backgroundColor:"white",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"space-evenly",
        marginBottom:60
    },
    c1_2:{
        width:"60%",
        padding:10,
        backgroundColor:"white",
        
        justifyContent:"center",
        gap:10,
        
    },
    c1_3:{
        padding:5,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"space-evenly"
    },

    h1:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"left"
       
    },
    h3:{
        fontSize:14,
        textAlign:"left"
    },

    c2:{
        minHeight:200,
        width:"95%",
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    
    c2_1:{
        padding:10,
        width:"100%",
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:'space-evenly',
        flexDirection:"row",
        minHeight:140
    },

    c2_1_1:{
        minHeight:100,
        width:"48%",
        alignItems:"center",
        justifyContent:"space-evenly",
        padding:10,
        borderRadius:10,
        borderWidth:0.5,
        borderStyle:"dashed",
        backgroundColor:"white"
    },

    c2_1_2:{
        minHeight:100,
        width:"48%",
        alignItems:"center",
        justifyContent:"space-evenly",
        padding:10,
        borderRadius:10,
        borderWidth:0.5,
        backgroundColor:"white"
    },

    h2:{
        fontSize:18,
        fontWeight:"bold"
    },
    h4:{
        fontSize:12
    },
    c3:{
        minHeight:400,
        width:"95%",
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"space-evenly"
    },

    c3_1:{
        alignItems:"center",
        flexDirection:"row",
        marginBottom:15,
        justifyContent:"space-evenly"
    },

    input1:{
     flex:1,
     marginLeft:10,
     borderWidth:1,
     borderColor:"grey",
     borderRadius:10,
     padding:15,
     height:50,
     backgroundColor:"white",
    },

    c3_2:{
        padding:10,
        width:"100%",
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:'space-evenly',
        flexDirection:"row",
        minHeight:80,
       
    },

    c3_2_1:{
        alignItems:"center",
        flexDirection:"row",
        marginBottom:15,
        justifyContent:"space-evenly"
    },

    c3_2_2:{
        alignItems:"center",
        flexDirection:"row",
        marginBottom:15,
        justifyContent:"space-evenly"
    },
    input2:{
     marginLeft:10,
     borderWidth:1,
     borderColor:"grey",
     borderRadius:10,
     padding:15,
     height:40,
     backgroundColor:"white",   
    },

    desinput:{
    flex:1,
    marginLeft:10,
    borderWidth:1,
    borderColor:"grey",
    borderRadius:10,
    padding:15,
    height:100,
    textAlignVertical:"top"
},
    c4:{
         minHeight:100,
        width:"95%",
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"space-evenly"
    },

    c4_1:{
        alignItems:"center",
        flexDirection:"row",
        marginBottom:15,
        justifyContent:"space-evenly"
    },

    
    btn1:{
    width: "80%", 
    height: 50, 
    backgroundColor: "rgb(0, 102, 255)",
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:"row"
    }
})
