// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bucaramanga","repository":"america","path":"colombia/santander-department/bucaramanga","depth":3,"parent":"colombia/santander-department","children":["comuna-13-centroriental","comuna-15-centro","san-alonso","sotomayor"]});
export const childModules = Object.freeze({"comuna-13-centroriental":"./comuna-13-centroriental/comuna-13-centroriental.js","comuna-15-centro":"./comuna-15-centro/comuna-15-centro.js","san-alonso":"./san-alonso/san-alonso.js","sotomayor":"./sotomayor/sotomayor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
