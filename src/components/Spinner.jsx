import React from 'react';
import { Spinner as SpinnerBS } from 'react-bootstrap';

const Spinner = () => {
  return (
    <SpinnerBS
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  );
};
export default Spinner;
