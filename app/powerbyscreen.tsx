import {  Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingScreen(){
  return(
    <SafeAreaView style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <View>
        <Text>this is an setting screen</Text>
      </View>
    </SafeAreaView>

  )
}
