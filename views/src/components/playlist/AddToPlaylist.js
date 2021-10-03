import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/outline'

export default function AddToPlaylist(props) {
    const { media, playlists, addToPlaylist, type } = props;

    return (
        <Menu as="div" className="relative inline-block text-left float-right">
            <div>
                <Menu.Button className="p-3 rounded-full bg-gray-100 text-gray-600 float-right">
                    <PlusIcon className="w-5 h-5" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {playlists.map(name => {
                            return (

                                <Menu.Item>
                                    {({ active }) => (
                                        <p onClick={(e) => addToPlaylist(media, e.target.innerText, type)} className="cursor-pointer text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-300">{name}</p>
                                    )}
                                </Menu.Item>
                            )
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}