import React from 'react'
import image from "./images/todolist.png";
import projectData from "./data/projects"
import IndProject from "./IndProject"

class Projects extends React.Component{
    constructor(){
        super()
    }
    render(){
        const data = projectData.map(proj=><IndProject key={proj.id} img={proj.imgUrl} 
            name={proj.name} github={proj.github}/>)
        return(<div><h1>Projects</h1> 
        <div className="projects-container">
                    {data}
                </div>
                </div>)
    }
}
 
export default Projects;