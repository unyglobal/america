// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ucayali","repository":"america","path":"peru/ucayali","depth":2,"parent":"peru","children":["aguaytia","atalaya","pucallpa","san-fernando"]});
export const childModules = Object.freeze({"aguaytia":"./aguaytia/aguaytia.js","atalaya":"./atalaya/atalaya.js","pucallpa":"./pucallpa/pucallpa.js","san-fernando":"./san-fernando/san-fernando.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
