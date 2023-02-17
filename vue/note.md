# Setup
- When using Vue from a CDN, there is no "build step" involved. This makes the setup a lot simpler, and is suitable for enhancing static HTML or integrating with a backend framework. However, you **won't be able to use the Single-File Component (SFC) syntax**.
- we may need to split our code into separate JavaScript files so that they are easier to manage.
If you directly open the above index.html in your browser, you will find that it throws an error because ES modules cannot work over the file:// protocol. In order for this to work, you need to serve your index.html over the http:// protocol, **with a local HTTP server**.

# MVVM
- Model
- View
- VM: Viewmodel 视图模型，即vue的实例

## 数据驱动
虚拟DOM - diff算法 - 真实DOM
在内存中储存虚拟DOM，再转换为真实DOM，只渲染改变的部分，以提高性能

# Conditional Rendering
Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.

# List Rendering
- You can also use v-for to iterate through the properties of an object. The iteration order will be based on the result of calling Object.keys() on the object
- v-for can also take an integer. In this case it will repeat the template that many times, based on a range of 1...n
```
<span v-for="n in 10">{{ n }}</span>
```

# Computed Properties
- computed properties are cached based on their reactive dependencies. A computed property will only re-evaluate when some of its reactive dependencies have changed. This means as long as author.books has not changed, multiple access to publishedBooksMessage will immediately return the previously computed result without having to run the getter function again.
- The returned value from a computed property is derived state. Think of it as a temporary snapshot - every time the source state changes, a new snapshot is created. It does not make sense to mutate a snapshot

# Watchers
- watch is shallow by default: the callback will only trigger when the watched property has been assigned a new value - it won't trigger on nested property changes. If you want the callback to fire on all nested mutations, you need to use a deep watcher:
---
Deep watch requires traversing all nested properties in the watched object, and can be expensive when used on large data structures. Use it only when necessary and beware of the performance implications.

---
- It's also possible to imperatively create watchers using the $watch() instance method: It also allows you to stop the watcher early.
- Watchers declared using the watch option or the $watch() instance method are automatically stopped when the owner component is unmounted
In the rare case where you need to stop a watcher before the owner component unmounts, the $watch() API returns a function for that

## Computed vs Watched Property
- there are cases where we need to perform "side effects" in reaction to state changes - for example, mutating the DOM, or changing another piece of state **based on the result of an async operation**.

- it is tempting to overuse watch - especially if you are coming from an AngularJS background. However, it is often a better idea to use a computed property rather than an imperative watch callback. Consider this example:

```javascript
<div id="demo">{{ fullName }}</div>
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

The above code is imperative and repetitive. Compare it with a computed property version:

```javascript
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```

Much better, isn’t it?

# Form
- By default, `v-model` syncs the input with the data after each `input` event (with the **exception of IME composition** as [stated above](https://vuejs.org/guide/essentials/forms.html#vmodel-ime-tip)). You can add the `lazy` modifier to instead sync after `change` events
- If you want user input to be automatically typecast as a number, you can add the `number` modifier to your `v-model` managed inputs
- If you want whitespace from user input to be trimmed automatically, you can add the `trim` modifier to your `v-model`-managed inputs

# Lifecycle Hooks
## created
Called after the instance has finished processing all state-related options.

## mounted
A component is considered mounted after:

- All of its synchronous child components have been mounted (does not include async components or components inside `<Suspense>` trees).

- Its own DOM tree has been created and inserted into the parent container. Note it only guarantees that the component's DOM tree is in-document if the application's root container is also in-document.

## updated
Called after the component has updated its DOM tree due to a reactive state change.

# Cache
## KeepAlive
When a component instance is removed from the DOM but is part of a component tree cached by <KeepAlive>, it goes into a deactivated state instead of being unmounted. When a component instance is inserted into the DOM as part of a cached tree, it is activated.

# Reusability
We have introduced two forms of code reuse in Vue: **components** and **composables**. Components are the main building blocks, while composables are focused on reusing stateful logic. Custom directives, on the other hand, are mainly intended for reusing logic that involves low-level DOM access on plain elements.
## Custom Directives
A custom directive is defined as an object containing lifecycle hooks similar to those of a component. The hooks receive the element the directive is bound to.
```javascript
const focus = {
  mounted: (el) => el.focus()
}

export default {
  directives: {
    // enables v-focus in template
    focus
  }
}
```

# Event Handling
## Event Modifiers
- stop
- prevent
- self
- capture
- once
- passive
The .passive modifier is typically used with touch event listeners for improving performance on mobile devices.

# Template Refs
If a `ref` attribute is added to an HTML element in your Vue template, you’ll then be able to reference that element or even a child element in your Vue instance. 
You can also access the DOM element directly; it is a read-only attribute and returns an object.
It allows us to obtain a direct reference to a specific DOM element or child component instance after it's mounted. This may be useful when you want to
The use of JavaScript’s `getElementById` is not encouraged in Vue, as it creates performance issues. 
Vue’s `ref` helps you “reference” DOM elements in a more efficient way.

# Components Basics

## Component communication
- Since **every component has it’s own isolated scope**, child components can never (and should never) reference data directly from parent components
- We’ll use `props` to pass data from parent -> child
- children components can only directly communicate with a parent through **custom events**. Vue’s custom events work by triggering events within a particular component, `$emit(nameOfEvent)`, and listening for that event in another component, $on(nameOfEvent). Data can also be passed through these events.
- Managing data between sibling components in Vue can be categorized in three main buckets:
  - Using a **global event bus**
  - Using a simple, shared store object (for simple state management)
  - Using the state management library Vuex

## Global Event Bus
A global event bus builds on top of using Vue’s simple custom events by making events global to the entire application. This is often a simple way of passing information between any components regardless of their relationship (parent-child, child-parent or sibling-sibling).
It’s important to note, however, a global event bus **is not** often the recommended way of managing data between components
## Props
**parent -> child**
Props are custom attributes you can register on a component. To pass a title to our blog post component, we must declare it in the list of props this component accepts, using the `props` option
When a value is passed to a prop attribute, it becomes a property on that component instance. The value of that property is accessible within the template and on the component's `this` context, just like any other component property.

## Emits
**child -> parent**

The parent can choose to listen to any event on the child component instance with v-on or @, just as we would with a native DOM event:

```html
<BlogPost
  ...
  @enlarge-text="postFontSize += 0.1"
 />
 ```
Then the child component can emit an event on itself by calling the built-in $emit method, passing the name of the event:


```html
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>
```
Thanks to the @enlarge-text="postFontSize += 0.1" listener, the parent will receive the event and update the value of postFontSize.

## Slots
**parent -> child**

Starting off with slots is a typical use case in which we simply declare a slot in the child component and inject content using the parent component.
Let’s check it out. First, let’s setup a parent component called MyContainer.vue

```html
<template>
    <div>
        <my-button>Click Me!</my-button>
    </div>
</template>
```
Next, let’s setup a child component MyButton.vue component.
```html
<template>
   <div>
     <slot></slot>
   </div>
</template>
```
When, MyButton.vue renders, the `<slot>` will be replaced by Click Me! — the content from the parent.
You can pass any sort of template from the parent component, it doesn’t have to be just text. It can be a Font Awesome icon, image, or even another component.

## Scoped CSS
When a `<style>` tag has the `scoped` attribute, its CSS will apply to elements of the current component only.
