// import 'core-js';
import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err=>console.log(err));


/*

reflect-metadata与zone.js作为angular应用依赖的polyfill

启动应用主要依赖angular 自带的 platformBrowserDynamic 函数和应用模块Appmodule
然后调用platformBrowserDynamic().bootstrapModule()方法来编译启动AppModule

*/ 