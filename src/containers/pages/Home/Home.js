import { useState, useEffect } from "react";
import Heading from "../../../components/shared/Heading/Heading";
import Paragraph from "../../../components/shared/Paragraph/Paragraph";
import Chart from "../../../components/Chart/Chart";
import Table from "../../../components/Table/Table";
import Button from "../../../components/shared/Button/Button";
import Box from "../../../components/shared/Box/Box";
import classes from "./Home.module.scss";

const l = [];
for (let i = 1; i <= 10; i++) {
    l.push(i);
}
const data = [
    "1000000",
    "3000000",
    "2000000",
    "900000",
    "400000",
    "2400000",
    "200000",
    "800000",
    "400000",
    "70000",
];
const charts = {
    bar: [
        {
            labels: l,
            data,
            label: "ငွေပမာဏ",
            title: "နောက်ဆုံး 10 ရက်အတွင်းကောက်ခံရရှိမှု",
            bg: "#9d0208",
            type: "bar",
        },
        {
            labels: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "others"],
            data: [
                "3405000",
                "1467000",
                "1883000",
                "1469200",
                "1180800",
                "1445612",
                "1230000",
                "842550",
                "2916000",
            ],
            label: "‌ငွေပမာဏ",
            title: "Batch အလိုက်နှင့် ပြင်ပမှ ကောက်ခံရရှိမှု",
            bg: "#9d0208",
            type: "bar",
        },
    ],
    doughnut: {
        labels: ["စုစုပေါင်း", "ထောက်ပံ့ပြီး", "လက်ကျန်ငွေ"],
        data: ["15839162", "1200000", `${15839162 - 1200000}`],
        title: "ငွေရှင်းတမ်း",
        bg: ["#9d0208", "#36A2EB", "#FFCD56"],
        type: "doughnut",
    },
};
const donors = [
    { name: "1st batch ကျောင်းသားဟောင်းများ", batch: "1st", amount: "3,405,000" },
    { name: "2nd batch ကျောင်းသားဟောင်းများ", batch: "2nd", amount: "1,467,000" },
    { name: "Final ကျောင်းသားများ", batch: "3rd", amount: "1,883,000" },
    { name: "5th year ကျောင်းသားများ", batch: "4th", amount: "1,469,200" },
    { name: "4th year ကျောင်းသားများ", batch: "5th", amount: "1,180,800" },
    { name: "3rd year ကျောင်းသားများ", batch: "6th", amount: "1,445,612" },
    { name: "2nd year ကျောင်းသားများ", batch: "7th", amount: "1,230,000" },
    { name: "1st year ကျောင်းသားများ", batch: "8th", amount: "842,550" },
    { name: "ပြင်ပအလှူရှင်များ", batch: "N/A", amount: "1,130,000" },
    { name: "ဂျပန်နှင့်နော်ဝေရောက် MTU ကျောင်းသားများ", batch: "N/A", amount: "1,786,000" },
];
const Home = (props) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        let timer2;
        if (percentage < (1200000 / 15839162) * 100) {
            timer2 = setTimeout(() => {
                setPercentage((prevState) => prevState + 1);
            }, 100);
        }
        return () => {
            clearTimeout(timer2);
        };
    }, [percentage]);
    useEffect(() => {
        document.title = "Home | MTU CDM Support";
    }, []);
    return (
        <section className={classes.Home}>
            <div className={classes.Home__Total}>
                <p className={classes.Home__Total__Heading}>K15,839,162+</p>
                <Paragraph>{`ရရှိထားပြီးဖြစ်သည်`}</Paragraph>
            </div>
            <div className={classes.Home__Container}>
                <div className={classes.Home__Box}>
                    <div className={classes.Home__Total}>
                        <Heading text="Total" />
                        <div className={classes.Home__Total__Amount}>{percentage}%</div>
                        <Paragraph>{"ထောက်ပံ့ပြီးဖြစ်သည်"}</Paragraph>
                    </div>
                    <div>
                        <Chart {...charts.doughnut} />
                        <Paragraph>{charts.doughnut.title}</Paragraph>
                    </div>
                </div>
            </div>

            <div className={classes.Home__Container}>
                <div className={classes.Home__Box}>
                    {charts.bar.map((c, i) => (
                        <div key={i}>
                            <Chart {...c} />
                            <Paragraph>{c.title}</Paragraph>
                        </div>
                    ))}
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
            <Box vertical>
                <Paragraph>
                    ပါဝင်လှူဒါန်းကြသူ တစ်ဦးချင်းဆီကို CDM Support Team မှ ကျေးဇူးတင်ဂုဏ်ပြုပါသည်။
                </Paragraph>
                <Table donors={donors} />
            </Box>
        </section>
    );
};
export default Home;
