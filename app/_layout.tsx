import { Stack } from 'expo-router';

export default function Layout() {
  return (
      <Stack initialRouteName='editScreen'>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="loginScreen"  options={{ headerShown: false }} />
        <Stack.Screen name="editScreen"  options={{ headerShown: false }} />
      </Stack>
  );
}
