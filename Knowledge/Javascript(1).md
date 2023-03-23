<h1 align="center">2023版全栈升实训面试题库v2.0</h1>



​	

​																**编写人：全栈全体项目经理**

<div style="page-break-after: always;"></div>

<h1 align="center">目  录</h1>

[TOC]

## 一、HTML&CSS

### 	1. H5新增特性和css3新增特性？

```
答： 1.首先 html5 为了更好的实践 web 语义化，增加了 header，footer，nav,aside,section 等语义 化标签，
	  2.在表单方面，为了增强表单，为 input 增加了 color，email,data ,range 等类型， 
	  3.在存储方面，提供了 sessionStorage，localStorage,和离线存储，通过这些存储方式方便数 据在客户端的存储和获取，
	  4.在多媒体方面规定了音频和视频元素 audio 和 vedio，另外还 有地理定位，canvas 画布，拖放，多线程编程的 web worker 和 websocket协议
	  5.css3新增特性：
	  		CSS3 边框如 border-radius，box-shadow 等;
	  		CSS3 背景如 background-size，background-origin 等;
	  		CSS3 2D，3D 转换如 transform 等;
	  		CSS3 动画如 animation 等
	  
```

### 	2. BFC的理解？

```
答：1.BFC（Block Formatting Context），即块级格式化上下文，它是页面中的一块渲染区域，并且有一套属于自己的渲染规则：

- 内部的盒子会在垂直方向上一个接一个的放置
- 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
- 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
- BFC的区域不会与float的元素区域重叠
- 计算BFC的高度时，浮动子元素也参与计算
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

BFC目的是形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部的元素

  2.触发BFC的条件包含不限于：

- 根元素，即HTML元素
- 浮动元素：float值为left、right
- overflow值不为 visible，为 auto、scroll、hidden
- display的值为inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
- position的值为absolute或fixed
  3.利用BFC的特性，我们将`BFC`应用在以下场景：
  	防止margin重叠（塌陷）
  	清除内部浮动
  	自适应多栏布局
```



### 	3. 说说你对盒模型的理解？

答：

- 盒模型其实就是浏览器把一个个标签都看一个矩形盒子，那每个盒子（即标签）都会有内容(width,height)，边框(border)，以及内容和边框中间的缝隙（即内间距padding），还有盒子与盒子之间的外间距（即margin）,用图表示为：

<img src="/Users/liucrystal/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/a2c370379a9d338bfc199f460deb4dbf/Message/MessageTemp/0ac1d99f320729b38b43e7652be3300c/File/media/image-20210705235247958.png" alt="image-20210705235247958" style="zoom:50%;" />

 

- 当然盒模型包括两种：IE盒模型和w3c标准盒模型

      IE盒模型总宽度即就是width宽度=border+padding+内容宽度
        
      标准盒模型总宽度＝border+padding+width

    那如何在IE盒模型宽度和标准盒模型总宽度之间切换呢，可以通过box-sizing:border-box或设置成content-box来切换

      其中：box-sizing：border-box  //IE盒模型

​    		 box-sizing：content-box  //w3c盒模型



### 	4. 如何实现元素水平垂直居中？

答：居中是一个非常基础但又是非常重要的应用场景，实现居中的方法存在很多，可以将这些方法分成两个大类：

- 居中元素（子元素）的宽高已知

- 居中元素宽高未知

- 实现方式：

  - ### 利用定位+margin:auto

  先上代码：

  ```html
  <style>
      .father{
          width:500px;
          height:300px;
          border:1px solid #0a3b98;
          position: relative;
      }
      .son{
          width:100px;
          height:40px;
          background: #f0a238;
          position: absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          margin:auto;
      }
  </style>
  <div class="father">
      <div class="son"></div>
  </div>
  ```

  父级设置为相对定位，子级绝对定位 ，并且四个定位属性的值都设置了0，那么这时候如果子级没有设置宽高，则会被拉开到和父级一样宽高

  这里子元素设置了宽高，所以宽高会按照我们的设置来显示，但是实际上子级的虚拟占位已经撑满了整个父级，这时候再给它一个`margin：auto`它就可以上下左右都居中了

  

  ### 利用定位+margin:负值

  绝大多数情况下，设置父元素为相对定位， 子元素移动自身50%实现水平垂直居中

  ```html
  <style>
      .father {
          position: relative;
          width: 200px;
          height: 200px;
          background: skyblue;
      }
      .son {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left:-50px;
          margin-top:-50px;
          width: 100px;
          height: 100px;
          background: red;
      }
  </style>
  <div class="father">
      <div class="son"></div>
  </div>
  ```

  整个实现思路如下图所示：

   ![](/Users/liucrystal/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/a2c370379a9d338bfc199f460deb4dbf/Message/MessageTemp/0ac1d99f320729b38b43e7652be3300c/File/media/922dc300-95f9-11eb-ab90-d9ae814b240d.png)

  - 初始位置为方块1的位置
  - 当设置left、top为50%的时候，内部子元素为方块2的位置
  - 设置margin为负数时，使内部子元素到方块3的位置，即中间位置

  这种方案不要求父元素的高度，也就是即使父元素的高度变化了，仍然可以保持在父元素的垂直居中位置，水平方向上是一样的操作

  但是该方案需要知道子元素自身的宽高，但是我们可以通过下面`transform`属性进行移动

  

  ### 利用定位+transform

  实现代码如下：

  ```css
  <style>
      .father {
          position: relative;
          width: 200px;
          height: 200px;
          background: skyblue;
      }
      .son {
          position: absolute;
          top: 50%;
          left: 50%;
    transform: translate(-50%,-50%);
          width: 100px;
          height: 100px;
          background: red;
      }
  </style>
  <div class="father">
      <div class="son"></div>
  </div>
  ```

  `translate(-50%, -50%)`将会将元素位移自己宽度和高度的-50%

  这种方法其实和最上面被否定掉的margin负值用法一样，可以说是`margin`负值的替代方案，并不需要知道自身元素的宽高

  

  

  ### table布局

  设置父元素为`display:table-cell`，子元素设置 `display: inline-block`。利用`vertical`和`text-align`可以让所有的行内块级元素水平垂直居中

  ```html
  <style>
      .father {
          display: table-cell;
          width: 200px;
          height: 200px;
          background: skyblue;
          vertical-align: middle;
          text-align: center;
      }
      .son {
          display: inline-block;
          width: 100px;
          height: 100px;
          background: red;
      }
  </style>
  <div class="father">
      <div class="son"></div>
  </div>
  ```

  

  ### flex弹性布局

  还是看看实现的整体代码：

  ```html
  <style>
      .father {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 200px;
          background: skyblue;
      }
      .son {
          width: 100px;
          height: 100px;
          background: red;
      }
  </style>
  <div class="father">
      <div class="son"></div>
  </div>
  ```

  `css3`中了`flex`布局，可以非常简单实现垂直水平居中

  这里可以简单看看`flex`布局的关键属性作用：

  - display: flex时，表示该容器内部的元素将按照flex进行布局

  - align-items: center表示这些元素将相对于本容器水平居中
  - justify-content: center也是同样的道理垂直居中

  

  ### grid网格布局

  ```html
  <style>
      .father {
              display: grid;
              align-items:center;
              justify-content: center;
              width: 200px;
              height: 200px;
              background: skyblue;
  
          }
          .son {
              width: 10px;
              height: 10px;
              border: 1px solid red
          }
  </style>
  <div class="father">
      <div class="son"></div>
  </div>
  ```

  这里看到，`gird`网格布局和`flex`弹性布局都简单粗暴

  

  ### 小结

  上述方法中，不知道元素宽高大小仍能实现水平垂直居中的方法有：

  - 利用定位+margin:auto
  - 利用定位+transform

  - 利用定位+margin:负值

  - flex布局

  - grid布局



### 	5. 如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？

答：

- 两栏布局

  - 方法一：实现思路也非常的简单：
    - 使用 float 左浮左边栏
    - 右边模块使用 margin-left 撑出内容块做内容展示
    - 为父级元素添加BFC，防止下方元素飞到上方内容

  代码如下：

  ```html
  <style>
      .box{
          overflow: hidden; 添加BFC
      }
      .left {
          float: left;
          width: 200px;
          background-color: gray;
          height: 400px;
      }
      .right {
          margin-left: 210px;
          background-color: lightgray;
          height: 200px;
      }
  </style>
  <div class="box">
      <div class="left">左边</div>
      <div class="right">右边</div>
  </div>
  ```

  还有一种更为简单的使用则是采取：flex弹性布局

  - 方法二：flex弹性布局

  ```html
  <style>
      .box{
          display: flex;
      }
      .left {
          width: 100px;
      }
      .right {
          flex: 1;
      }
  </style>
  <div class="box">
      <div class="left">左边</div>
      <div class="right">右边</div>
  </div>
  ```

  `flex`可以说是最好的方案了，代码少，使用简单

  注意的是，`flex`容器的一个默认属性值:`align-items: stretch;`

  这个属性导致了列等高的效果。 为了让两个盒子高度自动，需要设置: `align-items: flex-start`

