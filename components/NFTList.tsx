import { connect } from 'react-redux'

import { addNftMetadata } from '@nftsActions'
import { useEffect } from 'react'

import NFTItem from '@components/NFTItem'

type NFTListTypes = {
  list: NFT[]
  addNftMetadata: Function
}

const NFTList: React.FC<NFTListTypes> = ({ list, addNftMetadata }) => {
  useEffect(() => {
    addNftMetadata({ id: list[0].id, ...list[0].baseData })
  }, [])

  return (
    <section>
      {list.map((item) => {
        if (item.metadata.image) {
          return <NFTItem image={item.metadata.image} />
        }
      })}
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  list: state.nfts.list,
})

const mapDispatchToProps = {
  addNftMetadata,
}

export default connect(mapStateToProps, mapDispatchToProps)(NFTList)
