import React from "react";
import { useNavigate } from "react-router";

export const Error404 = () => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>TU PÁGINA NO EXISTE</h1>

      <button onClick={onGoBack}> Ir inicio</button>
    </div>
  );
};
