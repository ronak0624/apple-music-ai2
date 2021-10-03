import { PlusIcon, XIcon } from "@heroicons/react/outline"
import { useState } from "react";
import ShowPlaylist from "../components/playlist/ShowPlaylist";


export default function Playlist(props) {
    const { playlists, createNewPlaylist, removeFromPlaylist, play } = props;
    const [focus, toggleFocus] = useState(false);
    const [newPlaylist, setNewPlaylist] = useState("");

    const names = Object.keys(playlists);

    return (
        <div className="container mx-auto mt-5 px-3 md:px-1">
            <h1 className="text-3xl font-bold mb-5 mt-10 ml-2">Your playlists</h1>
            <div className="flex flex-row justify-center w-full mb-10 cursor-pointer">
                <div onClick={() => toggleFocus(!focus)} className="p-3 inline-block rounded-full bg-gray-100 text-gray-600">
                    {!focus ? <PlusIcon className="w-10 h-10" /> : <XIcon className="w-10 h-10" />}
                </div>
            </div>
            {focus &&
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <PlusIcon className="text-gray-400" />
                    </span>
                    <input onChange={(e) => setNewPlaylist(e.target.value)}
                        type="text"
                        placeholder="Name..."
                        className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring flex-1 pl-10" />
                    <button onClick={() => createNewPlaylist(newPlaylist)} className="py-2 px-4 flex-none bg-blue-500 text-white rounded ml-2">Add</button>
                </div>
            }
            {names.length > 0 ?
                names.map(name => {
                    return (
                        <ShowPlaylist play={play} removeFromPlaylist={removeFromPlaylist} list={playlists[name]} name={name} />
                    )
                }) :
                <div>
                    <p>No playlists yet...</p>
                </div>
            }
        </div>
    )
}