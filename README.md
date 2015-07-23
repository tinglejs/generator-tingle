# generator-tingle

Scaffold for Tingle Component

## use

全局安装脚手架工具`yo`

```shell
$ npm install yo -g
```

全局安装`tingle`控件脚手架

```shell
$ npm install generator-tingle -g
```

创建控件目录

```shell
$ mkdir tingle-hello-world
$ cd tingle-hello-world
```

> NOTE，`Tingle Component`目录名称命名规则：  
>
> * 必须以`tingle-`为前缀。  
> * 多个单词必须使用`-`分割。  
> * 不建议包含下划线及特殊字符。


初始化并安装依赖

```
$ yo tingle
$ npm install
```

开始开发

```
$ gulp d
```

执行了上面的命令后，会调起系统默认的浏览器，此时对`src`和`demo`目录下的文件做出的任何更改，都会自动触发`demo.js`的重新构建，浏览器也会自动刷新，enjoy！




## updates

#### v1.0.9 (2015-07-23)

* 在模板中源文件 `src` 中预置了 `SVG` 资源文档，包括 `tingle` 和 `custom`
* `package.json` 中添加新的开发组件
* 运行开发环境时加入SVG资源合并及植入内嵌任务

```
.
├── svg  ----------------------------- SVG资源目录
│   ├── tingle  -------------------- 通用svg
│   │   
│   └── custom  -------------------- 自定义svg（文件命名需添加prefix，约定使用组件或项目名作为前缀）

```

#### v1.0.8 (2015-07-14)

* `tingle-context`改为`npm`安装，以后不再需要安装`tingle-context`子模块。
* `webpack`配置添加自动扫描`tingle`目录，不再需要手动配置`alias`。
* `package.json`中添加`main`值，为后续发布模块做准备。
* 更新文档

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