import { useEffect } from "react";

import Paragraph from "../../../components/shared/Paragraph/Paragraph";
import Heading from "../../../components/shared/Heading/Heading";
import Button from "../../../components/shared/Button/Button";
import Box from "../../../components/shared/Box/Box";
import * as donationData from "../../../api/donationData";
import classes from "./Donation.module.scss";
const Donation = (props) => {
    useEffect(() => {
        document.title = "CDM Support Team - MTU";
    }, []);

    return (
        <section className={classes.Donation}>
            <Heading text="Supports" />
            <Paragraph>လှူဒါန်းမှုများကို CDMဝန်ထမ်းများထံ လစဉ်ထောက်ပံ့ပေးလျက်ရှိပါသည်။</Paragraph>
            <div className={classes.Donation__PhotoBox}>
                {donationData.cards.map((c, i) => (
                    <div className={classes.Donation__Card} key={i}>
                        <figure>
                            <img
                                className={classes.Donation__PhotoBox__Photo}
                                src={c.image}
                                alt={`${c.month} donations`}
                                loading="lazy"
                            />
                        </figure>
                        <Paragraph>{c.month} လအတွက် ထောက်ပံ့မှုများ</Paragraph>
                        <Paragraph>{c.description}</Paragraph>
                    </div>
                ))}
            </div>
            <Box vertical>
                <Paragraph unmuted={true}>
                    CDM သမားများ ဆက်လက်ရပ်တည်နိုင်ရန်အတွက် ထောက်ပံ့လိုပါက MTU Student's Union ၏ Page
                    Messanger ကနေတစ်ဆင့် ဆက်သွယ်မေးမြန်းလှူဒါန်းနိုင်ပါသည်။
                </Paragraph>
                <Button link={true} url="http://m.me/mtustudentunion">
                    Support Now
                </Button>
            </Box>
            <Paragraph>
                အောက်ဖော်ပြပါ service များဖြင့် လှူဒါန်းမှုကို ကောက်ခံလျက်ရှိပါသည်။
            </Paragraph>
            <div className={classes.Donation__Container}>
                <Paragraph>Mobile Payment များ</Paragraph>
                <div className={`${classes.Donation__Services} ${classes.Donation__Services_Pay}`}>
                    {donationData.services.payments.map((el, i) => (
                        <figure className={classes.Donation__ImageContainer} key={i}>
                            <img
                                src={el.src}
                                alt={el.caption}
                                className={classes.Donation__ImageContainer__Image}
                                loading="lazy"
                            />
                            <Paragraph>{el.caption}</Paragraph>
                        </figure>
                    ))}
                </div>
            </div>
            <div className={classes.Donation__Container}>
                <Paragraph>Bank Service များ</Paragraph>
                <div className={`${classes.Donation__Services} ${classes.Donation__Services_Bank}`}>
                    {donationData.services.banks.map((el, i) => (
                        <figure className={classes.Donation__ImageContainer} key={i}>
                            <img
                                src={el.src}
                                alt={el.caption}
                                className={classes.Donation__ImageContainer__Image}
                                loading="lazy"
                            />
                            <Paragraph>{el.caption}</Paragraph>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Donation;
