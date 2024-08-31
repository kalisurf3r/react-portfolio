import {Link, useLocation} from 'react-router-dom';

export default function Navbar() {
  const currentPage = useLocation().pathname;

  const nameStyle = {
    fontFamily: 'Open Sans',
    color: 'white',
    border: '1px solid white',
    padding: '5px',
  }

    return (
        <nav className="navbar navbar-expand-lg bg-black bg-gradient">
            <div className="container-fluid">
              <div className="nav-item">
                <h2 className="text-white" style={nameStyle} >Arturo Ayala</h2>
              </div>
              <ul className="nav nav-tabs" style={{fontFamily: 'Open Sans'}}>
               <li className="nav-item">
                <Link to="/aboutme"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >About me</Link>
               </li>
               <li className="nav-item">
                <Link to="/portfolio"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >Portfolio</Link>
               </li>
               <li className="nav-item">
                <Link to="/contact"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >Contact</Link>
               </li>
               <li className="nav-item">
                <Link to="/resume"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >Resume</Link>
               </li>
               </ul>
            </div>
            </nav>
    )
}