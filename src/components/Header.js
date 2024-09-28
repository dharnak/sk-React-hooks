import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">useState</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/useref">useRef</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/useeffect">useEffect</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/usecontext">useContext</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header