- 三栏布局

  - 实现三栏布局中间自适应的布局方式有：

    - 两边使用 float，中间使用 margin

    ```
    需要将中间的内容放在html结构最后，否则右侧会臣在中间内容的下方
    
    实现代码如下：
    
    ​```html
    <style>
        .wrap {
            background: #eee;
            overflow: hidden; <!-- 生成BFC，计算高度时考虑浮动的元素 -->
            padding: 20px;
            height: 200px;
        }
        .left {
            width: 200px;
            height: 200px;
            float: left;
            background: coral;
        }
        .right {
            width: 120px;
            height: 200px;
            float: right;
            background: lightblue;
        }
        .middle {
            margin-left: 220px;
            height: 200px;
            background: lightpink;
            margin-right: 140px;
        }
    </style>
    <div class="wrap">
        <div class="left">左侧</div>
        <div class="right">右侧</div>
        <div class="middle">中间</div>
    </div>
    
    
    原理如下：
    
    - 两边固定宽度，中间宽度自适应。
    - 利用中间元素的margin值控制两边的间距
    - 宽度小于左右部分宽度之和时，右侧部分会被挤下去
    
    这种实现方式存在缺陷：
    
    - 主体内容是最后加载的。
    
    - 右边在主体内容之前，如果是响应式设计，不能简单的换行展示
    ```

    

    - 两边使用 absolute，中间使用 margin

    ```
    基于绝对定位的三栏布局：注意绝对定位的元素脱离文档流，相对于最近的已经定位的祖先元素进行定位。无需考虑HTML中结构的顺序
    
    <style>
      .container {
        position: relative;
      }
      
      .left,
      .right,
      .main {
        height: 200px;
        line-height: 200px;
        text-align: center;
      }
    
      .left {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        background: green;
      }
    
      .right {
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        background: green;
      }
    
      .main {
        margin: 0 110px;
        background: black;
        color: white;
      }
    </style>
    
    <div class="container">
      <div class="left">左边固定宽度</div>
      <div class="right">右边固定宽度</div>
      <div class="main">中间自适应</div>
    </div>
    
    
    实现流程：
    
    - 左右两边使用绝对定位，固定在两侧。
    - 中间占满一行，但通过 margin和左右两边留出10px的间隔
    ```

    

    - 两边使用 float 和负 margin

    ```
    <style>
      .left,
      .right,
      .main {
        height: 200px;
        line-height: 200px;
        text-align: center;
      }
    
      .main-wrapper {
        float: left;
        width: 100%;
      }
    
      .main {
        margin: 0 110px;
        background: black;
        color: white;
      }
    
      .left,
      .right {
        float: left;
        width: 100px;
        margin-left: -100%;
        background: green;
      }
    
      .right {
        margin-left: -100px; /* 同自身宽度 */
      }
    </style>
    
    <div class="main-wrapper">
      <div class="main">中间自适应</div>
    </div>
    <div class="left">左边固定宽度</div>
    <div class="right">右边固定宽度</div>
    
    实现过程：
    
    - 中间使用了双层标签，外层是浮动的，以便左中右能在同一行展示
    - 左边通过使用负 margin-left:-100%，相当于中间的宽度，所以向上偏移到左侧
    - 右边通过使用负 margin-left:-100px，相当于自身宽度，所以向上偏移到最右侧
    
     
    
    缺点：
    
    - 增加了 .main-wrapper 一层，结构变复杂
    - 使用负 margin，调试也相对麻烦
    ```

    

    - display: table 实现
      - `<table>` 标签用于展示行列数据，不适合用于布局。但是可以使用 `display: table` 来实现布局的效果

    ```
    <style>
      .container {
        height: 200px;
        line-height: 200px;
        text-align: center;
        display: table;
        table-layout: fixed;
        width: 100%;
      }
    
      .left,
      .right,
      .main {
        display: table-cell;
      }
    
      .left,
      .right {
        width: 100px;
        background: green;
      }
    
      .main {
        background: black;
        color: white;
        width: 100%;
      }
    </style>
    
    <div class="container">
      <div class="left">左边固定宽度</div>
      <div class="main">中间自适应</div>
      <div class="right">右边固定宽度</div>
    </div>
    
    实现原理：
    
    - 层通过 display: table设置为表格，设置 table-layout: fixed`表示列宽自身宽度决定，而不是自动计算。
    - 内层的左中右通过 display: table-cell设置为表格单元。
    - 左右设置固定宽度，中间设置 width: 100% 填充剩下的宽度
    ```

    

    - flex实现

      - 利用`flex`弹性布局，可以简单实现中间自适应
      - 代码如下：

      ```
      <style type="text/css">
          .wrap {
              display: flex;
              justify-content: space-between;
          }
      
          .left,
          .right,
          .middle {
              height: 100px;
          }
      
          .left {
              width: 200px;
              background: coral;
          }
      
          .right {
              width: 120px;
              background: lightblue;
          }
      
          .middle {
              background: #555;
              width: 100%;
              margin: 0 20px;
          }
      </style>
      <div class="wrap">
          <div class="left">左侧</div>
          <div class="middle">中间</div>
          <div class="right">右侧</div>
      </div>
      
      实现过程：
      
      - 仅需将容器设置为`display:flex;`，
      - 盒内元素两端对其，将中间元素设置为`100%`宽度，或者设为`flex:1`，即可填充空白
      - 盒内元素的高度撑开容器的高度
      
      优点：
      
      - 结构简单直观
      - 可以结合 flex的其他功能实现更多效果，例如使用 order属性调整显示顺序，让主体内容优先加载，但展示在中间
      ```

      

    - grid网格布局

      代码如下:

    ```
    <style>
        .wrap {
            display: grid;
            width: 100%;
            grid-template-columns: 300px auto 300px;
        }
    
        .left,
        .right,
        .middle {
            height: 100px;
        }
    
        .left {
            background: coral;
        }
    
        .right {
            width: 300px;
            background: lightblue;
        }
    
        .middle {
            background: #555;
        }
    </style>
    <div class="wrap">
        <div class="left">左侧</div>
        <div class="middle">中间</div>
        <div class="right">右侧</div>
    </div>
    ```

### 	6. CSS如何画一个三角形？原理是什么？

答：通常情况下我们会使用图片或者`svg`去完成三角形效果图，但如果单纯使用`css`如何完成一个三角形呢？

实现过程似乎也并不困难，通过边框就可完成

- 实现过程

在以前也讲过盒子模型，默认情况下是一个矩形，实现也很简单

```html
<style>
    .border {
        width: 50px;
        height: 50px;
        border: 2px solid;
        border-color: #96ceb4 #ffeead #d9534f #ffad60;
    }
</style>
<div class="border"></div>
```

效果如下图所示：

 ![](/Users/liucrystal/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/a2c370379a9d338bfc199f460deb4dbf/Message/MessageTemp/0ac1d99f320729b38b43e7652be3300c/File/media/e3f244e0-a279-11eb-ab90-d9ae814b240d.png)

将`border`设置`50px`，效果图如下所示：

 ![](/Users/liucrystal/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/a2c370379a9d338bfc199f460deb4dbf/Message/MessageTemp/0ac1d99f320729b38b43e7652be3300c/File/media/ee0b42b0-a279-11eb-ab90-d9ae814b240d.png)

白色区域则为`width`、`height`，这时候只需要你将白色区域部分宽高逐渐变小，最终变为0，则变成如下图所示：

 ![](/Users/liucrystal/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/a2c370379a9d338bfc199f460deb4dbf/Message/MessageTemp/0ac1d99f320729b38b43e7652be3300c/File/media/2afaa030-a27a-11eb-85f6-6fac77c0c9b3.png)

这时候就已经能够看到4个不同颜色的三角形，如果需要下方三角形，只需要将上、左、右边框设置为0就可以得到下方的红色三角形

 ![](/Users/liucrystal/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/a2c370379a9d338bfc199f460deb4dbf/Message/MessageTemp/0ac1d99f320729b38b43e7652be3300c/File/media/2afaa030-a27a-11eb-85f6-6fac77c0c9b3.png)

但这种方式，虽然视觉上是实现了三角形，但实际上，隐藏的部分任然占据部分高度，需要将上方的宽度去掉

最终实现代码如下：

```css
.border {
    width: 0;
    height: 0;
    border-style:solid;
    border-width: 0 50px 50px;
    border-color: transparent transparent #d9534f;
}
```

如果想要实现一个只有边框是空心的三角形，由于这里不能再使用`border`属性，所以最直接的方法是利用伪类新建一个小一点的三角形定位上去

```css
.border {
    width: 0;
    height: 0;
    border-style:solid;
    border-width: 0 50px 50px;
    border-color: transparent transparent #d9534f;
    position: relative;
}
.border:after{
    content: '';
    border-style:solid;
    border-width: 0 40px 40px;
    border-color: transparent transparent #96ceb4;
    position: absolute;
    top: 0;
    left: 0;
}
```

效果图如下所示：

 ![i](/Users/liucrystal/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/a2c370379a9d338bfc199f460deb4dbf/Message/MessageTemp/0ac1d99f320729b38b43e7652be3300c/File/media/59f4d720-a27a-11eb-85f6-6fac77c0c9b3.png)

伪类元素定位参照对象的内容区域宽高都为0，则内容区域即可以理解成中心一点，所以伪元素相对中心这点定位

将元素定位进行微调以及改变颜色，就能够完成下方效果图：

 ![](/Users/liucrystal/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/a2c370379a9d338bfc199f460deb4dbf/Message/MessageTemp/0ac1d99f320729b38b43e7652be3300c/File/media/653a6e10-a27a-11eb-85f6-6fac77c0c9b3.png)

最终代码如下：

```css
.border:after {
    content: '';
    border-style: solid;
    border-width: 0 40px 40px;
    border-color: transparent transparent #96ceb4;
    position: absolute;
    top: 6px;
    left: -40px;
}
```

- 原理分析

可以看到，边框是实现三角形的部分，边框实际上并不是一个直线，如果我们将四条边设置不同的颜色，将边框逐渐放大，可以得到每条边框都是一个梯形

 ![](/Users/liucrystal/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/a2c370379a9d338bfc199f460deb4dbf/Message/MessageTemp/0ac1d99f320729b38b43e7652be3300c/File/media/78d4bd90-a27a-11eb-85f6-6fac77c0c9b3.png)

当分别取消边框的时候，发现下面几种情况：

- 取消一条边的时候，与这条边相邻的两条边的接触部分会变成直的
- 当仅有邻边时， 两个边会变成对分的三角
- 当保留边没有其他接触时，极限情况所有东西都会消失

 ![](/Users/liucrystal/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/a2c370379a9d338bfc199f460deb4dbf/Message/MessageTemp/0ac1d99f320729b38b43e7652be3300c/File/media/84586ef0-a27a-11eb-85f6-6fac77c0c9b3.png)

通过上图的变化规则，利用旋转、隐藏，以及设置内容宽高等属性，就能够实现其他类型的三角形

如设置直角三角形，如上图倒数第三行实现过程，我们就能知道整个实现原理

实现代码如下：

```css
.box {
    /* 内部大小 */
    width: 0px;
    height: 0px;
    /* 边框大小 只设置两条边*/
    border-top: #4285f4 solid;
    border-right: transparent solid;
    border-width: 85px; 
    /* 其他设置 */
    margin: 50px;
}
```



### 	7. 说说em/px/rem/vh/vw区别?

答：em/px/rem/vh/vw区别如下：

**px**：绝对单位，页面按精确像素展示

**em**：相对单位，基准点为父节点字体的大小，如果自身定义了`font-size`按自身来计算，整个页面内`1em`不是一个固定的值

**rem**：相对单位，可理解为`root em`, 相对根节点`html`的字体大小来计算

**vh、vw**：主要用于页面视口大小布局，在页面布局上更加方便简单

## JavaScript

### 1. Js有哪些数据类型

JavaScript共有八种数据类型

基本数据类型： Undefined、Null、Boolean、Number、String、Symbol、BigInt。

引用数据类型：object,function,array

其中 Symbol 和 BigInt 是ES6 中新增的数据类型：

- Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
- BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

### 2. 数据类型检测的方式有哪些

然后判断数据类型的方法一般可以通过：**typeof**、**instanceof**、**constructor**、**toString**四种常用方法

| 不同类型的优缺点 | typeof                                                     | instanceof                         | constructor                                 | Object.prototype.toString.call   |
| ---------------- | ---------------------------------------------------------- | ---------------------------------- | ------------------------------------------- | -------------------------------- |
| 优点             | 使用简单                                                   | 能检测出`引用类型`                 | 基本能检测所有的类型（除了null和undefined） | 检测出所有的类型                 |
| 缺点             | 只能检测出除null外的基本数据类型和引用数据类型中的function | 不能检测出基本类型，且不能跨iframe | constructor易被修改，也不能跨iframe         | IE6下，undefined和null均为Object |

### 3.null和undefined区别

- 首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。
- undefined 代表的含义是**未定义**，null 代表的含义是**空对象**。一般变量声明了但还没有定义的时候会返回 undefined，null主要用于赋值给一些可能会返回对象的变量，作为初始化。
- undefined 在 JavaScript 中不是一个保留字，这意味着可以使用 undefined 来作为一个变量名，但是这样的做法是非常危险的，它会影响对 undefined 值的判断。我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。
- 当对这两种类型使用 typeof 进行判断时，Null 类型化会返回 “object”，这是一个历史遗留的问题。当使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。



### 4.如何判断 this 的指向

- 第一种是**函数调用模式**，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。
- 第二种是**方法调用模式**，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。
- 第三种是**构造器调用模式**，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。
- 第四种是 **apply 、 call 和 bind 调用模式**，这三个方法都可以显示的指定调用函数的 this 指向。其中 apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。



### 5. for...in和for...of的区别

for…of 是ES6新增的遍历方式，允许遍历一个含有iterator接口的数据结构（数组、对象等）并且返回各项的值，和ES3中的for…in的区别如下

- for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名；
- for… in 会遍历对象的整个原型链，性能非常差不推荐使用，而 for … of 只遍历当前对象不会遍历原型链；
- 对于数组的遍历，for…in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，for…of 只返回数组的下标对应的属性值；

**总结：** for...in 循环主要是为了遍历对象而生，不适用于遍历数组；for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象。

### 6. 数组的遍历方法有哪些

