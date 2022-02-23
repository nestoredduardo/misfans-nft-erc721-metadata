import Image from 'next/image'

import githubLogo from '@icons/github.svg'

const LandingFooter: React.FC = () => {
  return (
    <footer className="mt-auto flex flex-col items-center">
      <div className="relative mb-2 h-8 w-8">
        <Image src={githubLogo} layout="fill" />
      </div>
      <h3 className="text-center text-sm text-white">
        Hecho con 💚 y ☕ por{' '}
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
