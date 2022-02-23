import Image from 'next/image'

import misFansLogo from '@images/MF_logo.svg'
import profileImg from '@images/profileImage.png'

const Header: React.FC = () => {
  return (
    <header className="flex items-center border-b border-gray-500 border-opacity-50 p-3 md:px-10 lg:px-16">
      <section className="relative h-5 w-24 ">
        <Image src={misFansLogo} layout="fill" />
      </section>
      <section className="ml-auto flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-800">
        <div className="relative h-8 w-8">
          <Image src={profileImg} layout="fill" className=" rounded-full" />
        </div>
        <p className="font-medium">Nestor Mamani</p>
      </section>
    </header>
  )
}

export default Header
