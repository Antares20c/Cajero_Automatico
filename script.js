
// Datos de las cuentas 
var cuentas = [
  { nombre: "Miguel", contraseña: "Miguel98", saldo: 800 },
  { nombre: "Javier", contraseña: "Jvr1234", saldo: 750 },
  { nombre: "Fernanda", contraseña: "Frnda585", saldo: 850 }
];

var cuentaSeleccionada = null;

//Verificar la contraseña
function ingresar() {
  var cuenta = document.getElementById("cuentas").value;
  var contraseña = document.getElementById("password").value;

  if (contraseña === cuentas[cuenta - 1].contraseña) {
    cuentaSeleccionada = cuenta;
    document.getElementById("passwordDiv").style.display = "none";
    document.getElementById("opcionesDiv").style.display = "block";
  } else {
    alert("Contraseña incorrecta. Inténtalo nuevamente.");
  }
}

//Consultar el saldo
function consultarSaldo() {
  var saldo = cuentas[cuentaSeleccionada - 1].saldo;
  document.getElementById("resultadoDiv").innerHTML = "Saldo actual: " + saldo + " pesos.";
}

//Ingresar un monto
function ingresarMonto() {
  var monto = prompt("Ingresa en monto a  ingresar");
  monto = parseFloat(monto);

  if (!isNaN(monto) && monto > 0) {
    var saldoActual = cuentas[cuentaSeleccionada - 1].saldo;
    var nuevoSaldo = saldoActual + monto;

    if (nuevoSaldo > 990) {
      alert("El saldo Máximo es $990 ")
    } else {
      cuentas[cuentaSeleccionada - 1].saldo = nuevoSaldo;
      document.getElementById("resultadoDiv").innerHTML = "Monto ingresado:" + monto + "pesos.<br>";
      document.getElementById("resultadoDiv").innerHTML = "Nuevo saldo:" + nuevoSaldo + " pesos.";
    }
  } else {
    alert("Monto inválido. Intentalo Nuevamente")
  }

}



//Retirar un monto
function retirarMonto() {
  var monto = prompt("Ingresa el monto a retirar:");
  monto = parseFloat(monto);

  if (!isNaN(monto) && monto > 0) {
    var saldoActual = cuentas[cuentaSeleccionada - 1].saldo;

    if (monto <= saldoActual) {
      var nuevoSaldo = saldoActual - monto;
      cuentas[cuentaSeleccionada - 1].saldo = nuevoSaldo;

      document.getElementById("resultadoDiv").innerHTML = "Monto retirado: " + monto + " pesos.<br>";
      document.getElementById("resultadoDiv").innerHTML += "Nuevo saldo: " + nuevoSaldo + " pesos.";
    } else {
      alert("Saldo insuficiente. Inténtalo nuevamente.");
    }
  } else {
    alert("Monto inválido. Inténtalo nuevamente.");
  }
}
