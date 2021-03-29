import { useEffect } from "react";

import icon from "../../../assets/imgs/contact.svg";
import Heading from "../../../components/shared/Heading/Heading";
import classes from "./Contact.module.scss";
const Contact = (props) => {
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

                <p className={classes.Contact__Paragraph}>
                    CDM ထောက်ပံ့ရေးနှင့်ပတ်သတ်၍ အသေးစိတ်သိရှိလို၍ဖြစ်စေ၊ မေးမြန်းချင်လို၍ဖြစ်စေ SU
                    ထံသို့ အောက်ဖော်ပြပါနည်းလမ်းများနှင့် ဆက်သွယ်နိုင်ပါသည်။
                </p>
                <ul className={classes.Contact__List}>
                    <li
                        className={`${classes.Contact__List__Item} ${classes.Contact__List__Item_1}`}
                    >
                        <a
                            href="https://m.facebook.com/mtustudentunion"
                            className={` ${classes.Contact__List__Item_1}`}
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li className={`${classes.Contact__List__Item} `}>
                        <a
                            href="http://m.me/mtustudentunion"
                            className={` ${classes.Contact__List__Item_2}`}
                        >
                            <i className="fab fa-facebook-messenger"></i>
                        </a>
                    </li>
                </ul>
                <p className={classes.Contact__Footer}>
                    Copyright &copy; 2021 | MTU Students' Union
                </p>
            </div>
            <form className={classes.Contact__Form}>
                <Heading text="Get in touch with us" />
                <input
                    type="text"
                    className={classes.Contact__Form__Input}
                    required
                    placeholder="Name"
                />
                <input
                    type="email"
                    className={classes.Contact__Form__Input}
                    required
                    placeholder="Email"
                />
                <select name="" id="" className={classes.Contact__Form__Input}>
                    <option value=""> - Select - </option>
                    <option value="">Feedback</option>
                    <option value="">Be a part of us</option>
                    <option value="">Report bugs or errors</option>
                </select>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className={classes.Contact__Form__Input}
                    required
                    placeholder="Message"
                ></textarea>
                <button className={classes.Contact__Btn}>Send form</button>
            </form>
        </section>
    );
};
export default Contact;
