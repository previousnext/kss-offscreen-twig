# Builder for kss-node with offscreen menu using Twig

**Requires KSS-node 3.0.x**

This is a **builder** for [kss-node](https://github.com/kss-node/kss-node) living styleguide. It feature a toggle-able 
sidebar menu so you can choose to see the styleguide at full browser width. It also has a search function to easily find 
your component.

You can [see the demo here](https://previousnext.github.io/kss-offscreen-twig/).

## How to apply this builder

1. Install kss-node. Type `npm install kss` or `npm install -g kss` for global CLI.
2. Install this template `npm install kss-offscreen-twig@alpha`
3. Run `kss-node` command with `--builder` option, like below.

```
kss-node <sourcedir> --builder path/to/kss-offscreen-twig
```

## This is a pre-release version of kss-offscreen-twig

Changelog:

* No reliance on jQuery. Existing js rewritten in vanilla JS.
* Removal of prettify, scrollspy, and fullscreen js.
* Removal of Markup section (Developers must view source, or view twig files).
* Mockups/Templates do not display examples.
* All components can open in a new window, without any KSS chrome (hideAll).
* Offscreen CSS transitions removed.
* Component modifiers display as seperate examples, with less prominent KSS chrome.
* Component modifier CSS classes are no longer visible.
* Header no longer sticks.
* Specify showMarkup, highlightSyntax, markupClass from config.
* Fix position of menu toggle button.
* Add sidebar backdrop for small screens when clicked closes menu.
