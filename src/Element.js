import React from 'react';

var Element = function(props) {
    const {elem} = props;
    return(
        <li>{elem}</li>
    );
}

export default Element;