import { styled } from '@/styles'

export const Container = styled('div', {
  minHeight: '100dvh',
  maxHeight: '100dvh',
  padding: '$5',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$6',
  boxSizing: 'border-box',
})

export const Wallpaper = styled('div', {
  overflow: 'hidden',
  borderRadius: '$md',
  width: '100%',
  position: 'relative',
})

export const Overlay = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const BoxProvider = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

export const FormLogin = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',

  h1: {
    fontWeight: '$bold',
    lineHeight: '$short',
    fontSize: '$2xl',
    marginBottom: '$1',
  },

  p: {
    fontSize: '$md',
    marginBottom: '$10',
  },

  button: {
    all: 'unset',
    background: '$gray-600',

    width: '372px',

    color: '$gray-200',
    fontSize: '$lg',
    fontWeight: '$medium',

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '$2',
    borderRadius: '$md',
    padding: '$5 $6',
    cursor: 'pointer',

    marginBottom: '$4',

    border: '1px solid $gray-600',

    svg: {
      color: '$white',
    },

    '&:hover': {
      border: '1px solid $purple-100',
    },
  },
})
