import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const DescriptionPage = ({ match, location }) => {
    const {
        params: { description }
    } = match;

    return (
        <>
            <Link to="/"><h2 className="center ">Back to home</h2></Link>
            <p><strong>User ID: </strong>{description}</p>
        </>
    );
};

export default connect()(JobLink);