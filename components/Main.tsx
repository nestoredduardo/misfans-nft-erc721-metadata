import Image from 'next/image'
import { useState } from 'react'
import { connect } from 'react-redux'

import { showModal } from '@modalActions'

import nftIcon from '@icons/nfts.svg'
import mediaIcon from '@icons/media.svg'
import linkIcon from '@icons/link.svg'
import dividerIcon from '@icons/divider.svg'

type MainProps = {
  showModal: () => void
}

const Main: React.FC<MainProps> = ({ showModal }) => {
  const [showAddBlock, setShowAddBlock] = useState(false)

  return (
    <>
      <main className="relative p-3">
        <section className="flex items-center">
          <h2 className="text-xl font-medium">BLOQUES</h2>
          <button
            onClick={() => {
              setShowAddBlock(!showAddBlock)
            }}
            className="ml-auto rounded-3xl bg-brand px-3 py-2 text-sm focus:bg-opacity-70"
          >
            AÑADIR UN BLOQUE
          </button>
        </section>
        <section
          className={`absolute right-3 top-14 w-72 rounded-md border border-gray-500 border-opacity-40 bg-back ${
            !showAddBlock && 'hidden'
          }`}
        >
          <ul className="flex flex-col">
            <li
              onClick={() => {
                showModal()
                setShowAddBlock(false)
              }}
              className="flex items-center gap-3 border-b border-gray-500 border-opacity-40 p-3 hover:bg-black"
            >
              <div className="h-fit rounded-md border-2 border-gray-500 border-opacity-20 p-2">
                <div className="relative h-6 w-6">
                  <Image src={nftIcon} layout="fill" />
                </div>
              </div>
              <div>
                <p className="font-semibold">NFTs</p>
                <p className="text-sm text-white text-opacity-50">
                  Añade tus mejores NFTs
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3 border-b border-gray-500 border-opacity-40 p-3 hover:bg-black">
              <div className="h-fit rounded-md border-2 border-gray-500 border-opacity-20 p-2">
                <div className="relative h-6 w-6">
                  <Image src={mediaIcon} layout="fill" />
                </div>
              </div>
              <div>
                <p className="font-semibold">Media</p>
                <p className="text-sm text-white text-opacity-50">
                  Añade videos, podcasts, live streaming y más
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3 border-b border-gray-500 border-opacity-40 p-3 hover:bg-black">
              <div className="h-fit rounded-md border-2 border-gray-500 border-opacity-20 p-2">
                <div className="relative h-6 w-6">
                  <Image src={linkIcon} layout="fill" />
                </div>
              </div>
              <div>
                <p className="font-semibold">Enlace</p>
                <p className="text-sm text-white text-opacity-50">
                  Añade tus enlaces más importantes
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3 p-3 hover:bg-black">
              <div className="h-fit rounded-md border-2 border-gray-500 border-opacity-20 p-2">
                <div className="relative h-6 w-6">
                  <Image src={dividerIcon} layout="fill" />
                </div>
              </div>
              <div>
                <p className="font-semibold">Separador</p>
                <p className="text-sm text-white text-opacity-50">
                  Añade un separador a tus bloques
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

const mapDispatchToProps = {
  showModal,
}

export default connect(null, mapDispatchToProps)(Main)
