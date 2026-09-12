"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Email, Password, Person } from "@mui/icons-material";

import Input from "@/ui/Input";
import Button from "@/ui/Button";
import { registerUser } from "@/services/auth/auth.service";
import { REGISTER_EMPTY, RegisterData } from "@/services/auth/auth.type";
import ShowToastify from "@/utils/ShowToastify";
import { Bounce, Zoom } from "react-toastify";

export default function Register() {
  const [registerData, setRegisterData] =
    useState<RegisterData>(REGISTER_EMPTY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    const user = {
      userName: registerData.name,
      userPassword: registerData.password,
      userEmail: registerData.email,
    };
    try {
      await registerUser(user);
      ShowToastify({
        message: "Registration successful!",
        type: "success",
        position: "top-center",
        transition: Zoom,
      });
    } catch (err) {
      ShowToastify({
        message: "Registration failed!",
        type: "error",
        position: "top-center",
        transition: Bounce,
      });
    } finally {
      setRegisterData(REGISTER_EMPTY);
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
          <div className="w-full flex flex-col items-center justify-center gap-3 mt-5">
            <Input
              name="email"
              icon={<Email style={{ fontSize: 30, color: "black" }} />}
              value={registerData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Your email"
            />
            <Input
              name="name"
              icon={<Person style={{ fontSize: 30, color: "black" }} />}
              value={registerData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Name"
            />
            <Input
              name="password"
              icon={<Password style={{ fontSize: 30, color: "black" }} />}
              value={registerData.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter Your Password"
              autoComplete="new-password"
            />
            <Input
              name="confirmPassword"
              icon={<Password style={{ fontSize: 30, color: "black" }} />}
              value={registerData.confirmPassword}
              onChange={handleChange}
              type="password"
              placeholder="Confirm Your Password"
              autoComplete="new-password"
            />
          </div>
          <Button onClick={handleRegister}>Register</Button>
          <p className="py-1.5 sm:py-2 text-gray-500 text-xs sm:text-sm select-none">
            or
          </p>
          <Button
            variant="google"
            icon={
              <Image
                src="/auth-svg/google.svg"
                alt="Google"
                width={22}
                height={22}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            }
          >
            Continue with Google
          </Button>
          <p className="text-black/80 mt-2.5 sm:mt-3 text-xs sm:text-sm text-center select-none">
            Already have an Account?
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
