// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-chorrera","repository":"america","path":"panama/panama-oeste-province/la-chorrera","depth":3,"parent":"panama/panama-oeste-province","children":["plaza-la-ceda"]});
export const childModules = Object.freeze({"plaza-la-ceda":"./plaza-la-ceda/plaza-la-ceda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
