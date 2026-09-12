"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Zoom } from "react-toastify";

import { Email, Password } from "@mui/icons-material";

import { loginUser } from "@/services/auth/auth.service";
import { LOGIN_EMPTY, LoginData, LoginUser } from "@/services/auth/auth.type";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import ShowToastify from "@/utils/ShowToastify";

export default function Login() {
  const router = useRouter();
  const [loginData, setLoginData] = useState<LoginData>(LOGIN_EMPTY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const user: LoginUser = {
      userEmail: loginData.email,
      userPassword: loginData.password,
    };
    try {
      const data = await loginUser(user);
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      setLoginData(LOGIN_EMPTY);
      ShowToastify({
        message: "Login Success!",
        type: "success",
        position: "top-center",
        transition: Zoom,
      });
      router.push("/appearance");
    } catch (err) {
      ShowToastify({
        message: err instanceof Error ? err.message : "Login Failed!",
        type: "error",
        position: "top-center",
        transition: Zoom,
      });
    }
  };

  return (
    <>
      <section className="bg-white min-h-svh lg:h-screen w-full flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 lg:p-0 lg:gap-20 py-4 sm:py-6 lg:py-0 overflow-y-auto">
        <form
          autoComplete="off"
          onSubmit={handleLogin}
          className="border border-gray-100 rounded-2xl sm:rounded-xl shadow-xl sm:shadow-2xl w-full max-w-[400px] sm:max-w-[440px] lg:max-w-none lg:w-170 flex flex-col justify-center items-center px-4 py-6 sm:py-8 lg:py-12 bg-white my-auto sm:my-0"
        >
          <h1 className="text-2xl sm:text-[32px] font-medium text-center">
            Welcome
          </h1>
          <p className="text-gray-400 text-xs sm:text-base text-center mt-1">
            Please enter your details to start your day!
          </p>

          <div className="w-full flex flex-col items-center justify-center gap-5 mt-5">
            <Input
              name="email"
              icon={<Email style={{ fontSize: 30, color: "black" }} />}
              value={loginData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Your email"
            />
            <Input
              name="password"
              icon={<Password style={{ fontSize: 30, color: "black" }} />}
              value={loginData.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter Your Password"
              autoComplete="new-password"
            />
          </div>
          <Button type="submit">Login</Button>
          <p className="py-2 sm:py-2.5 text-gray-500 text-sm sm:text-md select-none">
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
          <p className="text-black/80 mt-3 text-xs sm:text-base text-center select-none">
            Don't have an Account?
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
