// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-dakota","repository":"america","path":"united-states/south-dakota","depth":2,"parent":"united-states","children":["brookings","mitchell","rapid-city","sioux-falls"]});
export const childModules = Object.freeze({"brookings":"./brookings/brookings.js","mitchell":"./mitchell/mitchell.js","rapid-city":"./rapid-city/rapid-city.js","sioux-falls":"./sioux-falls/sioux-falls.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
