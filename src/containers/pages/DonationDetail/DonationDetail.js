import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Paragraph from "../../../components/shared/Paragraph/Paragraph";
import Button from "../../../components/shared/Button/Button";
import Box from "../../../components/shared/Box/Box";
import * as donationData from "../../../api/donationData";
import classes from "./DonationDetail.module.scss";
const DonationDetail = (props) => {
    const params = useParams();

    useEffect(() => {
        document.title = "Donation | MTU CDM Support";
    }, []);

    return <section className={classes.DonationDetail}>
        
    </section>;
};
export default DonationDetail;
