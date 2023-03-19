// import { useState, useEffect } from 'react';
import useFetch from '../useFetch';

const Home = () => {
  const {
    data: batmanVolumeData,
    loading,
    errorMessage,
  } = useFetch('https://comicvine.gamespot.com/api/volume/4050-796/');

  return (
    <div>
      <h2>Homepage</h2>
      {loading && <h3>Loading .. </h3>}
      {Error && <h3>{errorMessage}</h3>}
      {batmanVolumeData && (
        <p>
          This application is based on The Batman comic book series{' '}
          {batmanVolumeData.results.deck}
        </p>
      )}
    </div>
  );
};

export default Home;
