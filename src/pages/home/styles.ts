import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  padding: '$4',
})

export const BookCard = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$4',

  background: '$gray-600',
  height: 'min-content',

  padding: '$5 $6',
  borderRadius: '$md',
})

export const BookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '$4',

    span: {
      color: '$gray-400',
    },
  },

  section: {
    span: {
      display: 'block',
      color: '$gray-400',
      marginBottom: '$space$4',
    },

    p: {
      whiteSpace: 'break-spaces',
      color: '$gray-300',
    },
  },
})

export const BookCover = styled('div', {
  position: 'relative',
  width: '108px',
  height: '152px',
  borderRadius: '$md',
})
