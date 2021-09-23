<p align="center">
 <h2 align="center">Strip TS Copy</h2>
 <p align="center">VSCode plugin to copy TypeScript code as js into clipboard</p>
  <p align="center">
    <a href="https://github.com/anuraghazra/strip-ts-copy/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/anuraghazra/strip-ts-copy?color=0088ff" />
    </a>
    <a href="https://github.com/anuraghazra/strip-ts-copy/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/anuraghazra/strip-ts-copy?color=0088ff" />
    </a>
  </p>
  <p align="center"><small>Love the project? Please consider sponsoring to help it improve!</small></p>
</p>


### The Problem

"An underdiscussed benefit of JS over TS - I'll frequently test individual functions by pasting them into the browser console. There's no faster feedback loop. You can't do that with TS. JSDoc TS means extra keystrokes, but overall the ergonomics are waaaay better
" - Rich Harris

> https://twitter.com/Rich_Harris/status/1440639878065111048


### The Solution

strip-ts-copy is a simple vscode plugin which simply transpiles the selected code and directly puts it inside of your clipboard.

> Inspired by BenLesh: 
> https://twitter.com/BenLesh/status/1441057916413489156

### Usage

1. Install the plugin

2. Select a peice of code with TS

3. Press <kbd>ctrl+shift+T<kbd> to copy the transpiled code

### TODO

- [ ] Write tests
- [ ] Setup release pipeline