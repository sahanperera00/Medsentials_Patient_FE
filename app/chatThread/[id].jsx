// import React, { useEffect, useState, useCallback} from 'react';
// import {
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   Image,
//   FlatList,
//   useColorScheme,
//   View,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'
// import {GiftedChat,Bubble,InputToolbar} from 'react-native-gifted-chat'
// import { collection, query, where, onSnapshot, addDoc, serverTimestamp, doc } from "firebase/firestore";
// import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from "../../FirebaseConfig"; 
// import { useGlobalSearchParams } from 'expo-router';
// import tw from "twrnc";
// Icon.loadFont().then();


// const ChatScreen = ({user, route}) => {
  
//     const uid = useGlobalSearchParams(); //reciever
//    const [messages, setMessages] = useState([]);
//    const currentUser = FIREBASE_AUTH?.currentUser?.uid; //sender

//  useEffect(() => {
//       const chatId =
//         uid > currentUser
//           ? ` ${uid + "-" + currentUser}`
//           : `${currentUser + `-` + uid}`;
//       const docref = doc(FIREBASE_FIRESTORE, "patients", currentUser,"chatrooms", chatId);
//       const colRef = collection(docref, "messages");
//       const q = query(colRef);
//       const docSnap = onSnapshot(q,(onSnap)=>{
//         const allMsg=onSnap.docs.map(mes=>{
//         if (mes.data().createdAt){
//           return {
//             ...mes.data(),
//             createdAt: mes.data().createdAt.toDate(),
//           }
//         }else{
//           return {
//            ...mes.data(),
//             createdAt: new Date()
//           }
//         }

//         })
//         setMessages(allMsg);
//       })
//  }, []);


//    const onSend = useCallback((messagesArray) => {

//     const msg=messagesArray[0];
//     const myMsg = {
//       ...msg,
//       sentByPatient:currentUser,
//       sentToDoctor:uid,
//     }
//     // console.log(myMsg);
//      setMessages((previousMessages) =>
//        GiftedChat.append(previousMessages, myMsg)
//      );

//     const chatId = uid > currentUser ? ` ${uid+'-' + currentUser}` : `${currentUser+`-`+uid}`
//     const docref = doc(
//       FIREBASE_FIRESTORE,
//       "patients",
//       currentUser,
//       "chatrooms",
//       chatId
//     );
//     const colRef = collection(docref,'messages');
//     const chatSnap = addDoc(colRef,{
//       ...myMsg,
//       createdAt:serverTimestamp(),
//     })
//     }, []);

//   return (
//     <>
//       <Text style={tw`text-2xl text-center font-bold mt-15`}>Dr Johnson</Text>
//       <GiftedChat
//         messages={messages}
//         onSend={(text) => onSend(text)}
//         user={{
//           _id: currentUser,
//         }}
//       />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//     Contain: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//   Container: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   card: {
//     width: '100%',
//     height: 'auto',
//     marginHorizontal: 4,
//     marginVertical: 6,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   userImage: {
//     paddingTop: 15,
//     paddingBottom: 15,
//   },
//   userImageST: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   }, 
//   textArea: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: 5,
//     paddingLeft: 10,
//     width: 300,
//     backgroundColor: 'transparent',
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccccc',
//   },
//   userText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   nameText: {
//     fontSize: 14,
//     fontWeight: '900',
//     fontFamily: 'Verdana'
//   },
//   msgTime: {
//     textAlign: 'right',
//     fontSize: 11,
//     marginTop: -20,
//   },
//   msgContent: {
//     paddingTop: 5,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default ChatScreen;








import React, { useEffect, useState, useCallback } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  FlatList,
  useColorScheme,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { GiftedChat, Bubble, InputToolbar } from "react-native-gifted-chat";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
} from "firebase/firestore";
import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from "../../FirebaseConfig";
import { useGlobalSearchParams } from "expo-router";
import tw from "twrnc";
Icon.loadFont().then();

const ChatScreen = ({ user, route }) => {
  const uid = useGlobalSearchParams(); //reciever
  const [messages, setMessages] = useState([]);
  const currentUser = FIREBASE_AUTH?.currentUser?.uid; //sender

   useEffect(() => {
     const initialMessage = {
       _id: 1,
       text: "Hi Henry!",
       createdAt: new Date(),
       user: {
         _id: 2,
         name: "Johnson",
       },
     };

     setMessages([initialMessage]);

     // Function to send a response message after 2 seconds
     const sendResponse = () => {
       const responseMessage = {
         _id: 2,
         text: "What's your illness?",
         createdAt: new Date(),
         user: {
           _id: 1,
           name: "Johnson",
         },
       };

       setMessages((prevMessages) => [...prevMessages, responseMessage]);
     };

     // Set a 2-second delay to send the response
     const responseTimeout = setTimeout(sendResponse, 10000);

     // Clear the timeout when the component unmounts
     return () => clearTimeout(responseTimeout);
   }, []);



  // useEffect(() => {
  //   const chatId =
  //     uid > currentUser
  //       ? ` ${uid + "-" + currentUser}`
  //       : `${currentUser + `-` + uid}`;
  //   const docref = doc(
  //     FIREBASE_FIRESTORE,
  //     "patients",
  //     currentUser,
  //     "chatrooms",
  //     chatId
  //   );
  //   const colRef = collection(docref, "messages");
  //   const q = query(colRef);
  //   const docSnap = onSnapshot(q, (onSnap) => {
  //     const allMsg = onSnap.docs.map((mes) => {
  //       if (mes.data().createdAt) {
  //         return {
  //           ...mes.data(),
  //           createdAt: mes.data().createdAt.toDate(),
  //         };
  //       } else {
  //         return {
  //           ...mes.data(),
  //           createdAt: new Date(),
  //         };
  //       }
  //     });
  //     setMessages(allMsg);
  //   });
  // }, []);

  const onSend = useCallback((messagesArray) => {
    const msg = messagesArray[0];
    const myMsg = {
      ...msg,
      sentByPatient: currentUser,
      sentToDoctor: uid,
    };
    // console.log(myMsg);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, myMsg)
    );

    const chatId =
      uid > currentUser
        ? ` ${uid + "-" + currentUser}`
        : `${currentUser + `-` + uid}`;
    const docref = doc(
      FIREBASE_FIRESTORE,
      "patients",
      currentUser,
      "chatrooms",
      chatId
    );
    const colRef = collection(docref, "messages");
    const chatSnap = addDoc(colRef, {
      ...myMsg,
      createdAt: serverTimestamp(),
    });
  }, []);

  return (
    <>
      <Text style={tw`text-2xl text-center font-bold mt-15`}>Dr Johnson</Text>
      <GiftedChat
        messages={messages}
        onSend={(text) => onSend(text)}
        user={{
          _id: currentUser,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Contain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  card: {
    width: "100%",
    height: "auto",
    marginHorizontal: 4,
    marginVertical: 6,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userImage: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  userImageST: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textArea: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 5,
    paddingLeft: 10,
    width: 300,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  userText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameText: {
    fontSize: 14,
    fontWeight: "900",
    fontFamily: "Verdana",
  },
  msgTime: {
    textAlign: "right",
    fontSize: 11,
    marginTop: -20,
  },
  msgContent: {
    paddingTop: 5,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default ChatScreen;

