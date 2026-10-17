// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"coyula","repository":"america","path":"mexico/jalisco/coyula","depth":3,"parent":"mexico/jalisco","children":["arcos-de-zalatitan-ii","los-geranios","los-girasoles","paraiso","pinar-de-las-palomas"]});
export const childModules = Object.freeze({"arcos-de-zalatitan-ii":"./arcos-de-zalatitan-ii/arcos-de-zalatitan-ii.js","los-geranios":"./los-geranios/los-geranios.js","los-girasoles":"./los-girasoles/los-girasoles.js","paraiso":"./paraiso/paraiso.js","pinar-de-las-palomas":"./pinar-de-las-palomas/pinar-de-las-palomas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
