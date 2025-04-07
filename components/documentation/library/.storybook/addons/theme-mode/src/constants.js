export const ADDON_ID = 'storybook/theme-mode'
export const PARAM_KEY = 'themeMode'

export const EVENTS = {
  UPDATE: `${ADDON_ID}/update`
}

export const DEFAULT_THEME_MODE_CONFIG = {
  default: 'system',
  disable: false,
  values: [
    {name: 'system', value: undefined},
    {name: 'light', value: 'light'},
    {name: 'dark', value: 'dark'}
  ]
}
