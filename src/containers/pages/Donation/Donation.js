import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Paragraph from "../../../components/shared/Paragraph/Paragraph";
import Button from "../../../components/shared/Button/Button";
import Box from "../../../components/shared/Box/Box";
import * as donationData from "../../../api/donationData";
import classes from "./Donation.module.scss";
const Donation = (props) => {
    const location = useLocation();

    useEffect(() => {
        document.title = "Donation | MTU CDM Support";
    }, []);

    return (
        <section className={classes.Donation}>
            <Paragraph>လှူဒါန်းမှုများကို လစဉ်ထောက်ပံပေးလျက်ရှိပါသည်</Paragraph>
            <div className={classes.Donation__PhotoBox}>
                <div className={classes.Donation__Card}>
                    <figure>
                        <img
                            className={classes.Donation__PhotoBox__Photo}
                            src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-0/s640x640/164728492_2505865269710314_8984117300093244580_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_ohc=Nt_LEGJNur8AX_KqxFq&_nc_ht=scontent-sin6-2.xx&tp=7&oh=5cfa162566c5e40497b2e6de115d90c2&oe=6092E009"
                            alt=""
                        />
                    </figure>
                    <Paragraph>February လအတွက် ထောက်ပံ့မှုများ</Paragraph>
                    <Button link={true} url={`${location.pathname}/february`}>
                        Read detail
                    </Button>
                </div>
                <div className={classes.Donation__Card}>
                    <figure>
                        <img
                            className={classes.Donation__PhotoBox__Photo}
                            src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/167400206_2513465945616913_8531590648993454432_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_ohc=9pSmOHlq4BIAX8x6iZ-&_nc_ht=scontent-sin6-2.xx&oh=0494e3bca1748adeef27188dd9a2c073&oe=6093A3DE"
                            alt=""
                        />
                    </figure>
                    <Paragraph>March လအတွက် ထောက်ပံ့မှုများ</Paragraph>
                    <Button link={true} url={`${location.pathname}/march`}>
                        Read detail
                    </Button>
                </div>
            </div>
            <Box vertical>
                <Paragraph>
                    CDM သမားများ ဆက်လက်ရပ်တည်နိုင်ရန်အတွက် ထောက်ပံ့လိုပါက MTU Student's Union ၏ Page
                    Messanger ကနေတစ်ဆင့် ဆက်သွယ်မေးမြန်းလှူဒါန်းနိုင်ပါသည်။
                </Paragraph>
                <Button link={true} url="http://m.me/mtustudentunion">
                    Support Now
                </Button>
            </Box>
            <Paragraph>
                အောက်ဖော်ပြပါ service များဖြင့် လှူဒါန်းမှုကို ကောက်ခံလျက်ရှိပါသည်
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
