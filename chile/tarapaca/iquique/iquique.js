// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"iquique","repository":"america","path":"chile/tarapaca/iquique","depth":3,"parent":"chile/tarapaca","children":["arturo-prat","parque-balmaceda","puerto"]});
export const childModules = Object.freeze({"arturo-prat":"./arturo-prat/arturo-prat.js","parque-balmaceda":"./parque-balmaceda/parque-balmaceda.js","puerto":"./puerto/puerto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
