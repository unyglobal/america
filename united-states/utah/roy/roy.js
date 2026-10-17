// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"roy","repository":"america","path":"united-states/utah/roy","depth":3,"parent":"united-states/utah","children":["brownscott-manor","crest-view-acres","english-manor","gilene","linda-vista","municipal-acres","purser","rosewood-estates","roy-park-addition","royset-park-addition-and-annex","thompson-gardens"]});
export const childModules = Object.freeze({"brownscott-manor":"./brownscott-manor/brownscott-manor.js","crest-view-acres":"./crest-view-acres/crest-view-acres.js","english-manor":"./english-manor/english-manor.js","gilene":"./gilene/gilene.js","linda-vista":"./linda-vista/linda-vista.js","municipal-acres":"./municipal-acres/municipal-acres.js","purser":"./purser/purser.js","rosewood-estates":"./rosewood-estates/rosewood-estates.js","roy-park-addition":"./roy-park-addition/roy-park-addition.js","royset-park-addition-and-annex":"./royset-park-addition-and-annex/royset-park-addition-and-annex.js","thompson-gardens":"./thompson-gardens/thompson-gardens.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
