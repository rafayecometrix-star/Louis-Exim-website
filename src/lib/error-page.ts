export function renderErrorPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>500 — Server Error | Louis Exim</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background-color: #011844;
      color: #fafaf7;
      display: flex;
      min-height: 100vh;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 1rem;
      text-align: center;
    }
    .card {
      max-width: 400px;
      padding: 2.5rem;
      border: 1px solid rgba(194, 181, 173, 0.2);
      background: rgba(1, 32, 78, 0.8);
      border-radius: 8px;
    }
    h1 { margin: 0 0 1rem; font-size: 2.5rem; color: #c2b5ad; }
    p { margin: 0 0 1.5rem; font-size: 0.95rem; opacity: 0.85; line-height: 1.5; }
    a {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: #c2b5ad;
      color: #011844;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>500</h1>
    <p>Something went wrong on our end. Please refresh or try again shortly.</p>
    <a href="/">Back to Home</a>
  </div>
</body>
</html>`;
}
