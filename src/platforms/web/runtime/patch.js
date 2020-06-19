/* @flow */

import * as nodeOps from 'web/runtime/node-ops' // ---> 1.
import { createPatchFunction } from 'core/vdom/patch' // ----->2
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

export const patch: Function = createPatchFunction({ nodeOps, modules }) // patch 的调用来自于 src\core\vdom\patch.js
