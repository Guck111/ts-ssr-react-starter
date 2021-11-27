import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server"
import express from "express"
import path from "path"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"

import { App } from "../client/App/App"
import { getHtml } from "./html/html"

export const renderer = (req: express.Request) => {
  const loadableJson = path.resolve(__dirname, "./loadable-stats.json")

  const extractor = new ChunkExtractor({
    statsFile: loadableJson,
    entrypoints: ["client"],
  })

  const content = renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <StaticRouter location={req.path}>
        <CacheProvider value={createCache({ key: "custom" })}>
          <App />
        </CacheProvider>
      </StaticRouter>
    </ChunkExtractorManager>
  )

  const htmlData: any = {
    children: content,
    extractor,
  }

  return getHtml(htmlData)
}
