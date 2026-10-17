// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"imbabura","repository":"america","path":"ecuador/imbabura","depth":2,"parent":"ecuador","children":["atuntaqui","ibarra","otavalo"]});
export const childModules = Object.freeze({"atuntaqui":"./atuntaqui/atuntaqui.js","ibarra":"./ibarra/ibarra.js","otavalo":"./otavalo/otavalo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
