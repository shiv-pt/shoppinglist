import React, { Component } from 'react'
import { connect } from 'react-redux'
import Additem from './Additem'
import { Link } from 'react-router-dom'
import { deleteItem } from '../Actions/deleteItem'


class List extends Component {
  
  handleClick = (key) => {
    this.props.deleteItem(key);
    console.log('key=',key)
  }
    render() {
        console.log('dis',this.props.item)
        const items =this.props.item
        const itemList = items.length ? (
              items.map(item => {
                return (
                  <div className="post card" key={item.id}>
                    <div className="card-content">
                      <Link to={'/' + item.id}>
                        <span className="card-title red-text">Item: {item.material}</span>
                      </Link>
                      <p>Quantity: {item.qtn}</p>
                      <button onClick = {(key) => this.handleClick(item.id)}>Delete Item</button>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="center">No items to show</div>
        );
        
        return (
            <div className="dashboard container">
            <div className="row">
              <div className="col s12 m6">
                <br />
                { itemList }
              </div>
              <div className="col s12 m5 offset-m1">
                  <Additem />
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return{
    item: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) =>  dispatch(deleteItem(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)