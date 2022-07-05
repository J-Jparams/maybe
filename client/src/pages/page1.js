import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
 return (
    <div>
        <h1>This is Page 1!</h1>
        <Link>
            <h2>Link For Page 2!</h2>
        </Link>
    </div>
 )
}

export default Page1;