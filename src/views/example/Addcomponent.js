import React from "react";

class Addcomponent extends React.Component {

    state = {
        title: " ",
        salary: " ",
    }

    handleOnChangetitle = (event) =>{
        this.setState({
            title: event.target.value
        })
    }
    handleOnChangesalary = (event) =>{
        this.setState({
           salary: event.target.value
        })
    }
    handlesubmit = (event) =>{
        event.preventDefault()
        console.log("check ", this.state)
        this.props.addNewJob({
            id:Math.floor(Math.random() * 111),
            title:this.state.title,
            salary:this.state.salary
            
        }) 
    }
    render() {
        return (
            <>
                <form >
                    <label >JOB</label><br />
                    <input type="text" 
                    value={this.state.title}
                    onChange={(event) => this.handleOnChangetitle(event)}
                    /><br />
                    <label>SALARY</label><br />
                    <input type="text" 
                    value={this.state.salary}
                    onChange={(event) => this.handleOnChangesalary(event)}
                    />
                    
                    <br />
                    <input type="submit" 
                    onClick={(event) => this.handlesubmit(event)}
                    />
                </form>
            </>
        )
    }
}

export default Addcomponent;