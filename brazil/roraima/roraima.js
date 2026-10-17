// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"roraima","repository":"america","path":"brazil/roraima","depth":2,"parent":"brazil","children":["alto-alegre","boa-vista","canta","caracarai","mucajai","pacaraima","rorainopolis"]});
export const childModules = Object.freeze({"alto-alegre":"./alto-alegre/alto-alegre.js","boa-vista":"./boa-vista/boa-vista.js","canta":"./canta/canta.js","caracarai":"./caracarai/caracarai.js","mucajai":"./mucajai/mucajai.js","pacaraima":"./pacaraima/pacaraima.js","rorainopolis":"./rorainopolis/rorainopolis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
