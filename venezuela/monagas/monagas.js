// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"monagas","repository":"america","path":"venezuela/monagas","depth":2,"parent":"venezuela","children":["caicara","caripito","maturin","punta-de-mata","temblador"]});
export const childModules = Object.freeze({"caicara":"./caicara/caicara.js","caripito":"./caripito/caripito.js","maturin":"./maturin/maturin.js","punta-de-mata":"./punta-de-mata/punta-de-mata.js","temblador":"./temblador/temblador.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
