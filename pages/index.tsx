import type { NextPage } from 'next'

import Head from 'next/head'
import { connect } from 'react-redux'

import Header from '@components/Header'
import Nav from '@components/Nav'
import Main from '@components/Main'
import Modal from '@components/Modal'

type HomeProps = {
  showModalState: boolean
}

const Home: NextPage<HomeProps> = ({ showModalState }) => {
  /* const getNFTMetadata = async (
    address: string,
    tokenId: string,
    standar: string,
    chain: string
  ) => {
    const response = await fetch(
      `/api/getNFTmetadata?address=${address}&tokenId=${tokenId}&standar=${standar}&chain=${chain}`
    )
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    const address = '0x2953399124f0cbb46d2cbacd8a89cf0599974963'
    const tokenId =
      '67442861663334708568431626599499864796798009138674433109352764902689030012929'
    const standar = 'ERC1155'
    const chain = 'POLY'
    getNFTMetadata(address, tokenId, standar, chain)
  }, []) */

  return (
    <div className="min-h-screen  bg-black text-white">
      <Head>
        <title>MisFans | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showModalState && <Modal />}

      <Header />
      <Nav />
      <Main />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  showModalState: state.modal.show,
})

export default connect(mapStateToProps, null)(Home)
