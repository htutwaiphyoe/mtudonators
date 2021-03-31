import Button from "../../../components/shared/Button/Button";
import Heading from "../../../components/shared/Heading/Heading";
import Input from "./Input/Input";

import classes from "./Form.module.scss";

const Form = (props) => {
    return (
        <form className={classes.Form}>
            <Heading text="Get in touch with us" />
            {Object.keys(props.formData).map((el, i) => (
                <Input {...props.formData[el]} key={i} />
            ))}
            <Button>Send form</Button>
        </form>
    );
};

export default Form;
