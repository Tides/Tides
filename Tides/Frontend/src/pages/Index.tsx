import { Component, ReactNode } from "react";
import { Projects } from "../components/Projects";

export class Index extends Component {
  render(): ReactNode {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 items-center bg-stone-900 m-10 rounded-md w-4/6 h-96">
          <h1 className="mt-5">@Tides</h1>
          <p>I'm Junior(Tides),</p>
          <p>Freelance/Hobbyist Software/Web Developer</p>

          <p>I'm not sure what else to put here 😀</p>

          <a href="/about" className="text-sky-400">
            About Me
          </a>
        </div>

        <Projects />
      </div>
    );
  }
}

export default Index;
