import { Component, ReactNode } from "react";
import { Projects } from "../components/Projects";

export class Index extends Component {
  render(): ReactNode {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 items-center bg-stone-900 m-10 rounded-md w-4/6 h-96">
          <h1 className="mt-5 hover:text-sky-400">@Tides</h1>
          <p>I'm Junior(Tides),</p>
          <p>Full Stack Developer</p>

          <p>
            I'm not sure what else to put here 😀 I'll eventually end up filling
            this out~
          </p>

          <a
            href="https://github.com/Tides"
            className="hover:text-sky-400 underline underline-offset-auto"
          >
            About Me
          </a>
        </div>

        <h4 className="text-sky-400 text-xl">Projects</h4>
        <Projects />
      </div>
    );
  }
}

export default Index;
