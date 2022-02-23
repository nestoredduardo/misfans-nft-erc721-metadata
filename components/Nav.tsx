import { useState } from 'react'
import Image from 'next/image'

import blocksIcon from '@icons/bloques.svg'
import moneyIcon from '@icons/money.svg'
import notificationsIcon from '@icons/notifications.svg'
import analyticsIcon from '@icons/analytics.svg'
import settingsIcon from '@icons/settings.svg'

const Nav: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('BLOQUES')

  const handleTabClick = (tabName: string) => {
    setCurrentTab(tabName)
  }

  return (
    <nav className="overflow-x-auto border-b border-gray-500 border-opacity-50  px-3 py-4">
      <ul className="flex gap-1 xl:justify-center">
        <li
          className={`flex items-center justify-center gap-3 rounded-2xl px-9 py-2 ${
            currentTab == 'BLOQUES' && 'bg-brand'
          }`}
          onClick={() => handleTabClick('BLOQUES')}
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
          onClick={() => handleTabClick('MONETIZACIÓN')}
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
          onClick={() => handleTabClick('SUSCRIPCIONES')}
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
          onClick={() => handleTabClick('NOTIFICACIÓN')}
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
          onClick={() => handleTabClick('ANALÍTICAS')}
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
          onClick={() => handleTabClick('AJUSTES')}
        >
          <div className="relative h-4 w-4">
            <Image src={settingsIcon} layout="fill" />
          </div>
          <p className="text-sm font-normal">AJUSTES</p>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
