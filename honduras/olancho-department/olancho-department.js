// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"olancho-department","repository":"america","path":"honduras/olancho-department","depth":2,"parent":"honduras","children":["catacamas","dulce-nombre-de-culmi","gualaco","juticalpa"]});
export const childModules = Object.freeze({"catacamas":"./catacamas/catacamas.js","dulce-nombre-de-culmi":"./dulce-nombre-de-culmi/dulce-nombre-de-culmi.js","gualaco":"./gualaco/gualaco.js","juticalpa":"./juticalpa/juticalpa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
