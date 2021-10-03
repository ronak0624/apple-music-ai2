import React from "react";
import { PlayIcon } from "@heroicons/react/outline";

export default function Play(props) {
    const { handleClick } = props;

    return (
        <button className="text-gray-200 h-10 w-10 stroke-1" onClick={() => handleClick()}>
            <PlayIcon />
        </button>
    );
}
