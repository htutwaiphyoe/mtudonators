import { useRef } from "react";

import Heading from "../../../components/shared/Heading/Heading";
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
                <img
                    src="https://scontent.xx.fbcdn.net/v/t1.0-9/61757485_2033346613628851_3954944708089741312_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=r9bGr-Ih6JgAX9qyVuH&_nc_ht=scontent.xx&oh=597c1d01af4bcc5d04a79c628096dee9&oe=6087E63D"
                    alt="MTU Logo"
                    className={classes.About__Figure__Image}
                />
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
