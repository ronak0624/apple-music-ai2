import { PlusIcon, XIcon } from "@heroicons/react/outline"
import { useState } from "react";
import ShowPlaylist from "../components/playlist/ShowPlaylist";


export default function Playlist(props) {
    const { playlists, createNewPlaylist } = props;
    const [focus, toggleFocus] = useState(false);
    const [newPlaylist, setNewPlaylist] = useState("");

    return (
        <div className="container mx-auto mt-5">
            <div className="flex flex-row justify-center w-full">
                <div onClick={() => toggleFocus(!focus)} className="p-3 inline-block rounded-full bg-gray-100 text-gray-600">
                    {!focus ? <PlusIcon className="w-10 h-10" /> : <XIcon className="w-10 h-10" />}
                </div>
            </div>
            <div>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <PlusIcon />
                    </span>
                    <input onChange={(e) => setNewPlaylist(e.target.value)}
                        type="text"
                        placeholder="Name..."
                        className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4 pl-10" />
                    <button onClick={() => createNewPlaylist(newPlaylist)} className="py-2 px-4 bg-blue-500 text-white rounded ml-2">Add</button>
                </div>
            </div>
            {Object.keys(playlists).map(name => {
                return (
                    <ShowPlaylist list={playlists[name]} name={name} />
                )
            })}
        </div>
    )
}