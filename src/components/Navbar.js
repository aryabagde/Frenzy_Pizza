import React, {useState} from 'react'; // typing rfce adds a snippet
import Logo from '../assets/dpslice.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

        const [openLinks, setOpenLinks] = useState(false);

        const toggleNavbar = () => {
            setOpenLinks(!openLinks);
        }

    return (
        <div className="navbar">
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className='hiddenLinks'>
                <div className='menudivs'><Link to='/'><strong>Home</strong></Link></div>
                <div className='menudivs'><Link to='/menu'><strong>Menu</strong></Link></div>
                <div className='menudivs'><Link to='/about'><strong>About</strong></Link></div>
                <div className='menudivs'><Link to='/contact'><strong>Contact</strong></Link></div>
                </div>
            </div>

            <div className='rightSide'>
                <Link to='/'><strong>Home</strong></Link>
                <Link to='/menu'><strong>Menu</strong></Link>
                <Link to='/about'><strong>About</strong></Link>
                <Link to='/contact'><strong>Contact</strong></Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
            
        </div>
    )
}

export default Navbar;
