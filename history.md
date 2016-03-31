## Change Log

#### v2.3.1 (2016-03-31)

* 添加 babel-eslint@6.0.0

#### v2.3.0 (2016-03-31)

* 添加 `yo tingle:component_update` 来对老的文件结构进行升级

#### v2.2.5 (2016-03-30)

* 修复若干 bug
  * .eshintrc.json -> .eslintrc.json
  * src 中的 js 代码风格由原来的 require 式改为 import 式

#### v2.2.0 (2016-03-30)

* 添加全新的 component 脚手架
  * 支持 eslint 的 gulp 任务
  * 升级 react 及 react-dom 的版本为 15.0.0-rc2

#### v2.1.3 (2016-02-18)

* 添加更新命令 `yo tingle:migrate_update`，可以直接将老的`gulpfile`、`webpack.dev.js`、`.gitignore`文件替换成新的。
* 更新`.gitignore`文件
  - 忽略`node_modules`软连接，之前只忽略目录。
  - 忽略`src/*.css`和`src/*.css.map`
* `gulpfile`中添加`build_css`任务
* 删除多余的`devDependencies`依赖

#### v2.1.2 (2016-02-18)

* `browsersync`添加`open external`配置。
* 待发布的文件取消压缩。

#### v2.1.1 (2016-02-17)

* 增强的`svg`构建任务支持。
* 调整`demo`目录，添加`demo/src`和`demo/dist`。
* 组件发布策略修改，添加对应的`gulp build`命令。

#### v2.0.0 (2015-12-20)

* 增加项目整体的React版本升级至0.14.3，以适应脚手架的变化。

    ```
    yo tingle:migrate
    ```
* 移除upgrade命令,改功能属于过渡方案，考虑到后续作用不大，所以考虑移除

#### v1.0.19 (2015-11-18)

* 增加 `.editorconfig` 文件到项目模板。
* 增加 `.editorconfig` 当前项目。
* 修复 `author` 的转义问题。

#### v1.0.18 (2015-9-11)

* `README.md` 格式问题修复。
* `package.json` 依赖更新。
* upgrade 默认不进行依赖更新。


#### v1.0.17 (2015-?-?)

* `README.md` 格式问题修复。

#### v1.0.16 (2015-08-29)

* `index.html`和`demo/index.js`中默认加入`FastClick`。
* `render`方法中默认加入`className`属性。
* 组件类默认加入`displayName`属性。
* `index.html`中`demo.css`位置调整。
* `upgrade`任务文档完善。
* 加入`bower.json`

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
