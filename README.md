# generator-tingle

tingle 组件的脚手架

## Install

全局安装脚手架工具 `yo`

```shell
$ npm install yo -g
```

全局安装 `tingle` 组件脚手架

```shell
$ npm install generator-tingle -g
```

## Usage

### 创建组件

创建组件，比如 `tingle-your-component` 组件

```shell
$ mkdir tingle-your-component // 创建组件目录
$ cd tingle-your-component
$ yo tingle:component // 使用脚手架，根据提示按步骤执行
$ npm install // 安装依赖
```

> 组件目录名称命名规则：
>
> * 必须以`tingle-`为前缀
> * 多个单词必须使用`-`分割
> * 字母全部小写
> * 不建议包含下划线及特殊字符

### 组件开发

```
$ gulp d // 启动本地的开发服务器
```

执行了上面的命令后，会调起系统默认的浏览器，此时对 `src` 和 `demo` 目录下的文件做出的任何更改，都会自动触发`demo.js` 的重新构建，浏览器也会自动刷新，enjoy！

### 组件构建

```
$ gulp b
```

## History

请移步这里 [change log](history.md)
