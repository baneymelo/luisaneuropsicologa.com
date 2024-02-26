import { createRoot } from 'react-dom/client';
//import App from './App.tsx'
//import './index.css'
import Dependencies from "./Dependencies.tsx"

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<Dependencies/>);
