import Image from 'next/image'
import wallpaperImage from '../../assets/wallpaper-login.png'
import logoImage from '../../assets/logo.png'

import { FcGoogle } from 'react-icons/fc'
import { BsGithub, BsRocketTakeoff } from 'react-icons/bs'

import * as S from './styles'

export default function Login() {
  return (
    <S.Container>
      <S.Wallpaper>
        <Image quality={100} fill alt="Logo" src={wallpaperImage} />
        <S.Overlay>
          <Image
            quality={100}
            width={232}
            height={58}
            alt="Logo"
            src={logoImage}
          />
        </S.Overlay>
      </S.Wallpaper>
      <S.BoxProvider>
        <S.FormLogin>
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante.</p>
          <button type="button">
            <FcGoogle size={32} />
            Entrar com Google
          </button>
          <button type="button">
            <BsGithub size={32} />
            Entrar com GitHub
          </button>
          <button type="button">
            <BsRocketTakeoff size={32} />
            Acessar como visitante
          </button>
        </S.FormLogin>
      </S.BoxProvider>
    </S.Container>
  )
}
