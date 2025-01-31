import React from "react";
import Facebook from "../../assets/icons/Facebook.svg";
import instagram from "../../assets/icons/Instagram.svg";
import Ix from "../../assets/icons/VectorX.svg";
import In from "../../assets/icons/VectorIn.svg";
import youtube from "../../assets/icons/VectorYouTube.svg";
const Footer = ({ children }) => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>{children}</div>
        <div style={styles.mainContainer}>
          <div style={styles.leftStyle}>
            <h1 style={styles.logo}>LOGO</h1>

            <div>
              <h3 style={styles.subTitle}>Address:</h3>
              <a href="" style={styles.link}>
                USA, California
              </a>
            </div>

            <div>
              <h3 style={styles.subTitle}>Contact:</h3>
              <a href="" style={styles.link}>
                <p style={styles.text}>1800 123 4567</p>
              </a>
              <a href="" style={styles.link}>
                <p style={styles.text}>javaria.y2b@gmail.com</p>
              </a>
            </div>

            <div style={styles.iconss}>
              <img src={Facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={Ix} alt="" />
              <img src={In} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>

          <div style={styles.fhfhstyLe}>
            <div style={styles.rightDiv}>
              {[
                "Link One",
                "Link Two",
                "Link Three",
                "Link Four",
                "Link Five",
              ].map((link) => (
                <div style={styles.innerDiv} key={link}>
                  <a href="" style={styles.link}>
                    {link}
                  </a>
                </div>
              ))}
            </div>
            <div style={styles.rightDiv}>
              {[
                "Link One",
                "Link Two",
                "Link Three",
                "Link Four",
                "Link Five",
              ].map((link) => (
                <div style={styles.innerDiv} key={link}>
                  <a href="" style={styles.link}>
                    {link}
                  </a>
                </div>
              ))}
            </div>
            <div style={styles.rightDiv}>
              {[
                "Link Six",
                "Link Seven",
                "Link Eight",
                "Link Nine",
                "Link Ten",
              ].map((link) => (
                <div style={styles.innerDiv} key={link}>
                  <a href="" style={styles.link}>
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h3 style={styles.footerText}>© 2023 Javaria. All rights reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    width: "100%",
    color: "white",
  },
  iconss: {
    display: "flex",
    gap: "20px",
  },
  container: {
    backgroundColor: "#333333",
    width: "100%",
    height: "520px",
    padding: "10px",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "50px 100px",
    borderBottom: "1px solid white",
  },
  leftStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "50px",
  },
  fhfhstyLe: {
    display: "flex",
    gap: "40px",
  },
  rightDiv: {
    display: "flex",
    gap: "30px",
    flexDirection: "column",
  },
  link: {
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
  },
  logo: {
    cursor: "pointer",
  },
  subTitle: {
    paddingBottom: "10px",
  },
  footerText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "30px",
    cursor: "pointer",
  },
};
