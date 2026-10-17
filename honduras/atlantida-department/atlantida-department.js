// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atlantida-department","repository":"america","path":"honduras/atlantida-department","depth":2,"parent":"honduras","children":["arizona","tela"]});
export const childModules = Object.freeze({"arizona":"./arizona/arizona.js","tela":"./tela/tela.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
