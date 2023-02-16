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

<input v-focus />
```