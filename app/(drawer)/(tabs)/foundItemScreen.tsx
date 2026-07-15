import { uploadImage } from "@/app/firebase/cloudinary";
import { auth } from "@/app/firebase/config";
import { addpost, getUserDetail } from "@/app/firebase/firestore";
// import { uploadImage } from "@/app/firebase/storgae";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Label } from "@react-navigation/elements";
import * as ImagePicker from 'expo-image-picker';
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import ImageViewing from "react-native-image-viewing";
import { SafeAreaView } from "react-native-safe-area-context";

export  default function FoundItems() {
    const [cate,setcate]=useState(""); //item category
    const [image,setImage]=useState("");//item image
    const[visible,setvisible]=useState(false);    
    const [date, setDate] = useState(new Date());//item  found date
    const[time,setTime]=useState(new Date());//item found  time
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

//  user input states
    const[itm_name,setitm_name]=useState('');
    const[itm_loc,setitm_loc]=useState('');
    const[itm_des,setitm_des]=useState('');
    const[c_num,setc_num]=useState('');
// user details 
    const[name,setname]=useState('harshith');
    const[usn,setusn]=useState('1rr23cs047');
    const[email,setemail]=useState('harshithkc2027cserrce@gmail.com')
// loader
const [loading, setLoading] = useState(false);
const [item_status,setitem_status]=useState("available");


useEffect(() => {
    const loadUser = async () => {
        const user = await getUserDetail();

        if (user) {
            setname(user.name);
            setusn(user.usn);
            setemail(user.email);
            setc_num(user.num);
            console.log("user numvbber"+c_num);
        }
    };

    loadUser();
}, []);

 const handleinputs=async()=>{
    if(!itm_name || !cate || !itm_loc || !itm_des || !c_num){
        Alert.alert(
            "Error",
            "Fill all the necessary fileds"
        )
        return
    }

    else if(!image){
        Alert.alert(
            "Error",
            "upload the image of found item",
            
        )
    }
   else{
    try{
        setLoading(true);
          const imageURL = await uploadImage(image) ;
        await   addpost({
            user_id:auth.currentUser?.uid ?? "",
            name,
            email,
            usn,
            itemName:itm_name,
            cate,
            des:itm_des,
            loc:itm_loc,
            date:date.toLocaleDateString(),
            time:time.toLocaleTimeString(),
            number:c_num,
            imgURL:imageURL,
            
            status:item_status,
            lostorfound:"found"
        })
        Alert.alert(
            "Success",
            "found item uploaded successfully",
            [
                {
                
                    onPress:()=> router.navigate('/(drawer)/(tabs)')
                }
            ]
        )
         setTimeout(()=>{
             setLoading(false) ;
         },4000)
        setitm_name('');
        setitm_loc('');
        setcate('');
        setitm_des('');
        setc_num('');
        setImage('');

    }
    catch(error:any){
        Alert.alert(
            "error",
            error.message
        );
    }  
}
}

    

    //catgeory array of objects for dropdown
    const catogeries=[
        {label:'Mobile', value:'electronics'},
        {label:'Laptop', value:'electronics'},
        {label:'wallet or purse', value:'wallet'},
        {label:'keys', value:'keys'},
        {label:'ID card', value:'id_card'},
        {label:'clothing', value:'clothing'},
        {label:'books', value:'books'},
        {label:'earphones', value:'electronics'},
        {label:'Other', value:'other'}
    ];

    //image picker function

    const addImage=async()=>{
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes:["images"], 
          aspect:[9,16],
          quality:1,
          allowsEditing:true 
        });
        if(!result.canceled){
            setImage(result.assets[0].uri);
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


    return(
        
        <ImageBackground 
        source={require("../../../assets/images/found_lost_screen_bg.png")}
        style={{flex:1}}
        resizeMode="cover">
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={{flex:1}} nestedScrollEnabled={true} contentContainerStyle={{alignItems:'center', justifyContent:'center',padding:20,gap:30,paddingBottom:180}}>
            {/* b1 */}
            <View style={styles.b1}>
            <Text style={styles.h1}>Found an Item ?</Text>
            <Text style={styles.h3}>If you have found an item, please report it to us by filling out the form below.</Text>
            </View>
            {/* b2 */}

            <View style={styles.b2}>
             <TouchableOpacity  onPress={addImage} style={{width:130, height:100,padding:10, backgroundColor:'rgba(255,255,255,0.8)', borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                <MaterialIcons name="add-a-photo" size={30} color="rgb(0, 102, 255)"/>
                <Text style={{color:'rgb(0, 102, 255)', fontSize:16}}>Take Photo</Text>
             </TouchableOpacity>
            
             <View style={styles.image_holder}>
              {image ? 
              (<TouchableOpacity onPress={()=>{setvisible(true)}} style={{width:'100%',height:'100%'}}>
              <Image source={{uri:image}} 
              style={{width:"100%",height:"100%"}}
              />
              </TouchableOpacity>) 
              : (<Text style={styles.h2}>(Item image)</Text>) }
             </View>

            {image && (  
                <ImageViewing
                images={[{ uri: image }]}
                imageIndex={0}
                visible={visible}
                onRequestClose={() => setvisible(false)}/>
          )}
            
            </View>
            
            {/* b3 */}
            
            <View style={styles.b3}>
            
            <Text style={styles.h1}>Additional Information</Text>
            
            <Label style={styles.label}><MaterialIcons name="inbox" size={28}/>Item Name</Label>
            <TextInput placeholder="Enter the name of the item" style={styles.input} placeholderTextColor={"rgb(0, 102, 255)"} 
            value={itm_name}  onChangeText={setitm_name}/>
            
           
            <Label style={styles.label}><MaterialIcons name="location-on" size={28}/>Found Location</Label>
            <TextInput placeholder="Enter the location" style={styles.input} placeholderTextColor={"rgb(0, 102, 255)"} value={itm_loc}  onChangeText={setitm_loc} />
            
            <Label style={styles.label}><MaterialIcons name="category" size={28}/>Item Category</Label>
            
            <Dropdown
            style={styles.dropdown}
            data={catogeries}
            labelField="label"
            valueField="value"
            placeholder="Select Category"
            value={cate}
            onChange={(item) => {
            setcate(item.value);
            }}
            />

            <Label style={styles.label}><MaterialIcons name="description" size={28}/>Item description</Label>
            <TextInput
            placeholder="Enter Item Description"
            placeholderTextColor="rgb(0, 102, 255)"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={itm_des}
            onChangeText={setitm_des}
            style={[styles.input, styles.textArea]}/>

            <Label style={styles.label}><MaterialIcons name="date-range" size={28}/>Date Found</Label>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
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

            <Label style={styles.label}><MaterialIcons name="phone" size={28}/>Contact Information</Label>
            <TextInput  placeholder="Enter your contact information"  style={styles.input} placeholderTextColor={"rgb(0, 102, 255)"}   value={c_num} editable={false} />

            <Label style={styles.label}><MaterialIcons name="timer" size={28}/>Time Found (optional)</Label>
            <TouchableOpacity onPress={()=>setShowTimePicker(true)} style={styles.input}>
                <Text style={{color: time ? 'black' : 'rgb(0, 102, 255)', fontSize:16}}>{time ? time.toLocaleTimeString() : ('Select Time')}</Text>
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

            {/* b4 */}
            <View style={styles.b4}>
                <View style={styles.b4_1}>
                    <Text style={styles.h2}><MaterialIcons name="verified-user" size={40} color="green"/> Verified Student</Text>
                    <Text style={styles.h3}>Your Identity is verified  with your college email</Text>
                    <Text></Text>
                    <Text style={styles.h3}>posting as:</Text>
                    <Text style={[styles.h3,{fontWeight:'bold'}]}>{email}</Text>
                </View>
            </View>    

            {/* b5     */}
            <TouchableOpacity style={[styles.btn,{backgroundColor:'rgb(0, 102, 255)', marginRight:20}]} onPress={handleinputs} >
            { loading ? (<ActivityIndicator size="large" color="white" />) : (<Text style={{color:'white', fontSize:20, fontWeight:'bold'}}><Text><MaterialIcons name="post-add" size={25}/> Post Item</Text></Text>)   }
                
            </TouchableOpacity>

            {/* b6 */}
            <Text style={styles.h3}>By posting, you agree to our <Text style={{color:'rgb(0, 102, 255)', fontWeight:'bold'}}>Terms of Service</Text> and <Text style={{color:'rgb(0, 102, 255)', fontWeight:'bold'}}>Privacy Policy</Text>.</Text>

       
            </ScrollView> 
        </SafeAreaView>
        </ImageBackground>
    )
}

const styles=StyleSheet.create({
    b1:{
        minHeight:150,
        width:"100%",
        marginTop:"40%",
        borderRadius:20,
        padding:20,
        backgroundColor:'rgba(255,255,255,0.4)',
    },
    h1:{
        fontSize:30,
        fontWeight:'bold',
        color:"rgb(0, 102, 255)",
    },
    h2:{
        fontSize:20,
        fontWeight:'bold',
    },
    h3:{
        fontSize:16,
        textAlign:'center'
    },
    b2:{
        minHeight:200,
        backgroundColor:'rgba(39, 139, 221, 0.2)',
        width:"100%",
        borderRadius:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    b3:{
        minHeight:1300,
        backgroundColor:'rgba(39, 139, 221, 0.2)',
        width:"100%",
        alignItems:'center',
        justifyContent:'space-evenly',      
        borderRadius:20
    },
    input:{
        width: "85%", 
        height: 60,
        borderRadius:10,
        textAlign:'center',
        fontSize:16,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "rgba(255,255,255,0.8)",
    },
    label:{
    fontSize:19,
    textTransform:'capitalize',
    marginBottom:10,
    },
     
    textArea: {
    minHeight: 150,
    textAlignVertical: "top", // Important for Android
  },
  b4:{
    minHeight:100,
    width:"100%",
    backgroundColor:'rgba(39, 139, 221, 0.2)',
    borderRadius:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  b4_1:{
    marginLeft:20,
    width:"80%",
    alignItems:'center',
    padding:10,
    justifyContent:'center',
  },
  btn:{
    width: "80%", 
    height: 60, 
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "rgb(0, 102, 255)",
    borderRadius:10
  },
  dropdown:{
  width:"85%",
  height:60,
  textAlign:'center',
  borderRadius:10,
  paddingHorizontal:15,
  backgroundColor:"rgba(255,255,255,0.8)",
},
image_holder:{
    width:"50%",
    height:150,
    backgroundColor:'rgba(255,255,255,0.8)',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    borderStyle:'dashed'
}

})
  