import classes from "./Table.module.scss";

const Table = (props) => {
    return (
        <table className={classes.Table}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Amount (Ks)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1st batch ကျောင်းသားဟောင်းများ</td>
                    <td>1st</td>
                    <td>3,405,000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2st batch ကျောင်းသားဟောင်းများ</td>
                    <td>2nd</td>
                    <td>1,467,000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Final ကျောင်းသားများ</td>
                    <td>3rd</td>
                    <td>1,883,000</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5th year ကျောင်းသားများ</td>
                    <td>4th</td>
                    <td>1,469,200</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>4th year ကျောင်းသားများ</td>
                    <td>5th</td>
                    <td>1,118,800</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>3rd year ကျောင်းသားများ</td>
                    <td>6th</td>
                    <td>1,445,612</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>2nd year ကျောင်းသားများ</td>
                    <td>7th</td>
                    <td>1,222,000</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>1st year ကျောင်းသားများ</td>
                    <td>8th</td>
                    <td>842,550</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>ပြင်ပအလှူရှင်များ</td>
                    <td>N/A</td>
                    <td>1,130,000</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>ဂျပန်နှင့်နော်ဝေရောက် MTU ကျောင်းသားများ</td>
                    <td>N/A</td>
                    <td>1,786,000</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
