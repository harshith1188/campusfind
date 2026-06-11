import {  Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index(){
  return(
    <SafeAreaView style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <View>
        <Text>this is an index screen</Text>
      </View>
    </SafeAreaView>

  )
}