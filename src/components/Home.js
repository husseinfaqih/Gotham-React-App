import { useState, useEffect } from 'react';

const Home = () => {
  const [comicVineData, setComicVineData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(
      'https://comicvine.gamespot.com/api/volume/4050-796/?api_key=8cf3fa2bf32f7ac2d20c56da226384e401d78a15&format=json',
    )
      .then((res) => {
        if (!res.ok) {
          throw Error('Error! Please wait a few minutes before you try again.');
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setErrorMessage(null);
        setComicVineData(data);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMessage(err.message);
      });
  }, []);

  return (
    <div>
      <h2>Homepage</h2>
      {Loading && <h3>Loading .. </h3>}
      {Error && <h3>{errorMessage}</h3>}
      {comicVineData && (
        <p>
          This application is based on The Batman comic book series{' '}
          {comicVineData.results.deck}
        </p>
      )}
    </div>
  );
};

export default Home;
