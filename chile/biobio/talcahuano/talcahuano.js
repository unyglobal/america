// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"talcahuano","repository":"america","path":"chile/biobio/talcahuano","depth":3,"parent":"chile/biobio","children":["san-vicente"]});
export const childModules = Object.freeze({"san-vicente":"./san-vicente/san-vicente.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
