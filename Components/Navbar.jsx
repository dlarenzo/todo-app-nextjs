import React from "react";

const navbar = () => {
  return (
    <div className="flex py-3 flex-wrap justify-around">
      <h1 className="text-lg font-semibold">Todo App</h1>
      <ul className="flex gap-[40px] text-m">
        <li>Home</li>

        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default navbar;
