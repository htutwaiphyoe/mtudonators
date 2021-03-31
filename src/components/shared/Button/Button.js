import classes from "./Button.module.scss";

const Button = (props) => {
    if (props.link) {
        return (
            <a href={props.url} className={classes.Button}>
                {props.children}
            </a>
        );
    }
    return (
        <button type="submit" onClick={props.onClick} className={classes.Button}>
            {props.children}
        </button>
    );
};

export default Button;
