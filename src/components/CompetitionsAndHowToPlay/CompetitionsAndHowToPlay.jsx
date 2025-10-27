import React from 'react';
import './CompetitionsAndHowToPlay.css';
import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';
import icon3 from '../../assets/icon3.svg';

const CompetitionsAndHowToPlay = () => {
  return (
    <section className="home-competitions-how-to-play">
      {/* Live Competitions Section */}
      <div className="home-live-competitions">
        <h2 className="home-section-title">Live Competitions</h2>
        <p className="home-section-description">
          Choose the prize you want to win and grab yourself some entries!
        </p>
        <div className="home-no-products">
          <p>No products found</p>
        </div>
        <button
          className="home-more-competitions-btn"
          onClick={() => (window.location.href = '/live-competition')}
        >
          More Competitions
        </button>
      </div>

      {/* How To Play Section */}
      <div className="home-how-to-play">
        <h2 className="home-section-title">How To Play</h2>
        <p className="home-section-description">
          Follow the simple 3-step process below to get involved in our competitions.
        </p>

        <div className="home-steps-container">
          <div className="home-step-card">
            <div className="home-step-icon">
              <div className="home-icon-circle">
                <img src={icon1} alt="Pick a Prize" className="home-icon-image" />
              </div>
            </div>
            <h3 className="home-step-title">PICK A PRIZE!</h3>
            <p className="home-step-description">
              Choose which prizes you'd love to win, pick your tickets and complete our secure checkout!
            </p>
          </div>

          <div className="home-step-card">
            <div className="home-step-icon">
              <div className="home-icon-circle">
                <img src={icon2} alt="Watch Live Draw" className="home-icon-image" />
              </div>
            </div>
            <h3 className="home-step-title">WATCH THE LIVE DRAW!</h3>
            <p className="home-step-description">
              Follow us on social media and watch the live draw to see if you win! <br />
              We use Google's Random Number Generator to pick our winners and it's almost as random as we are!
            </p>
          </div>

          <div className="home-step-card">
            <div className="home-step-icon">
              <div className="home-icon-circle">
                <img src={icon3} alt="Golden Raffle Winner" className="home-icon-image" />
              </div>
            </div>
            <h3 className="home-step-title">ARE YOU A GOLDEN RAFFLE?</h3>
            <p className="home-step-description">
              If your number comes up trumps, we will contact you and arrange for delivery of your prize!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionsAndHowToPlay;
