import React, { Component } from 'react'
class Header extends Component {

    render() {
        return (
            <header>
                <div>
                    <input onchange={this.props.handleChange} type="text" value={this.props.value} className="input" placeholder="Enter City Name"></input>
                </div>

            </header>

        )


    }
}

export default Header