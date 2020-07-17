import React, { Component } from 'react'
import Title from './Title'

class Home extends Component {
    render(){
        return (
            <header>
                <h1>{this.props.title}</h1>
                <Title name={"Ian Rones"} />
            </header>
        )
    }
}

export default Home
