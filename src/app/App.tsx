import * as React from 'react'
import {HashRouter} from 'react-router-dom'
import {Global, css} from '@emotion/core'

import ErrorBoundary from './ErrorBoundary'
import AppRouter from './AppRouter'

const globalCss = css({
  '*, *::after, *::before': {
    boxSizing: 'border-box',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  html: {
    // Deal with address bar issues on mobile.
    // See: https://stackoverflow.com/q/52848856
    height: '100%',
  },
  body: {
    // Prevent actions like double-tap-to-zoom
    touchAction: 'manipulation',
    height: '100%',
  },
})

const rootCss = css`
  height: 100%;
`

/** Renders the entire application. */
export default function App(): JSX.Element {
  return (
    <div css={rootCss}>
      <ErrorBoundary>
        {/* HashRouter over BrowserRouter since non-hash routes won't work on GH Pages since the server */}
        {/* won't know which paths to route back to the main app. */}
        <HashRouter basename={process.env.BASE_PATH}>
          <Global styles={globalCss} />
          <AppRouter />
        </HashRouter>
      </ErrorBoundary>
    </div>
  )
}
