!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.dush=e()}(this,function(){function n(){var n=Object.create(null),e={all:n,use:function(n){return n(e)||e},on:function(t,o,r){function u(){u.called||(e.off(t,u),o.apply(o,arguments),u.called=!0)}var i=n[t]||(n[t]=[]),f=r?u:o;return f.sourceString=o.toString(),i.push(f),e},once:function(n,t){return e.on(n,t,!0),e},off:function(t,o){if(o&&n[t]){var r=o.toString();n[t]=n[t].filter(function(n){return n.sourceString!==r})}else n[t]=[];return e},emit:function(t){if("*"!==t){var o=[].slice.call(arguments);(n[t]||[]).map(function(n){n.apply(n,o.slice(1))}),(n["*"]||[]).map(function(n){n.apply(n,o)})}return e}};return e}return n});
//# sourceMappingURL=dush.umd.js.map
