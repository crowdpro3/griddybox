# Griddybox

Simple 12-column grid based on CSS Grid with IE11+ support that uses power of SCSS Mixins.
It gives you more clean HTML than if using other grids.

## Installation

1. via npm
```sh
$ npm i griddybox --save
```
2. download zip archive from GitHub

## Import into your project

Import it into your project via importing from:

1. node_modules

```scss
@import 'griddybox/src/scss/import-now';
```

2. directly from your SCSS styles source folder

For example:
```scss
@import 'griddybox/import-now'
```

## Usage

Griddybox allows you to use grid-flex-fallbacked grid or only flexbox grid

Usage for all types of grid:

Container -- similar to Bootstrap 4 grid layout
```
@include container;
```

Usage for grid-flex-fallbacked grid

Row
```
@include row;
```

Columns
```
@include col($columns)
```
where $columns can be any number from 1 to 12 like in Bootstrap or any other grids

Flexbox-only grid

Row
```
@include row-f
```

Columns
```
@include col-f($columns)
```
where $columns can be any number from 1 to 12 like in Bootstrap or any other grids

Fluid columns
```
@include col-f-auto
```