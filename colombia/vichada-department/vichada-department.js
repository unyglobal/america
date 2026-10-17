// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vichada-department","repository":"america","path":"colombia/vichada-department","depth":2,"parent":"colombia","children":["cumaribo","puerto-carreno"]});
export const childModules = Object.freeze({"cumaribo":"./cumaribo/cumaribo.js","puerto-carreno":"./puerto-carreno/puerto-carreno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
