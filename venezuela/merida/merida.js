// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"merida","repository":"america","path":"venezuela/merida","depth":2,"parent":"venezuela","children":["bailadores","ejido","el-vigia","la-azulita","nueva-bolivia","santa-cruz-de-mora","tabay","timotes","tovar","tucani"]});
export const childModules = Object.freeze({"bailadores":"./bailadores/bailadores.js","ejido":"./ejido/ejido.js","el-vigia":"./el-vigia/el-vigia.js","la-azulita":"./la-azulita/la-azulita.js","nueva-bolivia":"./nueva-bolivia/nueva-bolivia.js","santa-cruz-de-mora":"./santa-cruz-de-mora/santa-cruz-de-mora.js","tabay":"./tabay/tabay.js","timotes":"./timotes/timotes.js","tovar":"./tovar/tovar.js","tucani":"./tucani/tucani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
