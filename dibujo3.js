var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var xi, yf;
var lineas2 = 15;
var n = 0;
var yi2, xf2;
var xi2, yf2;
var yi3, xf3;

for(n = 0; n < lineas2; n++)
{
  yi2 = 10 * n;
  xf2 = 140 - (10 * n);
  xi2 = 10 * n;
  yf2 = 160 + (10 * n);
  xf3 = 160 + (10 * n);
  yi3 = 300 - (10 * n);
  dibujarlinea("blue", 150, yi2, xf2, 150);
  dibujarlinea("blue", xi2, 150, 150, yf2);
  dibujarlinea("blue", 150, yi2, xf3, 150);
  dibujarlinea("blue", 150, yi3, xf3, 150);
}

for(l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  xi = 10 * l;
  yf = 10 * (l + 1);
  dibujarlinea("blue", 0, yi, xf, 300);
  dibujarlinea("blue", xi, 0, 300, yf);
  console.log("linea " + 1);
}

for(l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 300 - ((l + 1) * 10);
  xi = 300 - (l * 10);
  yf = 10 * l;
  dibujarlinea("blue", 300, xf, yi, 300);
  dibujarlinea("blue", xi, 0, 0, yf);
}

dibujarlinea("blue", 1, 1, 1, 299);
dibujarlinea("blue", 1, 299, 299, 299);
dibujarlinea("blue", 1, 1, 299, 1);
dibujarlinea("blue", 299, 1, 299, 299);
dibujarlinea("blue", 150, 0, 150, 300);
dibujarlinea("blue", 0, 150, 300, 150);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
