import Table from '../sections/Table';
import React from 'react';

const Home = (props) => {
    const {data} = props;

    return(
        <div>
            <h1>What do I eat this week?</h1>
            <button>Pick my meals!</button>
            <Table data={data}/>
        </div>
    );
}

export default Home;