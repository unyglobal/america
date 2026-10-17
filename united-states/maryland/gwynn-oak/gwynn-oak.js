// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gwynn-oak","repository":"america","path":"united-states/maryland/gwynn-oak","depth":3,"parent":"united-states/maryland","children":["central-forest-park","dorchester"]});
export const childModules = Object.freeze({"central-forest-park":"./central-forest-park/central-forest-park.js","dorchester":"./dorchester/dorchester.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
