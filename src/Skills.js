import React from 'react'
class Skills extends React.Component{
    render(){return ( 
        <div className="skills-container" id="skills">
            <h1>Software stack</h1>
            <div>
            <div className="languages-div">
                <h3>Languages</h3>
                <ul className="languages">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>MATLAB</li>
                    <li>Octave</li>
                </ul>
            </div>
            <div className="frameworks-div">
                <h3>Frameworks</h3>
                <ul className="frameworks">
                    <li>ReactJS</li>
                </ul>
            </div>
            </div>
        </div>
     );
    }
}
 
export default Skills;