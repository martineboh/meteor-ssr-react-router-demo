import React from 'react';
import {Link} from 'react-router-dom';
import Loadable from 'react-loadable';
import path from 'path';

const HeavyComponent = Loadable({
    loader: () => {
        return import('./HeavyComponent');
    },
    loading: () => <div>Loading</div>,
});

export default () => {
    return (
        <div>
            <h1>Contact Us Page</h1>
            <br/>
            <HeavyComponent />

            <Link to="/">Go back home</Link>
        </div>
    )
}
