import React, {Component} from 'react'

class FieldComponent extends Component {
    constructor(props){
        super(props)
        this.state = {value: props.initialValue}
        this.handleChange = this.handleChange.bind(this)//Permite acessar o this da classe dentro da função
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return(
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.value}/><br/>
                <label>{this.state.value}</label>
            </div>
        )
    }
}
export default FieldComponent