import { Menu } from '@/components/Menu'
import { Star } from 'phosphor-react'
import Image from 'next/image'

import * as S from './styles'

export default function Home() {
  return (
    <S.Container>
      <Menu />

      <S.BookCard>
        <S.BookCover>
          <Image
            alt="capa do livro: o poder do habito"
            src="/images/books/o-poder-do-habito.png"
            fill
          />
        </S.BookCover>
        <S.BookContent>
          <header>
            <span>Há 2 dias</span>
            <div>
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
              <Star />
              <Star />
            </div>
          </header>
          <section>
            <h3>Entendendo Algoritmos</h3>
            <span>Aditya Bhargava</span>
            <p>
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in
              sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu
            </p>
          </section>
        </S.BookContent>
      </S.BookCard>
    </S.Container>
  )
}
