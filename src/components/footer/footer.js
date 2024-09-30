import React from 'react'

const footer = () => {
  return (
    <div className="py-4 space-y-2 text-gray-500 absolute bottom-0 right- w-full">
    <footer>
      <ul className="flex space-x-2 text-sm pt-3">
        <li className="hover:underline hover:underline-offset-4">About</li>
        <li className="hover:underline hover:underline-offset-4">Help</li>
        <li className="hover:underline hover:underline-offset-4">Press</li>
        <li className="hover:underline hover:underline-offset-4">API</li>
        <li className="hover:underline hover:underline-offset-4">Jobs</li>
        <li className="hover:underline hover:underline-offset-4">Privacy</li>
        <li className="hover:underline hover:underline-offset-4">Terms</li>
      </ul>
      <ul className="flex space-x-2 text-sm">
        <li className="hover:underline hover:underline-offset-4">
          Locations
        </li>
        <li className="hover:underline hover:underline-offset-4">Language</li>
      </ul>
    </footer>
    <div>
      <p className="text-sm pt-1">&copf; 2024 INSTAGRAM FROM META</p>
    </div>
    </div>
  )
}

export default footer