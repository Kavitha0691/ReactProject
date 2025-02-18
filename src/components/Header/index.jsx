import styles from './header.module.css'
import SubTitle from '../SubTitle';

const Header = () => {
    const title = "My New React Project!";
    const subtitle = "The Future of Web Development"

    return (
        <header className = {styles.header}>
            <h1 className = {styles.pageTitle}>{title}</h1>
            <h2 className = {styles.subTitle}>{subtitle}</h2>

            <SubTitle/>
        </header>
    )
}

export default Header;