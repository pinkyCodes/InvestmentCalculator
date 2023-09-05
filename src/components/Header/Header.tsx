import logo from '../../assets/scrooge-mcduck.png';
import classes from './Header.module.css';

const Header = (): JSX.Element => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    );
};

export default Header;