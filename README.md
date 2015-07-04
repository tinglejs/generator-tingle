# generator-tingle
scaffold for tingle project and component

## use

全局安装脚手架工具`yo`

```shell
$ npm install yo -g
```

全局安装`tingle`控件脚手架

```shell
$ npm install generator-tingle -g
```

创建控件目录并初始化

```shell
$ mkdir tingle-hello-world
$ cd tingle-hello-world
$ yo tingle
$ npm install
```

> NOTE，`Tingle Component`目录名称命名规则：  
>
> * 必须以`tingle-`为前缀。  
> * 多个单词必须使用`-`分割。  
> * 不建议包含下划线及特殊字符。

## updates

#### v1.0.7 (2015-07-01)

* 针对**钉钉**和**内外**的定制版命名修复。如果目录名称是`tingle-dd-number-field`，则生成的控件名称是`DDNumberField`。

#### v1.0.6 (2015-06-30)

* `tingle-style`改为`npm`安装，以后不再需要安装`tingle-style`子模块。
* 所有控件都默认依赖`tingle-context`和定制版的`modernizr`，所以要安装`tingle-context`子模块（包含`modernizr`）。
* 将手势初始化移动到`tingle-context`中，包括`Fastclick`和`React.initializeTouchEvents(true)`等。
* `demo`中现在返回一个`Demo`控件，方便后续把各个控件的`demo`集成到一个页面。比如 

	```js
	// 直接将各个子模块对应的Demo控件引入
	var TextFeildDemo = require('tingle/tingle-text-field/demo');
	var SlideDemo = require('tingle/tingle-slide/demo');

	// 在demo show的页面的render方法中
	render() {
		return <div>
			<TextFeildDemo/>
			<SlideDemo/>
		</div>
	}
	```