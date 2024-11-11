

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { RSearch } from '../reusable'
import { Logo } from './Logo'
import { RenderMenu } from './Menu'
import { Profile } from './Profile'
import { User } from './User'

/* const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
} */

export const RenderHeader = () => {
  return (
    <Disclosure as="header" className="bg-white shadow-md pb-2">
      {({ open, close }) => (
        <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between border:none sm:border-b mb-2">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <Logo className="h-8 w-auto" color="text-red-1"/>
            </div>
            <div className="flex flex-1 items-center justify-center sm:justify-center">
              <RSearch />
            </div>
            <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6 hidden sm:block" />
              </button>

              {/* Profile dropdown */}
              <Profile className='hidden sm:block'/>
              <div className="sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group rounded-md p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="block group-data-[open]:hidden h-6 w-6 text-gray-400" aria-hidden="true" />
                  <XMarkIcon className="hidden group-data-[open]:block h-6 w-6 text-gray-400" aria-hidden="true" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Render menu for larger screens */}
          <RenderMenu className="hidden sm:flex flex-row"/>
        </div>

        {/* Disclosure panel for mobile menu */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 border-t border-gray-200">
            <RenderMenu className="flex flex-col" onSelectMenu={close}/>
          </div>
          <User className="space-y-1 px-2 pb-3 pt-2 flex flex-col" />
        </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
    