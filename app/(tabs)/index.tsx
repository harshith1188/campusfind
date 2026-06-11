import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default  function HomeScreen(){
  return(
    <SafeAreaView style={{ flex: 1, backgroundColor:'red' }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text>this is home screen</Text>
      </ScrollView>
    </SafeAreaView>
  )
}