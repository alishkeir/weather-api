import React, { Component } from 'react'
import Heading from './Heading'
import Weather from './Weather'
import Header from './Header'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        if (this.props.buttonClicked && this.props.weathers) {

            if (this.props.error) {
                return <main>Region Not Found !!</main>
            }

            else {

                let x = [];
                this.props.weathers.forEach(item => {
                    let now = new Date();
                    let time = new Date(item.dt_txt)
                    x.push({
                        main: item.main,
                        diff: Math.abs(now - time),
                        id: item.weather[0].id,
                        description: item.weather[0].description
                    })
                })
                let obj = x[0];
                x.forEach(item => {
                    if (item.diff <= obj.diff) {
                        obj = item
                    }
                })
                return (
                    <main>
                        <Weather weather={obj} />
                    </main>
                )
            }
        }
        return (
            <main></main>
        )
    }
}

export default Main