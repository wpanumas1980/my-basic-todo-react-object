import React, { Component } from 'react'

export default class TodoList extends Component {
    state = {
        inputValue: "",
        todoList: [
            {
                id: 1,
                task: "Do Homework"
            },
            {
                id: 2,
                task: "Swimming"
            },
            {
                id: 3,
                task: "Shopping"
            }
        ]
    };
    createNewtask = () => {
        const newTask = this.state.inputValue;
        const newTodoList = [...this.state.todoList];
        newTodoList.push({ task: newTask, id: Math.round(Math.random() * 1000) });
        this.setState({ todoList: newTodoList });
        this.setState({ inputValue: "" })

    }
    // deleteTask=(id)=>{
    //     const newTodoList = [...this.state.todoList];
    //     const targetTodoIdx = newTodoList.findIndex(e=>e.id === id);
    //     newTodoList.splice(targetTodoIdx,1);
    //     this.setState({todoList:newTodoList});
    // }
    deleteTask = (id) => {
        const newTodoList = this.state.todoList.filter(e => e.id !== id);
        this.setState({ todoList: newTodoList });
    }
    editTask = (id) => {
        const todoList = this.state.todoList;
        const targetTodo = todoList.find(e => e.id === id);
        // console.log(targetTodo);
        // console.log(targetTodo.id);
        const newTask = prompt(`${id}:${targetTodo.task}`);
        if (newTask) {
            const newTodoLists = todoList.map(todo => todo.id === id ? { ...todo, task: newTask } : todo);
            this.setState({ todoList: newTodoLists });
        }


        // console.log(targetTodo);
    }

    render() {
        const { todoList, inputValue } = this.state;
        const btnEditStyles = {
            width: "100px",
            height: "50px",
            backgroundColor:"yellow",
            border:"none"
        };
        const btnDeleteStyles = {
            width: "100px",
            height: "50px",
            backgroundColor:"red",
            border:"none"
        };
        const liStyles = {
            width: "500px",
            heigth: "300px",
            backgroundColor: "pink",
            paddingLeft: "5px",
            margin: "10px 0",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between"
        };
        return (
            <div>
                <div>
                    <input
                        value={inputValue}
                        onChange={(e) => this.setState({ inputValue: e.target.value })}
                    ></input>
                    <button onClick={this.createNewtask}>Add todo</button>
                </div>
                <div style={{ width: "400px", margin: "0 auto" }}>
                    <ul style={{ listStyle: "none" }}>
                        {/* {this.state.todoList.map(({id,task})=><li key={id}>{task}</li>)} */}
                        {todoList.map(({ id, task }) => <li style={liStyles} key={id}>{task}
                            <div>
                                <button style={btnEditStyles} onClick={() => this.editTask(id)}>Edit</button>
                                <button style={btnDeleteStyles} onClick={() => this.deleteTask(id)}>Delete</button>
                            </div>
                        </li>)

                        }

                    </ul>
                </div>
            </div>
        )
    }
}
