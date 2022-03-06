import React from "react";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var company = data.company;
  }

  return (
    <header id="home">
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <p>I'm</p>
            <h1>{name ?  `${name}` : null}</h1>
          </h1>
          <h3>
            <span>{occupation} {company}</span>.
          </h3>
          <hr />
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
