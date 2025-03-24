import React from 'react'

interface Props {
  largeSize?: boolean
}
const InstagramLink = ({ largeSize }: Props) => {
  return (
    <a
      href="https://www.instagram.com/kanpacificequipment"
      target="_blank"
      rel="noopener noreferrer"
      className={`${largeSize ? 'text-lg' : 'text-sm'} flex items-center justify-start whitespace-nowrap`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
      </svg>
      kanpacificequipment
    </a >
  )
}

export default InstagramLink