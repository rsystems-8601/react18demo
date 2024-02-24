import { useEffect, useState } from 'react';
const useCurrentToken = (data) => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(data);
  }, [data]);

  return [token];
};

export default useCurrentToken;
