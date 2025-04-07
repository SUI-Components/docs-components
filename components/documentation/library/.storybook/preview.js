import '../src/index.scss'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: 'var(--c-sui-studio-doc-neutral0, #f5f5f5)'
      },
      {
        name: 'dark',
        value: 'var(--c-sui-studio-doc-neutral10, #333333)'
      }
    ]
  }
}

export const decorators = [
  (Story, params) => {
    return <Story />
  }
]
