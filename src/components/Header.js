import classes from "./Header.module.css"
import icon from "../assets/icon.jpg"
import Button from '@mui/material/Button';
import cv from "../documents/David Mackey-Ward - CV.pdf"

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul className={classes.ul}>
                        <li className={classes.left}>
                            <a href="https://dmackeyward.github.io/react-cv-blog/"><img className={classes.logo} src={icon} alt="Tennis Racquet Navbar Logo"></img></a>
                        </li>
                        <li className={classes.right}>
                            <a href={cv} target="_blank" rel="noreferrer">
                            <Button variant="outlined" color="success">View CV</Button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header