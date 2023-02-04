# event
## propagation
- 现代浏览器中的事件会一直冒泡到window对象

- 事件捕获最先发生，为提前拦截事件提供了可能。
addEventListener()和removeEventListener()。这两个方法暴露在所有DOM 节点上，它们接收3 个参数：事件名、事件处理函数和一个布尔值，true 表示在捕获阶段调用事件处理程序，false（默认值）表示在冒泡阶段调用事件处理程序。
把事件处理程序注册到捕获阶段通常用于在事件到达其指定目标之前拦截事件。如果不需要拦截，则不要使用事件捕获。

- stopPropagation()方法用于立即阻止事件流在DOM结构中传播，取消后续的事件捕获或冒泡。
例如，直接添加到按钮的事件处理程序中调用stopPropagation()，可以阻止document.body 上注册的事件处理程序执行

## type
- load：在window 上当页面加载完成后触发，在窗套（\<frameset>）上当所有窗格（\<frame>）都加载完成后触发，在\<img>元素上当图片加载完成后触发，在\<object>元素上当相应对象加载完成后触发。
在window 对象上，load 事件会在整个页面（包括所有外部资源如图片、JavaScript 文件和CSS 文件）加载完成后触发

一般来说，任何在window 上发生的事件，都可以通过给\<body>元素上对应的属性赋值来指定，
这是因为HTML 中没有window 元素。这实际上是为了保证向后兼容的一个策略，但在所有浏览器中都能得到很好的支持。实际开发中要尽量使用JavaScript 方式。

- unload 事件会在文档卸载完成后触发。unload 事件一般是在从一个页面导航到另一个页面时触发，最常用于清理引用，以避免内存泄漏
因为unload 事件是在页面卸载完成后触发的，所以不能使用页面加载后才有的对象。此时要访问DOM 或修改页面外观都会导致错误。

- 焦点事件中的两个主要事件是focus 和blur，这两个事件在JavaScript 早期就得到了浏览器支持。
它们最大的问题是不冒泡。这导致IE 后来又增加了focusin 和focusout。IE 新增的这两个事件已经被DOM3 Events 标准化。

- mouse: 由于事件之间存在关系，因此取消鼠标事件的默认行为也会影响其他事件。
比如，click 事件触发的前提是mousedown 事件触发后，紧接着又在同一个元素上触发了mouseup
事件。如果mousedown 和mouseup 中的任意一个事件被取消，那么click 事件就不会触发。类似地，
两次连续的click 事件会导致dblclick 事件触发。只要有任何逻辑阻止了这两个click 事件发生（比
如取消其中一个click 事件或者取消mousedown 或mouseup 事件中的任一个），dblclick 事件就不
会发生。这4 个事件永远会按照如下顺序触发：
(1) mousedown
(2) mouseup
(3) click
(4) mousedown
(5) mouseup
(6) click
(7) dblclick

- 触屏设备
  - 不支持dblclick 事件。双击浏览器窗口可以放大，但没有办法覆盖这个行为。

- keyboard:
DOM3 Events 规范并未规定charCode 属性，而是定义了key 和char 两个新属性。
其中，key 属性用于替代keyCode，且包含字符串。在按下字符键时，key 的值等于文本字符（如“k”或“M”）；在按下非字符键时，key 的值是键名（如“Shift”或“ArrowDown”）。char 属性在按下字符键时与key 类似，在按下非字符键时为null。

- textInput:
textInput 只在可编辑区域上触发。另一个区别是textInput 只在有新字符被插入时才会触发，而keypress 对任何可能影响文本的键都会触发（包括退格键）。

- Other HTML5 events
  - contextmenu
  - beforeunload 事件会在window 上触发，用意是给开发者提供阻止页面被卸载的机会。这个事件会在页面即将从浏览器中卸载时触发，如果页面需要继续使用，则可以不被卸载。这个事件不能取消
  - window 的load 事件会在页面完全加载后触发，因为要等待很多外部资源加载完成，所以会花费较长时间。而DOMContentLoaded 事件会在DOM 树构建完成后立即触发，而不用等待图片、JavaScript文件、CSS 文件或其他资源加载完成。
  - readystatechange
  - HTML5 增加了hashchange 事件，用于在URL 散列值（URL 最后#后面的部分）发生变化时通知开发者。这是因为开发者经常在Ajax 应用程序中使用URL 散列值存储状态信息或路由导航信息。
  - 设备事件/触摸和手势事件

## performance
只要可行，就应该考虑只给document 添加一个事件处理程序，通过它处理页面中所有某种类型的事件。相对于之前的技术，事件委托具有如下优点。
- document 对象随时可用，任何时候都可以给它添加事件处理程序（不用等待DOMContentLoaded或load 事件）。这意味着只要页面渲染出可点击的元素，就可以无延迟地起作用。
- 节省花在设置页面事件处理程序上的时间。只指定一个事件处理程序既可以节省DOM引用，也可以节省时间。
- 减少整个页面所需的内存，提升整体性能。

使用innerHTML 整体替换页面的某一部分。这时候，被innerHTML 删除的元素上如果有事件处理程序，就不会被垃圾收集程序正常清理。

关于卸载页面时的清理，可以记住一点：onload 事件处理程序中做了什么，最好在onunload 事件处理程序中恢复。

- 最好限制一个页面中事件处理程序的数量，因为它们会占用过多内存，导致页面响应缓慢；
- 利用事件冒泡，事件委托可以解决限制事件处理程序数量的问题；
- 最好在页面卸载之前删除所有事件处理程序。
## test
可以通过JavaScript 在任何时候触发任意事件，而这些事件会被当成浏览器创建的事件。这意味着同样会有事件冒泡，因而也会触发相应的事件处理程序。这种能力在测试Web 应用时特别有用

