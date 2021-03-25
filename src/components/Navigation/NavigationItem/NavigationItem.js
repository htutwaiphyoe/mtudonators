import classes from "./NavigationItem.module.scss";
const NavigationItem = ({ url, icon, text }) => {
    return (
        <li className={classes.NavigationItem}>
            <a href={url} className={classes.NavigationItem__Link}>
                <ion-icon name={icon}></ion-icon>
                <span>{text}</span>
            </a>
        </li>
    );
};

export default NavigationItem;
