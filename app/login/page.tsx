"use client";

import { Email, Password } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: email,
          userPassword: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      console.log("LOGIN SUCCESS:", data);

      // Store logged-in user in localStorage
      if (typeof window !== "undefined" && data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      // Navigate to /add-task once credentials matched
      router.push("/add-task");
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      setError("Unable to connect to the server. Please check your backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-white h-screen w-full flex justify-center gap-20 items-center">
        <div>
          <Image
            src="/auth-svg/login.svg"
            alt="Login"
            width={700}
            height={700}
            priority
            className="w-auto h-auto"
          />
        </div>
        <form
          onSubmit={handleLogin}
          className="border border-gray-100 rounded-xl shadow-2xl w-170 flex flex-col justify-center items-center px-4 py-12"
        >
          <h1 className="text-[32px] font-medium">Welcome</h1>
          <p className="text-gray-400">
            Please enter your details to start your day!
          </p>

          {error && (
            <div className="w-[80%] mt-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg px-3 w-[80%] gap-3 mt-8">
            <Email
              style={{
                fontSize: 30,
                color: "black",
              }}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-4 focus:outline-none focus:border-none w-full"
              type="email"
              placeholder="Enter Your email"
              required
            />
          </div>
          <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg px-3 w-[80%] gap-3 mt-6">
            <Password
              style={{
                fontSize: 30,
                color: "black",
              }}
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-4 focus:outline-none focus:border-none w-full"
              type="password"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="flex justify-end w-[80%] py-3">
            <p className="font-medium underline cursor-pointer">
              Forgot Password?
            </p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-3 py-3 w-[80%] rounded-md text-[21px] cursor-pointer hover:bg-black/90 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="py-3 text-gray-500 text-md">or</p>
          <div className="flex justify-center items-center border border-gray-300 shadow rounded-lg px-3 py-3 w-[80%] gap-3 cursor-pointer hover:bg-gray-50 transition">
            <Image
              src="/auth-svg/google.svg"
              alt="Login"
              width={26}
              height={26}
            />
            <p>Login with Google</p>
          </div>
          <p className="text-black/80 mt-3">
            Don't have an Account?{" "}
            <span
              className="font-medium text-black underline cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Register
            </span>
          </p>
        </form>
      </section>
    </>
  );
}
