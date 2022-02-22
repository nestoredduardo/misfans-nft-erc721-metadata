//types
import type { NextApiRequest, NextApiResponse } from 'next'
import { AbiItem } from 'web3-utils'

//libraries
import Web3 from 'web3'

//local files
import Abi from '@utils/ERC721.json'

const getNFTMetadata = async (address: string) => {
  try {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
      )
    )

    const contract = new web3.eth.Contract(Abi as AbiItem[], address)
    const metadata = await contract.methods.tokenURI('33').call()
    console.log(metadata)
    return metadata
  } catch (error) {
    console.log(error)
  }
}

const handleGetNFTmetadata = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const metadata = await getNFTMetadata(req.query.address as string)

  res.status(200).json({ metadata })
}

export default handleGetNFTmetadata
