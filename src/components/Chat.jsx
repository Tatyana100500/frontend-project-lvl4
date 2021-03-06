/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import routes from '../routes.js';
import { setInitialState } from '../slices/channelsInfoSlice.js';
import { useAuth, useSocket } from '../hooks/index.js';
import Channels from './Channels.jsx';
import Messages from './Messages.jsx';

const getToken = () => localStorage.getItem('token');

const getAuthorizationHeader = () => {
  const token = getToken();

  if (token) {
    return { Authorization: `Bearer ${token}` };
  }

  return {};
};

const Chat = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const socket = useSocket();
  const { t } = useTranslation();

  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = routes.data();
      try {
        const res = await axios.get(url, { headers: getAuthorizationHeader() });
        dispatch(setInitialState(res.data));
        socket.auth = { token: getToken() };
        setContentLoaded(true);
      } catch (e) {
        if (e.isAxiosError) {
          auth.logOut();
          return;
        }
        throw e;
      }
    };
    fetchData();
  }, []);

  return contentLoaded ? (
    <Row className="flex-grow-1 h-75 pb-3">
      <Channels />
      <Messages />
    </Row>
  ) : (
    <Row className="align-items-center h-100">
      <Col className="text-center">
        <Spinner animation="grow" variant="primary" />
        <p>{t('texts.pleasewait')}</p>
      </Col>
    </Row>
  );
};

export default Chat;