| **方法**                  | **是否改变原数组** | **特点**                                                     |
| ------------------------- | ------------------ | ------------------------------------------------------------ |
| forEach()                 | 否                 | 数组方法，不改变原数组的长度，没有返回值                     |
| map()                     | 否                 | 数组方法，不改变原数组的长度，有返回值，可链式调用           |
| filter()                  | 否                 | 数组方法，过滤数组，返回包含符合条件的元素的数组，可链式调用 |
| for...of                  | 否                 | for...of遍历具有Iterator迭代器的对象的属性，返回的是数组的元素、对象的属性值，不能遍历普通的obj对象，将异步循环变成同步循环 |
| every() 和 some()         | 否                 | 数组方法，some()只要有一个是true，便返回true；而every()只要有一个是false，便返回false. |
| find() 和 findIndex()     | 否                 | 数组方法，find()返回的是第一个符合条件的值；findIndex()返回的是第一个返回条件的值的索引值 |
| reduce() 和 reduceRight() | 否                 | 数组方法，reduce()对数组正序操作；reduceRight()对数组逆序操作 |

### 7. forEach和map方法有什么区别

这方法都是用来遍历数组的，两者区别如下：

- forEach()方法会针对每一个元素执行提供的函数，如果遍历的元素是引用数据类型，则可以改变指针指向的堆内存里的值，该方法没有返回值；
- map()方法返回一个新数组，新数组中的值为原数组调用函数处理之后的值，如果遍历的元素是引用数据类型，则可以改变指针指向的堆内存里的值

### 8. 说说你对浅拷贝和深拷贝的理解

浅拷贝**

- 浅拷贝，指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝
- 如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址
- 即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址

常见的浅拷贝：

- Object.assign
- Object.create
- slice
- concat()
- 展开运算符

**深拷贝**

深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性

常见的深拷贝方式有：

- _.cloneDeep()。loadsh
- jQuery.extend()
- JSON.stringify()
- 手写循环递归



### 9.什么是闭包？

- ✅ 官方说法：闭包就是指有权访问另一个函数作用域中的变量的函数。
- ✅ MDN说法：闭包是一种特殊的对象。它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。

**深度回答**

浏览器在加载页面会把代码放在栈内存（ ECStack ）中执行，函数进栈执行会产生一个私有上下文（ EC ），此上下文能保护里面的使用变量（ AO ）不受外界干扰，并且如果当前执行上下文中的某些内容，被上下文以外的内容占用，当前上下文不会出栈释放，这样可以保存里面的变量和变量值，所以我认为闭包是一种保存和保护内部私有变量的机制。

### 10.闭包的作用

闭包有两个常用的用途；

- 闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来**创建私有变量**。
- 闭包的另一个用途是使已经运行结束的函数上下文中的**变量对象继续留在内存中**，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。



### 11.闭包在项目中的引用场景，以及带来的问题

在实际的项目中，会基于闭包把自己编写的模块内容包裹起来，这样编写就可以保护自己的代码是私有的，防止和全局变量或者是其他的代码冲突，这一点是利用保护机制。

但是不建议过多的使用闭包，因为使用不被释放的上下文，是占用栈内存空间的，过多的使用会导致导致内存泄漏。

解决闭包带来的内存泄漏问题的方法是：使用完闭包函数后手动释放。



### 12.闭包的使用场景

1. `return` 回一个函数  
2. 函数作为参数
3. IIFE（自执行函数）
4. 循环赋值
5. 使用回调函数就是在使用闭包
6. 节流防抖
7. 函数柯里化

### 13.什么是作用域链

当在`js`中使用一个变量的时候，首先`js`引擎会尝试在当前作用域下去寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推直到找到该变量或是已经到了全局作用域，这样的变量作用域访问的链式结构, 被称之为作用域链

**深度回答**

作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。



### 14.作用域链的作用

作用域链的作用是**保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，可以访问到外层环境的变量和函数。**

### 15.说说Js中的预解析？

JS 引擎在运行一份代码的时候，会按照下面的步骤进行工作：

1.把变量的声明提升到当前作用域的最前面，只会提升声明，不会提升赋值

2.把函数的声明提升到当前作用域的最前面，只会提升声明，不会提升调用

3.先提升 function，在提升 var

### 16.变量提升与函数提升的区别？

**变量提升**

简单说就是在 JavaScript 代码执行前引擎会先进行预编译，预编译期间会将`变量声明与函数声明`提升至其`对应作用域的最顶端`，`函数内声明的变量`只会提升至`该函数作用域最顶层`，`当函数内部定义的一个变量与外部相同时`，那么`函数体内的这个变量就会被上升到最顶端`。

**函数提升**

函数提升只会提升函数声明式写法，函数表达式的写法不存在函数提升

函数提升的优先级大于变量提升的优先级，即函数提升在变量提升之上

### 17.什么是箭头函数，有什么特征

使用 "箭头" ( => ) 来定义函数. 箭头函数相当于匿名函数, 并且简化了函数定义

**箭头函数的特征:**

- 箭头函数没有this, this指向定义箭头函数所处的外部环境
- 箭头函数的this永远不会变，call、apply、bind也无法改变
- 箭头函数只能声明成**匿名函数**，但可以通过表达式的方式让箭头函数具名
- 箭头函数没有原型prototype，即不能用作为构造函数
- 箭头函数不能当做一个构造函数 因为 this 的指向问题
- 箭头函数没有 arguments 在箭头函数内部访问这个变量访问的是外部环境的arguments, 可以使用 ...代替

### 18.说说你对递归函数的理解

如果一个函数在内部调用自身本身，这个函数就是递归函数

其核心思想是把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解

一般来说，递归需要有边界条件、递归前进阶段和递归返回阶段。当边界条件不满足时，递归前进；当边界条件满足时，递归返回

**优点**：结构清晰、可读性强

**缺点**：<span style="color:red">效率低、调用栈可能会溢出</span>，其实每一次函数调用会在内存栈中分配空间，而每个进程的栈的容量是有限的，当调用的层次太多时，就会超出栈的容量，从而导致栈溢出。

### 19.call、apply、bind三者的异同

**共同点** :

- 都可以改变this指向;
- 三者第一个参数都是`this`要指向的对象，如果如果没有这个参数或参数为`undefined`或`null`，则默认指向全局`window`

**不同点**:

- call 和 apply 会调用函数, 并且改变函数内部this指向.
- call 和 apply传递的参数不一样,call传递参数使用逗号隔开,apply使用数组传递，且`apply`和`call`是一次性传入参数，而`bind`可以分为多次传入
- `bind`是返回绑定this之后的函数

**应用场景**

1. call 经常做继承.
2. apply经常跟数组有关系. 比如借助于数学对象实现数组最大值最小值
3. bind 不调用函数,但是还想改变this指向. 比如改变定时器内部的this指向

### 20.说说面向对象的特性与特点

- 封装性
- 继承性
- 多态性

面向对象编程具有灵活、代码可复用、容易维护和开发的有点、更适合多人合作的大型软件项目

### 21.创建对象有哪几种方式？

1. 字面量的形式直接创建对象
2. 函数方法
   1. **工厂模式**，工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。
   2. **构造函数模式**
   3. **原型模式**
   4. **构造函数模式+原型模式**，这是创建自定义类型的最常见方式。
   5. **动态原型模式**
   6. **寄生构造函数模式**
3. class创建

### 22.Array 数组对象，数组常用方法

- join() 将一个数组转成字符串。返回一个字符串
- reverse() 将数组中各元素颠倒顺序
- delete 运算符只能删除数组元素的值，而所占空间还在，总长度没变(arr.length)
- shift()删除数组中第一个元素，返回删除的那个值，并将长度减 1
- pop()删除数组中最后一个元素，返回删除的那个值，并将长度减 1
- unshift() 往数组前面添加一个或多个数组元素，长度会改变
- push() 往数组结尾添加一个或多个数组元素，长度会改变
- concat() 连接数组
- slice() 切割数组，返回数组的一部分
- splice()插入、删除或替换数组的元素
- toLocaleString() 把数组转换成局部字符串
- toString()将数组转换成一个字符串
- forEach()遍历所有元素
- every()判断所有元素是否都符合条件
- sort()对数组元素进行排序
- map()对元素重新组装，生成新数组
- filter()过滤符合条件的元素
- find() 查找 返回满足提供的测试函数的第一个元素的值。否则返回 undefined。
- some() 判断是否有一个满足条件 ，返回布尔值
- fill() 填充数组
- flat() 数组扁平化

### 23.说一下hasOwnProperty、instanceof方法

**hasOwnProperty()** 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

**instanceof** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

### 24.什么是原型对象，说说对它的理解

**构造函数的内部的 prototype 属性指向的对象，就是构造函数的原型对象。**

原型对象包含了可以由该构造函数的所有实例共享的属性和方法。当使用构造函数新建一个实例对象后，在这个对象的内部将包含一个指针(***\*proto\****)，这个指针指向构造函数的 原型对象，在 ES5 中这个指针被称为对象的原型。

### 25.什么是原型链

**原型链是一种查找规则**

当访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，这种链式查找过程称之为原型链

### 26. 原型链的终点是什么？

原型链的尽头是null。也就是**Object.prototype.\**proto\****

### 27.实现继承的方法

#### 1.原型链继承

**关键：子类构造函数的原型为父类构造函数的实例对象**

**缺点**：1、子类构造函数无法向父类构造函数传参。

　　　2、所有的子类实例共享着一个原型对象，一旦原型对象的属性发生改变，所有子类的实例对象都会收影响

　　　3、如果要给子类的原型上添加方法，必须放在Son.prototype = new Father()语句后面

#### 2.借用构造函数继承

**关键：用 .call() 和 .apply()方法,在子类构造函数中,调用父类构造函数**

**缺点**：1、只继承了父类构造函数的属性，没有继承父类原型的属性。

　　　2、无法实现函数复用，如果父类构造函数里面有一个方法，会导致每一个子类实例上面都有相同的方法。

#### 3.组合继承

**关键：原型链继承+借用构造函数继承**

**缺点**：1、使用组合继承时，父类构造函数会被调用两次，子类实例对象与子类的原型上会有相同的方法与属性，浪费内存。

#### 4.原型式继承

**关键：创建一个函数，将要继承的对象通过参数传递给这个函数，最终返回一个对象，它的隐式原型指向传入的对象。** (***Object.create()方法的底层就是原型式继承***)

**缺点**：只能继承父类函数原型对象上的属性和方法，无法给父类构造函数传参

#### 5.寄生式继承

**关键：在原型式继承的函数里，给继承的对象上添加属性和方法，增强这个对象**

**缺点**：只能继承父类函数原型对象上的属性和方法，无法给父类构造函数传参

#### 6.寄生组合继承

**关键：原型式继承 + 构造函数继承**

**Js最佳的继承方式，只调用了一次父类构造函数**

#### 7.混入继承

**关键：利用Object.assign的方法多个父类函数的原型拷贝给子类原型**

#### 8. class继承

**关键：class里的extends和super关键字，继承效果与寄生组合继承一样**



### 28. 什么是回调地狱？回调地狱会带来什么问题？

回调函数的层层嵌套，就叫做回调地狱。回调地狱会造成代码可复用性不强，可阅读性差，可维护性(迭代性差)，扩展性差等等问题。

### 29. Promise是什么

Promise是异步编程的一种解决方案，它是一个对象，可以获取异步操作的消息，他的出现大大改善了异步编程的困境，避免了地狱回调，它比传统的解决方案回调函数和事件更合理和更强大。

**promise本身只是一个容器,真正异步的是它的两个回调resolve()和reject()**

**promise本质 不是控制 异步代码的执行顺序（无法控制） ， 而是控制异步代码结果处理的顺序**

### 30. promise实例有哪些状态，怎么改变状态

