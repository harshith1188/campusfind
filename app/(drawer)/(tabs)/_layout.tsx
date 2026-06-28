import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarLabelStyle:{fontSize:16,color:'white'},
        
        tabBarShowLabel:true,
         tabBarActiveTintColor: "#ffffff",
         tabBarInactiveTintColor: "#b7c7ff",
        
        tabBarIcon:()=>null,
         tabBarStyle:{
          minHeight:80,
          width:'90%',
          position:"absolute",
          backgroundColor:"rgba(0, 102, 255, 0.9)",
          borderRadius:15,
          marginRight:"5%",
          marginLeft:"5%",
          padding:10,
          alignItems:"center",
          justifyContent:'space-evenly',
          marginBottom:"5%",
           }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
           tabBarIcon: ({ color, size }) => (
           <Ionicons name="home" size={size} color={color} />
         ),
       }}
      />

      <Tabs.Screen
        name="lostItemScreen"
        options={{
          title: 'Lost Items',
          tabBarIcon:({color,size})=>(
            <Ionicons name="search" size={size} color={color}/>
          )
        }}
      />
    <Tabs.Screen
        name="foundItemScreen"
        options={{
          title: 'Found Items',
          tabBarIcon:({color,size})=>(<Ionicons name="checkmark-circle" size={size}  color={color} />
          )
          }}
      />


    </Tabs>
  );
}
