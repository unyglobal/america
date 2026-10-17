// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-salt-lake","repository":"america","path":"united-states/utah/south-salt-lake","depth":3,"parent":"united-states/utah","children":["burton-acres","burton-place","oakland-place","roseland-addition","rural","south-boulevard","southgate-park"]});
export const childModules = Object.freeze({"burton-acres":"./burton-acres/burton-acres.js","burton-place":"./burton-place/burton-place.js","oakland-place":"./oakland-place/oakland-place.js","roseland-addition":"./roseland-addition/roseland-addition.js","rural":"./rural/rural.js","south-boulevard":"./south-boulevard/south-boulevard.js","southgate-park":"./southgate-park/southgate-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
