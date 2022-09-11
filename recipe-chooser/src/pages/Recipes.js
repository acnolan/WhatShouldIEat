import React from 'react';
import Table from "../sections/Table";

const Recipes = (props) => {
    const {data} = props;

    return (
        <div>
            <Table data={data}/>
        </div>
    )
}

export default Recipes;