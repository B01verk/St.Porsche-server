import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav className="nav-main nice-blur">
            <Link id="screen-logo" to="/" className="logo">
                <img width="70px" className="logo-img" src="https://pngimg.com/uploads/porsche/small/porsche_PNG10626.png" />
                <div className="logo-text">
                    <span>St.Porsche</span>
                    <span>официальный диллер</span>
                </div>
            </Link>

            <ul className="nav-list">
                <NavLink to="/gallery"><li className="nav-list-item">Каталог</li></NavLink>
                <NavLink to="/reviews"><li className="nav-list-item">Отзывы</li></NavLink>
                <NavLink to="/about"><li className="nav-list-item">О нас</li></NavLink>
            </ul>
	    </nav>
    )
}

export default Header