import { ADD_NFT, GET_NFT_METADATA } from './nftsType.ts'

const initialState = {
  baseData: [
    {
      address: '0x3CD266509D127d0Eac42f4474F57D0526804b44e',
      tokenId: '6189',
      standar: 'ERC721',
      chain: 'POLY',
    },
  ],
  NFTsMetadata: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NFT:
      return state
    case GET_NFT_METADATA:
      return state
    default:
      return state
  }
}

export default reducer
