import { useForm, SubmitHandler } from 'react-hook-form'
import { connect } from 'react-redux'

import { addNftMetadata } from '@nftsActions'

enum BlockchainEnum {
  ETH = 'ETH',
  POLY = 'POLY',
}

enum StandarEnum {
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155',
}

type Inputs = {
  chain: BlockchainEnum
  standar: StandarEnum
  address: string
  tokenId: string
}

type NFTFormTypes = {
  addNftMetadata: Function
}

const AddNFTForm: React.FC<NFTFormTypes> = ({ addNftMetadata }) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => addNftMetadata({ ...data })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label className="mt-3">Blockchain</label>
      <select
        {...register('chain')}
        className="cursor-pointer rounded-2xl border border-backLight bg-back py-3 px-4"
      >
        <option value="ETH" className="bg-[#1e1e1e] py-3 px-4">
          Ethereum
        </option>
        <option value="POLY" className="bg-[#1e1e1e] py-3 px-4">
          Polygon
        </option>
      </select>
      <label className="mt-3">Estándar</label>
      <select
        {...register('standar')}
        className="cursor-pointer rounded-2xl border border-backLight bg-back py-3 px-4"
      >
        <option value="ERC721" className="bg-[#1e1e1e] py-3 px-4">
          ERC-721
        </option>
        <option value="ERC1155" className="bg-[#1e1e1e] py-3 px-4">
          ERC-1155
        </option>
      </select>
      <input
        className="mt-3 rounded-t-xl border border-backLight bg-transparent py-2 px-3"
        type="text"
        {...register('address')}
        placeholder="Contract address"
        required
        autoComplete="off"
      />
      <input
        className="rounded-b-xl border border-backLight bg-transparent py-2 px-3"
        type="text"
        {...register('tokenId')}
        placeholder="Token Id"
        required
        autoComplete="off"
      />
      <button
        className="my-5 rounded-2xl bg-gradient-to-r from-[#da22ff] to-brand py-3 px-5 hover:bg-opacity-90"
        type="submit"
      >
        Agregar NFT
      </button>
    </form>
  )
}

const mapDispatchToProps = {
  addNftMetadata,
}

export default connect(null, mapDispatchToProps)(AddNFTForm)
