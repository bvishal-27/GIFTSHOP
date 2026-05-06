const BASE_URL = "https://api.freeapi.app/api/v1/users";

export const registerUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    });

    return await res.json();
  } catch (err) {
    return { success: false, message: "Network error" };
  }
};

export const loginUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    });

    return await res.json();
  } catch {
    return { success: false, message: "Network error" };
  }
};

export const getCurrentUser = async () => {
  try {
    const res = await fetch(`${BASE_URL}/current-user`, {
      credentials: "include"
    });

    return await res.json();
  } catch {
    return { success: false };
  }
};

export const logoutUser = async () => {
  try {
    const res = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      credentials: "include"
    });

    return await res.json();
  } catch {
    return { success: false };
  }
};