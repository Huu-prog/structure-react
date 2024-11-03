import React from "react";
import {  toast } from 'react-toastify';


class Addtodo extends React.Component {

    state = {
        title: ''
    }


    handleOnchange = (event) => {
        this.setState({
            title:event.target.value
        })
    }

    handleaddtodo = () => {
        //Điều kiện nếu người dùng nhập vào ô input rỗng 
        if(!this.state.title){
            toast.error("ADD THẤT BẠI")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        } 
        this.props.addNewtodo(todo)
        
    }

    render() {
        
        return (
            <div className='add-Listtodos'>
                <input type="Text"
                    value={this.state.title} 

                    onChange={(event) => this.handleOnchange(event)}
                
                />
                <button type="button" className="add"

                    onClick={() => this.handleaddtodo()}
                
                >add</button>
            </div>
        )
    }
}

export default Addtodo;