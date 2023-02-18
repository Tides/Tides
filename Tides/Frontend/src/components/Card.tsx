import { Component, ReactNode } from "react";

export class Card extends Component<{
  icon?: string;
  link?: string;
  name: string;
  date?: string;
  description: string;
}> {
  render(): ReactNode {
    return (
      <div className="flex flex-col bg-stone-900 rounded-md w-52 h-60 p-5">
        <div className="flex gap-2 text-sky-400 mb-2.5">
          <p>{this.props.name}</p>
          <p>{this.props.date}</p>
        </div>
        <div className="flex whitespace-normal text-sm text-gray-400 mb-2.5">
          <p>{this.props.description}</p>
        </div>
        {this.props.link ? (
          <div className="flex">
            <a className="hover:text-sky-600" href={this.props.link}>
              Learn More
            </a>
          </div>
        ) : null}
      </div>
    );
  }
}
