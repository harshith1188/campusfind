import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export  default function Contact(){
    return(
        <ImageBackground  style={{flex:1}} source={require('../assets/images/contactScreen.png')}>
            <SafeAreaView style={{flex:1}}>
                <ScrollView  style={{flex:1}} contentContainerStyle={{flex:1, justifyContent:'space-evenly',alignItems:'center',gap:10,padding:10}} >
                    {/* main  conatiner */}
                  <View style={styles.container}>  
                    {/* email  box */}
                    <View style={styles.b1}>
                        <View style={styles.b1_icon}>
                            <MaterialIcons  name="email"  size={28} color={"rgb(0, 102, 255)"}  />
                        </View>
                        <View style={styles.b1_text}>
                            <Text  style={styles.h2}>Email</Text>
                            <Text style={styles.h3}>campusfind_support@gmail.com</Text>
                        </View>
                    </View>

                      {/* phone  box */}
                    <View style={styles.b1}>
                        <View style={styles.b1_icon}>
                            <MaterialIcons  name="phone"  size={28} color={"rgb(0, 102, 255)"}  />
                        </View>
                        <View style={styles.b1_text}>
                            <Text  style={styles.h2}>Phone</Text>
                            <Text style={styles.h3}>+91 8792883855</Text>
                        </View>
                    </View>

                </View>
                {/* closing main container */}
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}


const styles=StyleSheet.create({
    container:{
        minHeight:300,
        width:'90%',
        marginTop:'30%',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    b1:{
        minHeight:100,
        width:'95%',
        gap:10,
        alignItems:'center',
        flexDirection:'row',
        borderRadius:10,
        backgroundColor:'rgba(102, 155, 235, 0.07)',
        borderWidth:0.1,
        padding:10,
    },
    h2:{
        fontSize:20,
        fontWeight:'bold'
    },
    b1_icon:{
        padding:10,
        borderRadius:10,
        backgroundColor:'rgba(102, 155, 235, 0.36)',
    },
    b1_text:{
        padding:10,
        gap:5,
        alignItems:'flex-start',
        justifyContent:'space-evenly',
    
    },
    h3:{
        fontSize:17
    }

})
