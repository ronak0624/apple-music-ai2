import React from "react";
import { PauseIcon } from "@heroicons/react/outline";

export default function Pause(props) {
  const { handleClick } = props;

  return (
    <button className="text-gray-200 h-10 w-10 stroke-1" onClick={() => handleClick()}>
      <PauseIcon />
    </button>
  );
}
