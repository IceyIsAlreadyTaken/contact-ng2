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

### 主要参数
<li>module : 组织代码方式</li>
<li>target : 编译目标平台 ES3 ES5 ES6 等</li>
<li>removeComments : 编译 js 的时候，删除掉注释</li>

<li>sourceMap : ts编译成js是否生成对应的SourceMap文件</li>
<li>emitDecoratorMetadata : 让typescript 支持带有装饰器的声明生成元数据</li>
<li>emitDecoratorMetadata : 是否开启实验性装饰器特性</li>
<li>compileOnSave : 可以让IDE在保存文件的时候根据tsconfig.json重新生成文件。</li>

<li>typeRoots : 制定第三方库的类型定义文件存放位置，推荐使用node_modules/@types文件夹</li>


```
如果指定了typeRoots，只有typeRoots下面的包才会被包含进来
{
   "compilerOptions": {
       "typeRoots" : ["./typings"]
   }
}
```

这个配置文件会包含所有./typings下面的包，而不包含./node_modules/@types里面的包。

```
如果指定了types，只有被列出来的包才会被包含进来。 比如：
{
   "compilerOptions": {
        "types" : ["node", "lodash", "express"]
   }
}
```
这个tsconfig.json文件将仅会包含 ./node_modules/@types/node，./node_modules/@types/lodash和./node_modules/@types/express。/@types/。 node_modules/@types/*里面的其它包不会被引入进来。

<strong>指定"types": []来禁用自动引入@types包。</strong>
