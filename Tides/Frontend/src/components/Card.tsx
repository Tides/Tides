import { Component, ReactNode } from "react";

export class Card extends Component<{
  icon?: string;
  link?: string;
  name: string;
  date: string;
}> {
  render(): ReactNode {
    return (
      <div className="flex flex-col bg-stone-900 rounded-md w-52 h-52">
        <div className="flex gap-2">
          <p>{this.props.name}</p>
          <p>{this.props.date}</p>
        </div>
      </div>
    );
  }
}
