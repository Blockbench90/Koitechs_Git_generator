import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    card: {
        borderTop: "1px dashed #bfbfbf",
        padding: "16px",
        display: "inline-block",
        "@media (min-width: 992px)": {
            width: "40%",
            minHeight: "100px",
        },
    },
    language: {
        display: "inline-block",
        margin: "0 8px 8px 0",
        fontSize: "14px",
        color: "#999",
        fontWeight: "700"
    },
    icon: {
        marginRight: "8px",
        color: "black",
    },
    iconAlign: {
        verticalAlign: "middle",
    },
}));