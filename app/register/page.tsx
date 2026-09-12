"use client";

import { Email, Password, Person } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = async () => {
    const user = {
      userName: name,
      userPassword: password,
      userEmail: email,
    };
    console.log("USER:", user);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        },
      );
      const data = await response.json();
      console.log("API RESPONSE:", data);
      if (response.ok) {
        router.push("/login");
      }
    } catch (err) {
      console.error("REGISTER ERROR:", err);
    } finally {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <>
      <section className="bg-white min-h-svh lg:h-screen w-full flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 lg:p-0 lg:gap-20 py-4 sm:py-6 lg:py-0 overflow-y-auto">
        <div className="border border-gray-100 rounded-2xl sm:rounded-xl shadow-xl sm:shadow-2xl w-full max-w-[400px] sm:max-w-[440px] lg:max-w-none lg:w-170 flex flex-col justify-center items-center px-4 py-5 sm:py-7 lg:py-10 bg-white my-auto sm:my-0">
          <h1 className="text-2xl sm:text-[30px] font-medium text-center">
            Register
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm text-center mt-1">
            Please enter your details to explore the application!
          </p>
          
          <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg px-3 w-[88%] sm:w-[82%] lg:w-[80%] gap-3 mt-4 sm:mt-6">
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
              className="py-2.5 sm:py-3 focus:outline-none focus:border-none w-full text-sm sm:text-base"
              type="email"
              placeholder="Enter Your email"
            />
          </div>
          <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg px-3 w-[88%] sm:w-[82%] lg:w-[80%] gap-3 mt-3 sm:mt-4">
            <Person
              style={{
                fontSize: 30,
                color: "black",
              }}
            />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              className="py-2.5 sm:py-3 focus:outline-none focus:border-none w-full text-sm sm:text-base"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg px-3 w-[88%] sm:w-[82%] lg:w-[80%] gap-3 mt-3 sm:mt-4">
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
              className="py-2.5 sm:py-3 focus:outline-none focus:border-none w-full text-sm sm:text-base"
              type="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg px-3 w-[88%] sm:w-[82%] lg:w-[80%] gap-3 mt-3 sm:mt-4">
            <Password
              style={{
                fontSize: 30,
                color: "black",
              }}
            />
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              className="py-2.5 sm:py-3 focus:outline-none focus:border-none w-full text-sm sm:text-base"
              type="password"
              placeholder="Confirm Your Password"
            />
          </div>
          <button
            onClick={handleRegister}
            className="bg-black text-white px-3 py-2.5 sm:py-3 w-[88%] sm:w-[82%] lg:w-[80%] rounded-lg sm:rounded-md text-base sm:text-[20px] cursor-pointer hover:bg-black/90 transition mt-4 sm:mt-5 select-none touch-manipulation"
          >
            Register
          </button>
          <p className="py-1.5 sm:py-2 text-gray-500 text-xs sm:text-sm select-none">
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
            <p className="text-sm sm:text-base">Continue with Google</p>
          </div>
          <p className="text-black/80 mt-2.5 sm:mt-3 text-xs sm:text-sm text-center select-none">
            Already have an Account?{" "}
            <Link
              href="/login"
              className="font-medium text-black underline cursor-pointer inline-block py-1 touch-manipulation"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
