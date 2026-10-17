// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caacupe","repository":"america","path":"paraguay/cordillera-department/caacupe","depth":3,"parent":"paraguay/cordillera-department","children":["barrio-allegre","barrio-buena-vista","barrio-daniel-escurra","barrio-industrial","barrio-pozo-de-la-virgen","barrio-ybu","buena-vista","industrial"]});
export const childModules = Object.freeze({"barrio-allegre":"./barrio-allegre/barrio-allegre.js","barrio-buena-vista":"./barrio-buena-vista/barrio-buena-vista.js","barrio-daniel-escurra":"./barrio-daniel-escurra/barrio-daniel-escurra.js","barrio-industrial":"./barrio-industrial/barrio-industrial.js","barrio-pozo-de-la-virgen":"./barrio-pozo-de-la-virgen/barrio-pozo-de-la-virgen.js","barrio-ybu":"./barrio-ybu/barrio-ybu.js","buena-vista":"./buena-vista/buena-vista.js","industrial":"./industrial/industrial.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
