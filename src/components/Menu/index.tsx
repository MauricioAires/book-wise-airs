import { useState } from 'react'
import Image from 'next/image'
import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react'

import backgorund from '@/assets/menu-background.png'
import logoImage from '@/assets/logo.png'

import * as S from './styles'

export function Menu() {
  const [selectedMenu, setSelectedMenu] = useState('home')
  return (
    <S.Container>
      <Image alt="" src={backgorund} fill />
      <S.Content>
        <S.WrapperMenu>
          <Image
            quality={100}
            width={128}
            height={32}
            alt="Logo"
            src={logoImage}
          />

          <S.MenuList>
            <S.MenuItem
              onClick={() => setSelectedMenu('home')}
              selected={selectedMenu === 'home'}
            >
              <ChartLineUp size={24} />
              Inicio
            </S.MenuItem>
            <S.MenuItem
              onClick={() => setSelectedMenu('explorer')}
              selected={selectedMenu === 'explorer'}
            >
              <Binoculars size={24} />
              Explorar
            </S.MenuItem>
            <S.MenuItem
              onClick={() => setSelectedMenu('profile')}
              selected={selectedMenu === 'profile'}
            >
              <User size={24} />
              Perfil
            </S.MenuItem>
          </S.MenuList>
        </S.WrapperMenu>

        <S.User>
          <Image
            width={32}
            height={32}
            alt="Mauricio Aires"
            src="https://github.com/MauricioAires.png"
          />

          <span>Mauricio</span>

          <SignIn size={20} />
        </S.User>
      </S.Content>
    </S.Container>
  )
}
