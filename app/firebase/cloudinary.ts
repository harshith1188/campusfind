export const CLOUD_NAME = "njgdojds";

export const UPLOAD_PRESET = "campusfind_upload";

export const uploadImage = async (imageUri: string) => {
  const data = new FormData();

  data.append("file", {
    uri: imageUri,
    type: "image/jpeg",
    name: "photo.jpg",
  } as any);

  data.append("upload_preset", UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: data,
    }
  );

  const result = await response.json();

  console.log(result); // optional, useful for debugging

  return result.secure_url;
};