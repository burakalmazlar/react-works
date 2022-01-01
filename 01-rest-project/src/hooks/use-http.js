import { useCallback, useState } from "react";

const useHttp = () => {
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  const send = useCallback(async (url, body, apply) => {
    setLoading(true);

    try {
      setError(null);

      let params = undefined;
      if (body !== null) {
        params = {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        };
      }

      const response = await fetch(url, params);
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
      const data = await response.json();

      apply(data);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }, []);

  return [loading, error, send];
};

export default useHttp;
