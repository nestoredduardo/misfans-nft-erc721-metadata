import type { NextPage } from 'next'

import Head from 'next/head'
import { connect } from 'react-redux'

import Header from '@components/Header'
import Nav from '@components/Nav'
import Main from '@components/Main'
import Modal from '@components/Modal'
import Footer from '@components/Footer'

type HomeProps = {
  showModalState: boolean
}

const Home: NextPage<HomeProps> = ({ showModalState }) => {
  return (
    <div className="flex min-h-screen flex-col bg-black pb-4 text-white">
      <Head>
        <title>MisFans | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showModalState && <Modal />}

      <Header />
      <Nav />
      <Main />

      <Footer />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  showModalState: state.modal.show,
})

export default connect(mapStateToProps, null)(Home)
