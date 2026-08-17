import { _get, _post } from "@/lib/api";
import { API_ROUTES } from "@/services/endpoints";

export const getProfile = async () => {
  const response = await _get(API_ROUTES.GET_PROFILE);
  return response.data;
};

export const logout = async () => {
  const response = await _post(API_ROUTES.LOGOUT);
  //   if (response?.status === 200) {
  //     return { success: true, message: response?.message, data: response?.data };
  //   } else {
  //     return { success: false, message: response?.reason };
  //   }
  return response.data;
};
