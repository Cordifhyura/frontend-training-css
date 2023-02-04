# Requirements
- Responsive meta tag
Necessary for using CSS media queries.
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- Box-sizing
For more straightforward sizing in CSS, we switch the global box-sizing value from `content-box` to `border-box`. This ensures padding does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine.

- Framework-specific package
Bootstrap JavaScript is not fully compatible with JavaScript frameworks like React, Vue, and Angular which assume full knowledge of the DOM. Both Bootstrap and the framework may attempt to mutate the same DOM element, resulting in bugs like dropdowns that are stuck in the “open” position.
A better alternative for those using this type of frameworks is to use a framework-specific package instead of the Bootstrap JavaScript.

# Layout
## Reponsive breakpoints
Bootstrap 内置了 6 个默认断点，有时也被叫做 grid tiers, for building responsively. 如果你使用的是 Bootstrap 的 Sass 源文件，则可以自定义这些断点。
这些断点可以通过 Sass 变量来自定义（你可以在 _variables.scss 文件中找到它们）

## Containers
Bootstrap comes with three different containers:
- .container, which sets a max-width at each responsive breakpoint
- .container-{breakpoint}, which is width: 100% until the specified breakpoint
- .container-fluid, which is width: 100% at all breakpoints

## Grid
- Alignment

- order
Use .order- classes for controlling the visual order of your content. These classes are responsive, so you can set the order by breakpoint (e.g., .order-1.order-md-2)

- offset
You can offset grid columns in two ways: our responsive .offset- grid classes and our margin utilities. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.

- Gutters
Gutters are the gaps between column content, created by horizontal padding. We set padding-right and padding-left on each column, and use negative margin to offset that at the start and end of each row to align content.

- css grid
With Bootstrap 5, we’ve added the option to enable a separate grid system that’s built on CSS Grid, but with a Bootstrap twist. 

## Utilities
- display
Use our display utilities for responsively toggling common values of the display property
When toggling display isn’t needed, you can toggle the visibility of an element with our visibility utilities. 

- margin/padding
Use the margin and padding spacing utilities to control how elements and components are spaced and sized.

- flex
Bootstrap is built with flexbox, but not every element’s display has been changed to display: flex as this would add many unnecessary overrides and unexpectedly change key browser behaviors. Most of our components are built with flexbox enabled.

- z-index
We utilize a default z-index scale in Bootstrap that’s been designed to properly layer navigation, tooltips and popovers, modals, and more.
These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. 

# Components
## Plugin
- getInstance
If you’d like to get a particular plugin instance, each plugin exposes a getInstance method. For example, to retrieve an instance directly from an element:
```
bootstrap.Popover.getInstance(myPopoverEl)
```

In addition to the getInstance and getOrCreateInstance methods, all plugin constructors can accept a DOM element or a valid CSS selector as the first argument. Plugin elements are found with the querySelector method since our plugins only support a single element.

- getInstance
While it may seem correct to use the dispose method immediately after hide(), it will lead to incorrect results. Here’s an example of the problem use:

```
const myModal = document.querySelector('#myModal')
myModal.hide() // it is asynchronous

myModal.addEventListener('shown.bs.hidden', event => {
  myModal.dispose()
})
```

# Data
Be sure to only use one set of data attributes on a single element (e.g., you cannot trigger a tooltip and modal from the same button.)

# Events
Bootstrap provides custom events for most plugins’ unique actions. Generally, these come in an infinitive and past participle form - where the infinitive (ex. `show.bs.modal`) is triggered at the start of an event, and its past participle form (ex. `shown.bs.modal`) is triggered on the completion of an action.

All programmatic API methods are asynchronous and return to the caller once the transition is started, but before it ends. In order to execute an action once the transition is complete, you can listen to the corresponding event.

# Compatibility
## jQuery
It’s still possible to use our components with jQuery. If Bootstrap detects jQuery in the window object, it’ll add all of our components in jQuery’s plugin system.
If you want to listen to Bootstrap’s events, you’ll have to use the jQuery methods (.on, .one) instead of `addEventListener`.

# Text
## RFS
Bootstrap’s side project RFS is a unit resizing engine which was initially developed to resize font sizes (hence its abbreviation for Responsive Font Sizes). Nowadays RFS is capable of rescaling most CSS properties with unit values like margin, padding, border-radius, or even box-shadow.

## RTL
Framework for converting Left-To-Right (LTR) Cascading Style Sheets(CSS) to Right-To-Left (RTL)

# Customize
## Sass
Whenever possible, avoid modifying Bootstrap’s core files. For Sass, that means creating your own stylesheet that imports Bootstrap so you can modify and extend it.

Customize Bootstrap with our built-in custom variables file and easily toggle global CSS preferences with new $enable-* Sass variables. 
You can find and customize these variables for key global options in Bootstrap’s scss/_variables.scss file.

Bootstrap includes many CSS custom properties (variables) in its compiled CSS for real-time customization without the need to recompile Sass.
All our custom properties are prefixed with bs- to avoid conflicts with third party CSS.

## Color
- Sass variables
All Bootstrap colors are available as Sass variables and a Sass map in scss/_variables.scss file. 

- color modes
Bootstrap now supports color modes, starting with dark mode
As shown above, color mode styles are controlled by the data-bs-theme attribute. This attribute can be applied to the <html> element, or to any other element or Bootstrap component.

- dark mode
Enable the built in dark color mode across your entire project by adding the data-bs-theme="dark" attribute to the <html> element. This will apply the dark color mode to all components and elements, other than those with a specific data-bs-theme attribute applied. 

# Form
Since Bootstrap applies display: block and width: 100% to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.

## Input group
extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.

## Datalists
Datalists allow you to create a group of <option>s that can be accessed (and autocompleted) from within an <input>. These are similar to <select> elements, but come with more menu styling limitations and differences. 