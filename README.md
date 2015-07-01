# generator-tingle
scaffold for tingle project and component

## use



按照顺序执行下面的步骤：

#### 安装脚手架工具`yo`，需要全局安装

```shell
$ npm install yo -g
```

#### 安装`tingle`脚手架(目前只包含Component脚手架)，需要全局安装

```shell
$ npm install generator-tingle -g
```

#### 创建`Component`项目

每个`Tingle Component`都有独立的`git`库，如果没有权限，找拂山开通权限，新建项目，如`tingle-hello-world`。

注意，`Tingle Component`目录命名规则：  

* 必须以`tingle-`为前缀。  
* 多个单词必须使用`-`分割。  
* 不建议包含数字和下划线等非字母字符。

#### 运行脚手架

将项目拉到本地，进入根目录，运行脚手架，按照提示执行若干初始化工作

```shell
$ cd tingle-hello-world
$ yo tingle
```

#### 安装依赖

```shell
$ npm install
```

#### 安装子模块

添加`tingle`的基础模块，在根目录下，执行下面的命令，通过git的子模块方式，把依赖加载进来。

```shell
$ git submodule add git@gitlab.alibaba-inc.com:alinwmobile/tingle-context.git tingle/tingle-context
```

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
	var TextFeildDemo = require('tingle/tingle-text-field/	demo');
	var SlideDemo = require('tingle/tingle-slide/demo');

	// 在demo show的页面的render方法中
	render() {
		return <div>
			<TextFeildDemo/>
			<SlideDemo/>
		</div>
	}
	```