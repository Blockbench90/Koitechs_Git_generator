import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "80%",
        margin: "2rem auto",
        padding: "1rem",
        background: "white",
        borderRadius: "10px",
        textAlign: "center",
        "@media (min-width: 992px)": {
            maxWidth: "400px",
        },
        '& img': {
            "@media (max-width: 750px)": {
                width: "70%"
            },
        }
    },
}));
