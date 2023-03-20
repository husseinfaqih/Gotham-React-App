import { useEffect, useState } from 'react';

const useFetchFilter = (url, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(
      `${url}?api_key=${process.env.REACT_APP_API_KEY}&format=json&filter=id:${id}`,
    )
      .then((res) => {
        if (!res.ok) {
          throw Error('Error! Please wait a few minutes before you try again.');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setErrorMessage(null);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMessage(err.message);
      });
  }, [url]);

  return { data, loading, errorMessage };
};

export default useFetchFilter;

// comicVineData
