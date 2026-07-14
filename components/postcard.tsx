
import { auth } from "@/app/firebase/config";
import { deletePost, updateStatus } from "@/app/firebase/firestore";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


type PostProps = {
  item: {
    id: string;
    user_id:string,
    name: string;
    usn: string;
    email: string;
    number: string;
    itemName: string;
    cate: string;
    des: string;
    loc: string;
    date: string;
    time: string;
    imageUrl: string;
    status: string;
    lostorfound:string
  };
};

export default function PostCard({ item }: PostProps) {

const isOwner = auth.currentUser?.uid === item.user_id;

const handleStatus = () => {
  console.log("stauts",item.lostorfound);
  Alert.alert(
    "Confirmation",
    item.status === "available"
      ? "Mark this item as claimed?"
      : "Mark this item as available?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: async () => {
          try {
            await updateStatus(
              item.id,
              item.status === "available"
                ? "claimed"
                : "available"
            );

            Alert.alert(
              "Success",
              "Status updated successfully."
            );

          } catch (error: any) {
            Alert.alert(
              "Error",
              error.message
            );
          }
        },
      },
    ]
  );
};

const handledelete=async()=>{
  Alert.alert(
    "Delete post",
    "Do you want to delet  this  post?",
    [
      {
        text:"cancel",
        style:'cancel'
      },
      {
        text:"Delete",
        style:'destructive',
        onPress:async()=>{
          try{
            await deletePost(item.id);
            Alert.alert(
              "success",
              "post deleted successfully"
            );
          }
          catch(error: any) {
            Alert.alert(
            "Error", 
            error.message
          );

          }
        }
      }
    ]
  )
}

  return (
    <View style={styles.card}>

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          style={styles.profile}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.usn}>{item.usn}</Text>
        </View>
         
          {/*available or claimed status field */}
        <View
         style={[styles.status,{backgroundColor:item.status === "available" ? "green": "red",},]}>
         <Text style={styles.statusText}>{item.status}</Text> 
        </View>

        {/* found or lost item status filed */}
        <View style={styles.status}>
          <Text style={styles.statusText}>{item.lostorfound}</Text>
        </View>


        </View>


      {/* Item Image */}
      {item.imageUrl ? (
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.postImage}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.noImage}>
          <MaterialIcons
            name="image"
            size={60}
            color="#999"
          />
          <Text>No Image</Text>
        </View>
      )}

      {/* Details */}
      <View style={styles.content}>

        <Text style={styles.itemName}>
          {item.itemName}
        </Text>

        <Text style={styles.description}>
          {item.des}
        </Text>

        <View style={styles.row}>
          <MaterialIcons
            name="location-on"
            size={18}
            color="#0D6EFD"
          />
          <Text>{item.loc}</Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons
            name="category"
            size={18}
            color="#0D6EFD"
          />
          <Text>{item.cate}</Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons
            name="calendar-month"
            size={18}
            color="#0D6EFD"
          />
          <Text>{item.date}</Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons
            name="schedule"
            size={18}
            color="#0D6EFD"
          />
          <Text>{item.time}</Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons
            name="phone"
            size={18}
            color="#0D6EFD"
          />
          <Text>{item.number}</Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons
            name="email"
            size={18}
            color="#0D6EFD"
          />
          <Text>{item.email}</Text>
        </View>

      {/* button dynamic status */}
      {isOwner && (<TouchableOpacity style={styles.claimButton} onPress={handleStatus}>
        <Text style={styles.claimText}>{item.status === "available"? "✓ Mark as Claimed": "↺ Mark as Available"}</Text>
      </TouchableOpacity>
      )}
      {/* delete button */}
      {isOwner && (<TouchableOpacity style={styles.deleteButton} onPress={handledelete}>
        <Text  style={styles.claimText}>Delete</Text>
      </TouchableOpacity>
      )}
      
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor:"white" ,
    borderRadius: 15,
    marginVertical: 10,
    overflow: "hidden",
    elevation: 15,
    marginBottom:30
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:'rgba(89, 125, 179, 0.47).7)',
    padding: 12,
  },

  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  usn: {
    color: "#0D6EFD",
    fontSize:16
  },

  status: {
    backgroundColor: "#0D6EFD",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft:10,
    borderRadius: 15,
  },

  statusText: {
    color: "white",
    fontWeight: "bold",
  },

  postImage: {
    width: "100%",
    height: 260,
  },

  noImage: {
    height: 260,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  content: {
    padding: 15,
  },

  itemName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  description: {
    color: "#555",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
    gap: 8,
  },
  
  claimButton: {
  marginTop: 20,
  backgroundColor: "#0D6EFD",
  padding: 12,
  borderRadius: 10,
  alignItems: "center",
},

claimText: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16,
},
deleteButton:{
  borderRadius:10,
  alignItems:'center',
  justifyContent:'center',
  marginTop:20,
  paddingVertical:10,
  backgroundColor:'red'
}

});