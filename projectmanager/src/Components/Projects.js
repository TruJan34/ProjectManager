import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        //  console.log(project);
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key = {project.title} project = {project} />
        );
      });
    }
    // console.log(this.props);
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {/*{this.props.test}*/}
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  // projects: React.PropTypes.array,
  // onDelete: React.PropTypes.func

  // Above is deprecated
  // React is no more shipped with PropTypes. You will need to install it.
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

export default Projects;