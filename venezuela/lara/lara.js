// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lara","repository":"america","path":"venezuela/lara","depth":2,"parent":"venezuela","children":["barquisimeto","cabudare","carora","duaca","el-tocuyo","los-rastrojos","quibor","sanare"]});
export const childModules = Object.freeze({"barquisimeto":"./barquisimeto/barquisimeto.js","cabudare":"./cabudare/cabudare.js","carora":"./carora/carora.js","duaca":"./duaca/duaca.js","el-tocuyo":"./el-tocuyo/el-tocuyo.js","los-rastrojos":"./los-rastrojos/los-rastrojos.js","quibor":"./quibor/quibor.js","sanare":"./sanare/sanare.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
