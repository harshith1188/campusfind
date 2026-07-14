import { storage } from "./config";

import {
    getDownloadURL,
    ref,
    uploadBytes,
} from "firebase/storage";

import { auth } from "./config";

export const uploadImage = async (imageUri: string) => {
  try {
    // Convert local image to Blob
    const response = await fetch(imageUri);
    const blob = await response.blob();

    // Unique image name
    const fileName = `${Date.now()}.jpg`;

    // images/user_uid/file.jpg
    const storageRef = ref(
      storage,
      `images/${auth.currentUser?.uid}/${fileName}`
    );

    // Upload
    await uploadBytes(storageRef, blob);

    // Download URL
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;
  } catch (error) {
    console.log(error);
    throw error;
  }
};