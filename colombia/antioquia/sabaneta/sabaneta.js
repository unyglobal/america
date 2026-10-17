// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sabaneta","repository":"america","path":"colombia/antioquia/sabaneta","depth":3,"parent":"colombia/antioquia","children":["convivienda","los-serna"]});
export const childModules = Object.freeze({"convivienda":"./convivienda/convivienda.js","los-serna":"./los-serna/los-serna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
