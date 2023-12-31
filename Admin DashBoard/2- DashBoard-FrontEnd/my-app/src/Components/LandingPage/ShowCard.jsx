/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function ShowCard({user}) {
  return (
    <div className="information">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.gender}</p>
      <p>{user.id}</p>
      <p>{user.status}</p>
      <div>
      <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
      <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
      </div>
    </div>
  );
}

export default ShowCard;
