import React from "react";

import Element from './Element';

const ListeElements = function (props) {
    var { elems } = props;
    return (
        <ul>
            {elems.map((elem, index) => {
                return <Element key={index} elem={elem} />;
            })}
        </ul>
    );
};

export default ListeElements;