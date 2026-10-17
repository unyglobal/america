// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matanzas-province","repository":"america","path":"cuba/matanzas-province","depth":2,"parent":"cuba","children":["calimete","cardenas","colon","jaguey-grande","jovellanos","limonar","matanzas","pedro-betancourt","perico","union-de-reyes","varadero"]});
export const childModules = Object.freeze({"calimete":"./calimete/calimete.js","cardenas":"./cardenas/cardenas.js","colon":"./colon/colon.js","jaguey-grande":"./jaguey-grande/jaguey-grande.js","jovellanos":"./jovellanos/jovellanos.js","limonar":"./limonar/limonar.js","matanzas":"./matanzas/matanzas.js","pedro-betancourt":"./pedro-betancourt/pedro-betancourt.js","perico":"./perico/perico.js","union-de-reyes":"./union-de-reyes/union-de-reyes.js","varadero":"./varadero/varadero.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
