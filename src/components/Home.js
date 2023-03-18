// import { useState, useEffect } from 'react';
import useFetch from '../useFetch';

const Home = () => {
  const {
    data: batmanVolumeData,
    loading,
    errorMessage,
  } = useFetch(
    'https://comicvine.gamespot.com/api/volume/4050-796/?api_key=8cf3fa2bf32f7ac2d20c56da226384e401d78a15&format=json',
  );

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
