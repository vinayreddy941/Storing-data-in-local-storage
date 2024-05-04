import React from "react";

const Discl = () => {
  return (
    <>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        <h2>Overview</h2>
        <ul
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          <li>
            Implemented a Counter Component with buttons for increment,
            decrement, and reset.
          </li>
          <li>
            Created a background color animation representing a level/height of
            color, increasing linearly with a bezier curve.
          </li>
          <li>
            Included a reset button to set the background color level to 0.
          </li>
          <li>Maintained the count across re-renders.</li>
          <li>
            Designed a user data form collecting name, email, phone and
            Description.
          </li>
          <li>
            Automatically generated a user ID upon form submission and saved
            data locally or using Redux Toolkit (RTK).
          </li>
          <li>
            Displayed a pop-up notification if there are unsaved changes when
            closing the browser.
          </li>
          <li>
            Visualized user data in a rich text editor with formatting options
            like bold, italic, underline, and lists.
          </li>
          <li>
            Ensured data persistence by saving changes to local storage or using
            RTK for state management.
          </li>
        </ul>
      </div>
    </>
  );
};

const Discl2 = () => {
  return (
    <>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        <h2>Overview</h2>
        <ul>
          <li>All submitted data is stored within an object.</li>
          <li>This object generates a unique user ID for each submission.</li>
          <li>
            User IDs are displayed in the designated "All User IDs" DOM element.
          </li>
          <li>
            To access specific user information, users must input the
            corresponding user ID into the "Retrieve Form Data" interface.
          </li>
          <li>
            Here, users can copy the user ID from the "All User IDs" section and
            paste it into the "Enter User ID" field to retrieve the information.
          </li>
          <li>
            Information retrievable includes name, email, phone number, and
            description.
          </li>
        </ul>
      </div>
    </>
  );
};

const Discl3 = () => {
  return (
    <>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        <h2>Overview</h2>
        <ul>
          <li>
            Implemented functional components with hooks for efficient state
            management and component lifecycle handling.
          </li>
          <li>
            Utilized React Router to enable seamless navigation between
            different pages of the application.
          </li>
          <li>
            Integrated a simple Google authentication feature, allowing users to
            proceed to the next page by directly clicking on the sign-in button.
          </li>
        </ul>
      </div>
    </>
  );
};

export { Discl, Discl2, Discl3 };
