(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{596:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"window-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window-对象"}},[t._v("#")]),t._v(" Window 对象")]),t._v(" "),s("p",[t._v("Window 对象表示浏览器中打开的窗口。")]),t._v(" "),s("p",[t._v("如果文档包含框架（frame 或 iframe 标签），浏览器会为 HTML 文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。")]),t._v(" "),s("p",[t._v("**注释：**没有应用于 window 对象的公开标准，不过所有浏览器都支持该对象。")]),t._v(" "),s("h2",{attrs:{id:"window-对象描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window-对象描述"}},[t._v("#")]),t._v(" Window 对象描述")]),t._v(" "),s("p",[t._v("Window 对象表示一个浏览器窗口或一个框架。在客户端 JavaScript 中，Window 对象是全局对象，所有的表达式都在当前的环境中计算。也就是说，要引用当前窗口根本不需要特殊的语法，可以把那个窗口的属性作为全局变量来使用。例如，可以只写 document，而不必写 window.document。")]),t._v(" "),s("p",[t._v("同样，可以把当前窗口对象的方法当作函数来使用，如只写"),s("RouterLink",{attrs:{to:"/html/browser/window/function/alert.html"}},[t._v("alert")]),t._v("()，而不必写 Window.alert()。")],1),t._v(" "),s("p",[t._v("除了上面列出的属性和方法，Window 对象还实现了核心 JavaScript 所定义的所有全局属性和方法。")]),t._v(" "),s("p",[t._v("Window 对象的 window 属性和 self 属性引用的都是它自己。当你想明确地引用当前窗口，而不仅仅是隐式地引用它时，可以使用这两个属性。除了这两个属性之外，parent 属性、top 属性以及 frame[] 数组都引用了与当前 Window 对象相关的其他 Window 对象。")]),t._v(" "),s("p",[t._v("要引用窗口中的一个框架，可以使用如下语法：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前窗口的框架")]),t._v("\nself"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前窗口的框架")]),t._v("\nw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//窗口 w 的框架")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("要引用一个框架的父窗口（或父框架），可以使用下面的语法：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("parent  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前窗口的父窗口")]),t._v("\nself"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前窗口的父窗口")]),t._v("\nw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//窗口 w 的父窗口")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("要从顶层窗口含有的任何一个框架中引用它，可以使用如下语法：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("top      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前框架的顶层窗口")]),t._v("\nself"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前框架的顶层窗口")]),t._v("\nf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//框架 f 的顶层窗口")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("新的顶层浏览器窗口由方法 Window.open() 创建。当调用该方法时，应把 open() 调用的返回值存储在一个变量中，然后使用那个变量来引用新窗口。新窗口的 opener 属性反过来引用了打开它的那个窗口。")]),t._v(" "),s("p",[t._v("一般来说，Window 对象的方法都是对浏览器窗口或框架进行某种操作。而 alert() 方法、confirm() 方法和 prompt 方法则不同，它们通过简单的对话框与用户进行交互。")])])}),[],!1,null,null,null);a.default=e.exports}}]);