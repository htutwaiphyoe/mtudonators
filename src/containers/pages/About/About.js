import { useRef } from "react";

import Heading from "../../../components/shared/Heading/Heading";
import logo from "../../../assets/imgs/sulogo.jpg";
import classes from "./About.module.scss";
const About = (props) => {
    const items = useRef([
        {
            icon: "duplicate",
            text:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis rem iustoneque",
        },
        {
            icon: "share",
            text:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis rem iustoneque",
        },
        {
            icon: "bookmarks",
            text:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis rem iustoneque",
        },
    ]);
    return (
        <section className={classes.About}>
            <figure className={classes.About__Figure}>
                <img src={logo} alt="MTU Logo" className={classes.About__Figure__Image} />
            </figure>
            <Heading text="about us" />
            <p className={classes.About__Paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, neque nam eos
                nostrum perferendis repellat expedita iusto vel voluptatibus quam. Necessitatibus,
                commodi explicabo! Modi ex, maxime atque maiores sunt quas! Doloremque nihil
            </p>

            <Heading text="strategies" />
            <p className={classes.About__Paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className={classes.About__List}>
                {items.current.map((item, i) => (
                    <div className={classes.About__List__Item} key={i}>
                        <ion-icon
                            className={classes.About__List__Icon}
                            name={`${item.icon}-outline`}
                        ></ion-icon>
                        <p className={classes.About__Paragraph}>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
