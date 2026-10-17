// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"suriname","repository":"america","path":"suriname","depth":1,"parent":"","children":["paramaribo-district","wanica-district"]});
export const childModules = Object.freeze({"paramaribo-district":"./paramaribo-district/paramaribo-district.js","wanica-district":"./wanica-district/wanica-district.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
