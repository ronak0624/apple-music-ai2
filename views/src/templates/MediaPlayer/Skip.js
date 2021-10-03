import React from "react";
import { FastForwardIcon } from "@heroicons/react/solid";

export default function Skip(props) {
    const { handleClick } = props;

    return (
        <button className="text-gray-200 h-8 w-8 stroke-1 self-center ml-3" onClick={() => handleClick()}>
            <FastForwardIcon />
        </button>
    );
}
