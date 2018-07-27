import React, { Component } from "react";
import "./App.css";
import MagicTodo from "./MagicTodo";
import Liste from "./Liste";
import FooterList from "./FooterList";
import Search from "./Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.getTodos()
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.cocher = this.cocher.bind(this);
    this.search = this.search.bind(this);
  }
  getTodos() {
    return [
      { id: 1, title: "One", enabled: false },
      { id: 2, title: "Two", enabled: false },
      { id: 3, title: "Three", enabled: false }
    ];
  }

  add(newTodo) {
    newTodo.id = this.state.todos.length + 1;
    newTodo.enabled = false;
    console.log(newTodo.id);
    this.setState({
      todos: [newTodo, ...this.state.todos]
      // selon le sens dans todos, on a l'item qui s'ajoute au début ou à la fin de la liste
    });
  }

  remove(todo) {
    const tab = this.state.todos.filter(elt => elt.id !== todo.id);
    console.log(tab);
    this.setState({
      todos: tab
    });
  }

  cocher(todo, checked) {
    const index = this.state.todos.findIndex(elt => elt.id === todo.id);
    console.log(todo, checked);
    const tab = [...this.state.todos];
    tab[index].enabled = checked;
    this.setState({
      todos: tab
    });
  }

  filterCochesTodos() {
    return this.state.todos.filter(elt => elt.enabled === false).length;
  }

  search(todo = "") {
    if (todo.length < 3) {
      //return this.state.todo;
      this.setState({
        todos: this.getTodos()
      });
    } else {
      const regex = new RegExp(todo, "i");
      const initial = this.getTodos();
      const newTab = this.state.todos;
      const newTodos = [...initial, ...newTab];
      //let tab = this.state.todos.filter(elt => regex.test(elt.title));
      let tab = newTodos.filter(elt => regex.test(elt.title));
      this.setState({
        todos: tab
      });
      //pas optimisé, le bug de répétition des todos est normale
    }
  }

  render() {
    return (
      <div className="App">
        <h1>TODOS CHECKLIST</h1>
        <MagicTodo addTodo={this.add} />
        <Liste
          remove={this.remove}
          todos={this.state.todos}
          cocher={this.cocher}
        />
        <FooterList nb={this.filterCochesTodos()} />
        <Search searchTodo={this.search} />
      </div>
    );
  }
}

export default App;
