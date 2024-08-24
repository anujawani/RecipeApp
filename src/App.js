import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="App">
      <div className='App-background'>
      <h1>Recipe App</h1>
      <Router>
        <div>
          <button>
            <Link to="/">Get Recipes</Link>
          </button>
          <button>
            <Link to="/add">Add Recipe</Link>
          </button>
        </div>
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/add" element={<RecipeForm addRecipe={addRecipe} />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
