import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "80%",
        margin: "32px auto",
        padding: "16px",
        borderRadius: "10px",
        "@media (min-width: 992px)": {
            maxWidth: "800px",
        },
    },
    languageWrapper: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
}))
