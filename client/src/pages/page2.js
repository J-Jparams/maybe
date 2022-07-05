import React from 'react';
import { Link } from 'react-router-dom';


const Page2 = () => {
    return (
        <div>
            <h1>This is Page 2!</h1>
            <Link>
                <h2>Back To Page 1</h2>
            </Link>

        </div>
     );
};

export default Page2;