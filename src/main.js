import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    document.documentElement.classList.add('dark');
}
else {
    document.documentElement.classList.remove('dark');
}
createRoot(document.getElementById('root')).render(React.createElement(StrictMode, null,
    React.createElement(App, null)));
