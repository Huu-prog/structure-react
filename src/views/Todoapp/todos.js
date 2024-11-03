import React from "react";
import './Listtodo.scss';
import Addtodo from "./Addtodos";
import { toast } from 'react-toastify';

class Listtodos extends React.Component {

    state = {
        Listtodos: [
            { id: 'todo1', title: 'do home work' },
            { id: 'todo2', title: 'making videos' },
            { id: 'todo3', title: 'fixxing bug' },

        ],
        Edittodo: " "
    }

    //Hàm để thêm add 
    addNewtodo = (todo) => {
        let currentListtodos = this.state.Listtodos;
        currentListtodos.push(todo);

        this.setState({
            Listtodos: currentListtodos
        })
        toast.success("Đã add vào thành công!")
    }

    //hàm delete 

    handleOndelete = (todo) => {
        //khai báo biến để lưu trữ dữ liệu trong state
        let currentjobs = this.state.Listtodos;
        //sử dụng hàm filter để lọc các id trong mãng
        currentjobs = currentjobs.filter(item => item.id !== todo.id);
        //this.setstate để cập nhật lại các phần tử trong mãng
        this.setState({
            Listtodos: currentjobs
        })
        toast.success("Đã Xóa thành công!")
    }

    //hàm edit 
    handleOnEdit = (todo) => {
        let edittodo = this.state.Edittodo;
        let currentlisttodos = this.state.Listtodos;
        let Empty = Object.keys(edittodo).length === 0;
        //SAVE
        if (Empty === false && edittodo.id === todo.id) {

            let listodoCopy = [...currentlisttodos];


            //Find index of specific object using findIndex method.    
             let  objIndex = listodoCopy.findIndex((item => item.id === todo.id));

       

            //Update object's name property.
            listodoCopy[objIndex].title = edittodo.title;

            this.setState({
                currentlisttodos: listodoCopy,
                Edittodo:{}
            })
            toast.success("Đã Lưu thành công!")
            return;
            
        }

        //EDIT
        this.setState({
            Edittodo: todo
        })
        //console.log("check edittodo" ,todo)
    }

    //bắt sự kiện cho hàm edit khi người dùng sửa
    handleOnchangeEdittodos = (event) => {
        let edittodoCopy = this.state.Edittodo;
        edittodoCopy.title = event.target.value;

        this.setState({
            Edittodo: edittodoCopy
        })
    }

    render() {
        let Listtodos = this.state.Listtodos;
        //let {Listtodos} = this.state;
        let edittodo = this.state.Edittodo;
        let Empty = Object.keys(edittodo).length === 0;
        console.log("check empty", Empty)
        return (
            <div className="Listtodos-container">
                <Addtodo
                    addNewtodo={this.addNewtodo}
                />
                <div className="Listtodos-content">

                    {/* Tạo điều kiện vòng map để duyệt qua các phần tử trong mãng  */}

                    {Listtodos && Listtodos.length && Listtodos.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id}>
                                {Empty === true ?
                                    <span>{index + 1}-{item.title}</span>

                                    :
                                    <>
                                        {edittodo.id === item.id ?
                                            <span>
                                                {index + 1} -
                                                {<input value={edittodo.title}
                                                    onChange={(event) => this.handleOnchangeEdittodos(event)}
                                                />}
                                            </span>
                                            :
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                        }
                                    </>


                                }
                                <button className="edit"
                                    onClick={() => this.handleOnEdit(item)}
                                >{Empty === false && edittodo.id === item.id ?
                                    'save' : 'edit'
                                    }


                                </button>
                                <button className="delete"
                                    //tạo sự kiện event khi người dùng click vào delete
                                    onClick={() => this.handleOndelete(item)}
                                >Delete</button>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }

}

export default Listtodos;