# async
## promise
期约的状态是私有的，不能直接通过JavaScript 检测到。这主要是为了避免根据读取到的期约状态，以同步方式处理期约对象。另外，期约的状态也不能被外部JavaScript 代码修改。这与不能读取该状态的原因是一样的：期约故意将异步行为封装起来，从而隔离外部的同步代码。

控制期约状态的转换是通过调用它的两个函数参数实现的。这两个函数参数通常都命名为resolve()和reject()。调用resolve()会把状态切换为兑现，调用reject()会把状态切换为拒绝
为避免期约卡在待定状态，可以添加一个定时退出功能。比如，可以通过setTimeout 设置一个10 秒钟后无论如何都会拒绝期约的回调

拒绝期约的错误并没有抛到执行同步代码的线程里，而是通过浏览器异步消息队列来处理的。因此，try/catch 块并不能捕获该错误。代码一旦开始以异步模式执行，则唯一与之交互的方式就是使用异步结构——更具体地说，就是期约的方法。
期约可以以任何理由拒绝，包括undefined，但最好统一使用错误对象。这样做主要是因为创建错误对象可以让浏览器捕获错误对象中的栈追踪信息，而这些信息对调试是非常关键的
在期约中抛出错误时，因为错误实际上是从消息队列中异步抛出的，所以并不会阻止运行时继续执行同步指令

then()/期约处理程序:
- onResolved 处理程序和onRejected处理程序,这两个参数都是可选的，如果提供的话，则会在期约分别进入“兑现”和“拒绝”状态时执行。
如果想只提供onRejected 参数，那就要在onResolved 参数的位置上传入undefined。这样有助于避免在内存中创建多余的对象，对期待函数参数的类型系统也是一个交代

- Promise.prototype.then()方法返回一个新的期约实例,这个新期约实例基于onResovled 处理程序的返回值构建。
换句话说，该处理程序的返回值会通过Promise.resolve()包装来生成新期约。如果没有提供这个处理程序，则Promise.resolve()就会包装上一个期约解决之后的值。如果(提供的处理程序)没有显式的返回语句，则Promise.resolve()会包装默认的返回值undefined。
- Promise.resolve()保留返回的期约
```
let p8 = p1.then(() => new Promise(() => {}));
let p9 = p1.then(() => Promise.reject());
// Uncaught (in promise): undefined
setTimeout(console.log, 0, p8); // Promise <pending>
setTimeout(console.log, 0, p9); // Promise <rejected>: undefined
```
- 抛出异常会返回拒绝的期约：
```
let p10 = p1.then(() => { throw 'baz'; });
// Uncaught (in promise) baz
setTimeout(console.log, 0, p10); // Promise <rejected> baz
```
- Promise.prototype.catch()方法用于给期约添加拒绝处理程序。这个方法只接收一个参数：onRejected 处理程序。事实上，这个方法就是一个语法糖，调用它就相当于调用Promise.prototype.then(null, onRejected)。

## 期约连锁与期约合成:
- 期约连锁
每个期约实例的方法（then()、catch()和finally()）都会返回一个新的期约对象，而这个新期约又有自己的实例方法。这样连缀方法调用就可以构成所谓的“期约连锁”。
执行器函数是同步执行的。这是因为执行器函数是期约的初始化程序
```
let p = new Promise((resolve, reject) => {
console.log('first');
resolve();
});
p.then(() => console.log('second'))
.then(() => console.log('third'))
.then(() => console.log('fourth'));
```
这个实现最终执行了一连串同步任务
要真正执行异步任务，可以改写前面的例子，让每个执行器都返回一个期约实例。这样就可以让每个后续期约都等待之前的期约(Promise.resolve()保留返回的期约)，也就是串行化异步任务

## async/await
不过，异步函数如果使用return 关键字返回了值（如果没有return 则会返回undefined），这个值会被Promise.resolve()包装成一个期约对象。异步函数始终返回期约对象。如果返回的是实现thenable 接口的对象，则这个对象可以由提供给then()的处理程序“解包”。如果不是，则返回值就被当作已经解决的期约。

因为异步函数主要针对不会马上完成的任务，所以自然需要一种暂停和恢复执行的能力。使用await关键字可以暂停异步函数代码的执行，等待期约解决。
如果是实现thenable 接口的对象，则这个对象可以由await 来“解包”。如果不是，则这个值就被当作已经解决的期约。
await 关键字必须在异步函数中使用，不能在顶级上下文如\<script>标签或模块中使用。

async/await 中真正起作用的是await。async 关键字，无论从哪方面来看，都不过是一个标识符。毕竟，异步函数如果不包含await 关键字，其执行基本上跟普通函数没有什么区别
JavaScript 运行时在碰到await 关键字时，会记录在哪里暂停执行。等到await 右边的值可用了，JavaScript 运行时会向消息队列中推送一个任务，这个任务会恢复异步函数的执行。因此，即使await 后面跟着一个立即可用的值，函数的其余部分也会被异步求值。
如果await 后面是一个期约，则问题会稍微复杂一些。此时，为了执行异步函数，实际上会有两个任务被添加到消息队列并被异步求值(所以函数执行会在立即可用的值之后)

如果顺序不是必需保证的，那么可以先一次性初始化所有期约，然后再分别等待它们的结果。
```
async function foo() {
const t0 = Date.now();
const p0 = randomDelay(0);
const p1 = randomDelay(1);
const p2 = randomDelay(2);
const p3 = randomDelay(3);
const p4 = randomDelay(4);
await p0;
await p1;
await p2;
await p3;
await p4;
setTimeout(console.log, 0, `${Date.now() - t0}ms elapsed`);
}
```