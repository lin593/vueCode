/* @flow */

import * as nodeOps from 'web/runtime/node-ops' // ---> 1.
import { createPatchFunction } from 'core/vdom/patch' // ----->2
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

export const patch: Function = createPatchFunction({ nodeOps, modules }) // patch 的调用来自于 src\core\vdom\patch.js

// web 和 移动上操作dom都是不一样的
/*
*  nodeOps 作为参数的方式传入
*  modules 模块在生命周期都是不一样的相关执行方式，通过函数柯里化一次性传入（能够解决一次性的差异，通过闭包的形式进行对数据的持有）
*  
*/