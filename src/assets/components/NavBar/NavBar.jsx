import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import classes from "./NavBar.module.css";
import { useTranslation } from "react-i18next";
//assets

import logo from "../../img/ehub_logo.png";
import es from "../../img/spain.png";
import en from "../../img/uk.png";
import de from "../../img/de.png";

const logoContainer = (
  <div className={classes["logo-container"]}>
    <img className={classes.logo} src={logo} alt="emigration hub logo" />
    <h1 className={classes["logo-title-h1"]}>Emigration</h1>
    <h2 className={classes["logo-title-h2"]}>hub</h2>
  </div>
);

const langSelection = [
  {
    lang: "en",
    icon: en,
  },
  {
    lang: "es",
    icon: es,
  },
];

const NavBar = () => {
  // LanguageSwitcher.js

  const { i18n } = useTranslation();

  // State to keep track of the count
  const [count, setCount] = useState(0);

  // Function to handle button click and toggle the count
  const handleToggle = () => {
    // Toggle the count between 0 and 1
    const newCount = count === 0 ? 1 : 0;
    setCount(newCount);
    i18n.changeLanguage(langSelection[count].lang);
  };

  const changeLanguage = (lng) => {
    console.log(lng);
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();
  return (
    <>
      <Navbar
        key="lg"
        expand="lg"
        className="bg-body-tertiary mb-3"
        style={{ background: "red" }}
      >
        <Container fluid className="align-items-baseline">
          <Navbar.Brand href="#"> {logoContainer}</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                {logoContainer}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-5">
                <Nav.Link href="#action1">
                  <h2>Home</h2>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <h2>Links</h2>
                </Nav.Link>
                <Nav.Link>
                  <img
                    className={classes["lang-icon"]}
                    src={langSelection[count].icon}
                    onClick={handleToggle}
                  />
                </Nav.Link>
                {/* <NavDropdown
                  title={globeIcon}
                  id={`offcanvasNavbarDropdown-expand-lg`}
                  className=" pe-5"
                >
                  <NavDropdown.Item onClick={() => changeLanguage("en")}>
                    <p className={classes["language-picker"]}>En</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => changeLanguage("es")}>
                    <p className={classes["language-picker"]}>Es</p>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item></NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
