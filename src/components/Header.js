import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="top">
                    <input
                        onChange={this.props.handleChange}
                        type="text"
                        value={this.props.value}
                        className="form-control"
                        placeholder="Type a City name"></input>
                    <button onClick={this.props.handler}> FIND WEATHER </button>
                </div>
            </header >
        )
    }
}

export default Header