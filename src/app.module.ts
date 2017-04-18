import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}


/*

NgModule 定义模块用的装饰器
declarations 导入模块依赖的组件 指令
import 用来导入当前模块所需的其他模块
bootstrap 标记出引导组件 在angular启动应用时 将被标记的组建渲染到模版中

*/