// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"boston","repository":"america","path":"united-states/massachusetts/boston","depth":3,"parent":"united-states/massachusetts","children":["downtown-boston","quincy-market"]});
export const childModules = Object.freeze({"downtown-boston":"./downtown-boston/downtown-boston.js","quincy-market":"./quincy-market/quincy-market.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
