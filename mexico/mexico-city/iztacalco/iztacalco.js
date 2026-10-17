// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"iztacalco","repository":"america","path":"mexico/mexico-city/iztacalco","depth":3,"parent":"mexico/mexico-city","children":["gabriel-ramos-millan","granjas-mexico","ramos-millan-bramadero","tlacotal-ramos-millan"]});
export const childModules = Object.freeze({"gabriel-ramos-millan":"./gabriel-ramos-millan/gabriel-ramos-millan.js","granjas-mexico":"./granjas-mexico/granjas-mexico.js","ramos-millan-bramadero":"./ramos-millan-bramadero/ramos-millan-bramadero.js","tlacotal-ramos-millan":"./tlacotal-ramos-millan/tlacotal-ramos-millan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
