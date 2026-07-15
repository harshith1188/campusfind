import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FAQScreen() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is CampusFind?",
      answer:
        "CampusFind is a platform that helps students report and recover lost and found items within the college campus.",
    },
    {
      question: "Who can use CampusFind?",
      answer:
        "Only verified students with a valid college email can access and use CampusFind.",
    },
    {
      question: "How do I report a lost item?",
      answer:
        "Go to the Lost Item screen, fill in the details, add a photo if available, and submit the report.",
    },
    {
      question: "How do I report a found item?",
      answer:
        "Open the Found Item screen, upload a photo, enter the item details and location, then post it.",
    },
    {
      question: "How do I contact the owner of an item?",
      answer:
        "If a matching item is found, you can use the contact information provided in the post.",
    },
    {
      question: "Is my information safe on CampusFind?",
      answer:
        "Yes. Only verified users can access the platform, and your information is securely stored.",
    },
    {
      question: "What should I do if I can't find my item?",
      answer:
        "Keep checking the feed regularly and create a detailed lost item report to increase visibility.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ImageBackground
      source={require("../assets/images/found_lost_screen_bg.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            padding: 20,
            alignItems: "center",
            paddingBottom: 50,
          }}
        >
          {/* Header */}
          <View style={styles.header}>
            <MaterialIcons
              name="question-answer"
              size={70}
              color="rgb(0,102,255)"
            />

            <Text style={styles.title}>General FAQs</Text>

            <Text style={styles.subtitle}>
              Find answers to the most common questions.
            </Text>
          </View>

          {/* FAQ Cards */}
          {faqs.map((item, index) => (
            <View key={index} style={styles.card}>
              <TouchableOpacity
                style={styles.questionRow}
                onPress={() => toggleFAQ(index)}
              >
                <View style={styles.iconBox}>
                  <MaterialIcons
                    name="help-outline"
                    size={28}
                    color="rgb(0,102,255)"
                  />
                </View>

                <Text style={styles.question}>
                  {item.question}
                </Text>

                <MaterialIcons
                  name={
                    activeIndex === index
                      ? "keyboard-arrow-up"
                      : "keyboard-arrow-down"
                  }
                  size={30}
                  color="rgb(0,102,255)"
                />
              </TouchableOpacity>

              <Collapsible collapsed={activeIndex !== index}>
                <Text style={styles.answer}>
                  {item.answer}
                </Text>
              </Collapsible>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#001B5E",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginTop: 5,
  },

  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 20,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 2,
  },

  questionRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "rgba(0,102,255,0.12)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  question: {
    flex: 1,
    fontSize: 17,
    fontWeight: "600",
    color: "#001B5E",
  },

  answer: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 5,
  },
});