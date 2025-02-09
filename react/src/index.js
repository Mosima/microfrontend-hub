import React from 'react';
import { createRoot } from 'react-dom/client';

// Get the root element from your HTML
const rootElement = document.getElementById('root');

// Create a root using createRoot
const root = createRoot(rootElement);

// Render your app
root.render(<h1>Hello World from app 1</h1>);