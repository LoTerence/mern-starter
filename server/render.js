export default html => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" contentgit="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>MERN | Build amazing things ... faster ⚡️</title>
        </head>
        <body>
            <div id="app">${html}</div>
            <script src="/js/vendor.js"></script>
            <script src="/js/app.js"></script>
        </body>
    </html>
`;
