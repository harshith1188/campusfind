<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
=======
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
export default function TabLayout() {
>>>>>>> auth-firebase

  return (
    <Tabs
      screenOptions={{
<<<<<<< HEAD
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
=======
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
>>>>>>> auth-firebase
      }}>
      <Tabs.Screen
        name="index"
        options={{
<<<<<<< HEAD
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />

       <Tabs.Screen
        name="lost"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />

      
      
    </Tabs>
  );
}
>>>>>>> b3ad952d5b82e6aeaaf0266a5caca3e59b208757
=======
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
>>>>>>> auth-firebase
