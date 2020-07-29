import React, { Component } from 'react';

class Day extends Component {
    state ={
        left: ''
    }
    handleSubmit =(e) => {
        e.preventDefault();
    }
    handleChange = (e) => {
        var date =new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y= date.getFullYear();
        var date1 = new Date(e.target.value)
        var d1= date1.getDate();
        var m1 = date1.getMonth();
        var y1 = date1.getFullYear();
        var x = (d1 + m1*30 + y1*365) - (d + m*30 + y*365)
        this.setState ({
            left: [x]
        })
    }
    render() {
        return (
            <>
            <br />
            <div className="dashboard container row col s12 m6">
            <div className="post card">
                <div className="card-content">
                    <form className="white" onSubmit={this.handleSubmit}>
                        <div >
                            <label htmlFor='date'>Select the last date till your groceries will last</label>
                            <input type="date" id='date' onChange={(value) => this.handleChange(value)} ></input>
                        </div>
                        <div className="input-field">
                            <button type="submit" className="btn orange lighten-1">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="post card">
                <div className="card-content">
               <h6> You have {this.state.left} days left </h6>
            </div>
            </div>
            </div>
            </>
        )
    }
}

export default Day;