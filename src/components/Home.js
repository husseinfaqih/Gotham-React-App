import useFetch from '../useFetch';

const Home = () => {
  const {
    data: batmanVolumeData,
    loading,
    errorMessage,
  } = useFetch('https://comicvine.gamespot.com/api/volume/4050-796/');

  return (
    <div className="home-container">
      <h2 className="home-title">Welcome</h2>
      {loading && (
        <div className="home-container">
          <img
            src="https://media3.giphy.com/media/B4jfJqiIxvU08/giphy.gif?cid=ecf05e47tji3a1czna1nd07eh91d5rci1hgpzl7ihvfybbnv&rid=giphy.gif&ct=g"
            alt="Loading..."
          />
          <p className="home-mini-title">
            While Batman is suiting up, we're fetching the data. Thanks for
            waiting!
          </p>
        </div>
      )}
      {errorMessage && (
        <div className="home-container">
          <img
            src="https://media1.giphy.com/media/11mkwYN8k9v5T2/giphy.gif?cid=ecf05e47tji3a1czna1nd07eh91d5rci1hgpzl7ihvfybbnv&rid=giphy.gif&ct=g"
            alt="Loading..."
          />
          <p className="home-mini-title">
            Looks like the Bat-Signal is down. Please try again later.
          </p>
        </div>
      )}
      {batmanVolumeData && (
        <div className="home-container">
          <p className="home-content">
            This application is based on The Batman comic book series{' '}
            {batmanVolumeData.results.deck}
          </p>
          <h4 className="home-mini-title">
            <span className="highlight-numbers">
              {batmanVolumeData.results.issues.length}
            </span>{' '}
            issues,{' '}
            <span className="highlight-numbers">
              {batmanVolumeData.results.locations.length}
            </span>{' '}
            locations And{' '}
            <span className="highlight-numbers">
              {' '}
              {batmanVolumeData.results.characters.length}
            </span>{' '}
            characters
          </h4>

          <img src={batmanVolumeData.results.image.super_url} alt="" />
          <p className="foot-note">
            The first Issue: "{batmanVolumeData.results.first_issue.name}"
            started in {batmanVolumeData.results.start_year}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
