import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "80%",
        margin: "32px auto",
        padding: "16px",
        // background: "white",
        borderRadius: "10px",
        background: "#EEEEEE",

        "@media (min-width: 992px)": {
            maxWidth: "800px",
        },
    },
    avatar: {
        borderRadius: "100%",
        maxWidth: "150px",
        maxHeight: "150px",
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    blockFlex: {
        width: "80%",
        "@media (min-width: 992px)": {
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "800px",
        },
    },
    blockFlexRepo: {
        width: "80%",
        "@media (min-width: 992px)": {
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            alignItems: "flex-start",
            width: "800px",
        },
    },
    blockItem: {
        padding: "0 16px",
        color: "#3C4858"
    },
    info: {
        margin: "32px 0",
    },
    icon: {
        marginRight: "8px",
        color: "black",
    },
}));