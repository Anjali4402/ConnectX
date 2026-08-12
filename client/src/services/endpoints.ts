export const BASE_PATH = "/app/v1";

// Endpoints
export const API_ROUTES = {
  // ** Login
  LOGIN: `${BASE_PATH}/auth/login`,

  // ** Register
  REGISTER: `${BASE_PATH}/auth/register`,

  // ** Get Profile
  GET_PROFILE: `${BASE_PATH}/users/me`,

  // ** Logout
  LOGOUT: `${BASE_PATH}/auth/logout`,
};
