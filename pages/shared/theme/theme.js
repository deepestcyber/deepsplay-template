// Shared theme helper. Pages load it after deepsplay's page helper and the
// theme's stylesheet, and name it in their block: uses = ["theme"]
//
//   <script src="/lib/v1/deepsplay.js"></script>
//   <link rel="stylesheet" href="shared/theme/theme.css">
//   <script src="shared/theme/theme.js"></script>
//
// Its parameters are defined once, below; deepsplay documents them in the
// catalog for every page using the theme.
(() => {
  "use strict"

  const T = Deepsplay.helper("theme", `
description = "Colours and a progress bar over the display time."

[params.theme]
type        = "enum"
values      = ["dark", "light"]
default     = "dark"
description = "Colour scheme."

[params.accent]
type        = "color"
default     = "#4f9dff"
description = "Accent colour: hex (e.g. ff8800) or a colour name."

[params.duration]
type        = "duration"
from        = "duration"
description = "Display time; a progress bar fills over it. deepsplay fills it in for pages in the rotation."
`)

  // Applied while the page is still parsing, before the first paint.
  document.documentElement.dataset.theme = T.theme
  document.documentElement.style.setProperty("--accent", T.accent)

  if (T.duration) {
    document.addEventListener("DOMContentLoaded", () => {
      const bar = document.createElement("div")
      bar.className = "theme-progress"
      bar.style.transitionDuration = `${T.duration}ms`
      document.body.appendChild(bar)
      requestAnimationFrame(() => requestAnimationFrame(() => bar.classList.add("running")))
    })
  }
})()
