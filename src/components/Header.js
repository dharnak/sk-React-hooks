import React from 'react'

const Header = () => {
  return (
    <div className='d-flex justify-content-between align-items-center p-2 bg-primary text-light'>
        <h1 className='fs-3'>React Hooks</h1>
        <nav className="nav justify-content-end">
            <a className="m-2 p-2 text-light" role='button' style={{textDecoration: 'none'}} href="/">useState</a>
            <a className="m-2 p-2 text-light" role='button' style={{textDecoration: 'none'}} href="/useref">useRef</a>
            <a className="m-2 p-2 text-light" role='button' style={{textDecoration: 'none'}} href="/useeffect">useEffect</a>
            <a className="m-2 p-2 text-light" role='button' style={{textDecoration: 'none'}} href="/usecontext">useContext</a>
        </nav>
    </div>
  )
}

export default Header