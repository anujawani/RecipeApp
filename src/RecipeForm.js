import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [ratings, setRating] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newRecipe = {
            title,
            author,
            category,
            ratings,
            ingredients,
            instructions
        };

        fetch('http://localhost:8000/api/recipes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipe),
        })
        .then(response => response.json())
        .then(() => {
            navigate('/');
        })
        .catch(error => console.error('Error adding recipe:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </div>
            <div>
                <label>Category:</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>
            <div>
                <label>Rating:</label>
                <input type="number" value={ratings} onChange={(e) => setRating(e.target.value)} min="1" max="5" required />
            </div>
            <div>
                <label>Ingredients:</label>
                <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>
            </div>
            <div>
                <label>Instructions:</label>
                <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required></textarea>
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default RecipeForm;
