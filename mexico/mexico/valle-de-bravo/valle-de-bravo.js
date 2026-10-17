// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valle-de-bravo","repository":"america","path":"mexico/mexico/valle-de-bravo","depth":3,"parent":"mexico/mexico","children":["agua-fria","el-calvario","la-capilla","loma-bonita","santa-maria-ahuacatlan"]});
export const childModules = Object.freeze({"agua-fria":"./agua-fria/agua-fria.js","el-calvario":"./el-calvario/el-calvario.js","la-capilla":"./la-capilla/la-capilla.js","loma-bonita":"./loma-bonita/loma-bonita.js","santa-maria-ahuacatlan":"./santa-maria-ahuacatlan/santa-maria-ahuacatlan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
