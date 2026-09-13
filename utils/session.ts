export const ONE_HOUR_MS = 60 * 60 * 1000; // 1 Hour

export interface StoredSession {
  id: string;
  name: string;
  email: string;
  token: string;
  expiresAt: number;
}

export const saveSession = (session: {
  id: string;
  name: string;
  email: string;
  token: string;
}) => {
  if (typeof window === "undefined") return;

  const expiresAt = Date.now() + ONE_HOUR_MS;
  const sessionData: StoredSession = {
    ...session,
    expiresAt,
  };

  // Store in sessionStorage
  sessionStorage.setItem("session", JSON.stringify(sessionData));
  sessionStorage.setItem("token", session.token);

  // Keep localStorage synced for persistence and backward compatibility
  localStorage.setItem("session", JSON.stringify(sessionData));
  localStorage.setItem("token", session.token);
  localStorage.setItem(
    "user",
    JSON.stringify({
      id: session.id,
      _id: session.id,
      userName: session.name,
      userEmail: session.email,
      token: session.token,
      expiresAt,
    })
  );

  // Set cookie for Next.js proxy/middleware server-side protection
  document.cookie = `token=${session.token}; path=/; max-age=3600; SameSite=Lax`;
};

export const getStoredSession = (): StoredSession | null => {
  if (typeof window === "undefined") return null;

  const raw =
    sessionStorage.getItem("session") ||
    localStorage.getItem("session") ||
    localStorage.getItem("user");

  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    const expiresAt = parsed.expiresAt;

    // Check if 1-hour session timeout has elapsed
    if (expiresAt && Date.now() > expiresAt) {
      clearStoredSession();
      return null;
    }

    return {
      id: parsed.id || parsed._id || "",
      name: parsed.name || parsed.userName || "",
      email: parsed.email || parsed.userEmail || "",
      token:
        parsed.token ||
        sessionStorage.getItem("token") ||
        localStorage.getItem("token") ||
        "",
      expiresAt: expiresAt || Date.now() + ONE_HOUR_MS,
    };
  } catch {
    return null;
  }
};

export const clearStoredSession = () => {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem("session");
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  localStorage.removeItem("session");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  document.cookie = "token=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
};

