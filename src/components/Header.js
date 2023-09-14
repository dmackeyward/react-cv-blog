import classes from "./Header.module.css"
import icon from "../assets/icon.jpg"

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/"><img src={icon} alt="Tennis Racquet Icon"></img></a>
                        </li>
                        <li>
                            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                                <button>Download CV</button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header