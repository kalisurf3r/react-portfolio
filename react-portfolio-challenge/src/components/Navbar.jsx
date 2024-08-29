export default function Navbar({currentPage, handlePageChange}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="nav-item">
                <h2>Arturo Ayala</h2>
              </div>
               <div className="nav-item">
                <a href="#aboutme"
                >About me</a>
               </div>
               <div className="nav-item">
                <a href="#portfolio"
                >Portfolio</a>
               </div>
               <div className="nav-item">
                <a href="#contact"
                >Contact</a>
               </div>
               <div className="nav-item">
                <a href="#resume"
                >Resume</a>
               </div>
            </div>
            </nav>
    )
}