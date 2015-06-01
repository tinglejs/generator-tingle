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

添加`tingle`的基础样式模块，在根目录下，执行下面的命令，通过git的子模块方式，把依赖加载进来。

```shell
git submodule add git@gitlab.alibaba-inc.com:alinwmobile/tingle-style.git tingle/tingle-style
```
