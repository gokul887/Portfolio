import React from 'react'
import image from "./images/todolist.png";

class IndProject extends React.Component{
    constructor(){
        super()
    }
    render(){
        return ( 
                <div className="project">
                    <img src={image} alt=""/>
                    <div className="project-link">
                        <h1>JS todo list</h1>
                        <a href="https://github.com/gokul887/JS-todo-list" target="_blank" >View code</a>
                    </div>
                </div>
     );
    }
}
 
export default IndProject;