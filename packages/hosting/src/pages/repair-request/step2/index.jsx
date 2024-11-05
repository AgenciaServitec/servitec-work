import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export const Step2Integration = () => {
  const { repairRequestId } = useParams();
  const navigate = useNavigate();

  console.log("repairRequestId_2: ", repairRequestId);

  useEffect(() => {
    if (!repairRequestId) return navigate("/");
  }, []);

  const onGoToStepNext = () => navigate(`/repair-request/3/${repairRequestId}`);

  return (
    <div>
      <h2>STEP 2</h2>
      <button onClick={onGoToStepNext}>Siguiente</button>
    </div>
  );
};
