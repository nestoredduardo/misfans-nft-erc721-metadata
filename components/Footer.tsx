import Image from 'next/image'

import githubLogo from '@icons/github.svg'

const LandingFooter: React.FC = () => {
  return (
    <footer className="mt-auto flex flex-col items-center">
      <a
        href="https://github.com/nestoredduardo/misfans-nft-erc721-metadata"
        target="_blank"
        className="relative mb-2 h-8 w-8 lg:h-12 lg:w-12"
      >
        <Image src={githubLogo} layout="fill" />
      </a>
      <h3 className="text-center text-white">
        Hecho para divertirse un rato con 👨‍💻 y ☕ por{' '}
        <a
          href="https://www.nestoredduardo.me/"
          target="_blank"
          className="rounded-md bg-gradient-to-br from-[#0BD6CD] to-[#2600FF] p-1 font-bold"
        >
          @nestoredduardo
        </a>
      </h3>
    </footer>
  )
}

export default LandingFooter
