var absurd = Absurd(),
    styles = require('./styles');

/**
 * addSheet()
 * Simple utility for adding styleSheet to HEAD.
 */
var addSheet = function(sheet) {
  document.getElementsByTagName("head")[0].appendChild(sheet)
}

/**
 * srcStyle()
 * Utility function for sourcing external styles dynamically.
 */
var srcStyle = function(url) {
  if (document.createStyleSheet != null) {
    return document.createStyleSheet(url);
  } else {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", url);
    addSheet(fileref);
  }
};

/**
 * Add ourlocal styles to the HEAD via Absurd.JS.
 */
var css = absurd.add(styles).compile(function() {}, { minify: true } );
var sheet = document.createElement("style");
sheet.innerHTML = css;
addSheet(sheet);


