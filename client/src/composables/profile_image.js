import { BASE_URL } from "../constants";

const useProfileImage = (user) => {
    
  if (!user || !user.profile_image) {
    return `${BASE_URL}/uploads/default.png`;
  }

  return new Promise((resolve, reject) => {
    const imageSrc = `${BASE_URL}/uploads/${user.profile_image}`;
    const img = new Image();
    img.src = imageSrc;
    img.onerror = () => {
      resolve(`${BASE_URL}/uploads/default.png`);
    };
    img.onload = () => {
      resolve(imageSrc);
    };
  });
};

export default useProfileImage;
