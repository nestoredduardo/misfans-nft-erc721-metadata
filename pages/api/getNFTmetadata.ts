//types
import type { NextApiRequest, NextApiResponse } from 'next'
import { AbiItem } from 'web3-utils'

//libraries
import Web3 from 'web3'

//local files
import Abi721 from '@utils/ERC721.json'
import Abi1155 from '@utils/ERC1155.json'

const getNFTMetadata = async (
  address: string,
  tokenId: string,
  standar: string
) => {
  try {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
      )
    )

    let uriInfo

    switch (standar) {
      case 'ERC721':
        const contract721 = new web3.eth.Contract(Abi721 as AbiItem[], address)

        uriInfo = await contract721.methods.tokenURI(tokenId).call()
      case 'ERC1155':
        const contract1155 = new web3.eth.Contract(
          Abi1155 as AbiItem[],
          address
        )

        uriInfo = await contract1155.methods.uri(tokenId).call()
      default:
        break
    }

    return uriInfo
  } catch (error) {
    console.log(error)
  }
}

const handleGetNFTmetadata = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { address, tokenId, standar } = req.query

  const metadata = await getNFTMetadata(
    address as string,
    tokenId as string,
    standar as string
  )

  res.status(200).json({ metadata })
}

export default handleGetNFTmetadata
