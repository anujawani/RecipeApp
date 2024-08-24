import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/?search=${filter}`)
            .then(response => setRecipes(response.data))
            .catch(error => console.error(error));
    }, [filter]);

    return (
        <div>
            <h1>Recipe List</h1>
            <input
                type="text"
                placeholder="Filter by category"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        {recipe.title} - {recipe.ratings} stars
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
