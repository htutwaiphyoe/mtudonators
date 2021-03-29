import { useRef, useEffect } from "react";

import Heading from "../../../components/shared/Heading/Heading";
import classes from "./About.module.scss";
const About = (props) => {
    const items = useRef([
        {
            icon: "duplicate",
            text: "CDM ဝန်ထမ်းများကို ထောက်ပံ့ရန်အတွက် MTU ကျောင်းသား/သူများထံမှ အလှူခံခြင်း",
        },
        {
            icon: "share",
            text: "ရရှိလာသော လှူဒါန်းငွေများကို CDM ဝန်ထမ်းများဆီသို့ ကူညီထောက်ပံ့ပေးခြင်း",
        },
        {
            icon: "bookmarks",
            text: "ပါဝင်ကူညီလှူဒါန်းသူများကို ကျောင်းသားသမ္မဂ္ဂမှ ဂုဏ်ပြု မှတ်တမ်းတင်ခြင်း",
        },
    ]);

    useEffect(() => {
        document.title = "About | MTU CDM Support";
    }, []);
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
                မင်းအောင်လှိုင်ဦးစီးသော စစ်တပ်သည် Feb 1 ရက်နေ့မှစ၍ အနိုင်ရပါတီ၏ အမတ်များနှင့်
                နိုင်ငံတော်အကြီးအကဲများကို ဖမ်းဆီးထိန်းသိမ်းကာ နိုင်ငံတော်အာဏာကို
                အတင်းအဓမ္မသိမ်းယူခဲ့သည်။ ထိုအချိန်မှစ၍ နိုင်ငံတစ်ဝှမ်း အစိုးရဝန်ထမ်းများသည် Civil
                Disobidience Movement ဟုခေါ်သော အာဏာဖီဆန်ခြင်း လှုပ်ရှားမှု၌ ပါဝင်လာကြသည်။
                ထိုကဲ့သို့ ပြည်သူ့ဘက်မှ ရပ်တည်သော ဝန်ထမ်းများကို တစ်ဖက်တစ်လှမ်းမှကူညီလျက်ရှိကြသည်။
                MTUSU သည် MTU ရှိ CDM ပါဝင်သော ဝန်ထမ်းများကို ထောက်ပံ့ရန် ဆုံးဖြတ်ခဲ့ကြသည်။
            </p>

            <Heading text="strategies" />
            <p className={classes.About__Paragraph}>MTUSU လုပ်ဆောင်နေသည့် အစီအစဉ်များ</p>
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
