type TNFTInput = {
  address: string
  tokenId: string
  standar: string
  chain: string
}

type baseData = {
  address: string
  tokenId: string
  standar: string
  chain: string
}

type metadata = {
  name: string
  description: string
  image: string
}

type NFT = {
  id: number
  baseData: baseData
  metadata: metadata
}
