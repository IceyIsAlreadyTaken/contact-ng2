## tsconfig.json
如果一个目录下存在一个tsconfig.json文件，那么它意味着这个目录是TypeScript项目的根目录。
tsconfig.json文件中指定了用来编译这个项目的根文件和编译选项。
### 使用tsconfig.json
<li>不带任何输入文件的情况下调用tsc，编译器会从当前目录开始去查找tsconfig.json文件，逐级向上搜索父目录</li>
<li>不带任何输入文件的情况下调用tsc，且使用命令行参数--project（或-p）指定一个包含tsconfig.json文件的目录</li>
<li>当命令行上指定了输入文件时，tsconfig.json文件会被忽略</li>