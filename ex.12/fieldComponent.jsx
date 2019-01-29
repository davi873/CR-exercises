import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeValue } from './fieldComponentActions'

class FieldComponent extends Component {
    render() {
        return(
            <div>
                <input type="text" onChange={this.props.changeValue} value={this.props.value}/><br/>
                <label>{this.props.value}</label>
            </div>
        )
    }
}

const mapStateToProps = state =>(
    {value: state.field.value}
)

const mapDispatchToProps = dispatch => (
    bindActionCreators({ changeValue }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FieldComponent)