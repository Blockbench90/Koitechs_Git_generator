import React from 'react'
import {Pie} from "react-chartjs-2";


const PieChart = ({language}) => {

    const lan = (language) => {
        const arr = []
        language.map(item => {
            return arr.push(item.languages.data)
        })
        return arr
    }
    const languageArray = lan(language)

    const languagesSort = languageArray.reduce((acum, item) => {
        const keys = Object.keys(item)
        keys.forEach(el => {
            if (acum[el]) {
                acum[el].push(item[el])
            } else {
                acum[el] = [item[el]]
            }
        })
        return acum
    }, {})


    for (let i in languagesSort) {
        let count = 0
        languagesSort[i].map(item => {
            return count += item
        })
        languagesSort[i] = count
    }

    const lab = Object.keys(languagesSort)
    const count = Object.values(languagesSort)

    const data = {
        labels: lab,
        datasets: [
            {
                label: '# of Votes',
                data: count,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <React.Fragment>
            <Pie data={data} width={80} height={204} options={{maintainAspectRatio: false}}/>
        </React.Fragment>

    )
}

export default PieChart