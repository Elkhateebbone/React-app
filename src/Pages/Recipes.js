import React, { Component } from 'react'
import RecipeList from '../Components/RecipeList';
import recipeData from '../Components/RecipeList'
import Search from '../Components/Search';

export default class Recipes extends Component {
 constructor({props}){
    super(props);
 }
  
state ={
  recipes:recipeData,
  search:''
}
handleChange = e =>{
  this.setState({
    search:e.target.value
  })
};
handleSubmit=(e)=>{
 e.preventDefault();
}
  render() {
    return (

      <>
        <Search  search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <RecipeList recepies ={this.state.recipes}/>
     </>
  )
  }
}
