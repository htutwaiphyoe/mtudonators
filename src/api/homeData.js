export const total = 33_104_162,
    supported = 16_900_000,
    balance = 16_204_162,
    percentage = (supported / total) * 100;

export const charts = {
    bar: [
        {
            labels: ["Mar28", "Mar31", "Apr1", "Apr5", "Apr6", "Apr7", "Apr11", "Apr16", "Apr20"],
            data: [40_000, 32_000, 35_000, 100_000, 5_000, 155_000, 20_000, 50_000, 30_000],
            label: "ငွေပမာဏ",
            title: "နောက်ဆုံး ကောက်ခံရရှိမှု",
            bg: "#9d0208",
            type: "bar",
        },
        {
            labels: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "foreign", "others"],
            data: [
                3_405_000,
                1_467_000,
                1_883_000,
                1_469_200,
                1_515_800,
                1_445_612,
                1_230_000,
                872_550,
                1_786_000,
                18_030_000,
            ],
            label: "‌ငွေပမာဏ",
            title: "Batch အလိုက်နှင့် ပြင်ပမှ ကောက်ခံရရှိမှု",
            bg: "#9d0208",
            type: "bar",
        },
    ],
    doughnut: {
        labels: ["စုစုပေါင်း", "ထောက်ပံ့ပြီး", "လက်ကျန်ငွေ"],
        data: [total, supported, balance],
        title: "ငွေရှင်းတမ်း",
        bg: ["#9d0208", "#36A2EB", "#FFCD56"],
        type: "doughnut",
    },
};
export const donors = [
    { name: "ပြင်ပအလှူရှင်များ", batch: "N/A", amount: "18,030,000" },
    { name: "1st batch ကျောင်းသားဟောင်းများ", batch: "1st", amount: "3,405,000" },
    { name: "Final ကျောင်းသားများ", batch: "3rd", amount: "1,883,000" },
    { name: "ဂျပန်နှင့်နော်ဝေရောက် MTU ကျောင်းသားများ", batch: "N/A", amount: "1,786,000" },
    { name: "4th year ကျောင်းသားများ", batch: "5th", amount: "1,515,800" },
    { name: "5th year ကျောင်းသားများ", batch: "4th", amount: "1,469,200" },
    { name: "2nd batch ကျောင်းသားဟောင်းများ", batch: "2nd", amount: "1,467,000" },
    { name: "3rd year ကျောင်းသားများ", batch: "6th", amount: "1,445,612" },
    { name: "2nd year ကျောင်းသားများ", batch: "7th", amount: "1,230,000" },
    { name: "1st year ကျောင်းသားများ", batch: "8th", amount: "872,550" },
];
