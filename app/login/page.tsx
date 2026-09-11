import { Email, Password } from "@mui/icons-material";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <section className="bg-white h-screen w-full flex justify-center gap-20 items-center">
        <div>
          <Image
            src="/auth-svg/login.svg"
            alt="Login"
            width={700}
            height={700}
          />
        </div>
        <div className="border border-gray-100 rounded-xl shadow-2xl w-170 flex flex-col justify-center items-center px-4 py-12">
          <h1 className="text-[32px] font-medium">Welcome</h1>
          <p className="text-gray-400">
            Please enter your details to start your day!
          </p>
          <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg px-3 w-[80%] gap-3 mt-8">
            <Email
              style={{
                fontSize: 30,
                color: "black",
              }}
            />
            <input
              className="py-4 focus:outline-none focus:border-none w-full"
              type="text"
              placeholder="Enter youe email"
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
              placeholder="Enter youe Password"
            />
          </div>
          <div className="flex justify-end w-[80%] py-3">
            <p className="font-medium underline">Forgot Password?</p>
          </div>
          <button className="bg-black text-white px-3 py-3 w-[80%] rounded-md text-[21px]">
            Login
          </button>
          <p className="py-3 text-gray-500 text-md">or</p>
          <div className="flex justify-center items-center border border-gray-300 shadow rounded-lg px-3 py-3 w-[80%] gap-3">
            <Image
              src="/auth-svg/google.svg"
              alt="Login"
              width={26}
              height={26}
            />
            <p>Login with Google</p>
          </div>
        </div>
      </section>
    </>
  );
}