（1）Promise的实例有**三个状态**:

- Pending（进行中）
- Resolved（已完成）
- Rejected（已拒绝）

当把一件事情交给promise时，它的状态就是Pending，任务完成了状态就变成了Resolved、没有完成失败了就变成了Rejected。

**如何改变 promise 的状态**

- resolve(value): 如果当前是 pending 就会变为 resolved
- reject(error): 如果当前是 pending 就会变为 rejected
- 抛出异常: 如果当前是 pending 就会变为 rejected

注意：一旦从进行状态变成为其他状态就永远不能更改状态了。

### 31. Promise有哪些实例方法

**then**

`then`方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为`resolved`时调用，第二个回调函数是Promise对象的状态变为`rejected`时调用。其中第二个参数可以省略。 `then`方法返回的是一个新的Promise实例（不是原来那个Promise实例）。因此可以采用链式写法，即`then`方法后面再调用另一个then方法。

**catch**

该方法相当于`then`方法的第二个参数，指向`reject`的回调函数。不过`catch`方法还有一个作用，就是在执行`resolve`回调函数时，如果出现错误，抛出异常，不会停止运行，而是进入`catch`方法中。

**finally**

`finally`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

下面是一个例子，服务器使用 Promise 处理请求，然后使用`finally`方法关掉服务器。

```scss
server.listen(port)
  .then(function () {
    // ...
  })
  .finally(server.stop);
复制代码
```

`finally`方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是`fulfilled`还是`rejected`。这表明，`finally`方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。

### 32.async 函数是什么

- 一句话概括： 它就是 Generator 函数的语法糖，也就是处理异步操作的另一种`高级写法`

### 33. 什么是Event Loop

- 事件循环Event Loop又叫事件队列，两者是一个概念

事件循环指的是js代码所在运行环境（浏览器、nodejs）编译器的一种解析执行规则。事件循环不属于js代码本身的范畴，而是属于js编译器的范畴，在js中讨论事件循环是没有意义的。换句话说，js代码可以理解为是一个人在公司中具体做的事情， 而 事件循环 相当于是公司的一种规章制度。 两者不是一个层面的概念。

### 34.常见的宏任务与微任务分别有哪些

| 任务（代码）           | 宏/微 任务 | 环境        |
| ---------------------- | ---------- | ----------- |
|                        | 宏任务     | 浏览器      |
| 事件                   | 宏任务     | 浏览器      |
| 网络请求（Ajax）       | 宏任务     | 浏览器      |
| setTimeout() 定时器    | 宏任务     | 浏览器/Node |
| fs.readFile() 读取文件 | 宏任务     | Node        |
| Promise.then()         | 微任务     | 浏览器/Node |
| async/await            | 微任务     | 浏览器/Node |

### 35.let、const、var的区别

**（1）块级作用域：** 块作用域由 `{ }`包括，let和const具有块级作用域，var不存在块级作用域。块级作用域解决了ES5中的两个问题：

- 内层变量可能覆盖外层变量
- 用来计数的循环变量泄露为全局变量

**（2）变量提升：** var存在变量提升，let和const不存在变量提升，即在变量只能在声明之后使用，否在会报错。

**（3）给全局添加属性：** 浏览器的全局对象是window，Node的全局对象是global。var声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是let和const不会。

**（4）重复声明：** var声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。const和let不允许重复声明变量。

**（5）暂时性死区：** 在使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为**暂时性死区**。使用var声明的变量不存在暂时性死区。

**（6）初始值设置：** 在变量声明时，var 和 let 可以不用设置初始值。而const声明变量必须设置初始值。

**（7）指针指向：** let和const都是ES6新增的用于创建变量的语法。 let创建的变量是可以更改指针指向（可以重新赋值）。但const声明的变量是不允许改变指针的指向。

| **区别**           | **var** | **let** | **const** |
| ------------------ | ------- | ------- | --------- |
| 是否有块级作用域   | ×       | ✔️       | ✔️         |
| 是否存在变量提升   | ✔️       | ×       | ×         |
| 是否添加全局属性   | ✔️       | ×       | ×         |
| 能否重复声明变量   | ✔️       | ×       | ×         |
| 是否存在暂时性死区 | ×       | ✔️       | ✔️         |
| 是否必须设置初始值 | ×       | ×       | ✔️         |
| 能否改变指针指向   | ✔️       | ✔️       | ×         |

### 36. 什么是事件冒泡（Event Bubbling）

事件开始由最具体的元素（⽂档中嵌套层次最深的那个节点）接收到后，开始逐级向上传播到较为不具体的节点。

如果点击了上面页面代码中的 `<button>` 按钮，那么该 `click` 点击事件会沿着 DOM 树向上逐级传播，在途经的每个节点上都会发生，具体顺序如下：

1. button 元素
2. body 元素
3. html 元素
4. document 对象

### 37.什么是事件捕获（Event Capturing）

事件开始由较为不具体的节点接收后，然后开始逐级向下传播到最具体的元素上。

事件捕获的最大作用在于：事件在到达预定⽬标之前就可以捕获到它。

如果仍以上面那段 HTML 代码为例，当点击按钮后，在事件捕获的过程中，document 对象会首先接收到这个 `click` 事件，然后再沿着 DOM 树依次向下，直到 `<button>`。具体顺序如下：

1. document 对象
2. html 元素
3. body 元素
4. button 元素

### 38.什么是事件委托

事件委托，就是利用了事件冒泡的机制，在较上层位置的元素上添加一个事件监听函数，来管理该元素及其所有子孙元素上的某一类的所有事件。原理是：事件冒泡！

适用场景：在绑定大量事件的时候，可以选择事件委托

**优点**

- 事件委托可以减少事件注册数量，节省内存占⽤!
- 当新增⼦元素时，⽆需再次做事件绑定，因此非常适合动态添加元素 (vue解析模板时, 会对新创建的元素, 额外进行绑定的)

### 39. 怎么阻止事件冒泡、阻止默认事件？

**阻止事件冒泡**

e.stopPropagation**()

**阻止默认事件,3种方式**

```csharp
e.preventDefault();//谷歌及IE8以上
window.event.returnValue = false; //IE8及以下
return false; //无兼容问题（但不能用于节点直接onclick绑定函数）
```

### 40. 手写深拷贝

```javascript
 function fn(obj) {
      // 判断数据是否是复杂类型
      if (obj instanceof Object) {
        //判断数据是否是数组
        if (Array.isArray(obj)) {
          //声明一个空数组来接收拷贝后的数据
          let result = []
          obj.forEach(item => {
            // 需要递归深层遍历，否则复制的是地址
            result.push(fn(item))
          })
          // 返回输出这个数组,数组拷贝完成
          return result
        } else {
          //如果是对象,就声明一个空对象来接收拷贝后的数据
          let result = {}
          for (let k in obj) {
            // 使用递归深层遍历
            result[k] = fn(obj[k])
          }
          // 返回输出这个对象,对象拷贝完成
          return result
        }
      }
      // 简单数据类型则直接返回输出
      return obj
    }
```

### 41. 使用Promise封装AJAX请求

```javascript
// promise 封装实现：
function getJSON(url) {
  // 创建一个 promise 对象
  let promise = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    // 新建一个 http 请求
    xhr.open("GET", url, true);
    // 设置状态的监听函数
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4) return;
      // 当请求成功或失败时，改变 promise 的状态
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    // 设置错误监听函数
    xhr.onerror = function() {
      reject(new Error(this.statusText));
    };
    // 设置响应的数据类型
    xhr.responseType = "json";
    // 设置请求头信息
    xhr.setRequestHeader("Accept", "application/json");
    // 发送 http 请求
    xhr.send(null);
  });
  return promise;
}
```

### 42. 防抖和节流

函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。

函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。

```javascript
// //防抖
function debounce(fn, date) {
  let timer  //声明接收定时器的变量
  return function (...arg) {  // 获取参数
    timer && clearTimeout(timer)  // 清空定时器
    timer = setTimeout(() => {  //  生成新的定时器
      //因为箭头函数里的this指向上层作用域的this,所以这里可以直接用this，不需要声明其他的变量来接收
      fn.apply(this, arg) // fn()
    }, date)
  }
}
//--------------------------------
// 节流
function debounce(fn, data) {
  let timer = +new Date()  // 声明初始时间
  return function (...arg) { // 获取参数
    let newTimer = +new Date()  // 获取触发事件的时间
    if (newTimer - timer >= data) {  // 时间判断,是否满足条件
      fn.apply(this, arg)  // 调用需要执行的函数,修改this值,并且传入参数
      timer = +new Date() // 重置初始时间
    }
  }
}
```

### 43. 手写 new

（1）首先创建了一个新的空对象

（2）设置原型，将对象的原型设置为函数的 prototype 对象。

（3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）

（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

```javascript
 function myNew(fn, ...args) {
      // 判断参数是否是一个函数
      if (typeof fn !== "function") {
        return console.error("type error");
      }
      // 创建一个对象，并将对象的原型绑定到构造函数的原型上
      const obj = Object.create(fn.prototype);
      const value = fn.apply(obj, args); // 调用构造函数，并且this绑定到obj上
      // 如果构造函数有返回值，并且返回的是对象，就返回value ;否则返回obj
      return value instanceof Object ? value : obj;
 }
```



# Vue2面试题

### 1. vue生命周期,父组件和子组件生命周期钩子执行顺序是什么??

```js
vue生命周期就是`vue实例从创建到销毁的整个过程`我们称之为vue的生命周期,通过vue的生命周期我们可以在不同的阶段进行不同的逻辑操作. vue生命周期常用的钩子函数一共有8个，分别对应的钩子函数为beforeCreate 创建前、 created创建后、beforeMount 挂载前、mounted挂载后、beforeUpdate 更新前、updated更新后、beforeDestory 销毁前、 destoryed销毁后, `页面一开始加载的时候就会触发创建前后和挂载前后的钩子函数`, 而更新的钩子函数需要当我们改变data的时候才能触发,销毁的钩子函数必须得当组件进行切换的时候就会进行销毁.在项目开发过程中,我经常使用到的钩子函数有created,我们经常`在created进行数据请求,或者获取本地存储的数据`,还有一些其他的操作. 除了created还有mounted,我们经常`在mounted里面获取dom元素` (有时候也存在获取不到dom元素的情况,这个时候我们一般用$nextTick方法来解决).
```

补充:

```js
父组件和子组件生命周期钩子执行顺序:
`加载渲染过程`:
父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
`更新过程`:
父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated
`销毁过程`:
父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

父组件可以监听到子组件的生命周期,使用$emit或者使用@hook:
```

### 2. vuex的理解?

```js
所谓的vuex其实就是vue官方给我们提供的一个`状态管理工具`,通过vuex我们可以`实现组件之间数据共享的问题`. vuex一共有5大核心,分别是`state`,里面保存的是状态,也可以理解为是数组, 接下来是`getters`,他们用来获取state里面的状态,并且可以对state的数据进行处理之后在返回,有点类似于vue的计算属性, 接下来还有`mutations`,他的作用主要是用来修改state里面的数据,不过在`mutations里面只能进行同步的操作`,还有actions,这个actions也可以去改变state的状态,不过在`actions`里面定义的方法`可以进行异步操作`,最后一个是`modules`,如果当我们的项目比较大的时候,那么保存的状态也会增加,如果都写到index.js文件里面,文件的内容就会变得特别臃肿,后期难以维护,所以我们可是使用modules进行模块化的处理,将多个状态抽离到对应js文件里面,最后在modules进行合并,这样后期就方便维护了.

如果我们要获取state里面的状态,我们可以通过`this.$store.state`来进行获取,如果要调用getters里面的方法,我们可以通过`this.$store.getters`来进行调用,如果要调用muations里面的方法我们需要使用`this,$store.commit`来触发,如果调用actions里面的方法,我们一般通过`this.$store.dispacth`来进行触发. 除了这种方式以外,我们还可以通过辅助函数的方式来进行调用和触发(`mapState, mapMutation,mapAction,mapGetters`)mapState、mapGetters在computed里调用，mapMutation,mapAction在methods里调用

在项目当中如果要改变state的状态,我们一般是在组件里面调用this.$store.dispatch方式来触发actions里面的方法,在actions里面的方法通过commit来调用mutations里面定义的方法来改变state,同时这也是vuex的执行机制

不过vuex也有一些弊端,比如浏览器刷新的时候,vuex的数据会丢失,我们一般结合本地存储来解决,当我们在mutations里面改变state的时候在通过localStorage或者sessionStorage存储到本地,然后在state的状态的属性值那块写一个三元表达式,如果本地存在数据的话则读取本地存储的数据,否则就赋值为null在项目当中我一般使用vuex会保存用户信息和token以及其他的一些状态. 以上就是我对vuex的理解.
```

