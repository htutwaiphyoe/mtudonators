import logo from "../../../assets/imgs/logo192.png";
import classes from "./Logo.module.scss";
const Logo = (props) => {
    return (
        <figure className={classes.Logo}>
            <img src={logo} alt="MTU logo" className={classes.Logo__Image} />
        </figure>
    );
};

export default Logo;
