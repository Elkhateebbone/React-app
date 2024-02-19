import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import SingleRecipes from './Pages/SingleRecipe';
import DefaultPage from './Pages/Default';
import Navbar from './Components/Navbar';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" exact element={<Recipes />} />
        <Route path="/singleRecepies/:id" element={<SingleRecipes />} />
        <Route path="*" element={<DefaultPage />} />


      </Routes>
    </Router>
  );
}

export default App;
