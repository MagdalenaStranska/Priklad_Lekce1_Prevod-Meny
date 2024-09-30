// 1.Založte si novou prázdnou stránku s JavaScriptovým programem.

// 2.Dejme tomu, že si jako programátoři vyděláváte 20 euro na hodinu. Uložte tuto hodnotu do proměnné wageInEur.

// 3.Spočítejte, kolik je vaše hodinová mzda v českých korunách, jestliže kurz eura je 24.55 Kč. Výsledek zaokrouhlete na celé koruny a uložte do proměnné :var[wageInCzk].

// 4.Vypište obsah proměnné :var[wageInCzk] do webové stránky tak, aby na stránce byl nadpis h1 s obsahem:

// Mzda v korunách: 532 Kč

let wageInEur = 20
let kurzEuro = 24.55
var wageInCzk = Math.round(wageInEur * kurzEuro)

document.body.innerHTML += "<h1>Mzda v korunách: " + wageInCzk + " Kč<h1>"

