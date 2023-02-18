import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Header } from "./components/Header";
import "./tailwind.css";
import { FaReact } from "react-icons/fa";
import { SiVite, SiTailwindcss } from "react-icons/si";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex flex-col relative justify-between min-h-full">
      <Header />
      <App />

      <footer className="flex flex-col gap-2.5 p-3 self-center text-gray-400 text-sm">
        <div className="flex gap-1">
          <p>Built with</p>
          <div className="flex gap-2.5 text-md">
            <a
              className="flex gap-1 hover:text-sky-600"
              href="https://dotnet.microsoft.com/en-us/"
            >
              .NET
            </a>
            -
            <a
              className="flex gap-1 hover:text-sky-600"
              href="https://reactjs.org/"
            >
              React
              <FaReact />
            </a>
            -
            <a
              className="flex gap-1 hover:text-sky-600"
              href="https://vitejs.dev/"
            >
              Vite
              <SiVite />
            </a>
            -
            <a
              className="flex gap-1 hover:text-sky-600"
              href="https://tailwindcss.com/"
            >
              Tailwindcss
              <SiTailwindcss />
            </a>
          </div>
        </div>
        <p>Copyright © 2023 Junior. All rights reserved.</p>
      </footer>
    </div>
  </React.StrictMode>
);
