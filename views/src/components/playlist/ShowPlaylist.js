import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

import Videos from '../search/Videos';
import Songs from '../search/Songs';

function Playlist(props) {
    const { list, removeFromPlaylist, playlistName, play } = props;


    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Name
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Album
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Kind
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Genre
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Delete</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {list.map((media, i) => {
                    let artwork = media.artwork.replace("{w}", "600");
                    artwork = artwork.replace("{h}", "800");

                    return (
                        <tr className="cursor-pointer" onClick={() => play(media.preview, 'audio', media.name, media.artistName)} key={i}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-md" src={artwork} alt="artwork" alt="artwork" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">{media.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{media.albumName}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{media.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {media.genreNames.join(", ")}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div id={media.id} onClick={(e) => removeFromPlaylist(e.target.id, playlistName)} className="text-red-700 hover:text-red-900 cursor-pointer">
                                    <svg id={media.id} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path id={media.id} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}

export default function ShowPlaylist(props) {
    const { name, list, removeFromPlaylist, play } = props;

    return (
        <Disclosure className="mt-3">
            {({ open }) => (
                <div>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>{name}</span>
                        <ChevronUpIcon
                            className={`${!open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-blue-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {list && list.length > 0 ?
                            <Playlist play={play} playlistName={name} removeFromPlaylist={removeFromPlaylist} list={list} />
                            :
                            <p>No media in this playlist yet.</p>
                        }
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    )
}