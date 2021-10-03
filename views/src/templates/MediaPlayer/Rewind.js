import React from "react";
import { RewindIcon } from "@heroicons/react/solid";

export default function Play(props) {
    const { handleClick } = props;

    return (
        <button className="text-gray-200 h-8 w-8 stroke-1 self-center mr-3" onClick={() => handleClick()}>
            <RewindIcon />
        </button>
    );
}
