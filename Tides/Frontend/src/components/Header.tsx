import { Component, ReactNode } from "react";

export class Header extends Component {
  render(): ReactNode {
    return (
      <header className="flex justify-center gap-96 mt-5">
        <p className="text-2xl hover:text-sky-600">Tides</p>

        <div className="flex gap-10 text-2xl">
          <a className="bi bi-github hover:text-sky-600" href="https://github.com/Tides"></a>
          <a className="bi bi-twitter hover:text-sky-600" href="https://twitter.com/TidesVI"></a>
          <a className="bi bi-music-note-beamed hover:text-sky-600" href="https://soundcloud.com/tidesvi"></a>
        </div>
      </header>
    );
  }
}
