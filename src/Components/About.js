import React from "react";

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
                <a href='../../SaiKumar_Vandrangi.pdf' className="button" download>
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
