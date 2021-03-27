import logo from "../../../assets/imgs/sulogo.jpg";
import classes from "./About.module.scss";
const About = (props) => {
    return (
        <section className={classes.About}>
            <figure className={classes.About__Figure}>
                <img src={logo} alt="MTU Logo" className={classes.About__Figure__Image} />
            </figure>
            <h1 className={classes.About__Caption}>Who are we?</h1>
        </section>
    );
};

export default About;
