import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-2.5 dark:bg-gray-800 border-b border-zinc-300">
      <div className="container flex  justify-center items-center mx-auto">
        <Link to="/" className="flex">
          <h3 className="text-blue-800 text-2xl md:text-4xl font-semibold">TheMealDb</h3>
        </Link>
      </div>
    </nav>
  );
};
