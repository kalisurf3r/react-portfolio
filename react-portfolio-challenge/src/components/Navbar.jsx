export default function Navbar({currentPage, handlePageChange}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="nav-item">
                <h2>Arturo Ayala</h2>
              </div>
               <div className="nav-item">
                <a href="#aboutme"
                onClick={() => handlePageChange('Aboutme')}
                className={currentPage === 'Aboutme' ? 'nav-link active' : 'nav-link'}
                >About me</a>
               </div>
               <div className="nav-item">
                <a href="#portfolio"
                 onClick={() => handlePageChange('Portfolio')}
                 className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >Portfolio</a>
               </div>
               <div className="nav-item">
                <a href="#contact"
                 onClick={() => handlePageChange('Contact')}
                 className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</a>
               </div>
               <div className="nav-item">
                <a href="#resume"
                 onClick={() => handlePageChange('Resume')}
                 className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >Resume</a>
               </div>
            </div>
            </nav>
    )
}