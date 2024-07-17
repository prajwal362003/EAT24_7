import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './App'; // Import your main component
import appRouter from "../src/App";
import {RouterProvider} from "react-router-dom"

// Find the root DOM element where your React application will be mounted
const rootElement = document.getElementById('root');

// Create a root ReactDOM fiber for concurrent mode rendering
const root = ReactDOM.createRoot(rootElement);

// Render the main component (<AppLayout />) into the root container
root.render(<RouterProvider router = {appRouter}/>);