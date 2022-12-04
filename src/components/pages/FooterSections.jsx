import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../layout/Footer";
import LoginFooter from "../layout/LoginFooter";

function FooterSections() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <section>
        <div className="texts">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on Smart TVs, Playstation,
            <span className="edit-text">
              Xbox, Chromecast, Apple TV, Blu-ray
            </span>
            <span className="edit-text">players, and more.</span>
          </p>
        </div>
        <div className="media s1">
          <div>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
            <video autoPlay playsInline muted loop controls>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>
      <section>
        <div className="texts">
          <h1>Download your shows to watch offline.</h1>
          <p>
            Save your favorites easily and always have
            <span className="edit-text">something to watch.</span>
          </p>
        </div>
        <div className="media">
          <img
            className="mobile"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          />
          <div className="download">
            <img
              className="cover"
              src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="image"
            />
            <span>Downloading...</span>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt="gif"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="texts">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on
            <span className="edit-text">
              your phone, tablet, laptop, and TV.
            </span>
          </p>
        </div>
        <div className="media"></div>
      </section>
      <section className="last">
        <div className="texts">
          <h1>Create profiles for kids.</h1>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—
            <span className="edit-text">free with your membership.</span>
          </p>
        </div>
        <div className="media">
          <img
            alt="youngkid"
            src="https://occ-0-6326-300.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
          />
        </div>
      </section>
      <div className="faq cta">
        <h1>Frequently Asked Quaestions</h1>
        <div className="questions">
          <div className="question">
            <input type="checkbox" id="q1" />
            <label className="header" for="q1">
              What is Netflix?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            <div className="answer">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. <br />
              <br />
              You can watch as much as you want, whenever you want without a
              single commercial – all for one low monthly price. There's always
              something new to discover and new TV shows and movies are added
              every week!
            </div>
          </div>
          <div className="question">
            <input type="checkbox" id="q2" />
            <label className="header" for="q2">
              How much does Netflix cost
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            <div className="answer">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              US$3.99 to US$11.99 a month. No extra costs, no contracts.
            </div>
          </div>
          <div className="question">
            <input type="checkbox" id="q3" />
            <label className="header" for="q3">
              Where can I watch?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            <div className="answer">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. <br />
              <br /> You can also download your favorite shows with the iOS,
              Android, or Windows 10 app. Use downloads to watch while you're on
              the go and without an internet connection. Take Netflix with you
              anywhere.
            </div>
          </div>
          <div className="question">
            <input type="checkbox" id="q4" />
            <label className="header" for="q4">
              How do I cancel?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            <div className="answer">
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </div>
          </div>
          <div className="question">
            <input type="checkbox" id="q5" />
            <label className="header" for="q5">
              What can I watch on Netflix?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            <div className="answer">
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </div>
          </div>
          <div className="question">
            <input type="checkbox" id="q6" />
            <label className="header" for="q6">
              Is Netflix good for kids?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            <div className="answer">
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space. <br /> <br /> Kids profiles come with
              PIN-protected parental controls that let you restrict the maturity
              rating of content kids can watch and block specific titles you
              don’t want kids to see.
            </div>
          </div>
        </div>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <form>
          <div>
            <input type="email" />
            <span>Email address</span>
          </div>
          <div>
            <button onClick={handleSubmit}>
              Get Started
              <IoIosArrowForward />
            </button>
          </div>
        </form>
      </div>
      <div className="footsection">
        <LoginFooter />
      </div>
    </div>
  );
}

export default FooterSections;
