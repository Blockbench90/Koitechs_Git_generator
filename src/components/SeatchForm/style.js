import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        margin: "24px 0",
        height: "30px",
        width: "100%",
        maxWidth: "300px",
        fontSize: "14px",
    },
    button: {
        border: "none",
        borderRadius: "5px",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#29b6f6",
        height: "36px",
        padding: "0 24px",
        marginLeft: "8px",
        top: "-8px",
        "@media (max-width: 500px)": {
            top: "0px",
            marginLeft: "30%"
        },
    },
    validationTypo: {
        color: "red",
        fontSize: "14px",
    },
    icon: {
        marginRight: "8px",
        color: "black",
    },
}))