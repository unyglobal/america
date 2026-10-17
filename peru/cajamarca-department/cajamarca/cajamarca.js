// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cajamarca","repository":"america","path":"peru/cajamarca-department/cajamarca","depth":3,"parent":"peru/cajamarca-department","children":["aranjuez","ciudad-universitaria","magna-vallejo","ramon-castilla"]});
export const childModules = Object.freeze({"aranjuez":"./aranjuez/aranjuez.js","ciudad-universitaria":"./ciudad-universitaria/ciudad-universitaria.js","magna-vallejo":"./magna-vallejo/magna-vallejo.js","ramon-castilla":"./ramon-castilla/ramon-castilla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
