"use client";

import { Email, Password, Person } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleRegister = async () => {
    const user = {
      userName: name,
      userPassword: password,
      userEmail: email,
    };
    console.log("USER:", user);
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log("API RESPONSE:", data);
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
        <div className="border border-gray-100 rounded-xl shadow-2xl w-170 flex flex-col justify-center items-center px-4 py-6">
          <h1 className="text-[32px] font-medium">Register</h1>
          <p className="text-gray-400">
            Please enter your details to explore the application!
          </p>
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
              type="text"
              placeholder="Enter Your email"
            />
          </div>
          <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg px-3 w-[80%] gap-3 mt-8">
            <Person
              style={{
                fontSize: 30,
                color: "black",
              }}
            />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-4 focus:outline-none focus:border-none w-full"
              type="text"
              placeholder="Enter Your Name"
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
              type="text"
              placeholder="Enter Your Password"
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
              className="py-4 focus:outline-none focus:border-none w-full"
              type="text"
              placeholder="Confirm Your Password"
            />
          </div>
          <button
            onClick={handleRegister}
            className="bg-black text-white px-3 py-3 w-[80%] rounded-md text-[21px] mt-6"
          >
            Register
          </button>
          <p className="py-3 text-gray-500 text-md">or</p>
          <div className="flex justify-center items-center border border-gray-300 shadow rounded-lg px-3 py-3 w-[80%] gap-3">
            <Image
              src="/auth-svg/google.svg"
              alt="Login"
              width={26}
              height={26}
            />
            <p>Continue with Google</p>
          </div>
          <p className="text-black/80 mt-3">
            Already have an Account?{" "}
            <span
              className="font-medium text-black underline cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
