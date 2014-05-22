var absurd = Absurd();
var css = absurd.add({
    body: {
      margin: 0,
      padding: "100px"
    }
}).compile(function() {}, { minify: true } );

var sheet = document.createElement("style");
sheet.innerHTML = css;
document.getElementsByTagName('head')[0].appendChild(sheet);


