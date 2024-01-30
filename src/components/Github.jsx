import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  return (
    <div className="flex justify-center items-center pt-20 h-full w-full">
      <div className="h-full">
        <h1 className="text-center">Name: {data?.name}</h1>
        <p className="text-center">followers: {data?.followers}</p>
        <img className="rounded-[50%]" src={data?.avatar_url} />
      </div>
    </div>
  );
};

export default Github;

export const githubURL = async () => {
  const response = await fetch("https://api.github.com/users/fluKeyzx");
  return response.json();
};
