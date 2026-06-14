import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) =><MaterialIcons name="home-filled" color={color} size={28}/>,
        }}
      />
      <Tabs.Screen
        name="lostItemScreen"
        options={{
          title: 'Lost Items',
          tabBarIcon: ({ color }) =><MaterialIcons name="help-outline" color={color} size={28}/>,
        }}
      />
    <Tabs.Screen
        name="foundItemScreen"
        options={{
          title: 'Found Items',
          tabBarIcon: ({ color }) =><MaterialIcons name="inventory" color={color} size={28}/>,
        }}
      />


    </Tabs>
  );
}
