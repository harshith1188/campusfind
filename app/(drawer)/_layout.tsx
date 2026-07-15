import { Drawer } from "expo-router/drawer";
export  default function Drawernavigate(){
    return(
        <Drawer screenOptions={{headerShown:false}}>
            <Drawer.Screen name="(tabs)" options={{headerShown:true ,title:'home'}}/> 
            <Drawer.Screen name="profileScreen" options={{headerShown:true,headerTitleStyle:{color:"white",fontSize:20,fontWeight:"bold" },
            headerTitle: 'Edit Profile', headerStyle:{backgroundColor:"rgb(0, 102, 255)"} }}/>
            <Drawer.Screen name="settingsScreen" options={{headerShown:true}}/>
         </Drawer>   
    )
}

