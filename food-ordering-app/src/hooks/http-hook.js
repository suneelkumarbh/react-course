import { useState } from "react";

const useHttpRequest = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = async (requestConfig, applyData) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      setIsLoading(false);
      applyData(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error)
      setError(error.message);
    }
  };
  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useHttpRequest;
