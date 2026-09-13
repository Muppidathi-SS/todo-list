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
    }),
  );

  // Set cookie for Next.js proxy/middleware server-side protection
  document.cookie = `token=${session.token}; path=/; max-age=3600; SameSite=Lax`;
};

export const getStoredSession = (): StoredSession | null => {
  if (typeof window === "undefined") return null;

  const parseItem = (key: string, storage: Storage) => {
    try {
      const val = storage.getItem(key);
      if (!val || val === "undefined" || val === "null") return null;
      return JSON.parse(val);
    } catch {
      return null;
    }
  };

  const candidate =
    parseItem("session", sessionStorage) ||
    parseItem("session", localStorage) ||
    parseItem("user", localStorage) ||
    parseItem("user", sessionStorage);

  if (!candidate) return null;

  const u = candidate.user || candidate;
  const expiresAt = candidate.expiresAt || u.expiresAt;

  // Check if 1-hour session timeout has elapsed
  if (expiresAt && Date.now() > expiresAt) {
    clearStoredSession();
    return null;
  }

  const id = candidate.id || candidate._id || u.id || u._id || "";
  const name =
    candidate.name || candidate.userName || u.name || u.userName || "";
  const email =
    candidate.email || candidate.userEmail || u.email || u.userEmail || "";
  const token =
    candidate.token ||
    u.token ||
    sessionStorage.getItem("token") ||
    localStorage.getItem("token") ||
    "";

  // If no identifying fields exist, it's not a valid session
  if (!id && !name && !email) {
    return null;
  }

  // Ensure cookie is synced if token exists
  if (
    token &&
    typeof document !== "undefined" &&
    !document.cookie.includes("token=")
  ) {
    document.cookie = `token=${token}; path=/; max-age=3600; SameSite=Lax`;
  }

  return {
    id,
    name,
    email,
    token,
    expiresAt: expiresAt || Date.now() + ONE_HOUR_MS,
  };
};

export const clearStoredSession = () => {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem("session");
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  localStorage.removeItem("session");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  document.cookie =
    "token=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
};
