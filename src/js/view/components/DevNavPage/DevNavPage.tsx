import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary, TitleH1 } from "../../elements";

export function DevNavPage() {
  return (
    <div className="dev-nav-page pt-14 min-h-screen bg-light-4 dark:bg-dark-0 text-center">
      <TitleH1>
        Welcome to develop navigation page
      </TitleH1>
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
            <Link to="/welcome">
              <ButtonPrimary>Welcome Page</ButtonPrimary>
            </Link>
          </div>
          <div className="mb-8 mx-auto">
            <Link to="/no-events">
              <ButtonPrimary>No Events Page</ButtonPrimary>
            </Link>
          </div>
          <div className="mb-8 mx-auto">
            <Link to="/add-members">
              <ButtonPrimary>Add Members Page</ButtonPrimary>
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
