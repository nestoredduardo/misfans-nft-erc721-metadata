import Image from 'next/image'
import { connect } from 'react-redux'

import AddNFTForm from '@components/AddNFTForm'

import { hideModal } from '@modalActions'

import closeIcon from '@icons/close.svg'

type ModalProps = {
  hideModal: () => void
}

const Modal: React.FC<ModalProps> = ({ hideModal }) => {
  return (
    <section
      onClick={() => {
        hideModal()
      }}
      className="fixed z-10 flex min-h-screen min-w-full items-center justify-center bg-[rgba(0,0,0,.65)]"
    >
      <div className="w-11/12 rounded-xl border border-gray-500 border-opacity-50 bg-black p-3">
        <div className="mb-2 flex items-center">
          <p className="font-medium">AÑADE NFTS A TU PERFIL</p>
          <button
            className="ml-auto rounded-full bg-backLight p-3"
            onClick={() => {
              hideModal()
            }}
          >
            <div className="relative h-3 w-3">
              <Image src={closeIcon} layout="fill" />
            </div>
          </button>
        </div>
        <p className="text-sm text-white text-opacity-50">
          La blockchain de los NFTs puede ser Ethereum o Polygon en los
          estándares ERC-721 y ERC-1155
        </p>
      </div>
      <AddNFTForm />
    </section>
  )
}

const mapDispatchToProps = {
  hideModal,
}

export default connect(null, mapDispatchToProps)(Modal)
