import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "80%",
        margin: "2rem auto",
        padding: "1rem",
        background: "white",
        borderRadius: "10px",
        "@media (min-width: 992px)": {
            maxWidth: "800px",
        },
    },
}));
