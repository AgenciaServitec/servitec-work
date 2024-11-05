import React, { useState } from "react";

export const RepairRequest = () => {
  const [viewType, setViewType] = useState(0);

  const viewTypes = {
    0: (
      <div>
        <h2>Page 1</h2>
      </div>
    ),
    1: (
      <div>
        <h2>Page 1</h2>
      </div>
    ),
    2: (
      <div>
        <h2>Page 2</h2>
      </div>
    ),
  };

  return <div>{viewTypes?.[viewType] || "Error 404"}</div>;
};
