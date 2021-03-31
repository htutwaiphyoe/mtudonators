import { useEffect, useRef } from "react";

import icon from "../../../assets/imgs/contact.svg";
import Paragraph from "../../../components/shared/Paragraph/Paragraph";
import Form from "../../../components/shared/Form/Form";
import classes from "./Contact.module.scss";
const Contact = (props) => {
    const media = useRef([
        { url: "https://m.facebook.com/mtustudentunion", icon: "facebook" },
        { url: "http://m.me/mtustudentunion", icon: "facebook-messenger" },
    ]);

    const contactForm = {
        name: {
            type: "input",
            config: {
                type: "text",
                placeholder: "Name",
                required: true,
            },
        },
        email: {
            type: "input",
            config: {
                type: "email",
                placeholder: "Email",
                required: true,
            },
        },
        select: {
            type: "select",
            options: [
                { value: "0", shownValue: "- Select -" },
                { value: "1", shownValue: "Feedback" },
                { value: "2", shownValue: "Be a part of us" },
                { value: "3", shownValue: "Report bugs or errors" },
            ],
        },
        message: {
            type: "textarea",
            config: {
                required: true,
                placeholder: "Message",
            },
        },
    };
    useEffect(() => {
        document.title = "Contact | MTU CDM Support";
    }, []);
    return (
        <section className={classes.Contact}>
            <div className={classes.Contact__Container}>
                <figure className={classes.Contact__ImageContainer}>
                    <img
                        src={icon}
                        alt="Contact Icon"
                        className={classes.Contact__ImageContainer__Image}
                    />
                </figure>

                <Paragraph>
                    CDM ထောက်ပံ့ရေးနှင့်ပတ်သတ်၍ အသေးစိတ်သိရှိလို၍ဖြစ်စေ၊ မေးမြန်းချင်လို၍ဖြစ်စေ MTU
                    CDM Support Team ထံသို့ အောက်ဖော်ပြပါနည်းလမ်းများနှင့် ဆက်သွယ်နိုင်ပါသည်။
                </Paragraph>
                <ul className={classes.Contact__List}>
                    {media.current.map((el, i) => (
                        <li className={`${classes.Contact__List__Item}`} key={i}>
                            <a
                                href={el.url}
                                className={`${classes[`Contact__List__Item_${i + 1}`]}`}
                            >
                                <i className={`fab fa-${el.icon}`}></i>
                            </a>
                        </li>
                    ))}
                </ul>
                <Paragraph>
                    Copyright &copy; 2021 | MTU Students' Union <br />
                    Terms & Conditions
                </Paragraph>
            </div>
            <Form formData={contactForm} />
        </section>
    );
};
export default Contact;
