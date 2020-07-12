import React from "react";

import Element from "./Element";

const ListeElements = function (props) {
    console.log(props.match);
    var { elems } = props;
    return props.match.path.match(/\/edit/) ? (
        <ul>
            <Element elem={elems[props.match.params.index]} />
        </ul>
    ) : (
        <ul>
            {elems.map((elem, index) => {
                return <Element key={index} elem={elem} />;
            })}
        </ul>
    );
};

export default ListeElements;
