import {useAddonState} from '@storybook/api'
import usePrefersColorScheme from 'use-prefers-color-scheme'

import {
  PARAM_KEY as THEME_MODE_PARAM_KEY,
  DEFAULT_THEME_MODE_CONFIG
} from '../constants'

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useAddonState(
    THEME_MODE_PARAM_KEY,
    DEFAULT_THEME_MODE_CONFIG.default
  )
  return [themeMode, setThemeMode]
}

export const useColorSchema = () => {
  const [themeMode] = useAddonState(THEME_MODE_PARAM_KEY)
  const prefersColorScheme = usePrefersColorScheme()
  if (themeMode === 'system') {
    return prefersColorScheme === 'dark' ? 'dark' : 'light'
  }
  return themeMode
}
