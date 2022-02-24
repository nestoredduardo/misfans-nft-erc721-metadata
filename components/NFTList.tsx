import { connect } from 'react-redux'

import { addNftMetadata } from '@nftsActions'
import { useEffect } from 'react'

import NFTItem from '@components/NFTItem'
import Loading from '@components/Loading'
import Error from '@components/Error'

type NFTListTypes = {
  list: NFT[]
  loading: boolean
  error: boolean
  addNftMetadata: Function
}

const NFTList: React.FC<NFTListTypes> = ({
  list,
  loading,
  error,
  addNftMetadata,
}) => {
  useEffect(() => {
    addNftMetadata({ id: list[0].id, ...list[0].baseData })
  }, [])

  return (
    <section className="my-8 mx-auto flex max-w-sm flex-col gap-3">
      {list.map((item) => {
        if (item.metadata.image) {
          return (
            <NFTItem
              key={item.id}
              image={item.metadata.image}
              name={item.metadata.name}
            />
          )
        }
      })}
      {loading && <Loading />}
      {error && <Error />}
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  list: state.nfts.list,
  loading: state.nfts.loading,
  error: state.nfts.error,
})

const mapDispatchToProps = {
  addNftMetadata,
}

export default connect(mapStateToProps, mapDispatchToProps)(NFTList)
