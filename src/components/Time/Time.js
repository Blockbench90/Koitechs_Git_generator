import React, {Fragment} from "react";

import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import eo from 'date-fns/locale/en'

const Time = ({ date }) => (
    <Fragment>
        {distanceInWordsToNow(date, { addSuffix: true, locale: eo })}
    </Fragment>
)

export default Time
