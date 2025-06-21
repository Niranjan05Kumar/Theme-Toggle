import "../index.css"
import Switch from "./Switch"

const Nav = () => {
    return (
        <header className="navbar">
            <div className="container">
                <a href="#" className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="logo-icon" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="logo-text">Tailblocks</span>
                </a>
                <nav className="nav-links">
                    <a href="#">First Link</a>
                    <a href="#">Second Link</a>
                    <a href="#">Third Link</a>
                    <a href="#">Fourth Link</a>
                </nav>
                <Switch />
            </div>
        </header>
    )
}

export default Nav
