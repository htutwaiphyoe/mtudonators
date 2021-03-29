import { useState, useEffect } from "react";
import Heading from "../../../components/shared/Heading/Heading";
import Chart from "../../../components/Chart/Chart";
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
    "600000",
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
                "1118800",
                "1445612",
                "1222000",
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
        data: ["15769162", "1200000", `${15769162 - 1200000}`],
        title: "ငွေရှင်းတမ်း",
        bg: ["#9d0208", "#36A2EB", "#FFCD56"],
        type: "doughnut",
    },
};

const Home = (props) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        let timer2;
        if (percentage < (1200000 / 15769162) * 100) {
            timer2 = setTimeout(() => {
                setPercentage((prevState) => prevState + 1);
            }, 100);
        }
        return () => {
            clearTimeout(timer2);
        };
    }, [percentage]);
    return (
        <section className={classes.Home}>
            <div className={classes.Home__Total}>
                <p className={classes.Home__Total__Heading}>K15,769,162</p>
                <span className={classes.Home__Total__Label}>{`ရရှိထားပြီးဖြစ်သည်`}</span>
            </div>
            <div className={classes.Home__Container}>
                <div className={classes.Home__Box}>
                    <div className={classes.Home__Total}>
                        <Heading text="Total" />
                        <div className={classes.Home__Total__Amount}>{percentage}%</div>
                        <span className={classes.Home__Total__Label}>{"ထောက်ပံ့ပြီးဖြစ်သည်"}</span>
                    </div>
                    <div>
                        <Chart {...charts.doughnut} />
                        <p className={classes.Home__Total__Label}>{charts.doughnut.title}</p>
                    </div>
                </div>
            </div>

            <div className={classes.Home__Container}>
                <div className={classes.Home__Box}>
                    {charts.bar.map((c, i) => (
                        <div key={i}>
                            <Chart {...c} />
                            <p className={classes.Home__Total__Label}>{c.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Home;
