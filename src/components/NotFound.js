import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="text-left mx-auto max-w-lg">
        <h2 className="text-xl font-bold mb-4">
          Sorry, the page you are looking for couldn't be found.
        </h2>
        <p className="mb-4">
          Please go back to the{" "}
          <Link to={"/"} className="text-blue-500 hover:underline">
            home page
          </Link>{" "}
          and try again. If it still doesn't work for you, please reach out to
          our team at{" "}
          <span className="text-orange-500">contact@ibrahimwondimu.com.</span>
        </p>
      </div>
    </section>
  );
}

export default NotFound;
