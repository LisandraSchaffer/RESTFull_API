//4. Problema: Tienes una tienda donde si un cliente es VIP, obtiene un descuento del 20% en su compra. Si no es VIP, paga el precio completo, para ello:
//Declara una variable esVIP que puede ser true o false (según si el cliente es VIP o no).
//Declara una variable precio con un valor numérico (por ejemplo, 100).
//Si esVIP es true, aplica un 20% de descuento al precio.
//Muestra en la consola el precio final que debe pagar el cliente.

let esVIP = true; 
let precio = 100;

if (esVIP) {
    let descuento = precio * 0.20; 
    precio = precio - descuento; 
}

console.log("El precio final que debe pagar el cliente es: " + precio);