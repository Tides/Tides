import { Component, ReactNode } from "react";
import { Card } from "./Card";

export class Projects extends Component {
  render(): ReactNode {
    return (
      <div className="flex items-center gap-5 w-4/6">
        <Card name="Test" date="Test" />
      </div>
    );
  }
}
