import {
  ADD_NFT_METADATA,
  ADD_NFT_METADATA_ERROR,
  ADD_NFT_METADATA_SUCCESS,
} from './nftsType.ts'

const addNftMetadata =
  ({ id, address, tokenId, standar, chain }) =>
  async (dispatch) => {
    dispatch({
      type: ADD_NFT_METADATA,
    })
    try {
      const data = {
        address,
        tokenId,
        standar,
        chain,
      }
      const response = await fetch(
        `/api/getNFTmetadata?address=${address}&tokenId=${tokenId}&standar=${standar}&chain=${chain}`
      )
      const { metadata } = await response.json()
      console.log(metadata)

      if (!metadata) {
        dispatch({
          type: ADD_NFT_METADATA_ERROR,
        })
      } else {
        dispatch({
          type: ADD_NFT_METADATA_SUCCESS,
          payload: { id, data, metadata },
        })
      }
    } catch (error) {
      dispatch({
        type: ADD_NFT_METADATA_ERROR,
      })
    }
  }

export { addNftMetadata }
