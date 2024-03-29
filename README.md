<p align="center">
  <img width="150px" src="./images/icon-large.png" alt="Strip TS Copy" />
 <h2 align="center">Strip TS Copy</h2>
 <p align="center">VSCode plugin to strip types from TypeScript code while copying it.</p>
  <p align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=anuraghazra.strip-ts-copy">
      <img alt="Visual Studio Marketplace Installs" src="https://img.shields.io/visual-studio-marketplace/i/anuraghazra.strip-ts-copy?color=red">
    </a>
    <a href="https://github.com/anuraghazra/vscode-strip-ts-copy/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/anuraghazra/vscode-strip-ts-copy?color=0088ff" />
    </a>
    <a href="https://github.com/anuraghazra/vscode-strip-ts-copy/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/anuraghazra/vscode-strip-ts-copy?color=0088ff" />
    </a>
    
  </p>
  <p align="center"><small>Love the project? Consider sponsoring to help it improve!</small></p>
</p>

<p align="center">
<img width="80%" src="./images/strip-ts-copy-demo-1.gif" alt="Gif demo of strip ts copy"/>
</p>

### The Problem

"An underdiscussed benefit of JS over TS - I'll frequently test individual functions by pasting them into the browser console. There's no faster feedback loop." - Rich Harris

> https://twitter.com/Rich_Harris/status/1440639878065111048


### The Solution

strip-ts-copy simply transpiles the selected code and copies it into your clipboard.

> Inspired by BenLesh: 
> https://twitter.com/BenLesh/status/1441057916413489156

### Usage

1. Install the plugin from [marketplace](https://marketplace.visualstudio.com/items?itemName=anuraghazra.strip-ts-copy)

2. Select a piece of code with TS

3. To copy the transpiled code press: 
  - In Windows <kbd>ctrl+alt+c</kbd>
  - In Mac <kbd>shift+alt+cmd+c</kbd>
  - Or: right click to open the context menu and select "Copy TS as JS"

> Note: You can also customize the keybindings of StripTSCopy from the keyboard shortcuts customizer page in vscode.

### Local development

1. Clone the repo
2. Install deps
3. Open `Run & Debug (Ctrl+Shift+D)` panel in vscode and hit start debugging button

### TODO

- [ ] Write tests
- [ ] Setup release pipeline