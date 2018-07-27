import React, { Component } from "react";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  //lifecycle method
  componentWillMount() {
    this.setState({
      projects: [
        {
          id: 34,
          title: "Business Website",
          category: "Web Design"
        },
        {
          id: 67,
          title: "Social App",
          category: "Mobile Development"
        },
        {
          id: 42,
          title: "Ecommerce Shopping Cart",
          category: "Web Development"
        }
      ]
    });
  }
  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects
          projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)}
        />
      </div>
    );
  }
}

export default App;
