//types
import type { NextApiRequest, NextApiResponse } from 'next'
import { AbiItem } from 'web3-utils'

//libraries
import Web3 from 'web3'
import { numberToHex } from 'web3-utils'

//local files
import Abi721 from '@utils/ERC721.json'
import Abi1155 from '@utils/ERC1155.json'

// function helpers
const call721Contract = async (
  address: string,
  tokenId: string,
  chain: string
) => {
  let urlProvider = 'url'
  if (chain == 'ETH') {
    urlProvider = `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
  } else if (chain == 'POLY') {
    urlProvider = `https://rpc-mainnet.maticvigil.com/v1/${process.env.MATICRPC_APP_ID}`
  }

  const web3 = new Web3(new Web3.providers.HttpProvider(urlProvider))
  const contract721 = new web3.eth.Contract(Abi721 as AbiItem[], address)

  const uriInfo = await contract721.methods.tokenURI(tokenId).call()
  const response = await fetch(uriInfo)
  const data = await response.json()
  return data
}

const call1155Contract = async (
  address: string,
  tokenId: string,
  chain: string
) => {
  let urlProvider = 'url'
  if (chain == 'ETH') {
    urlProvider = `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
  } else if (chain == 'POLY') {
    urlProvider = `https://rpc-mainnet.maticvigil.com/v1/${process.env.MATICRPC_APP_ID}`
  }

  const web3 = new Web3(new Web3.providers.HttpProvider(urlProvider))
  const contract1155 = new web3.eth.Contract(Abi1155 as AbiItem[], address)

  const uriInfo = await contract1155.methods.uri(tokenId).call()
  const idHex = numberToHex(tokenId)

  const response = await fetch(uriInfo.replace('0x{id}', idHex))
  const data = await response.json()
  return data
}

const getNFTMetadata = async (
  address: string,
  tokenId: string,
  standar: string,
  chain: string
) => {
  try {
    let metadata
    if (standar == 'ERC721') {
      const erc721Data = await call721Contract(address, tokenId, chain)
      metadata = { metadata: erc721Data, NFTdetails: { chain, standar } }
    } else if (standar == 'ERC1155') {
      const erc1155Data = await call1155Contract(address, tokenId, chain)
      metadata = { metadata: erc1155Data, NFTdetails: { chain, standar } }
    }
    return metadata
  } catch (error) {
    console.log(error)
  }
}

const handleGetNFTmetadata = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { address, tokenId, standar, chain } = req.query

  const metadata = await getNFTMetadata(
    address as string,
    tokenId as string,
    standar as string,
    chain as string
  )

  res.status(200).json({ ...metadata })
}

export default handleGetNFTmetadata
