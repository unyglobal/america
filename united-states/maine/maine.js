// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maine","repository":"america","path":"united-states/maine","depth":2,"parent":"united-states","children":["bangor","biddeford","saco","south-portland","south-portland-gardens","waterville","west-scarborough","westbrook"]});
export const childModules = Object.freeze({"bangor":"./bangor/bangor.js","biddeford":"./biddeford/biddeford.js","saco":"./saco/saco.js","south-portland":"./south-portland/south-portland.js","south-portland-gardens":"./south-portland-gardens/south-portland-gardens.js","waterville":"./waterville/waterville.js","west-scarborough":"./west-scarborough/west-scarborough.js","westbrook":"./westbrook/westbrook.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
