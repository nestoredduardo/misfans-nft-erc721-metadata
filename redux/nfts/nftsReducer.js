import {
  ADD_NFT_METADATA,
  ADD_NFT_METADATA_ERROR,
  ADD_NFT_METADATA_SUCCESS,
} from './nftsType.ts'

const initialState = {
  loading: false,
  error: false,
  list: [
    {
      id: 1,
      baseData: {
        address: '0x3CD266509D127d0Eac42f4474F57D0526804b44e',
        tokenId: '6189',
        standar: 'ERC721',
        chain: 'POLY',
      },
      metadata: {},
    },
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NFT_METADATA:
      return { ...state, loading: true, error: false }
    case ADD_NFT_METADATA_SUCCESS:
      if (action.payload.id) {
        return {
          ...state,
          loading: false,
          list: state.list.map((item) => {
            if (item.id == id) {
              return { ...item, metadata: action.payload.metadata }
            }
          }),
        }
      } else {
        const maxId = state.list.length
        return {
          ...state,
          loading: false,
          list: [
            ...state.list,
            {
              id: maxId + 1,
              baseData: action.payload.data,
              metadata: action.payload.metadata,
            },
          ],
        }
      }
    case ADD_NFT_METADATA_ERROR:
      return { ...state, error: true }
    default:
      return state
  }
}

export default reducer
