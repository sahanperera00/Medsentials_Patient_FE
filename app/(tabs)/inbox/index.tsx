import {Image, View, Text, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from "../../../FirebaseConfig"; 
import { collection, query, where, onSnapshot } from "firebase/firestore"; 
import tw from "twrnc";


export default function inbox() {
  
  const [users, setUsers] = useState([]);

    //fetch doctors
    const getUsers = async () => {
      const docsRef = collection(FIREBASE_FIRESTORE, "doctors");
      const q = query(
        docsRef,
        where("userUID", "!=", FIREBASE_AUTH?.currentUser?.uid)
      );
      const docsSnap = onSnapshot(q, (onSnap) => {
        let data = [];
        onSnapshot(q, (onSnap) => {
          onSnap.docs.forEach((user) => {
            data.push({ ...user.data() });
          });

          setUsers(data); // Update the state once with all user data
        });
      });
    };
    useEffect(() => {
      getUsers();
    }, []);

  return (
    <View>
      <View style={tw`h-20`} />
      <Text style={tw`text-3xl text-center font-bold mb-8`}>Inbox</Text>

      <ScrollView>
        {users.map((item) => (
          <Link
            key={item.userUID}
            href={{
              pathname: `chatThread/MFtyBCzmZfVVSfSDfZw77qteQtN2`,

              params: {uid: item.userUID },
            }}
            asChild
          >
            <TouchableOpacity style={styles.groupCard}>
              <View style={styles.profileContainer}>
                <Image
                  source={require("../../../assets/images/user4.png")}
                  style={styles.profileImage}
                />
                <Text style={styles.fullName}>
                  {item.firstName} {item.lastName}
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  groupCard: {
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    backgroundColor: "#E3E4FA",
    marginBottom: 10,
    borderRadius: 20,
    elevation: 7,
  },
  profileContainer: {
    flexDirection: "row", 
    alignItems: "center", 
  },
  profileImage: {
    width: 50, 
    height: 50, 
    borderRadius: 25,
    marginRight: 10, 
  },

  fullName: {
    marginTop: 11,
    marginLeft:15,
    fontSize: 18, 
    color: "black",
  },
});



// import {
//   Image,
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   FlatList,
// } from "react-native";
// import { Link } from "expo-router";
// import React, { useEffect, useState } from "react";
// import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from "../../../FirebaseConfig";
// import { collection, query, where, onSnapshot } from "firebase/firestore";
// import tw from "twrnc";

// export default function Inbox() {
//   const [users, setUsers] = useState([]);
//   // const currentUser = FIREBASE_AUTH?.currentUser?.uid; //sender

//   // Fetch doctors
//   const getUsers = () => {
//     const docsRef = collection(FIREBASE_FIRESTORE, "doctors");
//     const q = query(
//       docsRef,
//       where("userUID", "!=", FIREBASE_AUTH?.currentUser?.uid)
//     );
//     const docsSnap = onSnapshot(q, (onSnap) => {
//       let data = [];
//       onSnap.docs.forEach((user) => {
//         data.push({ ...user.data() });
//       });

//       setUsers(data); // Update the state once with all user data
//     });
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={tw`text-4xl text-center font-bold mb-3`}>Inbox</Text>
//       <FlatList
//         data={users}
//         keyExtractor={(item) => item.userUID}
//         renderItem={({ item }) => (
//           <Link
//             key={item.userUID}
            // href={{
            //   pathname: `chatThread/MFtyBCzmZfVVSfSDfZw77qteQtN2`,

            //   params: { username: item.lastName, uid: item.userUID },
            // }}
//             asChild
//           >
//             <TouchableOpacity style={styles.chatCard}>
//               <View style={styles.profileContainer}>
//                 <Image
//                   source={require("../../../assets/images/user4.png")}
//                   style={styles.profileImage}
//                 />
//                 <View style={styles.chatDetails}>
//                   <Text style={styles.fullName}>
//                     {item.firstName} {item.lastName}
//                   </Text>
//                   <Text style={styles.msgTime}>{`22:30 PM`}</Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           </Link>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     marginTop: 50,
//   },
//   chatCard: {
//     backgroundColor: "white",
//     borderRadius: 10,
//     elevation: 3,
//     marginVertical: 10,
//     padding: 10,
//   },
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   fullName: {
//     fontSize: 18,
//     color: "black",
//     marginTop: 10,
//   },
//   msgTime: {
//     textAlign: "right",
//     fontSize: 10,
//     marginRight:5,
//   },
//   chatDetails: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
// });

