// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-fernando","repository":"america","path":"trinidad-and-tobago/san-fernando","depth":2,"parent":"trinidad-and-tobago","children":["marabella","mon-repos"]});
export const childModules = Object.freeze({"marabella":"./marabella/marabella.js","mon-repos":"./mon-repos/mon-repos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
