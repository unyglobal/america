// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"le-vieux-longueuil","repository":"america","path":"canada/quebec/le-vieux-longueuil","depth":3,"parent":"canada/quebec","children":["terrasse-charbonneau"]});
export const childModules = Object.freeze({"terrasse-charbonneau":"./terrasse-charbonneau/terrasse-charbonneau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
