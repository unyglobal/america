// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"borough-of-arima","repository":"america","path":"trinidad-and-tobago/borough-of-arima","depth":2,"parent":"trinidad-and-tobago","children":["arima"]});
export const childModules = Object.freeze({"arima":"./arima/arima.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
