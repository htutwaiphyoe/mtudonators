import classes from "./Input.module.scss";

const Input = (props) => {
    switch (props.type) {
        case "textarea":
            return (
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className={classes.Input}
                    {...props.config}
                />
            );
        case "select":
            return (
                <select name="" id="" className={classes.Input}>
                    {props.options.map((option, i) => (
                        <option value={option.value} key={i}>
                            {option.shownValue}
                        </option>
                    ))}
                </select>
            );
        default:
            return <input type="text" className={classes.Input} {...props.config} />;
    }
};

export default Input;
