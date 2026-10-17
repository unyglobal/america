// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tarapaca","repository":"america","path":"chile/tarapaca","depth":2,"parent":"chile","children":["alto-hospicio","iquique","pozo-almonte"]});
export const childModules = Object.freeze({"alto-hospicio":"./alto-hospicio/alto-hospicio.js","iquique":"./iquique/iquique.js","pozo-almonte":"./pozo-almonte/pozo-almonte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
