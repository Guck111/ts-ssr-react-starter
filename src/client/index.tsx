import { loadableReady } from "@loadable/component"
import { hydrate, render } from "react-dom"
import { BrowserRouter } from "react-router-dom"

import { App } from "./App/App"

const renderApp = () => {
  const rootContent = document.getElementById("root")
  const renderMethod = module.hot ? render : hydrate

  renderMethod(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootContent
  )
}

loadableReady(() => {
  renderApp()
})

if (module.hot) {
  module.hot.accept()
}
