# Minimal Publish

Minimal Publish is a stripped-down version of [Minimal Theme](https://github.com/kepano/obsidian-minimal) for [Obsidian Publish](https://obsidian.md/publish). The theme was rewritten from scratch to optimize loading speed.

To see a demo of Minimal Publish go to [minimal.guide](https://minimal.guide).

### Features

- Adheres to [best practices](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Best+practices+for+Publish+themes) for Obsidian Publish themes
- Much smaller file size ~16KB compared to ~247KB for app version, making it faster to download for visitors to Publish sites
- Comes in several color schemes `/color-schemes` folder for pre-built files
- Compatible with [helper classes](https://minimal.guide/features/helper-classes) used in Minimal theme

### How to install

To install Minimal Publish

1. Download the `publish.css` file, see `/color-schemes` folder for various options
2. Copy the `publish.css` file into the root folder of your vault
3. Publish the `publish.css` file

See [Obsidian Help](https://help.obsidian.md/Obsidian+Publish/Customize+your+site) for more details.


### Color schemes

- Default
- Atom
- Ayu
- Catppuccin
- Dracula
- Everforest
- Flexoki   
- Gruvbox
- macOS
- Nord
- Notion
- Rosé Pine
- Solarized
- Things

# Ephemera Additions
Requires: npm

1. Download this
2. Type `npm install` to get things going.
3. Type `grunt` to have it watch folder.
4. Double click `move-files.scpt` to move files to `/Documents/Ephemera`
5. Publish changes in Obsidian

Goals:
1. Same/similar to editor changes
2. Import relevant bits from ephemera css
3. Define color palettes in theme
4. JS to click to embiggen images

Changes:
* Updated Grunt to 1.6.1 from 1.4.1 to incorporate race condition fix