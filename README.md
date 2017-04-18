# contact-ng2
angular2 通讯录demo


## package.json
npm包所有相关信息，包括作者、简介、包依赖、构建等信息，格式必须为json 一般情况 npm init 可自动生成
<li>name : 项目名称</li>
<li>version : 版本信息</li>
<li>descript : 描述</li>
<li>script : npm 调用的脚本或者一些命令</li>
<li>devDependencies : 开发时依赖的一些工具包 npm install webpack --save-dev</li>
<li>dependencies : 项目依赖的基础包 npm install core-js --save</li>
<li>author,homepage,bugs : git相关</li>


## tsconfig.json
如果一个目录下存在一个tsconfig.json文件，那么它意味着这个目录是TypeScript项目的根目录。
tsconfig.json文件中指定了用来编译这个项目的根文件和编译选项。
### 使用tsconfig.json
<li>不带任何输入文件的情况下调用tsc，编译器会从当前目录开始去查找tsconfig.json文件，逐级向上搜索父目录</li>
<li>不带任何输入文件的情况下调用tsc，且使用命令行参数--project（或-p）指定一个包含tsconfig.json文件的目录</li>
<li>当命令行上指定了输入文件时，tsconfig.json文件会被忽略</li>




