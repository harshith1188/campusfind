import PostCard from "../../../components/postcard";
import { getPosts } from "../../firebase/firestore";

import { useEffect, useState } from "react";

import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadPosts = async () => {
    try {
      const data = await getPosts();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadPosts();
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color="#0D6EFD" />
        <Text>Loading Posts...</Text>
      </SafeAreaView>
    );
  }

  return (
    <ImageBackground style={{flex:1}} source={require('../../../assets/images/found_lost_screen_bg.png')} resizeMode="cover">
    <SafeAreaView style={styles.container}>

      <FlatList
        data={posts}
        style={{  backgroundColor: "transparent"}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard item={item} />}
        contentContainerStyle={{ padding: 10,paddingBottom:150 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        ListEmptyComponent={
          <View style={styles.center}>
            <Text>No Found Items Yet</Text>
          </View>
        }
      />

    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});