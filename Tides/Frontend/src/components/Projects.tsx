import { Component, ReactNode } from "react";
import { Card } from "./Card";
import projects from "../assets/projects.json";

export class Projects extends Component {
  render(): ReactNode {
    return (
      <div className="flex items-center gap-5 w-4/6">
        {projects.map((data, _) => {
          return (
            <Card key={data.name} name={data.name} description={data.description} link={data.link} />
          );
        })}
      </div>
    );
  }
}
