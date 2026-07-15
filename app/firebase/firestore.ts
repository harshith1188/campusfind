import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { auth } from "./config";

// export  const addpost=async(
//     name:string,
//     email:string,
//     usn:string,
//     postType:string,
//     itemName:string,
//     cate:string,
//     des:string,
//     loc:string,
//     date:string,
//     imgurl:string)=>{
//  await addDoc(collection(db,"posts"),{
//     name,
//     email,
//     usn,
//     postType,
//     itemName,
//     cate,
//     des,
//     loc,
//     date,
//     imgurl,
//     createdAt:serverTimestamp()

//  })
// }


type post={
    user_id:string,
    name:string,
    email:string,
    usn:string,
    itemName:string,
    cate:string,
    des:string,
    loc:string,
    date:string,
    time:string,
    number:string,
    imgURL:string,
    status:string,
    lostorfound:string,
}

export  const addpost=async(post:post)=>{
    await addDoc(collection(db,"posts"),{
        ...post,
        createdAt:serverTimestamp(),
    });
}


import {
  orderBy,
  query
} from "firebase/firestore";


export const getPosts = async () => {

  const q = query(
    collection(db, "posts"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

//creating users  when logged in
export const addUser = async (
    uid: string,
    name: string,
    email: string,
    num:string,
    usn: string,
    dept:string
    ) => {

    await setDoc(
        doc(db, "users", uid),
        {
            name,
            email,
            num,
            usn,
            dept
        }
    );

};
//get users  data

export const getUserDetail = () => {
  return new Promise(async (resolve, reject) => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {

      unsubscribe();

      if (!user) {
        resolve(null);
        return;
      }

      try {
        const snap = await getDoc(doc(db, "users", user.uid));

        if (snap.exists()) {
          resolve(snap.data());
        } else {
          resolve(null);
        }

      } catch (e) {
        reject(e);
      }

    });

  });
};

//for  updating  the available and claimed  status Update Item Status
export const updateStatus = async (
  postId: string,
  status: string
) => {

  const postRef = doc(db, "posts", postId);

  await updateDoc(postRef, {
    status,
  });

};

// Delete Post
export const deletePost = async (postId: string) => {

  const postRef = doc(db, "posts", postId);

  await deleteDoc(postRef);

};

export  const getdepartment=  (email:string)=>
{
  if(email.includes("cs")){
    return "Computer Science & Engineering";
  }
  else if(email.includes("ec")){
    return "Electronics & Communication";
  }
  else  if(email.includes("is")){
    return "Information Science & Engineering"; 
  }
  else if(email.includes("ee")){
    return "Electrical & Electronics";
  }
  else if(email.includes("ai")){
    return "Artificial Intelligence & Machine Learning";
  }
  else {
    return "Unknown";
  }
}