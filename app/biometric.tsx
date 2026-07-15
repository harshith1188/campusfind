import { MaterialIcons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import { router } from "expo-router";
import { useEffect } from "react";
import {
    Alert,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BiometricAuth() {

  const authenticate = async () => {

    const hasHardware =
      await LocalAuthentication.hasHardwareAsync();

    if (!hasHardware) {
      Alert.alert(
        "Not Supported",
        "This device does not support biometric authentication."
      );
      return;
    }

    const enrolled =
      await LocalAuthentication.isEnrolledAsync();

    if (!enrolled) {
      Alert.alert(
        "No Biometrics",
        "Please add a fingerprint or Face ID in your phone settings."
      );
      return;
    }

    const result =
      await LocalAuthentication.authenticateAsync({
        promptMessage: "Unlock CampusFind",
        cancelLabel: "Cancel",
        fallbackLabel: "Use Device PIN",
        disableDeviceFallback: false,
      });

    if (result.success) {
      router.replace("/(drawer)/(tabs)");
    } else {
      Alert.alert(
        "Authentication Failed",
        "Fingerprint not recognized."
      );
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/images/biometric.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>

        <View style={styles.container}>

          <View style={styles.iconContainer}>
            <MaterialIcons
              name="fingerprint"
              size={110}
              color="rgb(0,102,255)"
            />
          </View>

          <Text style={styles.title}>
            Biometric Authentication
          </Text>

          <Text style={styles.subtitle}>
            Verify your fingerprint to continue to CampusFind.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={authenticate}
          >
            <MaterialIcons
              name="fingerprint"
              size={24}
              color="white"
            />

            <Text style={styles.buttonText}>
              Try Again
            </Text>

          </TouchableOpacity>

        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  iconContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,102,255,0.12)",
    borderWidth: 2,
    borderColor: "rgb(0,102,255)",
  },

  title: {
    marginTop: 40,
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },

  subtitle: {
    marginTop: 15,
    fontSize: 18,
    textAlign: "center",
    color: "gray",
    paddingHorizontal: 20,
  },

  button: {
    marginTop: 60,
    width: "70%",
    height: 60,
    backgroundColor: "rgb(0,102,255)",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },

});