// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"canada","repository":"america","path":"canada","depth":1,"parent":"","children":["alberta","british-columbia","manitoba","new-brunswick","newfoundland-and-labrador","northwest-territories","nova-scotia","ontario","prince-edward-island","quebec","sainte-catherine","sainte-catherine-a","saskatchewan","vanier","vanier-a","yukon"]});
export const childModules = Object.freeze({"alberta":"./alberta/alberta.js","british-columbia":"./british-columbia/british-columbia.js","manitoba":"./manitoba/manitoba.js","new-brunswick":"./new-brunswick/new-brunswick.js","newfoundland-and-labrador":"./newfoundland-and-labrador/newfoundland-and-labrador.js","northwest-territories":"./northwest-territories/northwest-territories.js","nova-scotia":"./nova-scotia/nova-scotia.js","ontario":"./ontario/ontario.js","prince-edward-island":"./prince-edward-island/prince-edward-island.js","quebec":"./quebec/quebec.js","sainte-catherine":"./sainte-catherine/sainte-catherine.js","sainte-catherine-a":"./sainte-catherine-a/sainte-catherine-a.js","saskatchewan":"./saskatchewan/saskatchewan.js","vanier":"./vanier/vanier.js","vanier-a":"./vanier-a/vanier-a.js","yukon":"./yukon/yukon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
