# Builder for kss-node with offscreen menu using Twig

**Requires KKS-node 3.0.x**

This is a **builder** for [kss-node](https://github.com/kss-node/kss-node) living styleguide. It feature a toggle-able sidebar menu so you can choose to see the styleguide at full browser width. It also has a search function to easily find your component.

You can [see the demo here](https://previousnext.github.io/kss-offscreen-twig/).

## How to apply this builder

1. Install kss-node. Type `npm install kss` or `npm install -g kss` for global CLI.
2. Install this template `npm install kss-offscreen-twig`
3. Run `kss-node` command with `--builder` option, like below.

```
kss-node <sourcedir> --builder path/to/kss-offscreen-twig
```
