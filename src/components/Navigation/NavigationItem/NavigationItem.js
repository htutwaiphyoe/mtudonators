import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.scss";
const NavigationItem = ({ url, icon, text }) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink
                to={url}
                className={classes.NavigationItem__Link}
                activeClassName={classes.NavigationItem__Active}
                exact
            >
                <ion-icon name={icon}></ion-icon>
                <span>{text}</span>
            </NavLink>
        </li>
    );
};

export default NavigationItem;
