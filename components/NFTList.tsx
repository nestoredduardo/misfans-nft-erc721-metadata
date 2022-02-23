import { connect } from 'react-redux'

import { addNftMetadata } from '@nftsActions'
import { useEffect } from 'react'

import NFTItem from '@components/NFTItem'
import Loading from '@components/Loading'

type NFTListTypes = {
  list: NFT[]
  loading: boolean
  addNftMetadata: Function
}

const NFTList: React.FC<NFTListTypes> = ({ list, loading, addNftMetadata }) => {
  useEffect(() => {
    addNftMetadata({ id: list[0].id, ...list[0].baseData })
  }, [])

  return (
    <section className="my-8 flex flex-col gap-3">
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
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  list: state.nfts.list,
  loading: state.nfts.loading,
})

const mapDispatchToProps = {
  addNftMetadata,
}

export default connect(mapStateToProps, mapDispatchToProps)(NFTList)
