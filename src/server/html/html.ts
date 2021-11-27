export const getHtml = ({ children, extractor }: any) => `
  <html lang="en" class="h-100">
    <head>
    <base href="/" />
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mymokondo</title>
      <style>
        * {
          box-sizing: border-box;
        }

        html,body,div,span,p,h1,h2,h3,h4,h5,h6 {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 16px;
        }

        html,body,#root {
          height: 100%;
        }

        a {
          text-decoration: none;
        }

        @keyframes rotate {
          0% {
            transform: scale(0.2, 0.2) rotate(0);
          }

          50% {
            transform: scale(1.0, 1.0) rotate(540deg);
          }

          100% {
            transform: scale(0.2, 0.2) rotate(360deg);
          }
        }

        .preloader-wrap {
          width: 100%;
          height: 100%;
          display: flex;
        }

        .preloader-img {
          margin: auto;
          animation: rotate 2s ease infinite;
        }
      </style>
    </head>
    <body class="h-100">
      <div id="root">${children}</div>
      ${extractor.getScriptTags()}
    </body>
  </html>
`
