import { useEffect } from "react";

import Table from "../../../components/Table/Table";
import classes from "./Donor.module.scss";
const Donor = (props) => {
    useEffect(() => {
        document.title = "Donation | MTU CDM Support";
    }, []);
    return (
        <section className={classes.Donor}>
            <div className={classes.Donor__Container}>
                <p className={classes.Donor__Title}>
                    CDM သမားများ ဆက်လက်ရပ်တည်နိုင်ရန်အတွက် ထောက်ပံ့လိုပါက MTU Student's Union ၏ Page
                    Messanger ကနေတစ်ဆင့် ဆက်သွယ်မေးမြန်းလှူဒါန်းနိုင်ပါသည်။
                </p>
                <a href="http://m.me/mtustudentunion" className={classes.Donor__Btn}>
                    Donate now
                </a>
            </div>

            {/* <Heading text="Services" /> */}
            <p className={classes.Donor__Label}>
                အောက်ဖော်ပြပါ service များဖြင့် လှူဒါန်းမှုကို ကောက်ခံလျက်ရှိပါသည်
            </p>
            <div className={classes.Donor__Container}>
                {/* <Heading text="Mobile Payments" /> */}
                <p className={classes.Donor__Label}>Mobile Payment များ</p>
                <div className={`${classes.Donor__Services} ${classes.Donor__Services_Pay}`}>
                    <figure className={classes.Donor__ImageContainer}>
                        <img
                            src="https://scontent.xx.fbcdn.net/v/t1.0-9/42846641_741047686251381_3734839720207712256_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=yDYbTqDGAuoAX-3hz8-&_nc_ht=scontent.xx&oh=6102268d66a842f3f4d151aeec168df3&oe=60875B0C"
                            alt="K Pay"
                            className={classes.Donor__ImageContainer__Image}
                        />
                        <figcaption className={classes.Donor__Label}>KBZ Pay</figcaption>
                    </figure>
                    <figure className={classes.Donor__ImageContainer}>
                        <img
                            src="https://scontent.xx.fbcdn.net/v/t1.0-9/87948624_2927481817295123_7349089789674520576_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=fCMUMOtnHkcAX9wwtOQ&_nc_oc=AQkvHUfiomvy18sODP4gSiDY4A0mG51pKFAkOWo3TwMTvIM1WI7Y_QajS_ABvzsG82M495XQtdZOefABeVAm7ShI&_nc_ht=scontent.xx&oh=cc0c09f49cac82172c7a3d33dce3a362&oe=60853ADA"
                            alt="CB Pay"
                            className={classes.Donor__ImageContainer__Image}
                        />
                        <figcaption className={classes.Donor__Label}>CB Pay</figcaption>
                    </figure>
                    <figure className={classes.Donor__ImageContainer}>
                        <img
                            src="https://scontent.xx.fbcdn.net/v/t1.0-9/52283873_895166020654157_3896425439379324928_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=CZ6SEcga_FUAX9k9qCx&_nc_ht=scontent.xx&oh=e67c38fbb03afdccb6a0420c828866c5&oe=60882B29"
                            alt="Wave Pay"
                            className={classes.Donor__ImageContainer__Image}
                        />
                        <figcaption className={classes.Donor__Label}>Wave Pay</figcaption>
                    </figure>
                </div>
            </div>
            <div className={classes.Donor__Container}>
                {/* <Heading text="Bank Services" /> */}
                <p className={classes.Donor__Label}>Bank Service များ</p>
                <div className={`${classes.Donor__Services} ${classes.Donor__Services_Bank}`}>
                    <figure className={classes.Donor__ImageContainer}>
                        <img
                            src="https://scontent.xx.fbcdn.net/v/t1.0-9/52396215_2044208548948487_7704477614496284672_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Y1BK6NzolBQAX8Ddo8V&_nc_ht=scontent.xx&oh=c71b84817722af91285ceb5396985698&oe=6087767E"
                            alt="KBZ Bank"
                            className={classes.Donor__ImageContainer__Image}
                        />
                        <figcaption className={classes.Donor__Label}>KBZ Bank</figcaption>
                    </figure>
                    <figure className={classes.Donor__ImageContainer}>
                        <img
                            src="https://scontent.xx.fbcdn.net/v/t1.0-9/52422302_2203130523063593_154825917389078528_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1-IDnlcc7RsAX_saKao&_nc_ht=scontent.xx&oh=42acb43316f72122e864f35d617d0a89&oe=6087616E"
                            alt="CB Bank"
                            className={classes.Donor__ImageContainer__Image}
                        />
                        <figcaption className={classes.Donor__Label}>CB Bank</figcaption>
                    </figure>
                    <figure className={classes.Donor__ImageContainer}>
                        <img
                            src="https://scontent.xx.fbcdn.net/v/t31.0-8/10947465_602818779853205_6420925101224052571_o.png?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Dv69ZDRqPE4AX-mbQAe&_nc_ht=scontent.xx&oh=b1300a423f54b19b389ed1836cb0e45c&oe=60878736"
                            alt="YOMA Bank"
                            className={classes.Donor__ImageContainer__Image}
                        />
                        <figcaption className={classes.Donor__Label}>YOMA Bank</figcaption>
                    </figure>
                    <figure className={classes.Donor__ImageContainer}>
                        <img
                            src="https://scontent.xx.fbcdn.net/v/t1.0-9/120262374_3285765488172402_8697007081101066614_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5ADRc7Zd_xIAX_RtChB&_nc_ht=scontent.xx&oh=1a73fc41ce72e281b478eac1fde44907&oe=6085F55E"
                            alt="AYA Bank"
                            className={classes.Donor__ImageContainer__Image}
                        />
                        <figcaption className={classes.Donor__Label}>AYA Bank</figcaption>
                    </figure>
                </div>
            </div>
            <div className={classes.Donor__Container}>
                <p className={classes.Donor__Label}>
                    ပါဝင်လှူဒါန်းကြသူ တစ်ဦးချင်းဆီကို CDM Support Team မှ ကျေးဇူးတင်ဂုဏ်ပြုပါသည်။
                </p>
                <Table />
            </div>
        </section>
    );
};
export default Donor;
