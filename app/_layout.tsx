import { Stack } from 'expo-router';

export default function Layout() {
  return (
        
      <Stack initialRouteName="splashscreen">
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="splashscreen" options={{ headerShown: false }}/>
        <Stack.Screen name="powerbyscreen" options={{ headerShown: false }}/>
        <Stack.Screen name="registerScreen" options={{ headerShown: false }}/>
        <Stack.Screen name="loginScreen"  options={{ headerShown: false }} />
        <Stack.Screen name="about"  options={{ headerShown: false }} />
        <Stack.Screen name="help_support"  options={{ headerShown: false }} />
        <Stack.Screen name="faqsScreen"  options={{ headerShown: false }} />
      <Stack.Screen name="contactScreen"  options={{ headerShown: false }} />
      <Stack.Screen name="codeConfirm"  options={{ headerShown: false }} />
      <Stack.Screen name="biometricSetScreen"  options={{ headerShown: false }} />
      <Stack.Screen name="biometric"  options={{ headerShown: false }} />
      <Stack.Screen name="report"  options={{ headerShown: false }} />
      <Stack.Screen name="passwordResetScreen" options={{ headerShown: false }}/> 
      </Stack>
    
  );
}
