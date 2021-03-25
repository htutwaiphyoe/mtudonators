import { Fragment } from "react";
import classes from "./Navigation.module.scss";
import Logo from "./Logo/Logo";
import NavigationItem from "./NavigationItem/NavigationItem";

const navData = [
    { url: "/", icon: "home-sharp", text: "Home" },
    { url: "/about", icon: "information-circle-sharp", text: "About" },
    { url: "/donors", icon: "people-sharp", text: "Donors" },
    { url: "/contact", icon: "call-sharp", text: "Contact" },
];
const Navigation = (props) => {
    return (
        <Fragment>
            <Logo />
            <nav className={classes.Navigation}>
                <ul className={classes.Navigation__List}>
                    {navData.map((el, i) => (
                        <NavigationItem {...el} key={i} />
                    ))}
                </ul>
            </nav>
        </Fragment>
    );
};

export default Navigation;
