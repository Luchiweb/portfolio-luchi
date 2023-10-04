import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.css";
import "./styles/tailwind.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
