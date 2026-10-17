// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paysandu-department","repository":"america","path":"uruguay/paysandu-department","depth":2,"parent":"uruguay","children":["paysandu"]});
export const childModules = Object.freeze({"paysandu":"./paysandu/paysandu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
