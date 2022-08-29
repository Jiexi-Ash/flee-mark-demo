import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { signInUser } from "redux/reducers/authSlice";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in all fields");
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
    }
    const userData = {
      email,
      password,
    };
    dispatch(signInUser({ userData, router }));
  };
  return (
    <div className="flex justify-center items-center  px-8 md:px-0 mt-20 md:mt-40">
      <div className="w-full p-8 border border-gray-200 shadow-lg rounded-lg lg:max-w-sm">
        <h2 className="font-Montserrat font-bold text-center text-xl">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          {error && (
            <p className="text-red-500 text-[12px] italic text-center">
              {error}
            </p>
          )}
          <div className="flex flex-col space-y-2 pb-6">
            <label className="font-Roboto text-lg">Email</label>
            <input
              className="border border-gray-200 rounded-lg p-2 w-full focus:ring-0 focus:border-gray-300"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2 pb-4">
            <label className="font-Roboto text-lg">Password</label>
            <input
              className="border border-gray-200 rounded-lg p-2 w-full focus:ring-0 focus:border-gray-300 "
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-sm text-center font-light hover:underline cursor-pointer text-primaryRed">
            {"Don't have an account? register here"}
          </p>

          <button className=" mt-4 w-full px-6 py-2 rounded shadow text-white/70 bg-primaryRed hover:shadow-lg hover:bg-primaryRed/80 ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
