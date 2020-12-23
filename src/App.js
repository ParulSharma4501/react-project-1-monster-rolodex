import React, {Component} from "react";
// import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component{

  constructor(){
    super();

    this.state={
    monsters:[],
    searchFeild:""
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  render() {
    const {monsters,searchFeild}=this.state;
    const filteredMonsters=monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFeild.toLowerCase()));
return (
  <div className="App">
  <h1>Monster Rolodex</h1>
<SearchBox
type="search"
placeholder="Search Monster" 
handleChange={e => {this.setState({searchFeild:e.target.value})}}></SearchBox>
  <CardList monsters={filteredMonsters}>

  </CardList>
  
</div>
)
  }
}


export default App;
