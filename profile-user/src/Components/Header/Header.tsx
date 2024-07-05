import style from './header.module.css';

const Header = () => {

    return (
        <header className={style.container}>
            <h1>UserProfile</h1>
            <nav className={style.navigation}>
                {/* Add navigation links here */}
            </nav>
        </header>
    );

}

export default Header;