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
            src="https://media4.giphy.com/media/cs06FSkGD2ue4/giphy.gif?cid=ecf05e47wu3a06bugxa6ufq4owkpevjtufaalnkt8gnqt5su&rid=giphy.gif&ct=g"
            alt="Loading..."
          />
          <p className="home-mini-title">
            "The Batcave is processing your request."
          </p>
        </div>
      )}
      {errorMessage && (
        <div className="home-container">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjE5NDBlYzVmNTc1ZmNjZWEyZmI3YmZmYjMzZDRjYTc3OTJiNGU1MSZjdD1n/Sid4QgwDxJ8l2/giphy.gif"
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
