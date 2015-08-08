# generator-tingle

Scaffold for Tingle Component

## install

全局安装脚手架工具`yo`

```shell
$ npm install yo -g
```

全局安装`tingle`控件脚手架

```shell
$ npm install generator-tingle -g
```

## usage

创建控件目录，比如`tingle-hello-world`

```shell
$ mkdir tingle-hello-world
$ cd tingle-hello-world
```

> NOTE，`Tingle Component`目录名称命名规则：  
>
> * 必须以`tingle-`为前缀
> * 多个单词必须使用`-`分割
> * 字母全部小写
> * 不建议包含下划线及特殊字符


初始化控件目录结构，根据提示进行响应的配置。

```
$ yo tingle
```

安装依赖

```
$ npm install
```

开始开发

```
$ gulp d
```

执行了上面的命令后，会调起系统默认的浏览器，此时对`src`和`demo`目录下的文件做出的任何更改，都会自动触发`demo.js`的重新构建，浏览器也会自动刷新，enjoy！

## 更新

### 项目整体更新

通过旧的脚手架创建的项目，可以通过以下命令自动更新到最新的脚手架的目录结构和规范。

```
tnpm install generator-tingle -g
yo tingle:upgrade
```

### 开发工具和配置的更新

通过以下命令可以更新项目的 gulp 任务和 webpack 相关配置文件。

```
tnpm install tingle-dev-tools
```

## updates

#### v1.0.15 (2015-08-08)

* `index.html`中`demo.css`路径修复。

#### v1.0.14

* 去掉`package.json`中`files`配置。
* 增加项目整体的更新任务，以适应脚手架的变化。

    ```
    yo tingle:upgrade
    ```
* 允许用户在初始化项目时跳过安装依赖。

#### v1.0.13 (2015-08-05)

* 这个版本有错误！

#### v1.0.12 (2015-08-04)

* [开发工具](https://github.com/tinglejs/tingle-dev-tools)和脚手架分离，允许用户单独更新开发工具。

#### v1.0.11 (2015-07-30)

* `tingle`目录下的所有子模块样式，现在可以自动插入到`demo`的样式。
* 控件样式文件第一行默认加入`tingle-style`中提供的工具函数集。
* `browser-sync`版本更新，内置`weinre`功能。
* 添加`svg`图标方案(`tingle-icon`中提供)所对应的`gulp`任务和`svg`目录。
  - `src/svg/tingle/` 存放`tingle`通用的图标。
  - `src/svg/custom/` 存放控件私有的图标。

#### v1.0.10 (2015-07-14)

* `package.json`中的`main`值丢失了。

#### v1.0.9 (2015-07-14)

* 这个版本有错误！

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