### 3. vue路由有几种模式?有什么区别?原理是什么?

```js
vue的路由模式一共有两种,分别是哈希和history. 他们的区别是hash 就是指 url 尾巴后的#号以及后面的字符，history没有带#，外观上比hash 模式好看些.hash模式不会包含在http请求当中,并且hash不会重新加载页面,hash模式的主要原理就是`onhashchange()事件`

而使用history模式的话,如果前端的url和后端发起请求的url不一致的话,会报404错误,所以使用history模块的话我们需要和后端进行配合.

history api可以分为两大部分，切换历史状态和修改历史状态：
`修改历史状态`：包括了 HTML5 中新增的 pushState() 和 replaceState() 方法，
`切换历史状态`： 包括forward()、back()、go()三个方法
```

### 4. vue路由守卫?

```js
所谓的路由守卫就是当我们`进行页面跳转的时候会触发的钩子函数`,我们把它称之为vue路由守卫. vue一共给我们提供了三种路由守卫,第一种`全局路由守卫`,第二种是`组件内路由守卫`,第三种`路由独享守卫`,这个是写在路由里面. 全局路由守卫包含：beforeEach 前置守卫，beforeResolve 路由解析守卫，afterEach 后置守卫 ，组件内路由守卫：beforeRouteEnter 路由进入之前，beforeRouteUpdate 路由更新之前，beforeRouteLeave 路由离开之前，路由独享守卫：beforEnter 路由进入之前，这几个钩子函数里面都有一个回调函数,这个回调函数里面会有三个参数,分别是`to,from,next`,分别对应的是要进入的路由、离开之前的路由,以及进入写一个路由在项目中我们经常使用路由守卫实现页面的鉴权. 

比如:当用户登录之后,我们会把后台返回的token以及用户信息保存到vuex和本地,当页面进行跳转的时候,我们会在路由守卫里面获取vuex里面的token,如果token存在的话,我们则使用next让他进入要跳转的页面,如果token不存在的话我们使用next方法让他回到登录页
```

### 5. v-if与v-show的区别?

```js
v-if和v-show都是控制元素的显示与隐藏, 
不过v-if控制元素的显示和隐藏的时候会删除对用的dom元素,当每一个显示的时候,都会重新创建dom和渲染. 
而v-show则是通过css的`display`:none和display:block来控制元素的显示与隐藏.v-if比较耗费性能,

    所以我们涉及到`频繁的显示隐藏操作`我们建议使用`v-show`,如果不是频繁操作的话,我们可以v-if在项目中我会经常使用v-if和v-show,比如我们在搜索功能的时候,他有一个历史记录,这个时候我们根据是否有搜索的结果来判断历史记录的显示与隐藏,这块我就可以使用v-if ,当然用v-show也可以.
```

### 6. v-for与v-if的优先级那个高?如果同时使用v-for和v-if怎么解决?

```js
v-for的优先级高. 因为v-for的时候我们才开始渲染dom元素,这个v-if还无法进行判断.v-for和v-if不能同时使用,我们可以通过标签,比如div或者template标签来进行包裹,把v-if写到包裹的标签上面(写到v-for外面）
```

### 7. methods、computed和watch的区别?

```js
首先呢,methods是`用来定义方法的区域`,methods定义的方法需要调用才能触发. 不具备缓存，

- computed是计算属性；watch是监听，监听data中的数据变化。
- computed`支持缓存`，当其依赖的属性的值发生变化时，计算属性会重新计算，反之，则使用缓存中的属性值；       watch`不支持缓存`，当对应属性发生变化的时候，响应执行。
- computed`不支持异步`，有异步操作时无法监听数据变化；watch`支持异步操作`。
- computed`第一次加载时就监听`；watch默认第一次加载时不监听(immediate 组件创建时刻执行与否,
  immediate: true,第一次加载时监听（默认为false）,deep 深度监听 不推荐使用(非常的消耗性能))
- computed中的函数必须调用return；watch不是。
  使用场景：
- computed：一个属性受到多个属性影响，如：购物车商品结算。
- watch：一个数据影响多条数据，如：搜索数据。
- 数据变化响应，执行异步操作，或高性能消耗的操作，watch为最佳选择
```

### 8. vue组件通信（多说点一共有8个）? 写组件的目的是什么？要解决什么？props选项有啥作用  ?说一下组件化开发的理解?(必问)`*********`?

```js
1.`父传子` 在子组件的标签上定义属性 子组件通过props来进行接受,可以通过数组的方式进行接受,也可以通过对象的方式来进行接收,如果父组件没有传递属性,子组件可以default来设置默认值

2.`子传父` 子组件通过this.$emit("自定义的事件",要传给父组件的数据), 父组件通过子组件的标签监听自定义的事件,通过方法来接收传递的数据

3.`非父子组件通信`   通过中央事件总线,我们也称之为eventBus,
 我们需要创建一个空的js文件,导出这个空的vue实例
 传数据的时候 this.$bus.$emit 传
 接数据的时候是在 钩子函数 created 中 this.$bus.$on 接收 第一个参数是事件名称 第二个参数是一个回调函数   包含了要接受的数据,以上就是非父子组件通信的方式
```

补充：

```js
4.利用 `vuex` 进行组件通信 把公共的数据存在 vuex 里就可以实现组件之间都能使用这个数据了
5.其实` v-model` 也能实现组件通信 因为 v-model 就是 :value 和 @input 事件的合写 如果在一个子组件上使用 v-model 也能实现父子组件之间的通信
6.用`本地存储 `来 完成组件通信
7.通过`ref和refs`实现组件之间的通信
8.`.sync` 修饰符
9.`$parent和$children`
在子组件内可以直接通过$parent对父组件进行操作，在父组件内可以直接通过$children 对子组件进行操作
在父组件调用子组件时候要加下标也就是$children 是一个数组 因为可以有很多个子组件
10.`provide 和 inject`
父组件通过通过 provide 提供变量 子组件中通过 inject 注入变量，不论嵌套了几层子组件 都能通过 inject 来调用 provide 的数据
11.`$attr+$listener`
如果父组件 A 下面有子组件 B 子组件 B 下面又有子组件 C 如果 a 组件的变量和方法想要传给组件 C 的时候 就用到这个方法 适用于多级组件传值
在 B 组件中给 C 组件绑定 v-bind="$attrs" v-on="$listeners" 然后在 C 组件中就可以直接使用 a 传来的属性和方法了（简单来说：$attrs与$listeners 是两个对象，$attrs 里存放的是父组件中绑定的非 Props 属性，$listeners 里存放的是父组件中绑定的非原生事件。）

组件通信目的：传递或共享某些数据，解决组件间数据无法共享的问题
props选项作用：设置和获取标签上的属性值的
vue组件化理解：
1.组件是独立和可复用的代码组织单元。组件系统是Vue核心特性之一，它使开发者使用小型、独立和通常可复用的组件构建大型应用；
2.组件化开发能大幅`提高应用开发效率、测试性、复用性`等；
3.组件使用按分类有：页面组件、业务组件、通用组件；
4.vue的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函数，它们基于VueComponent，扩展于Vue；
5.vue中常见组件化技术有：属性prop，自定义事件，插槽等，它们主要用于组件通信、扩展等；
6.合理的划分组件，有助于提升应用性能；
7.组件应该是高内聚、低耦合的；
8.遵循单向数据流的原则。
```

### 9. $nextTick方法有什么作用?

```js
$nextTick也叫做异步更新队列方法,而$nextTick方法的主要作用就是等待dom元素加载完毕之后才会执行的回调函数,我们经常会在$nextTick方法里面`获取dom元素`
```

### 10. 说一下什么是mvvm模式?

```js
MVVM 是Model代表数据模型，数据和业务逻辑都在Model层中定义；View代表UI视图，负责数据的展示；ViewModel负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作；

View 的变化会自动更新到 ViewModel ， ViewModel 的变化也会自动同步到 View 上显示。这种自动同步是因为 ViewModel 中的属性实现了 Observer ，当属性变更时都能触发对应的操作。
```

### 11. vue双向数据绑定原理?

```js
vue.js 则是采用 `数据劫持` 结合 `发布者-订阅者 模式`的方式，通过 Object.defineProperty() 来劫持各个属性的 set， get ，在数据变动时发布消息给订阅者，触发相应的监听回调。这个时候就可以实现数据的双向绑定
```

```js
Object.defineproperty可以接收三个参数

Object.defineproperty(`obj, prop, desc`)
obj :  第一个参数就是要在哪个对象身上添加或者修改属性
prop : 第二个参数就是添加或修改的属性名
desc ： 配置项，一般是一个对象

第三个参数里面还有6个配置控住属性
writable：	是否可重写 
value：  	当前值
get：    	读取时内部调用的函数
set：        写入时内部调用的函数
enumerable： 是否可以遍历
configurable:是否可再次修改配置项

注意：当使用了getter或setter方法，不允许使用writable和value这两个属性(如果使用，会直接报错滴)
　　get 是获取值的时候的方法，类型为 function ，获取值的时候会被调用，不设置时为undefined
　　set 是设置值的时候的方法，类型为 function ，设置值的时候会被调用，undefined
　　get或set不是必须成对出现，任写其一就可以
```

### 12. vue常用的指令有哪些?

```js
v-if

v-show

v-html

v-text

v-on

v-bind

v-model

v-for
```

### 13. vue常用的修饰符有哪些?

```js
.trim 去除首尾多余的空格

.stop 阻止事件冒泡

.once 只渲染一次

.self 事件只作用在元素本身

.number 将值转化为number类型

.capter 组件之间捕获

.prevent 阻止元素的默认行为

.native 事件穿透,让我们可以在自定义组件上定义事件和方法
```

### 14. vue如何封装可复用的组件?以及请举例说明你封装过的组件?

