import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <h1>This is the posts page</h1>
      <div>{children}</div>
    </div>
  );
}
