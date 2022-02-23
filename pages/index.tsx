import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import misFansLogo from '@images/MF_logo.svg'
import profileImg from '@images/profileImage.png'
import blocksIcon from '@icons/bloques.svg'
import moneyIcon from '@icons/money.svg'
import notificationsIcon from '@icons/notifications.svg'
import analyticsIcon from '@icons/analytics.svg'
import settingsIcon from '@icons/settings.svg'

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState('BLOQUES')

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
    <div className=" min-h-screen  bg-black text-white">
      <Head>
        <title>MisFans | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex items-center border-b border-gray-500 border-opacity-50 p-3">
        <section className="relative h-5 w-24 ">
          <Image src={misFansLogo} layout="fill" />
        </section>
        <section className="ml-auto flex items-center gap-2 rounded-md p-2 hover:bg-neutral-800">
          <div className="relative h-8 w-8">
            <Image src={profileImg} layout="fill" className=" rounded-full" />
          </div>
          <p className="font-medium">Nestor Mamani</p>
        </section>
      </header>
      <nav className="overflow-x-auto border-b border-gray-500 border-opacity-50  px-3 py-4">
        <ul className="flex gap-1">
          <li
            className={`flex items-center justify-center gap-3 rounded-2xl px-9 py-2 ${
              currentTab == 'BLOQUES' && 'bg-brand'
            }`}
          >
            <div className="relative h-4 w-4">
              <Image src={blocksIcon} layout="fill" />
            </div>
            <p className="text-sm font-normal">BLOQUES</p>
          </li>
          <li
            className={`flex items-center justify-center gap-3 rounded-2xl px-9 py-2 ${
              currentTab == 'MONETIZACIÓN' && 'bg-brand'
            }`}
          >
            <div className="relative h-4 w-4">
              <Image src={moneyIcon} layout="fill" />
            </div>
            <p className="text-sm font-normal">MONETIZACIÓN</p>
          </li>
          <li
            className={`flex items-center justify-center gap-3 rounded-2xl px-9 py-2 ${
              currentTab == 'SUSCRIPCIONES' && 'bg-brand'
            }`}
          >
            <div className="relative h-4 w-4">
              <Image src={moneyIcon} layout="fill" />
            </div>
            <p className="text-sm font-normal">SUSCRIPCIONES</p>
          </li>
          <li
            className={`flex items-center justify-center gap-3 rounded-2xl px-9 py-2 ${
              currentTab == 'NOTIFICACIÓN' && 'bg-brand'
            }`}
          >
            <div className="relative h-4 w-4">
              <Image src={notificationsIcon} layout="fill" />
            </div>
            <p className="text-sm font-normal">NOTIFICACIÓN</p>
          </li>
          <li
            className={`flex items-center justify-center gap-3 rounded-2xl px-9 py-2 ${
              currentTab == 'ANALÍTICAS' && 'bg-brand'
            }`}
          >
            <div className="relative h-4 w-4">
              <Image src={analyticsIcon} layout="fill" />
            </div>
            <p className="text-sm font-normal">ANALÍTICAS</p>
          </li>
          <li
            className={`flex items-center justify-center gap-3 rounded-2xl px-9 py-2 ${
              currentTab == 'AJUSTES' && 'bg-brand'
            }`}
          >
            <div className="relative h-4 w-4">
              <Image src={settingsIcon} layout="fill" />
            </div>
            <p className="text-sm font-normal">AJUSTES</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
