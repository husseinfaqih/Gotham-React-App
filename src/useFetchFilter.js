import { useEffect, useState } from 'react';

const useFetchFilter = (url, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(
      `${url}?api_key=8cf3fa2bf32f7ac2d20c56da226384e401d78a15&format=json&filter=id:${id}`,
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
