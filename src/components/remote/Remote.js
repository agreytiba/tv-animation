import React, { useState } from "react";
import {
  firstButtons,
  secondButtons,
  thirdButtons,
  fourthButtons,
} from "./data";
const Remote = (click) => {
  return (
    <div className="flex">
      <div className="remote">
        <div className="power flex">
          <a onClick={click}>p</a>
        </div>

        <section className="first-buttons">
          {firstButtons.map(({ id, name }) => (
            <button index={id}>{name}</button>
          ))}
        </section>
        <sectionn className="second-buttons">
          {secondButtons.map(({ id, name, icon, cname }) => (
            <div index={id}>
              <button className={cname}>{name}</button>
            </div>
          ))}
        </sectionn>
        <section className="third-buttons">
          {thirdButtons.map(({ id, name }) => (
            <button index={id}>{name}</button>
          ))}
        </section>
        <section className="fourth-buttons">
          {fourthButtons.map(({ id, name }) => (
            <button index={id}>{name}</button>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Remote;
