import { mockUsers } from "../data/mockUsers";

const AUTH_STORAGE_KEY = "authUser";

/**
 * Authenticates a user against mock data.
 * Email comparison is case-insensitive. Password is exact match.
 * Stores user info (without password) in localStorage or sessionStorage.
 */
export function loginUser(email, password, keepSignedIn = false) {
  if (!email || !password) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  const normalizedEmail = email.trim().toLowerCase();
  const matchedUser = mockUsers.find(
    (u) => u.email.toLowerCase() === normalizedEmail && u.password === password
  );

  if (!matchedUser) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  const userData = {
    id: matchedUser.id,
    name: matchedUser.name,
    email: matchedUser.email,
    role: matchedUser.role,
  };

  if (keepSignedIn) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  } else {
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }

  return {
    success: true,
    user: userData,
  };
}

/**
 * Retrieves the currently logged-in user from storage.
 */
export function getCurrentUser() {
  try {
    const rawUser =
      localStorage.getItem(AUTH_STORAGE_KEY) ||
      sessionStorage.getItem(AUTH_STORAGE_KEY);
    return rawUser ? JSON.parse(rawUser) : null;
  } catch (err) {
    console.error("Error parsing authUser from storage:", err);
    return null;
  }
}

/**
 * Checks if a user is currently authenticated.
 */
export function isAuthenticated() {
  return getCurrentUser() !== null;
}

/**
 * Logs out the user by removing auth data from both storages.
 */
export function logoutUser() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
}
