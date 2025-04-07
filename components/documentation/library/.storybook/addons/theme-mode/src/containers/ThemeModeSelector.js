import React, {Fragment} from 'react'

import {logger} from '@storybook/client-logger'
import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList
} from '@storybook/components'

import {DEFAULT_THEME_MODE_CONFIG} from '../constants.js'
import {useThemeMode, useColorSchema} from '../helpers/index.js'

const createThemeModeSelectorItem = (
  id,
  name,
  value,
  hasSwatch,
  change,
  active
) => ({
  id: id || name,
  title: name,
  onClick: () => {
    change({selected: value, name})
  },
  value,
  active
})

const getDisplayedItems = (selectedThemeMode, change) => {
  const themeModeSelectorItems = DEFAULT_THEME_MODE_CONFIG.values.map(
    ({name, value}) =>
      createThemeModeSelectorItem(
        null,
        name,
        value,
        true,
        change,
        name === selectedThemeMode
      )
  )

  if (selectedThemeMode !== 'system') {
    return [...themeModeSelectorItems]
  }

  return themeModeSelectorItems
}

export const ThemeModeSelector = () => {
  const [themeModeConfig, setThemeModeConfig] = useThemeMode()

  if (Array.isArray(themeModeConfig)) {
    logger.warn(
      'Addon ThemeMode api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md'
    )
  }

  const onThemeModeChange = value => {
    setThemeModeConfig(value)
  }

  const mainElement = document.querySelector('#storybook-preview-iframe')
  const themeMode = useColorSchema()
  if (mainElement) {
    const element = mainElement.contentDocument.querySelector('.sb-show-main')
    if (element) {
      if (element.getAttribute('data-theme-mode')) {
        element.removeAttribute('data-theme-mode')
      }
      element.setAttribute('data-theme-mode', themeMode)
    }
  }

  return (
    <Fragment>
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnClick
        tooltip={({onHide}) => {
          return (
            <TooltipLinkList
              links={getDisplayedItems(themeModeConfig, ({selected}) => {
                if (themeModeConfig !== selected) {
                  onThemeModeChange(selected)
                }
                onHide()
              })}
            />
          )
        }}
      >
        <IconButton
          key="theme-mode"
          title="Change the theme mode of the preview"
          active={themeModeConfig !== DEFAULT_THEME_MODE_CONFIG.default}
        >
          <Icons icon="cog" />
        </IconButton>
      </WithTooltip>
    </Fragment>
  )
}
