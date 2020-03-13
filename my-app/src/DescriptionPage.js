import React, { Component } from 'react';

const DescriptionPage = ({ match, location }) => {
    const {
      params: { description }
    } = match;
  
    return (
      <>
        <p>
          <strong>User ID: </strong>
          {description}
        </p>
        
      </>
    );
  };

export default DescriptionPage;