```js
1. 分析项目的所有页面结构和业务功能,抽离出相同的页面结构和业务功能

2. 在src目录下创建一个components这个的文件夹

3. 在这个文件夹内创建可复用的组件. 在需要的用的组件里面引入创建的这个可复用的组件,并进行注册,以标签的形式写在对应的地方

4. 接下来就需要对可复用的组件内容要进行封装,那么在封装的时候我们要注意组件的封闭性和开放性以及粗细粒度

5. 所谓的这个封闭性就是当我们在组件内部定义好之后外部是无法进行修改的,比如当前有一个关闭的符号,或者有一个箭头,我们需要不管任何人使用该组件时候都能够显示这个箭头,无法从外部进行修改

6. 所谓的开放性就是我们需要将动态的内容以及组件通信的方式进行数据传递,保证组件的可扩展性

7. 而所谓的粗细力度就是我们可以把一整个页面当作一个组件去进行封装,也可以一个页面包含了多个组件,至于到底选择哪种呢,这个是没有一个标准的,我们需要根据自己的业务需求去进行判断

8. 总结来说,所谓的如何封装可复用组件其实技术核心就是通过我们vue提供的组件通信在结合slot插槽来进行分装

9. 比如:封装一个搜索框组件:

10. 在components里面创建search.vue

11. 在search.vue里面实现搜索框的布局

12. 在props里面接受 title, bgColor, size , icon,以及当点击搜索按钮或者点击回车键的时候,触发一个方法,通过this.$emit将输入框输入的值传递给父组件

13. 接下来要使用这个搜索组件,我们需要通过import 在父组件内引入子组件,并在componetns属性里面进行注册,

14. 在页面就可以使用,这个时候我们可以通过传递titile控制子组件搜索框显示的内容,通过bgcolor可以控制搜索框的背景颜色,也可以通过size设置搜索框字体的大小,也可以通过icon来设置搜索框的图标, 通过监听$emit里面定义的方法来获取搜索框输入的值
```

### 15. vue中key的作用是什么?

避免dom元素重复渲染. 我们一般在设置key的时候首先尽量会设置为id,或者index下标

```js
1.在v-if中使用key
首先我们先看在vue中出现的一种情况，我们在vue中如果使用v-if进行切换时，此时Vue为了更加高效的渲染，此时会进行前后比较，如果切换前后都存在的元素，则直接复用。如果我们在模板中切换前后都存在input框，此时我们在input框中写入一些数据，并且进行页面切换，则原有的数据就会保存。
此时我们就可以使用key，给每一个input框，添加一个唯一的标识key，来表示元素的唯一性。
1.在v-for中使用key
对于用v-for渲染的列表数据来说，数据量可能一般很庞大，而且我们经常还要对这个数据进行一些增删改操作。那么整个列表都要重新进行渲染一遍，那样就会很费事。而key的出现就尽可能的回避这个问题，提高效率。v-for默认使用就地复用的策略，列表数据修改的时候，他会根据key值去判断某一个值是否修改，如果修改则重新渲染该项，否则复用之前的元素。在v-for中我们的key一般为id，也就是唯一的值，但是一般不要使用index作为key。

为什么不建议用index作为key?
使用index 作为 key和没写基本上没区别，因为不管数组的顺序怎么颠倒，index 都是 0, 1, 2...这样排列，导致 Vue 会复用错误的旧子节点，做很多额外的工作。
```

### 16. 说一下你对keep-alive的理解?以及在项目中如何使用?

```js
keep-alive是vue内置的一个组件，而这个组件的作用就是能够缓存不活动的组件，我们能够知道，一般情况下，组件进行切换的时候，默认会进行销毁，如果有需求，某个组件切换后不进行销毁，而是保存之前的状态，比如说刚刚填好的表单数据。那么就可以利用keep-alive来实现。在搭建 vue 项目时，有某些路由组件没必要多次渲染，所以需要将组件在内存中进行‘持久化’，此时在router-view上使用keep-alive。 keep-alive可以使被包含的路由组件状态维持不变，即便是组件切换了，其内的状态依旧维持在内存之中。在下一次显示时，也不会重新渲染。

include - 字符串或正则表达式。只有名称匹配的组件会被缓存。

exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。

max-数字最多可以缓存多少组件。
```

### 17 说一下什么是vue过滤器? 有几种?项目中如何使用,请举例说明?

```js
所谓的vue过滤器就是将数据进行二次处理,得到我们想要的结果数据

vue的过滤器分为两种,第一种是全局过滤器,通过vue.filter来进行定义,第二种是局部过滤器,需要定义在组件内部项目中我们通过过滤器将后台返回的状态0 和1 转化为支付或者未支付
```

### 18 说一下你对slot插槽的理解?

```js
首先呢,所谓的插槽就是一个占位符,`将自定义组件的内容展示出来`.我们知道自定义的组件里面如果写内容的话,页面是不会显示出来的,如果我们想让自定义组件里面的内容显示出来,我们就需要使用slot的插槽.

●`默认插槽`：又名匿名插槽，当slot没有指定name属性值的时候一个默认显示插槽，一个组件内只有有一个匿名插槽。
●`具名插槽`：带有具体名字的插槽，也就是带有name属性的slot，一个组件可以出现多个具名插槽。
●`作用域插槽`：默认插槽、具名插槽的一个变体，可以是匿名插槽，也可以是具名插槽，该插槽的不同点是在子组件渲染作用域插槽时，可以将子组件内部的数据传递给父组件，让父组件根据子组件的传递过来的数据决定如何渲染该插槽。
```

### 19 说一下vue中本地跨域如何解决?线上跨域如何解决?之前前后端分离跨域怎么实现? 第一个请求超时了怎么解决？同时向服务器发送六个请求，但是第一个请求发送成功后，剩余的请求就不需要了，怎么实现？如何保证前端调用接口的安全性？

```js
本地跨域是通过在`vue.config.js`文件里面的`devServer`属性里面的`proxy`属性里面配置,一共配置三个属性,分别是`代理名称 代理地址 开启跨域 重写路径`,
线上跨域是在`nginx.config`文件里面配置, 代理名称是通过`location` 代理名称。`proxy_pass` 代理地址
```

补充：

```js
取消请求：`cancelToken`方法
如何保证前端接口的安全性：
1、Token授权认证，防止未授权用户获取数据； 
2、时间戳超时机制； 
3、URL签名，防止请求参数被篡改； 
4、防重放，防止接口被第二次请求，防采集； 
5、采用HTTPS通信协议，防止数据明文传输；
```

### 20. 说一下如何对axios进行二次封装?以及api如何封装?

```js
1. 在src文件夹内创建utils文件夹

2. 在utils文件夹内创建request.js文件

3. 在request.js内引入axios

4. 使用axios.create方法创建axios的实例,在axios.create方法里面可以配置请求的公共地址和

超时时间以及其他的一些配置

5. 创建请求拦截器和响应拦截器

6. 在请求拦截器里面可以获取vuex的token,并通过config.header.token = vuex的token,将

token发送给后台

7. 在请求拦截器里面我们配置loading加载

8. 在响应拦截器里面我们可以结束loading加载以及token的过期处理,以及错误响应信息的处理

9. 最后通过export default 导出axios的实例对象

10. 在src文件内创建api文件夹

11. 在api文件夹内创建对应模块的js文件

12. 在对应的文件里面引入request.js文件

13. 封装api方法

14. 最后通过export default 导出封装的api方法
```

### 21. 说一下axios的拦截器的作用?应用场景都有哪些?

```js
首先呢,axios拦截器是axios给我们提供的两个方法,通过这两个方法我们可以对请求发送之前以及响应之后进行逻辑的再次处理(拦截). 这两个拦截器不需要手动触发,只要发送http请求的时候就会自动触发.

我在项目中经常通过拦截器发送token, 对token进行过期处理,以及进行其他的一些操作
```

### 22. 说一下vue和jquery的区别?

```js
首先呢jquery他是用js封装的一个类库,主要是为了方便操作dom元素,而vue他是一个框架,并且呢,他会从真实dom构建出一个虚拟的dom树,通过diff算法渲染只发生改变的dom元素,其他的相同的dom元素不用在重新渲染. 而使用jquery去改变dom元素的时候,即使有相同的dom元素也会重新渲染,`vue是操作数据的，而jQuery是操作dom的`
```

### 23. vue中data发生变化,视图不更新如何解决?

```js
因为Vue实例中的数据是响应式的而我们新增的属性并不是响应式的，由于受现在JavaScript的限制，Vue无法检测到属性的新增或删除。所以有时无法实时的更新到视图上。所以我在项目中遇到这类问题的时候一般是通过this.$set方法去解决. this.$set方法一共有三个参数,分别是目前属性,新增属性,新增的值
```

补充:

```js
this.$set可以使得新添加的属性也是响应式的，并触发视图更新,解决数据改变视图不更新问题
```

### 24. 为什么vue中data必须是一个函数?

```js
如果data是一个函数的话，这样每复用一次组件，就会返回一份新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。所以说vue组件的data必须是函数。这都是因为js的特性带来的，跟vue本身设计无关。
```

### 25. 发送ajax到后端请求数据的过程 , 有哪些必须要设置的参数?

```js
`options` ：只有一个参数，要求是JSON格式的数据，其可以设置如下属性：

`async` ：是否异步，true代表异步，false代表同步。默认为true

`cache `：是否缓存，true代表缓存，false代表不缓存，默认为true

`complete` ：当Ajax状态码为4时所触发的回调函数

`contentType` ：请求头，如果是POST请求，此参数为application/x-www-form-urlencoded

`data` : 发送Ajax请求时所传递的参数，要求是一个字符串

`dataType` ：期待的返回值类型，可以是text/xml/json数据类型

`success` ：当Ajax状态码为4且响应状态码为200时所触发的回调函数

`type` ：发送的http请求，可以是get，也可以是post

`url` ：请求的url地址
```

### 26. props设置默认值? props自定义验证函数? default设置对象和普通字符串写法有啥区别  (必问) `***`

```js
设置默认值：default
自定义验证函数：validator
设置普通字符串: default:String,
设置对象: default:()=>{}   
```

### 27. vue项目是打包了一个js文件，一个css文件，还是有多个文件？

```js
vue项目打包是将多个文件合并一个js文件和一个css文件
```

### 28. vue-cli 工程常用的 npm 命令有哪些?

```js
1. npm install：下载 node_modules 资源包的命令

2. npm run dev： 启动 vue-cli 开发环境的 npm命令

3. npm run serve： 启动 vue-cli 开发环境的 npm命令

4. npm run build： vue-cli 生成 生产环境部署资源 的 npm命令

5. npm run build--report： 用于查看 vue-cli 生产环境部署资源文件大小的 npm命令
```

### 29. vue 中使用了哪些设计模式？订阅者--发布者模式?(90%)  观察者模式、 订阅者模式 `**`

