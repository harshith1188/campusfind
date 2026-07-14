import { auth } from "@/app/firebase/config";
import { addpost, getUserDetail } from "@/app/firebase/firestore";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import ImageViewing from "react-native-image-viewing";
import { SafeAreaView } from "react-native-safe-area-context";
export default function LostScreen(){
 
    const[i_name,seti_name]=useState('');//item name
    const[visible,setvisible]=useState(false);       
    const[cate,setcate]=useState('');//item category
    const[loc,setloc]=useState('');//item loaction
    const[des,setdes]=useState('');//item  description
    const[img,setimg]=useState('');//item image
    const[date, setDate] = useState(new Date());//item  found date
    const[time,setTime]=useState(new Date());//item found  time
    const[item_status,setitem_status]=useState("available");//item status available or claimed 
    const[name,setname]=useState('')//user name 
    const[email,setemail]=useState('')//user email
    const[usn,setusn]=useState('');//user usn
    const[c_num,setc_num]=useState('')//stored contact number
  
    const[showDatePicker, setShowDatePicker] = useState(false);
    const[showTimePicker, setShowTimePicker] = useState(false);

    const mobileRegex = /^[6-9]\d{9}$/

    const  catogeries=[
        {label:'mobile',value:'mobile'},
        {label:'Laptop', value:'electronics'},
        {label:'wallet or purse', value:'wallet'},
        {label:'keys', value:'keys'},
        {label:'ID card', value:'id_card'},
        {label:'clothing', value:'clothing'},
        {label:'books', value:'books'},
        {label:'earphones', value:'electronics'},
        {label:'Other', value:'other'}
    ]

    const pickimage =async()=>{
         let  result=await ImagePicker.launchCameraAsync({
            mediaTypes:['images'],
            aspect:[9,16],
            allowsEditing:true,
            quality:1
         })
         if(!result.canceled){
            setimg(result.assets[0].uri);
         }
    }

        //date picker function
    const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
    setDate(selectedDate);
      }
    };

    //time picker function
    const onChangeTime=(event,selectedTime)=>{
        setShowTimePicker(false);
        if(selectedTime){
            setTime(selectedTime);
        }
    };


    //load user data
    useEffect(()=>{
        const load=async()=>{
        const user=await getUserDetail();
        if(user){
            setname(user.name);
            setemail(user.email);
            setusn(user.usn);
            setc_num(user.num);
        }
        }
    load() 
    },[]);


    //submit button function 
    const handlebutton =async()=>{
        if(!i_name || !cate || !loc || !des  || !c_num || !date ){
            Alert.alert(
                'Error',
            "Enter all the fields")
        }
       else if(!mobileRegex.test(c_num)){
        Alert.alert(
            "Error",
            "Enter a valid 10-digit Indian number"
        )
       }
       else{
        try{
            await  addpost({
                user_id:auth.currentUser?.uid ?? "",
                name,
                email,
                usn,
                itemName:i_name,
                cate,
                des,
                loc,
                date:date.toLocaleDateString(),
                time:time.toLocaleTimeString(),
                number:c_num,
                imgURL:img || '',
                status:item_status,
                lostorfound:"lost"
            })
            Alert.alert(
                "Success",
                "lost item  posted successfully",
                [
                    {
                       onPress:()=>router.navigate('/(drawer)/(tabs)')
                    }
                ]
            )
            seti_name('');
            setimg('');
            setloc('');
            setcate('');
            setdes('');

        }
        catch(error:any){
            Alert.alert(
                "Error",
                error.message
            )
        }
       }
    }


    return(
        <ImageBackground source={require("../../../assets/images/found_lost_screen_bg.png")}
        style={{flex:1}}
        resizeMode="cover">
        
        <SafeAreaView style={{flex:1}}>
        <ScrollView style={{flex:1}} contentContainerStyle={{marginTop:20,alignItems:"center",justifyContent:"space-evenly",padding:10,gap:30,paddingBottom:150}}>
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
                    <Image source={require("../../../assets/images/lostitem.png")}
                    style={{width:80, height:80,borderRadius:10,borderWidth:0.3}}/>
                </View>
                </View>
            {/* container 2 */}
            <View style={styles.c2}> 
                <Text style={styles.h2}>Item Photo(optional)</Text>
                <View style={styles.c2_1}>
                    <TouchableOpacity style={styles.c2_1_1}  onPress={pickimage}>
                        <MaterialIcons
                        name="camera"
                        size={35}
                        color="blue"/>
                        <Text style={styles.h4}>Take Photo</Text>
                    </TouchableOpacity>
                    <View style={styles.c2_1_2}>
                        { img ? (<TouchableOpacity style={{height:80,width:80,alignItems:"center",justifyContent:"center"}} onPress={()=>{setvisible(true)} }><Image  source={{uri:img}} style={{width:80,height:80}}/></TouchableOpacity>)  : ( <MaterialIcons
                        name="image"
                        size={35}
                        color="blue"/>
                 )}
                  {img && (  
                                 <ImageViewing
                                 images={[{ uri:img }]}
                                 imageIndex={0}
                                 visible={visible}
                                 onRequestClose={() => setvisible(false)}/>
                           )}
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

                        <TextInput style={styles.input1} placeholder="Enter the name of the item" value={i_name} onChangeText={seti_name}/>
                    </View>

                    <View style={styles.c3_1}>
                        <MaterialIcons
                        name="category"
                        size={24}
                        color="blue"/>
                       <Dropdown
                         valueField="value"
                         data={catogeries}
                         labelField="label"
                         style={styles.dropdown}
                         value={cate}
                         placeholder="select item  cateogry"
                         onChange={(item)=>{
                            setcate(item.value)
                         }}/>
                    </View>

                    <View style={styles.c3_1}>
                        <MaterialIcons
                        name="location-on"
                        size={24}
                        color="blue"/>
                        <TextInput style={styles.input1} placeholder="Enter the location where you lost it" value={loc} onChangeText={setloc}/>
                    </View>

                         {/* date picker filed */}
                    <View style={styles.c3_1}>
                         <MaterialIcons  name="date-range"  size={28} color="blue" />
                         <TouchableOpacity  style={styles.datefiled} onPress={()=>setShowDatePicker(true)}>
                          <Text  style={{color: date ? 'black' : 'rgb(0, 102, 255)', fontSize:16}}>{date ? date.toLocaleDateString() : ('Select Date')}</Text>
                         </TouchableOpacity>
                             {showDatePicker && (
                        <DateTimePicker
                          value={date}
                          mode="date"
                          display="default"
                          onChange={onChangeDate}
                          maximumDate={new Date()}/>
                            )}

                    </View>
                    {/* time  picker  field */}
                          <View style={styles.c3_1}>
                         <MaterialIcons  name="timeline"  size={28} color="blue" />
                         <TouchableOpacity  style={styles.datefiled} onPress={()=>setShowTimePicker(true)}>
                          <Text  style={{color: date ? 'black' : 'rgb(0, 102, 255)', fontSize:16}}>{time ? time.toLocaleTimeString() : ('Select Time')}</Text>
                         </TouchableOpacity>
                             {showTimePicker && (
                        <DateTimePicker
                          value={time}
                          mode="time"
                          display="clock"
                          onChange={onChangeTime}
                        />
                            )}

                    </View>
                  

                            {/* description filed */}
                    <View style={styles.c3_1}>
                        <MaterialIcons
                        name="description"
                        size={24}
                        color="blue"/>
                        <TextInput style={styles.desinput} 
                        placeholder="Describe your lost item(color,brand ,any unique features,etc)"
                        multiline
                        value={des}
                        onChangeText={setdes}
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
                    <TextInput style={styles.input1} placeholder="Enter your contact number" keyboardType="number-pad"  maxLength={10} value={c_num}  onChangeText={setc_num}/>
                        </View>
                </View>

                
                <TouchableOpacity  style={styles.btn1}  onPress={handlebutton}>
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
        backgroundColor:"rgba(255,255,255,0.9)",
        alignItems:"center",
        justifyContent:"space-evenly",
        borderRadius:10,
        flexDirection:"row",
        marginTop:"20%"
    },
    c1_1:{
        padding:10,
          backgroundColor:'rgba(255,255,255,0.8)',
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
        backgroundColor:"rgba(255,255,255,0.6)",
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
        flexDirection:"column",
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
        minHeight:500,
        width:"95%",
        backgroundColor:"rgba(255,255,255,0.6)",
        padding:10,
        borderWidth:0.1,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"space-evenly"
    },

    c3_1:{
        alignItems:"center",
        flexDirection:"row",
        padding:10,
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
     fontSize:14,
     height:50,
     backgroundColor:"white",
    },

    c3_2:{
        padding:10,
        width:"100%",
        alignItems:"center",
        justifyContent:'space-evenly',
        flexDirection:"row",
        minHeight:80,
        backgroundColor:'yellow'
       
    },

    c3_2_1:{
        alignItems:"center",
        flexDirection:"row",
        marginBottom:15,
        minHeight:80,
        padding:5,
        backgroundColor:'green',
        width:"50%",
        justifyContent:"space-evenly"
    },

    c3_2_2:{
        alignItems:"center",
        flexDirection:"column",
        marginBottom:15,
        width:'50%',
        justifyContent:"space-evenly",
        backgroundColor:'pink'
    }
    ,
    input2:{
     marginLeft:10,
     borderWidth:1,
     borderColor:"grey",
     borderRadius:10,
     padding:15,
     fontSize:14,
     height:70,
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
         minHeight:150,
        width:"95%",
        backgroundColor:"rgba(255,255,255,0.6)",
        borderWidth:0.1,
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
    },
    dropdown:{
        minHeight:60,
        borderRadius:10,
        marginLeft:10,
        width:'90%',
        borderWidth:0.5,
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:10,
    },
    datefiled:{
        width:'90%',
        padding:10,
        minHeight:60,
        borderWidth:1,
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    }
})
