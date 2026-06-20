import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Testing(){
  const[collapse,setCollapse]=useState(true);
    return(
        <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>{setCollapse(!collapse)}} style={{minHeight:60,borderRadius:10,  width:'90%',alignItems:'center',justifyContent:'center',backgroundColor:'yellow'}}>
                <Text style={{fontSize:22}}>what is react native ?</Text>
            </TouchableOpacity>
            <Collapsible collapsed={collapse} style={{minHeight:100,width:'90%',backgroundColor:'red',alignItems:'center',justifyContent:'space-evenly'}}>
                <Text style={{fontSize:18}}> React Native is a framework for building
          mobile applications using JavaScript.</Text>
            </Collapsible>
        </SafeAreaView>
    )
}