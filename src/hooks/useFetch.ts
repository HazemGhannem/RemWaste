// useFetch.js
import { useState, useEffect } from "react";
import { getSkips } from "../api/skipService";

export const useFetch = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    setLoading(true);
    getSkips()
      .then((data) => {
        if (active) {
          setSkips(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (active) setError(err);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { skips, loading, error };
};
