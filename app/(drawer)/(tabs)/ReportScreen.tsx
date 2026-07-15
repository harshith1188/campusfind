import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReportScreen(){
    return(
          <ImageBackground source={require("../../../assets/images/backimg.png")}
                style={{flex:1}}
                resizeMode="cover">
          <SafeAreaView style={{flex:1}}>
             <TouchableOpacity style={styles.btn1}>
          <MaterialIcons
          name="arrow-back-ios-new"
          size={24}
          color="blue"/>
          </TouchableOpacity>
                  <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:"center",justifyContent:"space-evenly",padding:10,gap:15}}>        
                    <View style={styles.c1}>
                        <View style={styles.c1_1}>
                            <View style={styles.c1_2}>
                           <MaterialIcons
                            name="backpack"
                            size={40}
                            color="#2563EB"/>
                            </View>
                        
                        <Text style={styles.h1}>Reporting a Found Item</Text>
                        </View>
                        <View style={styles.c1_3}/>
                        <View style={styles.c1_4}>
                        <View style={styles.c1_5}>
                        <Text style={styles.h3}>1. Open the Found Item screen.</Text>
                        <Text style={styles.h3}>2. Take a clear photo of the item.</Text>
                        <Text style={styles.h3}>3. Enter the item name.</Text>
                        <Text style={styles.h3}>4. Select the correct category.</Text>
                        <Text style={styles.h3}>5. Enter the location.</Text>
                        <Text style={styles.h3}>6. Add a description.</Text>
                        <Text style={styles.h3}>7. Enter your contact number.</Text>
                        <Text style={styles.h3}>8. Tap Post Item.</Text>
                        </View>
                        <Image source={require("../../../assets/images/bagimg.png")}
                        style={{width:110,height:110,marginLeft:10,resizeMode:"contain"}}/>
                    </View>
                    </View>

                     <View style={styles.c2}>
                        <View style={styles.c2_1}>
                            <View style={styles.c2_2}>
                           <MaterialIcons
                            name="search"
                            size={40}
                            color= "#EF4444"/>
                            </View>
                        
                        <Text style={styles.h1_1}>Reporting a Lost Item</Text>
                        </View>
                        <View style={styles.c2_3}/>
                        <View style={styles.c2_4}>
                        <View style={styles.c2_5}>
                        <Text style={styles.h4}>1. Open the Lost Item screen.</Text>
                        <Text style={styles.h4}>2. Enter the item name.</Text>
                        <Text style={styles.h4}>3. Select the item category.</Text>
                        <Text style={styles.h4}>4. Specify the last known location.</Text>
                        <Text style={styles.h4}>5. Add a detailed description.</Text>
                        <Text style={styles.h4}>6. Mention the date the item was lost.</Text>
                        <Text style={styles.h4}>7. Enter your contact number.</Text>
                        <Text style={styles.h4}>8. Tap Post Item.</Text>
                        </View>
                        <Image source={require("../../../assets/images/lostimg.png")}
                        style={{width:110,height:110,marginLeft:10,resizeMode:"contain"}}/>
                    </View>
                    </View>
                     
                    <View style={styles.c3}>
                        <View style={styles.c3_1}>
                            <View style={styles.c3_2}>
                           <MaterialIcons
                            name="lightbulb-outline"
                            size={40}
                            color= "#22C55E"/>
                            </View>
                        
                        <Text style={styles.h1_2}>Tips for Better Reports</Text>
                        </View>
                        <View style={styles.c3_3}/>
                        <View style={styles.c3_4}>
                            <View style={styles.c3_4_1}>
                                <MaterialIcons
                                name="image"
                                size={28}
                                color="#22C55E"/>

                                <Text style={styles.h2}> Upload a clear image whenever possible.</Text>
                            </View>

                            <View style={styles.c3_4_1}>
                                <MaterialIcons
                                name="location-on"
                                size={28}
                                color="#22C55E"/>

                                <Text style={styles.h2}> Provide accurate location details.</Text>
                            </View>
                            
                            <View style={styles.c3_4_1}>
                                <MaterialIcons
                                name="label"
                                size={28}
                                color="#22C55E"/>

                                <Text style={styles.h2}>Mention identifying marks, colors, stickers or covers.</Text>
                            </View>

                            <View style={styles.c3_4_1}>
                                <MaterialIcons
                                name="phone"
                                size={28}
                                color="#22C55E"/>

                                <Text style={styles.h2}>Use a valid contact number.</Text>
                            </View>
                        </View>
                    </View>
                    
                    

                    <View style={styles.c4}>
                        <View style={styles.c4_1}>
                            <View style={styles.c4_2}>
                           <MaterialIcons
                            name="security"
                            size={40}
                            color= "#F59E0B"/>
                            </View>
                        
                        <Text style={styles.h1_3}>Important Note</Text>
                        </View>
                        <View style={styles.c4_3}/>
                        <View style={styles.c4_4}>
                           <Text style={styles.h3}>
                                 CampusFind helps students connect regarding
                                lost and found items. Always verify ownership
                                before handing over an item. If the item is
                                valuable, report it to the college
                                administration or security office as well.
                            </Text>
                            <Image source={require("../../../assets/images/securityimg.png")}
                            style={{width:70,height:70,right:40,resizeMode:"contain"}}/>
                            </View>
                            </View>

                         <View style={styles.c5}>
                        <View style={styles.c5_1}>
                            <View style={styles.c5_2}>
                           <MaterialIcons
                            name="support-agent"
                            size={40}
                            color= "#2563EB"/>
                            </View>
                        
                        <Text style={styles.h1_4}>Need More Help?</Text>
                        </View>
                        <View style={styles.c5_3}/>
                        <View style={styles.c5_4}>
                            <View style={{flex:1}}>
                                <View style={styles.c5_4_1}>
                                    <MaterialIcons
                                    name="email"
                                    size={22}
                                    color="#64748B"/>

                                    <Text style={styles.h2_1}>support@campusfind.com</Text>
                                </View>
                                <View style={styles.c5_4_1}>
                                    <MaterialIcons
                                    name="schedule"
                                    size={22}
                                    color="#64748B"
                                    />

                                    <Text style={styles.h2_1}>Monday - Friday, 9:00 AM - 6:00 PM</Text>
                                </View>
                            </View>
                            <Image source={require("../../../assets/images/helpimg.png")}
                            style={{width:100,height:100,marginLeft:10,resizeMode:"contain"}}/>
                            </View>
                        </View>
                          
                </ScrollView>
                </SafeAreaView>
                </ImageBackground>
                
    )
}

