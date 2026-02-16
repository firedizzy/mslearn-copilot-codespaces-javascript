/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    primaryColor,
    twitter,
    youTube,
  } = props;
  const socials = [
    email && { name: "email", href: `mailto:${email}`, icon: envelopeIcon },
    devDotTo && { name: "devto", href: `https://dev.to/${devDotTo}`, icon: devDotToIcon },
    gitHub && { name: "github", href: `https://github.com/${gitHub}`, icon: gitHubIcon },
    instagram && { name: "instagram", href: `https://www.instagram.com/${instagram}`, icon: instagramIcon },
    linkedIn && { name: "linkedin", href: `https://www.linkedin.com/in/${linkedIn}`, icon: linkedInIcon },
    medium && { name: "medium", href: `https://medium.com/@${medium}`, icon: mediumIcon },
    twitter && { name: "twitter", href: `https://twitter.com/${twitter}`, icon: twitterIcon },
    youTube && { name: "youtube", href: `https://www.youtube.com/c/${youTube}`, icon: youTubeIcon },
  ].filter(Boolean);

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100vw",
      }}
    >
      <div className="social-icons" style={{ display: "flex", justifyContent: "center", gap: "2.5rem" }}>
        {socials.map((s, i) => (
          <a
            key={s.name}
            href={s.href}
            {...(s.name === "email" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="social-link"
            style={{ ["--delay"]: `${i * 120}ms` }}
            aria-label={s.name}
          >
            <img src={s.icon} alt={s.name} className="socialIcon" />
          </a>
        ))}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,

};

export default Footer;
