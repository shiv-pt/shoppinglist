import React, { Component } from 'react'
import { connect } from 'react-redux'
import createItem from '../Actions/createItem';

class Additem extends Component {
    state = {
        material: '',
        qtn: '',
        id: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.createItem(this.state.material,this.state.qtn,this.state.id);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            id: this.props.items.length+1
        }); 
    }
    render() {
        return (
            <div className="container">
            <h5 className="grey-text text-darken-3">Add new Item</h5>
                <form className="white" onSubmit = {(values) => this.handleSubmit(values)}>
                <div >
                    <label htmlFor='material'>Item</label>
                    <input type="text" id='material' onChange={this.handleChange} ></input>
                </div>
                <br />
                <div >
                    <label htmlFor="qtn">Quantity</label> 
                    <input id="qtn" type="text" onChange={this.handleChange}></input>                                  
                </div>
                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1">Add</button>
                </div>
                </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        items: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
    createItem: (material,qtn,id) => {dispatch(createItem(material,qtn,id))}
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Additem);