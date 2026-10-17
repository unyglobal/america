// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buena-vista","repository":"america","path":"paraguay/cordillera-department/caacupe/buena-vista","depth":4,"parent":"paraguay/cordillera-department/caacupe","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
