import React, { useState } from "react";
import "./priority.css";
interface PriorityProps {
  priority: string;
}
function Priority({ priority }: PriorityProps) {
  return <div className={`priority ${"priority-" + priority}`}>{priority}</div>;
}

export default Priority;
