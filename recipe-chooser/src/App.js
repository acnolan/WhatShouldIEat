import React from 'react';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';

import { Routes, Route } from "react-router-dom";

function App() {
  const data = [
    {
      meal: "pizza",
      url: "https://andrewnolan.dev",
      difficulty: "easy",
      time: "20",
      vegetarian: "yes"
    },
    {
      meal: "pasta",
      url: "https://andrewnolan.dev",
      difficulty: "easy",
      time: "20",
      vegetarian: "yes"
    },
    {
      meal: "taco",
      url: "https://andrewnolan.dev",
      difficulty: "medium",
      time: "40",
      vegetarian: "no"
    },
    {
      meal: "burger",
      url: "https://andrewnolan.dev",
      difficulty: "easy",
      time: "30",
      vegetarian: "no"
    },
  ];

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home data={data}/>} />
        <Route path={"/recipes"} element={<Recipes data={data}/>} />
        <Route path={"/recipes/*"} element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
