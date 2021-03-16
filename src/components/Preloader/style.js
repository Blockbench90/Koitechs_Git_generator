import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "80%",
        margin: "32px auto",
        padding: "16px",
        background: "white",
        borderRadius: "10px",
        "@media (min-width: 992px)": {
            maxWidth: "800px",
        },
    },
    content: {
        display: "block",
        margin: "0 auto",
        width: "180px",
        height: "180px",
        borderRadius: "40%",
        overflow: "hidden",
        "& img": {
            width: "130%",
            marginLeft: "-26px"
        }
    },
    logo: {
        overflow: "hidden",
        borderRadius: "10%"
    },
    title: {
        fontWeight: 700,
        fontSize: "20px",
        paddingLeft: "10px"
    }
}));