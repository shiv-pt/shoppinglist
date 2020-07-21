import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Stores extends Component {
  
    render () {
        console.log('dis',this.props.stores)
        const stores =this.props.stores
        const storeList = stores.length ? (
              stores.map(item => {
                return (
                  <div className="post card" key={item.id}>
                    <div className="card-content">
                      <Link to={'/stores/' + item.id}>
                        <span className="card-title purple-text">Store {item.id}: {item.storeName}</span>
                      </Link>
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
                    <div className="col s12 m12">
                    <br />
                        { storeList }
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return{
    stores: state.store.stores
  }
}


export default connect(mapStateToProps)(Stores)