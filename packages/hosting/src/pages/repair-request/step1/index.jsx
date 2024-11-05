import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export const Step1Integration = () => {
  const { repairRequestId } = useParams();
  const navigate = useNavigate();

  console.log("repairRequestId_1: ", repairRequestId);

  useEffect(() => {
    if (!repairRequestId) return navigate("/");
  }, []);

  const onGoToStepNext = () => navigate(`/repair-request/2/${repairRequestId}`);

  return (
    <div>
      <h2>STEP 1</h2>
      <button onClick={onGoToStepNext}>Siguiente</button>
    </div>
  );
};
