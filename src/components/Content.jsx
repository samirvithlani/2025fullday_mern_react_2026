import React from "react";

export const Content = () => {
  var year = 2026;
  var country = "India";
  var isActive = true;
  var user = {
    id: 1,
    name: "Ram",
  };
  var x;

  return (
    <div>
      <h1>CONTENT</h1>

      <h1>Hello</h1>
      <h1>Every tag must have closing tag</h1>
      <h2>At a time we can return only 1 element</h2>
      {year}
      <h1>Year = {year}</h1>
      <h2>Country : {country}</h2>
      <h2>Active??? {isActive == true ? "Active" : "Not Active"}</h2>
      {/* <h1>User = {user}</h1> */}
      <h1>User id = {user.id}</h1>
      <h1>User name = {user.name}</h1>
      <h1>x = {x}</h1>
    </div>
  );
};
