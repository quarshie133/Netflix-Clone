import React from 'react'

function FooterSections() {
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
      <section>
        <div className="texts">
          <h1>Create profiles for kids.</h1>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—<span className="edit-text">free with your membership.</span>
          </p>
        </div>
        <div className="media">
          <img alt="youngkid" src="https://occ-0-6326-300.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" />
        </div>
      </section>
      </div>
  )
}

export default FooterSections