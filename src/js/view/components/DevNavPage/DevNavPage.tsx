import React from "react";
import { Link } from "react-router-dom";

export function DevNavPage() {
  const devNavPageStyles = {
    backgroundColor: "#262631",
    height: "100vh",
  };

  return (
    <div className="dev-nav-page pt-8" style={devNavPageStyles}>
      <h1 className="text-center " style={{ color: "#fff" }}>
        Welcome to develop navigation page
      </h1>
      <nav>
        <div className="p-8 flex flex-col mx-auto">
          <div className="mb-8 mx-auto">
            <Link to="/alex">
              <button type="button" className="btn btn-primary">
                Alex&apos;s demo
              </button>
            </Link>
          </div>
          <div className="mb-8 mx-auto">
            <Link to="/ui-kit">
              <button type="button" className="btn btn-primary">
                UI-kit page
              </button>
            </Link>
          </div>
          <div className="mb-8 mx-auto">
            <Link to="/SPAremoveit">
              <button type="button" className="btn btn-primary">
                Один огромный компонент, который нужно разбить
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
