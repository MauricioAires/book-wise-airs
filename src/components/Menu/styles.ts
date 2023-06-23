import { styled } from '@/styles'

export const Container = styled('nav', {
  width: '232px',
  height: 'calc(100vh - calc($space$4 * 2))',
  minHeight: 'calc(100vh - calc($space$4 * 2))',
  backgroundImage: '$gradient-horizontal',
  borderRadius: '$md',

  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
})

export const Content = styled('div', {
  position: 'absolute',

  padding: '52px $10 $5 $10',

  height: 'stretch',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginBottom: '$6',

  width: '100%',
})

export const WrapperMenu = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  ' > img': {
    marginBottom: '64px',
  },
})

export const MenuList = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  width: '100%',
})

export const MenuItem = styled('li', {
  color: '$gray-400',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '$3',

  padding: '$2 0',

  position: 'relative',

  '&:hover': {
    color: '$gray-100',
  },

  '&:before': {
    position: 'absolute',
    left: '-16px',
    content: ' ',
    height: '24px',
    width: '4px',
    background: 'transparent',
    borderRadius: '$full',
  },

  variants: {
    selected: {
      true: {
        color: '$gray-100',

        '&:before': {
          background: '$gradient-vertical',
        },
      },
    },
  },
})

export const User = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',

  span: {
    fontSize: '$sm',
  },

  svg: {
    color: '$red-500',
    cursor: 'pointer',
    padding: '$1',
    boxSizing: 'content-box',
    borderRadius: '$full',
  },

  '> img': {
    borderRadius: '$full',
    marginBottom: 0,
    display: 'inline',
  },
})
