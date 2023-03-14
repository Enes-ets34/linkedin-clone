import { ref } from "vue";

export default function useFormValidation(userData) {
  const error = ref({});

  const validateEmail = () => {
    console.log("userData.email :>> ", userData.email);
    if (!userData.email) {
      error.value.email = "Lütfen e-posta adresini girin";
      return false;
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      error.value.email = "Lütfen geçerli bir e-posta girin";
      return false;
    } else {
      error.value.email = null;
      return true; // doğrulama başarılı olduğunda true döndür
    }
  };

  const validatePassword = () => {
    if (!userData.password || userData.password.length < 6) {
      error.value.password = "Şifre minimum 6 karakter olmalı.";
      return false;
    } else {
      error.value.password = null;
      return true; // doğrulama başarılı olduğunda true döndür
    }
  };

  const validateLocation = () => {
    if (!userData.location || userData.location?.trim()?.includes("null")) {
      error.value.location = "Lütfen konumunuzu girin";
      console.log('userData.location :>> ', userData.location);
      return false;
    } else {
      error.value.location = null;
      return true; // doğrulama başarılı olduğunda true döndür
    }
  };
  const validateTitle = () => {
    if (!userData.title) {
      error.value.title = "Lütfen pozisyonunuzu girin";
      return false;
    } else {
      error.value.title = null;
      return true; // doğrulama başarılı olduğunda true döndür
    }
  };
  const validateCompany = () => {
    if (!userData.company) {
      error.value.company = "Lütfen şirketinizi seçin";
      return false;
    } else {
      error.value.company = null;
      return true; // doğrulama başarılı olduğunda true döndür
    }
  };

  return {
    validateEmail,
    validatePassword,
    validateLocation,
    validateCompany,
    validateTitle,
    error,
  };
}
