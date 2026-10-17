// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saskatchewan","repository":"america","path":"canada/saskatchewan","depth":2,"parent":"canada","children":["arcola-east","confederation","core-neighbourhoods","dewdney-east","lakewood","lawson","moose-jaw","north-battleford","nutana-sector","prince-albert","regina","saskatoon","stonebridge","swift-current","university-heights","yorkton"]});
export const childModules = Object.freeze({"arcola-east":"./arcola-east/arcola-east.js","confederation":"./confederation/confederation.js","core-neighbourhoods":"./core-neighbourhoods/core-neighbourhoods.js","dewdney-east":"./dewdney-east/dewdney-east.js","lakewood":"./lakewood/lakewood.js","lawson":"./lawson/lawson.js","moose-jaw":"./moose-jaw/moose-jaw.js","north-battleford":"./north-battleford/north-battleford.js","nutana-sector":"./nutana-sector/nutana-sector.js","prince-albert":"./prince-albert/prince-albert.js","regina":"./regina/regina.js","saskatoon":"./saskatoon/saskatoon.js","stonebridge":"./stonebridge/stonebridge.js","swift-current":"./swift-current/swift-current.js","university-heights":"./university-heights/university-heights.js","yorkton":"./yorkton/yorkton.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