const styles=StyleSheet.create({
     btn1:{
        height:45,
        width:45,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"space-evenly",
        borderRadius:25,
        left:10
    },
    c1:{
        minHeight:80,
        width:"100%",
        backgroundColor:"white",
        padding:15,
        marginTop:20,
        borderRadius:10
    },
    c1_1:{
        flexDirection:"row",
        alignItems:"center"
    },
    c1_2:{
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:"#EEF5FF",
        alignItems:'center',
        justifyContent:"space-evenly"
    },
    h1:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:15,
        color:"#2563EB"
    },
    c1_3:{
        height:1,
        backgroundColor:"#D6E4FF",
        marginVertical:10,
        marginLeft:25
        
    },
    c1_4:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    c1_5:{
        flex:1
    },
    h3:{
        fontSize:14,
        marginBottom:8
    },
    c2:{
        minHeight:80,
        width:"100%",
        backgroundColor:"white",
        padding:15,
        marginTop:20,
        borderRadius:10
    },
    c2_1:{
       flexDirection:"row",
        alignItems:"center" 
    },
    c2_2:{
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:"#FFECEC",
        alignItems:'center',
        justifyContent:"space-evenly"
    },
    h1_1:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:15,
        color:"#EF4444"
    },
    c2_3:{
        height:1,
        backgroundColor:"#FFD6D6",
        marginVertical:10,
        marginLeft:25
        
    },
    c2_4:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    c2_5:{
        flex:1
    },
    h4:{
        fontSize:14,
        marginBottom:8
    },
    c3:{
        minHeight:80,
        width:"100%",
        backgroundColor:"white",
        padding:15,
        marginTop:20,
        borderRadius:10  
    },
    c3_1:{
        flexDirection:"row",
        alignItems:"center" 
    },
    c3_2:{
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:"#ECFDF5",
        alignItems:'center',
        justifyContent:"space-evenly"
    },
    h1_2:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:15,
        color:"#22C55E",
    },
    c3_3:{
        height:1,
        backgroundColor:"#BBF7D0",
        marginVertical:10,
        marginLeft:25
        
    },
    c3_4:{
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap"
    },
    c3_4_1:{
        width:"48%",
        borderRadius:12,
        backgroundColor:"#F8FAFC",
        padding:12,
        alignItems:"center",
        marginBottom:10
    },
    h2:{
        fontSize:13,
        textAlign:"center",
        marginTop:8
    },
    c4:{
        minHeight:80,
        width:"100%",
        backgroundColor:"white",
        padding:15,
        marginTop:20,
        borderRadius:10
    },
    c4_1:{
        flexDirection:"row",
        alignItems:"center"
    },
    c4_2:{
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:"#FFF7ED",
        alignItems:'center',
        justifyContent:"space-evenly"
    },
    h1_3:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:15,
        color:"#F59E0B"
    },
    c4_3:{
        height:1,
        backgroundColor:"#FDE68A",
        marginVertical:10,
        marginLeft:25
    },
    c4_4:{
         flexDirection:'row',
        justifyContent:'space-between'
    },
    c5:{
        minHeight:80,
        width:"100%",
        backgroundColor:"white",
        padding:15,
        marginTop:20,
        borderRadius:10
    },
    c5_1:{
        flexDirection:"row",
        alignItems:"center"
    },
    c5_2:{
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:"#EEF5FF",
        alignItems:'center',
        justifyContent:"space-evenly"
    },
    h1_4:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:15,
        color:"#2563EB",
    },
    c5_3:{
        height:1,
        backgroundColor:"#BFDBFE",
        marginVertical:10,
        marginLeft:25
    },
    c5_4:{
      flexDirection:'row',
        justifyContent:'space-between'  
    },
    c5_4_1:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:12,
    },
    h2_1:{
    marginLeft:10,
    fontSize:15
   }
    
})