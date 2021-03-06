import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { useAuth } from '../hooks/index.js';

const languages = {
  en: 'English',
  ru: 'Русский',
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleSwitchLanguage = (lang) => () => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  const renderLanguages = () => (
    <>
      {Object.entries(languages).map(([lang, name]) => (
        <NavDropdown.Item
          key={_.uniqueId()}
          active={lang === i18n.language}
          onClick={handleSwitchLanguage(lang)}
        >
          {name}
        </NavDropdown.Item>
      ))}
    </>
  );

  return (
    <NavDropdown title={languages[i18n.language]}>
      {renderLanguages()}
    </NavDropdown>
  );
};

const AuthSection = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  const renderSection = () => {
    if (auth.loggedIn) {
      return (
        <>
          <Navbar.Text>
            {localStorage.getItem('username')}
            &nbsp;
            |
          </Navbar.Text>
          <Nav.Link onClick={auth.logOut}>{t('buttons.logOut')}</Nav.Link>
        </>
      );
    }

    return <Nav.Link as={Link} to="/login">{t('buttons.logIn')}</Nav.Link>;
  };

  return (
    <Navbar.Collapse>
      {renderSection()}
    </Navbar.Collapse>
  );
};

const AppNavbar = () => (
  <Navbar className="mb-3" bg="light">
    <Navbar.Brand as={Link} to="/">Hexlet Chat</Navbar.Brand>
    <Nav className="mr-auto">
      <LanguageSwitcher />
    </Nav>
    <Nav>
      <AuthSection />
    </Nav>
  </Navbar>
);

export default AppNavbar;
