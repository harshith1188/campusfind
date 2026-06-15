import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default  function About(){
    return(
        <ImageBackground source={require("../assets/images/found_lost_screen_bg.png")} style={{flex:1}}>
         <SafeAreaView style={{flex:1}}>
            <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center',justifyContent:'space-evenly', gap:30,padding:10,marginBottom:50,paddingBottom:50}}>
                {/* b1 */}
                <View style={styles.b1}>
                    <Text style={[styles.h3,{fontWeight:'bold'}]}>CampusFind is a college-exclusive Lost & Found  Platform designed to help students quickly reconnect with their misplaced things</Text>
                </View>
                {/* b2 */}
                <View style={styles.b2}>

                
                  <TouchableOpacity style={styles.b2_boxes}>  
                    <View style={styles.b2_icon}>
                        <MaterialIcons name="report" size={28} color={"black"}/>
                    </View>
                    <View style={styles.b2_texts}>
                        <Text style={styles.h2}>Report Lost Items</Text>
                        <Text style={styles.h3}>Create detailed posts about items you've lost, including descriptions, locations, dates, and images.</Text>
                    </View>
                 </TouchableOpacity>
                
                <TouchableOpacity style={styles.b2_boxes}>  
                    <View style={styles.b2_icon}>
                        <MaterialIcons name="badge" size={28} color={"black"}/>
                    </View>
                    <View style={styles.b2_texts}>
                        <Text style={styles.h2}>Report Found Items</Text>
                        <Text style={styles.h3}>Help fellow students by posting details of items you've found on campus.</Text>
                    </View>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.b2_boxes}>  
                    <View style={styles.b2_icon}>
                        <MaterialIcons name="verified" size={28} color={"black"}/>
                    </View>
                    <View style={styles.b2_texts}>
                        <Text style={styles.h2}>Verified Student Access</Text>
                        <Text style={styles.h3}>Only authenticated students using their college email accounts can access and post on CampusFind.</Text>
                    </View>
                 </TouchableOpacity>
               

                   <TouchableOpacity style={styles.b2_boxes}>  
                    <View style={styles.b2_icon}>
                        <MaterialIcons name="security" size={28} color={"black"}/>
                    </View>
                    <View style={styles.b2_texts}>
                        <Text style={styles.h2}>Secure Communication</Text>
                        <Text style={styles.h3}>Connect with the rightful owner or finder through the contact details provided in posts.</Text>
                    </View>
                 </TouchableOpacity>
               
                     <TouchableOpacity style={styles.b2_boxes}>  
                    <View style={styles.b2_icon}>
                        <MaterialIcons name="emoji-nature" size={28} color={"black"}/>
                    </View>
                    <View style={styles.b2_texts}>
                        <Text style={styles.h2}>Campus-wide Visibility</Text>
                        <Text style={styles.h3}>All reported items are visible to the college community, increasing the chances of successful recovery.</Text>
                    </View>
                 </TouchableOpacity>

                </View>


                {/* b3 */}
                
                    <TouchableOpacity style={styles.b3_1}>
                    <View style={styles.b3_icon}>
                        <MaterialIcons name="code" size={28} color={"black"}/>
                    </View>
                    <View style={styles.b3_texts}>
                        <Text style={styles.h2}>Developed By</Text>
                        <Image source={require("../assets/images/our_logo.png")} style={{width:60,height:60,borderRadius:20,borderColor:'rgb(0, 102, 255)',borderWidth:1}}/>
                    </View>

                    </TouchableOpacity>
                {/* b4 */}

                    <TouchableOpacity style={styles.b4_1}>

                    <View style={styles.b4_icon}>
                        <MaterialIcons name="vaccines" size={28} color={"black"}/>
                    </View>
                    <View style={styles.b4_texts}>
                        <Text style={styles.h2}>Version: 1.0.0</Text>
                        <Text style={styles.h3}>Release Year: 2026</Text>
                    </View>

                    </TouchableOpacity>

                {/* b5 */}
                
                    <TouchableOpacity style={styles.b3_1}>
                    <View style={styles.b3_icon}>
                        <MaterialIcons name="note" size={28} color={"black"}/>
                    </View>
                    <View style={styles.b3_texts}>
                        <Text style={styles.h2}>Disclaimer</Text>
                        <Text style={styles.h3}>CampusFind acts as a platform to connect students who have lost or found items. Users are responsible for providing accurate information while posting and claiming items. The platform does not guarantee the recovery of lost belongings.</Text>

                    </View>

                    </TouchableOpacity>
                        

            </ScrollView>
         </SafeAreaView>
        </ImageBackground>
    )
}

const styles=StyleSheet.create({
    b1:{
        minHeight:100,
        width:"90%",
        alignItems:'center',
        justifyContent:'space-evenly',
        padding:10,
        borderWidth:0.05,
        backgroundColor:'white',
        borderRadius:10,
        marginTop:'45%'
    },
    h2:{
        fontSize:20,
        fontWeight:'bold'
    },
    h3:{
        fontSize:16,
        color:"gray",
        textTransform:'capitalize'
    },
    b2:{
        minHeight:550,
        width:"100%",
        padding:10,
        gap:20,
    },
    b2_boxes:{
        minHeight:150,
        width:'100%',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
        borderWidth:0.06,
        backgroundColor:'white'
    },
    b2_icon:{
        padding:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(102, 155, 235, 0.36)'
    },
    b2_texts:{
        padding:10,
        minHeight:100,
        width:'80%',
        justifyContent:'space-evenly'
    },

    b3_1:{
        padding:10,
        width:'90%',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:0.5,
        borderColor:'rgb(0, 102, 255)',
        justifyContent:'space-evenly',
        backgroundColor:'white'
    },
    b3_icon:{
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(102, 155, 235, 0.36)',
        borderRadius:10,    
    },


    b3_texts:{
        padding:10,
        width:'80%',
        gap:10,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    
    b4_1:{
        padding:10,
        width:'90%',
        minHeight:150,
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'rgb(0, 102, 255)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:'white'
    },
    b4_icon:{
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(102, 155, 235, 0.36)',
        borderRadius:10,    
    },

    b4_texts:{
        padding:10,
        width:'80%',
        gap:10,
        justifyContent:'space-evenly',
        alignItems:'center',
    }
})