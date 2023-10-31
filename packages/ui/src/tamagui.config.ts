import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { tokens } from '@tamagui/themes'
import { createMedia } from '@tamagui/react-native-media-driver'

import { animations } from './animations'

const headingFont = createInterFont({
  size: {
    6: 15,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  face: {
    700: { normal: 'InterBold' },
  },
})

const bodyFont = createInterFont(
  {
    face: {
      700: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)

export const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  themes: {
    light: {
      background: '#FFFFFF',
      backgroundHover: '#FFFFFF',
      backgroundPress: '#F5F5F5',
      backgroundFocus: '#FFFFFF',
      backgroundTransparent: '#FFFFFFFF',
      borderColor: '#F5F5F5',
      borderColorHover: '#F5F5F5',
      borderColorPress: '#F5F5F5',
      borderColorFocus: '#F5F5F5',
      color: '#1C1C1C',
      colorHover: '#1C1C1C',
      colorPress: '#1C1C1C',
      colorFocus: '#1C1C1C',
      shadowColor: '#00000040',
      shadowColorHover: '#00000040',
      shadowColorPress: '#00000040',
      shadowColorFocus: '#00000040',
    },
    dark: {
      background: '#1C1C1C',
      backgroundHover: '#1C1C1C',
      backgroundPress: '#1C1C1C',
      backgroundFocus: '#1C1C1C',
      backgroundTransparent: '#FFFFFFFF',
      borderColor: '#1C1C1C',
      borderColorHover: '#1C1C1C',
      borderColorPress: '#1C1C1C',
      borderColorFocus: '#1C1C1C',
      color: '#F5F5F5',
      colorHover: '#F5F5F5',
      colorPress: '#F5F5F5',
      colorFocus: '#F5F5F5',
      shadowColor: '#00000040',
      shadowColorHover: '#00000040',
      shadowColorPress: '#00000040',
      shadowColorFocus: '#00000040',
    },
    dimmed: {
      background: '#2F2F2F',
      backgroundHover: '#2F2F2F',
      backgroundPress: '#2F2F2F',
      backgroundFocus: '#2F2F2F',
      backgroundTransparent: '#FFFFFFFF',
      borderColor: '#2F2F2F',
      borderColorHover: '#2F2F2F',
      borderColorPress: '#2F2F2F',
      borderColorFocus: '#2F2F2F',
      color: '#F5F5F5',
      colorHover: '#F5F5F5',
      colorPress: '#F5F5F5',
      colorFocus: '#F5F5F5',
      shadowColor: '#00000040',
      shadowColorHover: '#00000040',
      shadowColorPress: '#00000040',
      shadowColorFocus: '#00000040',
    },
  } as const,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})
