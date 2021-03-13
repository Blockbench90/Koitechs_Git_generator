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
        width: "130px",
        height: "130px",
        borderRadius: "40%",
        overflow: "hidden",
        "& img": {
            width: "100%"
        }
    },
}));