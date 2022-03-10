import React from "react";
import Resume from './SaiKumar_Vandrangi.pdf'
const About = ({ data }) => {
  if (data) {

    var profilepic = "images/" + data.image;
    var bio = data.bio;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns download">
              <p>
                <a href={Resume} className="button" download="SaiKumar_Vandrangi.pdf">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
