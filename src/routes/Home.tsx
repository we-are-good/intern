import { useEffect, useState } from "react";

import type { UserTestType } from "../types/userTypes";
import { useUserQuery } from "../query/useQueries/useUserQueries";

const Home = () => {
  const [connection, setConnection] = useState<UserTestType | undefined>(
    undefined
  );
  const data = useUserQuery();
  useEffect(() => {
    setConnection(data);
  }, []);
  console.log(data);
  return <div>{connection?.id}</div>;
};

export default Home;