```js
vue 中使用了哪些设计模式？
1.`单例模式`：确保一个类只有一个实例对象，并提供一个全局访问点供其访问。
优点：适用于单一对象，只生成一个对象实例，避免频繁创建和销毁实例，减少内存占用。
缺点：不适用动态扩展对象。
场景：登录浮窗、Vue中的axios实例（我们对axios进行请求拦截和响应拦截，多次调用封装好的axios但是仅设置一次，封装好的axios导出就是一个单例）、全局态管理 store、线程池、全局缓存
  function Person (name, age) {
    this.name = name
    this.age = age
    this.info = function () {
      console.log(`我的名字叫${this.name}, 我今年${this.age}了`)
    }
  }
  Person.getInstance = function (name, age) {
    if (!this.instance) {
      this.instance = new Person(name, age)
    }
    console.log(this.instance)
    return this.instance
  }
  let b1 = Person.getInstance('单例1', 18)
  let b2 = Person.getInstance('单例2', 18)
  b1.info()
  b2.info()

2.`工厂模式`：工厂模式是用来创建对象最常见的一种设计模式。不必暴露构造函数的具体逻辑，而是将逻辑封装在一个个函数之中，那么这个构造函数就可以被看做工厂。
场景： 有构造函数的地方，写了大量的构造函数代码，调用了大量的new操作符。
优点：通过工厂模式，我们可以快速创建大量相似对象，没有重复代码。
缺点：工厂模式创建的对象属于Object，无法区分对象类型，这也是工厂模式没有广泛使用的原因。
function Factory (name, age) {
   this.name = name;
   this.age = age;
   // 或者
   // let obj = {}
   // obj.name = name
   // obj.age = age
   // return obj
 }
 Factory.prototype.say = function () {
   console.log(`我的名字叫${this.name}, 我今年${this.age}了`)
 }
 let zs = new Factory('张三', 18);
 let ls = new Factory('李四', 20);
 zs.say()
 ls.say()

3.`装饰器模式`（切面编程AOP）： 在不改变对象自身的基础上，在程序运行期间给对象动态的添加职责；若直接修改函数体，则违背了’开放封闭原则’，也违背了我们的’单一职责原则’；简单的说就是允许向现有的函数添加新的功能，同时不改变其结构。
场景： vue中的表单验证与表单提交就运用了这种模式，遵循封闭开放原则。
function before (fn, callback) {
    let _this = this;
    return function () {
      callback.apply(this, arguments)
      return fn.bind(this, arguments)
    }
  }

  function after (fn, callback) {
    let _this = this 
    return function () {
      let res = fn.apply(this, arguments)
      callback.apply(this, arguments)
      return res
    }
  }
  // before和after是两个高阶函数，让我们一起回忆一下什么是高阶函数？
  // 还知道call，apply,bind的区别吗
  let getName = function getName () {
    // 加入这是你同事写的烂代码，看不下去的那种，那么别动他的代码
    console.log('这是getName函数')
  }

  before(getName, function () {
    // 这个就是你要写的新逻辑
    console.log('切入前代码')
  })()

  after(getName, function () {
    // 这个也是你要写的新逻辑
    console.log('切入后代码')
  })()

4.`策略模式`： 就是定义一系列的算法，把他们一个个封装起来，并且使他们可以相互替换。
let strategy = {
    'A': function (bonus) {
      return bonus * 4
    },
    'B': function (bonus) {
      return bonus * 3
    }
  }

  function fn (level, bonus) {
    return strategy[level](bonus)
  }

  let result = fn('A', 4000)
  console.log(result, 'result')
  // 策略模式提供了开放-封闭原则，将算法或者方法封装在一个类中，使它们易于切换，易于替换。

  function func (a, b) {
    let f = function f() {
      return a + b
    }
    return f
  }

5.`发布订阅者模式`：发布订阅者模式一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得将得到通知；观察者模式则是一种一对一的依赖关系。

```

```js
观察者模式和订阅者模式：
`两者区别`：
订阅-发布是观察者模式的一个变种。
观察者模式中主体和观察者是互相感知的，发布-订阅模式是借助第三方来实现调度的，发布者和订阅者之间互不感知
订阅-发布，观察者只有订阅了才能接受到被观察者的消息，同时观察者还可以取消接受被观察者的消息，也就是说在观察者和被观察者之间存在-个经纪人Broker来管理观察者和被观察者。

`从表面上看`:
观察者模式里，只有两个角色一一 观察者+被观察者
而发布订阅模式里，却不仅仅只有发布者和订阅者两个角色，还有一个经常被我们忽略的一一经纪人Broker

`往更深层次讲`:
观察者和被观察者，是松耦合的关系
发布者和订阅者，则完全不存在耦合

`从使用层面上讲`
观察者模式，多用于单个应用内部
发布订阅模式，则更多的是一种跨应用的模式(cross-application pattern)，比如消息中间件
```

### 30. 你都做过哪些 Vue 的性能优化？ 

```js
一、`编码优化`:
1.不要将所有的数据都放在data中，data中的数据都会增加getter和setter，会收集对应的 watcher，这样就会降低性能。
2. vue 在 v-for 时给每项元素绑定事件需要用事件代理，节约性能。
3. 单页面采用keep-alive缓存组件。
4.尽可能拆分组件，来提高复用性、增加代码的可维护性，减少不必要的渲染。因为组件粒度最细，改组件的数组，它只会渲染当前的组件。
5. v-if 当值为false时内部指令不会执行，具有阻断功能，很多情况下使用v-if替代v-show，合理使用if和show。
6. key 保证唯一性，不要使用索引 ( vue 中diff算法会采用就地复用策略)。
7. data中的所以数据都会被劫持，所以将数据尽可能扁平化，如果数据只是用来渲染可以使用Object.freeze，可以将数据冻结起来，这样就不会增加getter和setter。
8.合理使用路由懒加载、异步组件。
9.尽量采用runtime运行时版本。
10.数据持久化的问题，使用防抖、节流进行优化，尽可能的少执行和不执行。

二、`加载性能`：
1.使用第三方插件实现按需加载( babel-plugin-component )
2.滚动到可视区域动态加载 ( https://tangbc.github.io/vue-virtual-scroll-list )
3.图片懒加载 (https://github.com/hilongjw/vue-lazyload.git)
4.路由懒加载
5.cdn加速

               

三、`用户体验`：
1.app-skeleton 骨架屏
2.app-shell app壳
3.pwa 可以实现H5的离线缓存，使用servicewor
        

四、`SEO 优化`：
1.预渲染插件 prerender-spa-plugin，可以把我们代码提前运行起来，最后将代码保存下来，缺陷就是不实时。
2.服务端渲染 ssr

五、`打包优化`：
1.使用 cdn 的方式加载第三方模块
2.多线程打包 happypack
3.抽离公共文件 splitChunks
4.sourceMap 生成

六、`缓存和压缩`：
1.客户端缓存、服务端缓存
2.服务端 gzip 压缩

```

### 31. vue路由传参方式？

```js
一、`params传参`
this.$router.push({ 
	name:"admin",　　　　
	//这里的params是一个对象，id是属性名，item.id是值(可以从当前组件或者Vue实例上直接取) 
	params:{id:item.id} 
}) 
//这个组件对应的路由配置 
{　　
	//组件路径 
	path: '/admin',　　
	//组件别名 
	name: 'admin',　　
	//组件名 
	component: Admin, 
} 
通过params传递参数，如果我们想获取 id 的参数值，可以通过this.$route.params.id这种方式来打印出来就可以得到了；

注意：获取参数的时候是 $route，跳转和传参的时候是 $router

二、`路由属性配置传参：`
this.$router.push({
	name:"/admin/${item.id}", 
}) 
//这个组件对应的路由配置 
{ 　　
	//组件路径 
	path: '/admin:id', 　　
	//组件别名 
	name: 'admin', 　　
	//组件名 
	component: Admin, 
}

通过路由属性配置传参我们可以用this.$route.params.id来获取到 id 的值，

注意 this. $router.push 方法里面路径带的是值，路由配置项那里带的是变量名(属性名)来实现的对应；

以上两种传参方式基本上可以理解为 ajax 中的 post 请求方式，参数都是不可见的，但是上面两种方法都有一个弊端，就是当页面刷新了是获取不到参数值的，那么有没有一种方法是页面刷新之后参数依然存在呢？

三、`query传参`
this.$router.push({ 
	name:"/admin",　　　　 
	query:{id：item.id} 
}) 
//这个组件对应的路由配置 
{ 　　
	//组件路径 
	path: '/admin', 　　
	//组件别名 
	name: 'admin', 　　
	//组件名 
	component: Admin, 
}
第三种方式是用 query 来传参，这种方式是可以解决页面刷新参数消失问题的，这种方式可以理解为是 ajax 中的 get 方法，参数是直接在 url 后面添加的，参数是可见的，所以解决页面刷新参数消失问题建议使用此方法来解决；

`区别`
（1）params传参
只能用 name，不能用 path。
地址栏不显示参数名称 id，但是有参数的值。

（2）query传参
name 和 path 都能用。用 path 的时候，提供的 path 值必须是相对于根路径的相对路径，而不是相对于父路由的相对路径，否则无法成功访问。
地址栏显示参数格式为?id=0&code=1

```

### 32. Vue事件穿透的方法?

```js
.native 事件穿透,让我们可以在⾃定义组件上定义事件和⽅法
```

### 33. v-text v-html 区别?

```js
1.v-text：会把标签转义输出。即原模原样输出，h1标签没效果
2.v-html：会直接输出结果。即h1标签会出效果
```

### 34. vue中路由跳转方式? 

```js
1.`router-link`
<router-link :to="{path:'/home'}"> 不带参数
<router-link :to="{name:'home', params: {id:1}}">  带参数
<router-link :to="{name:'home', query: {id:1}}"> 带参数

2.`this.$router.push()` (函数里面调用)
this.$router.push('/home') 不带参数
this.$router.push({path:'/home'})不带参数
this.$router.push({path:'/home',query: {id:'1'}})带参数
this.$router.push({name:'home',params: {id:'1'}}) 带参数

3.`this.$router.replace()` (用法同push)

4.`this.$router.go(n)`
向前或者向后跳转n个页面，n可为正整数或负整数

区别：

this.$router.push 跳转到指定url路径，并向history栈中添加一个记录，点击后退会返回到上一个页面
this.$router.replace 跳转到指定url路径，但是history栈中不会有记录，点击返回会跳转到上上个页面 (就是直接替换了当前页面)
this.$router.go(n) 向前或者向后跳转n个页面，n可为正整数或负整数
```

### 35. vue中加载应用太多加载慢，是什么导致的? 如何解决? 路由懒加载? component实现懒加载的原理(必问) 

```js
1、使用 vue-router 懒加载解决首次加载时资源过多导致的速度缓慢问题
2、使用CDN加速
3、组件按需加载
4、图片资源压缩
5、对引用多次的文件进行处理，对大的文件进行分隔
6、nginx开启gzip
```

### 36. Vue2.0和3.0区别?

```js
1. `双向数据绑定原理发生了改变`，使用 proxy 替换 Object.defineProerty,使用 Proxy 的优势：
    可直接监听数组类型的数据变化
    监听的目标为对象本身，不需要像 Object.defineProperty 一样遍历每个属性，有一定的性能提升
    可直接实现对象属性的新增/删除
2. `默认使用懒加载`
   在 2.x 版本里。不管数据多大，都会在一开始就为其创建观察者，在数据很大时，就会造成性能的问题。在 3.x 中，只会对渲染出来的数据创建观察者，而且 3.x 的观察者更高效。
3. `生命周期有了一定的区别`
   Vue2--------------vue3
   beforeCreate -> setup() 开始创建组件之前，创建的是 data 和 method
   created -> setup()
   beforeMount -> onBeforeMount 组件挂载到节点上之前执行的函数。
   mounted -> onMounted 组件挂载完成后执行的函数
   beforeUpdate -> onBeforeUpdate 组件更新之前执行的函数。
   updated -> onUpdated 组件更新完成之后执行的函数。
   beforeDestroy -> onBeforeUnmount 组件挂载到节点上之前执行的函数。
   destroyed -> onUnmounted 组件卸载之前执行的函数。
   activated -> onActivated 组件卸载完成后执行的函数
   deactivated -> onDeactivated
4. `选项api改为组合api ` 
5. `v-if 和v-for优先级不一样了`，vue2是v-for优先级更高，vue3是v-if优先级更高
6. `插槽不一样了`，vue2中可以直接使用slot，vue3 必须使用v-slot
7. `vue3没有过滤器了`
8. `支持碎片化`，可以有多个根节点
```

### 37. element-ui中table中的列表，表头主要有哪些功能?element中table列表表头主要支持那些功能？表格组件有那些方法吗

```js
表头主要有哪些功能：`固定表头、筛选、排序、多级表头、多选`
方法：
clearSelection	    用于多选表格，清空用户的选择	
toggleRowSelection	用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否
toggleAllSelection	用于多选表格，切换所有行的选中状态	
toggleRowExpansion	用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否
setCurrentRow	用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。	
clearSort	用于清空排序条件，数据会恢复成未排序的状态	
clearFilter	不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件
doLayout	对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法	—
sort	    手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。
```

### 38. 图片的上传下载有封装过组件吗? 上传用哪种方式？编码上传用什么方法？

