// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nevada","repository":"america","path":"united-states/nevada","depth":2,"parent":"united-states","children":["boulder-city","carson-city","elko","fernley","las-vegas","north-las-vegas","pahrump","reno","spanish-springs","sparks","summerlin-south","sun-valley","sunrise-manor","whitney"]});
export const childModules = Object.freeze({"boulder-city":"./boulder-city/boulder-city.js","carson-city":"./carson-city/carson-city.js","elko":"./elko/elko.js","fernley":"./fernley/fernley.js","las-vegas":"./las-vegas/las-vegas.js","north-las-vegas":"./north-las-vegas/north-las-vegas.js","pahrump":"./pahrump/pahrump.js","reno":"./reno/reno.js","spanish-springs":"./spanish-springs/spanish-springs.js","sparks":"./sparks/sparks.js","summerlin-south":"./summerlin-south/summerlin-south.js","sun-valley":"./sun-valley/sun-valley.js","sunrise-manor":"./sunrise-manor/sunrise-manor.js","whitney":"./whitney/whitney.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
