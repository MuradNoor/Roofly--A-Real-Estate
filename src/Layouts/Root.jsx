import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;