import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../elements";

export function DevNavPage() {
  return (
    <div className="dev-nav-page pt-8 h-full bg-dark-1">
      <h1 className="text-center " style={{ color: "#fff" }}>
        Welcome to develop navigation page
      </h1>
      <nav>
        <div className="p-8 flex flex-col mx-auto">
          <div className="mb-8 mx-auto">
            <Link to="/alex">
              <ButtonPrimary>Alex&apos;s demo</ButtonPrimary>
            </Link>
          </div>
          <div className="mb-8 mx-auto">
            <Link to="/ui-kit">
              <ButtonPrimary>UI-kit page</ButtonPrimary>
            </Link>
          </div>
          <div className="mb-8 mx-auto">
            <Link to="/no-events">
              <ButtonPrimary>No Events Page</ButtonPrimary>
            </Link>
          </div>
          <div className="mb-8 mx-auto">
            <Link to="/SPAremoveit">
              <ButtonPrimary>
                Один огромный компонент, который нужно разбить
              </ButtonPrimary>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
