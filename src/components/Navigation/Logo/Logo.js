import classes from "./Logo.module.scss";
const Logo = (props) => {
    return (
        <figure className={classes.Logo}>
            <img
                src="https://scontent.xx.fbcdn.net/v/t1.0-9/35059946_646538825699082_4898906501738921984_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=2cTt6LpJhRcAX_oNfGB&_nc_ht=scontent.xx&oh=7dfe3985fad1b1a65033b4ae1c16e060&oe=60875F28"
                alt="MTU logo"
                className={classes.Logo__Image}
            />
        </figure>
    );
};

export default Logo;
