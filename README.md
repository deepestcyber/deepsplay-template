# deepsplay template

A starting point for a [deepsplay](https://github.com/deepestcyber/deepsplay)
content repository: plain HTML pages that deepsplay shows on kiosk screens.

1. Create your own repository from this one ("Use this template" on GitHub).
2. Replace the example pages in `pages/` and list yours in `screen.toml`.
3. Add your repository to deepsplay's host configuration.

How pages, parameters, helpers and manifests work is described in the guide:
[Building content repositories](https://github.com/deepestcyber/deepsplay/blob/main/docs/pages.md).

What is in here:

| File | What it shows |
| --- | --- |
| `screen.toml` | The manifest: two pages in rotation, a default duration and a default parameter |
| `pages/welcome.html` | A documented page with parameters and variants, loading a fragment |
| `pages/clock/index.html` | A page in its own folder, using the shared theme |
| `pages/shared/theme/` | A small shared helper (`Deepsplay.helper`) with a theme and a progress bar |
| `pages/shared/note.html` | A fragment (`page = false`): loaded by a page, not shown on its own |

## Licence

MIT, see [LICENSE](LICENSE). Content you add to your own repository is yours
to license as you like.
