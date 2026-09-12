"use client";

import { Email, Password } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: email,
            userPassword: password,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      console.log("LOGIN SUCCESS:", data);

      if (typeof window !== "undefined" && data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

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
      <section className="bg-white min-h-svh lg:h-screen w-full flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 lg:p-0 lg:gap-20 py-4 sm:py-6 lg:py-0 overflow-y-auto">
        <form
          onSubmit={handleLogin}
          autoComplete="off"
          className="border border-gray-100 rounded-2xl sm:rounded-xl shadow-xl sm:shadow-2xl w-full max-w-[400px] sm:max-w-[440px] lg:max-w-none lg:w-170 flex flex-col justify-center items-center px-4 py-6 sm:py-8 lg:py-12 bg-white my-auto sm:my-0"
        >
          <h1 className="text-2xl sm:text-[32px] font-medium text-center">
            Welcome
          </h1>
          <p className="text-gray-400 text-xs sm:text-base text-center mt-1">
            Please enter your details to start your day!
          </p>

          {error && (
            <div className="w-[88%] sm:w-[82%] lg:w-[80%] mt-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-xs sm:text-sm text-center">
              {error}
            </div>
          )}

          <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg px-3 w-[88%] sm:w-[82%] lg:w-[80%] gap-3 mt-5 sm:mt-7">
            <Email
              style={{
                fontSize: 30,
                color: "black",
              }}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              className="py-3 sm:py-3.5 focus:outline-none focus:border-none w-full text-sm sm:text-base"
              type="email"
              placeholder="Enter Your email"
              required
            />
          </div>
          <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg px-3 w-[88%] sm:w-[82%] lg:w-[80%] gap-3 mt-4 sm:mt-5">
            <Password
              style={{
                fontSize: 30,
                color: "black",
              }}
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              className="py-3 sm:py-3.5 focus:outline-none focus:border-none w-full text-sm sm:text-base"
              type="password"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="flex justify-end w-[88%] sm:w-[82%] lg:w-[80%] py-2 sm:py-2.5">
            <p className="font-medium underline cursor-pointer text-xs sm:text-base">
              Forgot Password?
            </p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-3 py-3 w-[88%] sm:w-[82%] lg:w-[80%] rounded-lg sm:rounded-md text-base sm:text-[21px] cursor-pointer hover:bg-black/90 transition disabled:opacity-50 select-none touch-manipulation"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="py-2 sm:py-2.5 text-gray-500 text-sm sm:text-md select-none">
            or
          </p>
          <div className="flex justify-center items-center border border-gray-300 shadow rounded-lg px-3 py-2 sm:py-2.5 w-[88%] sm:w-[82%] lg:w-[80%] gap-3 cursor-pointer hover:bg-gray-50 transition select-none touch-manipulation">
            <Image
              src="/auth-svg/google.svg"
              alt="Login"
              width={22}
              height={22}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <p className="text-sm sm:text-base">Login with Google</p>
          </div>
          <p className="text-black/80 mt-3 text-xs sm:text-base text-center select-none">
            Don&apos;t have an Account?{" "}
            <Link
              href="/register"
              className="font-medium text-black underline cursor-pointer inline-block py-1 touch-manipulation"
            >
              Register
            </Link>
          </p>
        </form>
      </section>
    </>
  );
}
