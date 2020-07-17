import React, { Component, useState } from 'react';
import Details from './Details';

export default class StarWars extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            data: '',
            newNum: '',
            details: []
        };
        this.onChange=this.onChange.bind(this)
        this.onClick=this.onClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.savePerson = this.savePerson.bind(this)
        this.showAll = this.showAll.bind(this)
    };

    onChange = evt =>{
        const newNum = evt.target.value
        this.setState({ newNum })
    }

    onSubmit(e) {
        e.preventDefault()
    }
    showAll(e) {
        return (
            Details()
        )
    }

    async onClick() {
        const { newNum } = this.state
        const response = await fetch(`https://swapi.dev/api/people/${newNum}/`);
        const data = await response.json();
        if (data.detail !== "Not There") {
            this.setState({ data })
        }

    }

    async savePerson() {
        let {data, details } = this.state
        details.push(data)
        this.setState({ data, details })
    }
    
    renderData() {
        const { data } = this.state
        return (
            <div>
            <p><strong>Name:</strong>{data.name}</p>
            <p><strong>Height(in):</strong>{data.height}</p>
            <p><strong>Weight(kg):</strong>{data.mass}</p>
            <p><strong>Eye Color:</strong>{data.eye_color}</p>
            <p><strong>Hair Color:</strong>{data.hair_color}</p>
            <button onClick={this.savePerson}>Save?</button>
            </div>
        )
    }

    render(){
        const { newNum, details, data } = this.state
        return (
            <div>
                <h3>Star Wars Data</h3>
                <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Enter Number" value={newNum} onChange={this.onChange}/>
                <button type="submit" value="search" onClick={this.onClick}>Search</button>
                <button onClick={this.showAll}>Click for List </button>
                </form>
                <div>
                    {data !== '' ? this.renderData() : null}
                </div>
                <Details details={details}/>
            </div>
        )
    }
    
}
