import React, {Fragment} from 'react'
import {addons, types} from '@storybook/addons'

import {ADDON_ID} from './constants'
import {ThemeModeSelector} from './containers/index'

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'ThemeMode',
    type: types.TOOL,
    match: ({viewMode}) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => {
      return (
        <Fragment>
          <ThemeModeSelector />
        </Fragment>
      )
    }
  })

})
