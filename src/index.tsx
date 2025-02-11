import { createRoot } from "react-dom/client";

import App from "./components/App/App";

import "./index.css";

const root = document.getElementById("root");

if (!root) {
    throw new Error("root element not found");
}

const container = createRoot(root);

container.render(<App />);