```js
1.`云储存`      
主要步骤
向后端发送请求，获取OSS配置数据
文件上传，调用OSS提供接口
文件上传完成，后的文件存储在服务器上的路径
将返回的路径存值到表单对象中

2.`传统文件服务器上传图片`
主要步骤
设置服务器上传路径、上传文件字段名、header、data参数等
上传成功后，返回服务器存储的路径
返回的图片路径存储到表单提交对象中

3.`使用<input type="file" />``
```

### 39. 页面鉴权怎么分配权限? <动态添加路由表>添加和获取动态路由?怎么做权限管理(rbac)? 按钮鉴权是怎么处理的？ 路由权限? 菜单权限? 数据权限?做后台管理系统，权限管理是怎么做的，有哪几个方面

```js
`页面鉴权的实现思路`:
当用户登录成功时,我们会将后台返回的token保存到vuex和本地,并且跳转到主页,这时我们会触发vuerouter给我们提供的路由守卫方法,在路由守卫方法里面我们会先获取vuex或者本地存储的token,如果
token存在的话则通过next进入主页,如果token不存在的话,则通过next方法跳转到登录页面
/**
* 有token
* 可以进入非登录页面* 、 不能在进入登录页面
* 没有token
* 只能进入登录页面或者401/404
* **/
import router from "./router/index.js"
import store from "./store/index.js"
// 白名单
const whiteList = ['/login',"/404","/401"]
router.beforeEach((to, from, next) => {
if (store.getters.token) {
   if (to.path === '/login') {
      next('/')
   } else {
      next()
   }
} else {
   if(whiteList.indexOf(to.path) > -1){
      next()
   }else{
      next("/login")
   }
}
})

`菜单权限`:
   菜单的数据一般是当我们登录成功之后,后台会给我们返回token以及用户相关信息,其中用户信息这块会包含菜单的数据、路由的数据、按钮权限的数据. 我们需要将这些数据存储到vuex和本地.接下来我们需要在主页组件中获取到vuex里面所存储到的菜单数据,利用 el-menu 将菜单的数据进行动态渲染
   1.我们菜单的数据是后台根据不同的用户登录给前台返回不同的菜单数据,所谓前台只需要做到将菜单的数据渲染出来就行,至于这个用户拥有哪些菜单数据完全是由后台来决定的
   2.菜单的数据不是后端来返回,而是前端通过动态路由表来生成菜单的数据. 具体实现思路是通过this.$router.options.routes获取到完整的路由表,然后在封装一个递归方法,过滤出菜单所需要的数据,最后在通过el-menu渲染成菜单

`路由权限`:
    所谓的路由权限指的是项目中的路由数据不是写死的,而是通过后台返回的路由权限数据进行动态渲染的. 如果用户在浏览器地址访问了不存在的路由,我们则跳转到404页面
实现思路
1. 当用户登录的时候,调用getPermissionList接口获取到后台所返回的路由表数据
2. 定义一个递归方法,将后台所返回的路由表数据过滤成路由所需要的数据
3. 在通过router.addRoutes动态的添加到路由表当中

`按钮权限`:
   所谓的按钮权限是指在某个菜单的界面中， 我们需要根据按钮权限数据， 展示出可进行操作的按钮，比如删除， 修改，增加等按钮.
如何实现按钮的权限控制?
1. 如果要实现按钮的权限控制,我们需要使用vue的自定义指令去实现:
   首先需要创建一个按钮权限控制的指令,我们定义这个指令的名称为: `v-permission`
2. 在这个指令的内部获取到vuex里面存储的按钮权限数据
3. 在通过binding.value获取到自定义制定属性值的数据
4. 判断从vuex里面获取到的按钮权限数据是否包含了自定义指令包含的权限
5. 如果不包含,我们在设置el.style.display = “none”,并且使用
el.parentNode.removeChild(el)删除当前按钮元素

`具体实现代码`:
Vue.directive('permission', {
beforeMount: function (el, binding) {
let actionList = storage.getItem('actionList');
let value = binding.value;
let hasPermission = actionList.includes(value)
if (!hasPermission) {
el.style = 'display:none';
setTimeout(() => {
el.parentNode.removeChild(el);
}, 0)
}
}
})

 `接口权限`:
    所谓的接口权限其实指的是当用户在未登录时无法请求到登录以后才当请求的接口, 如果为登录时直接请求,后台会返回401.如果要实现接口权限校验,我们需要登录以后将后台所返回的token保存到vuex和本地, 在axios请求拦截器中使用config.header.token = token 或者config.header.Authorization = token 的方式将token使用请求头发送给后台
```

### 40. 封装axios的时候一般做什么工作 ? axios是怎么封装的？请求拦截和响应拦截器都是干什么的？ 简单解释下axios? promise与axios的关系 (必问) 

```js
Axios是一个基于promise 的 HTTP 库，可以用于浏览器和 node.js，Axios（相比于原生的XMLHttpRequest对象来说） 简单易用,（相比于jQuery）axios包尺寸小且提供了易于扩展的接口，是专注于网络请求的库。

vue封装axios可以提高代码质量、让使用更为便利。axios的API很友好，开发者完全可以很轻松地在项目中直接使用；不过随着项目规模增大，如果每发起一次HTTP请求，需要写一遍设置超时时间、设置请求头、错误处理等等操作。这种重复劳动不仅浪费时间，而且让代码变得冗余不堪，难以维护；为了提高我们的代码质量，应该在项目中二次封装一下axios再使用，这样可以让使用更为便利。

1.请求拦截器的作用是在请求发送前进行一些操作，例如在每个请求体里加上token，统一做了处理如果以后要改也非常容易。
关于拦截，这里只说原理，前端的请求，最终还是离不开 ajax，像vue 的 vue-resource 、axios，都只是对ajax进行了统一的封装，它暴露出来的拦截器，其实就是写了一个方法，把ajax写在这个方法里面，（我们先说请求拦截器）在执行这个方法的时候，先将请求时要添加给请求头的那些数据（token、后端要的加密码…具体要看实际情况）先执行一遍，都赋值给一个变量，然后再统一传给ajax，接下来就是执行ajax，这就是所谓的请求拦截，其实就是先执行要添加的数据，然后再执行ajax，如果把这个添加数据的过程抽出来，就成了所谓的请求拦截器；

2、响应拦截器：
响应拦截器的作用是在接收到响应后进行一些操作，例如在服务器返回登录状态失效，需要重新登录的时候，跳转到登录页。
响应拦截器也是一样如此，就是在请求结果返回后，先不直接导出，而是先对响应码等等进行处理，处理好后再导出给页面，如果将这个对响应码的处理过程抽出来，就成了所谓的响应拦截器；

aixos封装：
1. 在src文件夹内创建utils文件夹
2. 在utils文件夹内创建request.js文件
3. 在request.js内引入axios
4. 使用axios.create方法创建axios的实例,在axios.create方法里面可以配置请求的公共地址和
超时时间以及其他的一些配置
5. 在创建请求拦截器和响应拦截器
6. 在请求拦截器里面可以获取vuex的token,并通过config.header.token = vuex的token,将
token发送给后台
7. 在请求拦截器里面我们配置loading加载
8. 在响应拦截器里面我们可以结束loading加载以及token的过期处理,以及错误响应信息的处理
9. 最后通过export default 导出axios的实例对象
10. 在src文件内创建api文件夹
11. 在api文件夹内创建对应模块的js文件
12. 在对应的文件里面引入request.js文件
13. 封装api方法
14. 最后通过export default 导出封装的api方法
```

### 41. 如果想深度修改 element-ui 样式？怎么修改样式 ？ 如果修改样式不生效，怎么处理？

```js
1.`新建全局样式表`
新建global.css全局样式文件，并在main,js中进行引用，在全局样式下的样式会覆盖vue中单页面中element-ui样式。
2.`在当前vue页面下新建style标签`
在当前style下不要使用scoped属性，在写有scoped属性不会覆盖element-ui样式
3.`使用/deep/进行深度修改样式`
找到需要修改的样式的标签名的类名，在类名前加/deep/,这种方式可以强制修改element-ui样式，，可直接用到加了scoped属性的style节点下。
```

### 42. 小程序的双向数据绑定跟vue的双向数据绑定的区别? 

```js
在vue中进行数据绑定后,当数据修改了会直接更新到视图上
但是在小程序中呢,data数据修改是不会直接同步到,必须调用this.setData()这个方法
```

### 43. vue是怎么操作dom节点的？

```js
1.javascript 操作 dom 语法
document.getElementById("btn");
2.vue 自带的 ref 属性 操作 dom 语法
```

### 44. diff算法是什么？

```js
diff 算法就是对虚拟 dom 进行对比，并返回一个 patch 对象，这个对象的作用是存储两个节点不同的地方，最后用 patch 里记录的信息去局部更新真实的 dom

diff 算法的步骤
1.js 对象表示真实的 dom 结构，就是我们说的生成一个虚拟 dom，再用虚拟 dom 构建一个真的 dom 树，放到页面中。 2.状态改变的时候生成一个新的虚拟 dom 跟旧的进行对比，这个对比的过程就是 diff 算法，通过 patch 对象记录差异 3.把记录的差异用在第一个虚拟 dom 构建的真实的 dom 上，视图就更新了

Vue 的 diff 算法是平级⽐较，不考虑跨级⽐较的情况。内部采⽤深度递归的⽅式+双指针⽅式⽐较
```

### 45. vue有哪些内置组件？

```js
component          动态组件

transition         动画

transition-group   动画

keep - alive       缓存

slot               插槽
```

### 46. 常用vue的组件库有哪些?

```js
Vant Element UI Element UI PLUS Boostrap Echarts Swiper 富文本编辑器
```

### 47. cookie和localStorage、sessionStorage的区别 

```js
在html5没有出现之前,我们浏览器存储数据的⽅式⼀般都是采⽤cookie,cookie具有`过期时间`,到达指定的时间cookie就会消失,并且⼀个域名下最多只能存储20条cookie,并且cookie的⼤⼩有⼀定的限制,最后可`存储4kb`，cookie会参与到与服务端的通信中，一般会`携带在http请求的头部中`，例如一些关键密匙验证等。
⽽localstorage和sessionstorage都是html5新增的两个api⽅法,localStorage和sessionStorage是单纯的前端存储，`不参与与服务端的通信`，localstroage也称之为数据持久化,当我们使⽤localstorage将数据存储到本地的时候,如果不在浏览器上⼿动清楚或者不调⽤clear或者removeitem⽅法他是不会⾃动清楚的.
⽽sessionstorage我们称之为会话存储,使⽤sessionstorage存储的数据再关闭当前⻚⾯之后就会消失他们和cookie最⼤的区别是 cookie有过期时间,⽽本地存储的两个⽅法如果不⼿动清除或者关闭浏览器就会⼀直存储,并且本地存储的api使⽤起来更加简洁和⽅便
```

### 48. 怎么在vue中使用bootstrap? 

```js
1.下载Bootstrap
npm install bootstrap-vue
2.引入BootStrap
在 mian.js 页面,
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
```

### 49. vue长列表优化?

```js
一、原因
当页面dom元素太多时浏览器渲染速度就会变慢，当浏览器内存不足时甚至会导致浏览器卡顿或者卡死等现象。因此对症下药，解决方案就是减少页面dom的渲染。

二、原理
可以通过按需进行加载dom，即只显示可视化区域的数量。从而减少dom的结构，实现性能提升。因此，分页加载、懒加载等方案根本治标不治本。

三、实现
此文章基于vue-virtual-scroll-list第三方插件，通过虚拟列表进行滚动加载数据。

// 安装
npm i vue-virtual-scroll-list --save

<virtualList
        style="height: calc(100vh - 100px); overflow-y: auto;border:1px solid"
        :size='50'
        :keeps='15'
        :data-key="'id'"
        :data-sources="data"
        :data-component="itemComponent"
        :extra-props="{
            itemClick
        }"
    >
    </virtualList>
```

