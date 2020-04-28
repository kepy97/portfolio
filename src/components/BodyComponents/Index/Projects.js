import React from 'react';
import ProjectDetails from "./ProjectDetails";
import projectData from "../../../data/project_data.json";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const projects = projectData.projects;

export default class Projects extends React.Component {

    constructor(props) {
      super(props);
      
      this.state = {
        projectDetailsVisible: false,
      };
    }

    handleClick = (projectDetailsURL) => {
      this.setState({
          projectDetailsVisible: !this.state.projectDetailsVisible,
          projectDetailsURL: projectDetailsURL,
      });
      if (!this.state.projectDetailsVisible) {
        disableBodyScroll('html-main-body');
      } else {
        enableBodyScroll('html-main-body');
      }
    }

    render() {
        return (
          <div>
            <section className="ftco-section ftco-project" id="projects-section">
              <div className="container-fluid px-md-0">
                <div className="row no-gutters justify-content-center pb-5">
                  <div className="col-md-12 heading-section text-center ftco-animate">
                    <h2 className="mb-4">Quality Work</h2>
                  </div>
                </div>
                <div className="row no-gutters">
                  {
                    projects.map((project, i) => {
                      return (
                        <div className="col-md-4" key={i} id={project.url} onClick={() => this.handleClick(project.url)}>
                          <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: `url(/images/${project.image})`}}>
                            <div className="overlay m-dis-non" />
                            <div className="text m-dis-non text-center p-4">
                              <h3><a id="section-projects-name" href="#section-projects-name">{project.name}</a></h3>
                              <span>{project.languages.join(' & ')}</span>
                              <div className="moreinfobtn">More Information</div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </section>
            {this.state.projectDetailsVisible ? <ProjectDetails projectDetailsURL={this.state.projectDetailsURL} parentCallback={this.handleClick}/> : null}
          </div>
        );
    }
}
