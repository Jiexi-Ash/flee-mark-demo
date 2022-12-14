import { useState, useEffect, Children } from "react";
import { getSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { autoSignIn } from "redux/reducers/authSlice";
import Loader from "components/UI/Loader";

function SessionCheck({ children }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getSession()
      .then((session) => {
        if (session) {
          dispatch(autoSignIn({}))
            .unwrap()
            .then(() => {
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
}

export default SessionCheck;
