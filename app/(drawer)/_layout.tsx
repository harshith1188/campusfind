import { Drawer } from "expo-router/drawer";
export  default function Drawernavigate(){
    return(
        <Drawer>
            <Drawer.Screen name="(tabs)" options={{headerShown:true ,title:'Home'}}/> 
            <Drawer.Screen name="profileScreen" options={{headerShown:true,title:'Profile'}}/>
            <Drawer.Screen name="settingScreen" options={{headerShown:true,title:'Settings'}}/>
         </Drawer>   
    )
}

