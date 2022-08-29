import { useEffect } from "react";
import { useSelector } from "react-redux";

function Browse() {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return <div>browse</div>;
}

export default Browse;
