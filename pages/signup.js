import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "redux/reducers/authSlice";
import Loader from "components/UI/Loader";
import { getSession } from "next-auth/react";

function SignUp() {
  const loading = useSelector((state) => state.auth.loading);
  const [sessionCheck, setSessionCheck] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.push("/clothing/browse");
      } else {
        setSessionCheck(false);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "" || name === "" || surname === "") {
      setError("Please fill in all fields");
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email");
    }

    const userData = {
      email,
      password,
      name,
      surname,
    };

    dispatch(registerUser({ userData, router }));
  };
  return (
    <div className="flex justify-center items-center  px-8 md:px-0 mt-20 md:mt-40">
      {!sessionCheck ? (
        <div className="w-full p-8 border border-gray-200 shadow-lg rounded-lg lg:max-w-md">
          <h2 className="font-Montserrat font-bold text-center text-xl">
            SIGN UP
          </h2>
          <form onSubmit={handleSubmit} className="mt-4">
            {error && (
              <p className="text-red-500 text-[12px] italic text-center">
                {error}
              </p>
            )}
            <div className="flex flex-col space-y-2 pb-6">
              <label className="font-Roboto text-lg">Name</label>
              <input
                className="border border-gray-200 rounded-lg p-2 w-full focus:ring-0 focus:border-gray-300 text-sm"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2 pb-6">
              <label className="font-Roboto text-lg">Surname</label>
              <input
                className="border border-gray-200 rounded-lg p-2 w-full focus:ring-0 focus:border-gray-300  text-sm"
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2 pb-6">
              <label className="font-Roboto text-lg">Email</label>
              <input
                className="border border-gray-200 rounded-lg p-2 w-full focus:ring-0 focus:border-gray-300  text-sm"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2 pb-4">
              <label className="font-Roboto text-lg">Password</label>
              <input
                className="border border-gray-200 rounded-lg p-2 w-full focus:ring-0 focus:border-gray-300  text-sm"
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
              {loading ? <Loader /> : "Sign Up"}
            </button>
          </form>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default SignUp;
