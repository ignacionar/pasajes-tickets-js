const app = document.querySelector(".app");
app.innerHTML += `
<header id="header">
        <h1>RESERVA DE PASAJES</h1>
        </header>
        <h2 id="h2_1">1. Seleccione su pasaje</h2>
        <form action="" id="form1">
            <div id="label_div">
                <label for="origen" id="labelorigen">ORIGEN</label>
                <label for="destino" id="labeldestino">DESTINO</label>
                <label for="cantidad" id="labelcantidad">CANTIDAD DE PASAJES</label>
                <label for="fecha">FECHA</label>
                <label for="hora">HORARIO</label>
            </div>
                <div id="div_inputs">
                    <select name="" id="origen">
                        <option disabled selected value="">Seleccione el origen</option>
                    </select>
                    <select name="" id="destino">
                        <option disabled selected value="">Seleccione el destino</option>
                    </select>
                    <input type="number" name="" id="cantidad" min="1" placeholder="Ingrese cantidad">
                    <input type="date" name="" id="fecha" min="2021-11-08">
                    <select name="" id="hora" placeholder="">
                        <option disabled selected value="">Seleccione la hora</option>
                    </select>
                </div>
                <div id="label_div_error">
                    <label id="lab1"></label>
                    <label id="lab2"></label>
                    <label id="lab3"></label>
                    <label id="lab4"></label>
                    <label id="lab5"></label>
                    <label id="lab6"></label>
                </div>
                <button type="submit" id="btn">Confirmar Pasaje</button>
            </form>
            <h2 id="h2_2">2. Datos del pasajero</h2>
            <form id="form2">
                <div id="div_inputs_2">
                    <label id="labN">Nombre Completo</label>
                    <input type="text" placeholder="Nombre completo" class="input2" id="nombre">
                    <label id="labE">Email</label>
                    <input type="email" placeholder="Ingrese Email" class="input2" id="email"></input>
                    <label id="labC">Teléfono celular</label>
                    <input type="number" placeholder="Ingrese Celular" class="input2" id="celular"></input>
                    <label id="labD">DNI</label>
                    <input type="number" name="dni" class="input2" placeholder="Introduzca su DNI sin puntos ni comas" id="dni"/>
                    <button type="submit" id="btn2" class="input2">Ingresar datos</button>
                    <button id="btn3">Volver</button>
                </div>
            </form>
            <div id="pago_container">
                <h2 id="h2_3">3. Medios de pago</h2>
            <form id="form3">
                <div id="efectivo_div" class="pagos_div">
                    <label id="labEf">Efectivo</label>
                    <div>
                        <img src="/assets/efectivo.png" alt="">                        
                    </div>
                    <input type="radio" name="medio_de_pago" id="efectivo">
                </div>
                <div id="credito_div" class="pagos_div">
                    <label id="labCr">Crédito/Débito</label>
                    <div>
                        <img src="/assets/tarjetas.png" alt="">
                    </div>
                    <input type="radio" name="medio_de_pago" id="credito">
                    <div>
                        <button type="submit" id="btn4">Confirmar</button>
                        <button id="btn5">Volver</button>
                    </div>
                </div>
                <div id="transferencia_div" class="pagos_div">
                    <label id="labTr">Transferencia Bancaria</label>
                    <div>
                        <img src="/assets/banco.png" id="banco" alt="">
                    </div>
                    <input type="radio" name="medio_de_pago" id="transferencia">
                </div>
            </form>
        </div>
        <div id="confirmar">
            <div id="div_final">
                <h2 id="h2_4">4. Confimar y pagar</h2>
                <button id="btnFinal">Volver</button>
            </div>
            <div id="total">
            </div>
        </div>  
    
`;
const body = document.querySelector("body");

// PRIMER FORMULARIO
const h2_1 = document.getElementById("h2_1")
const form = document.getElementById("form1");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const cantidad = document.getElementById("cantidad");
const fecha = document.getElementById("fecha");
const hora = document.getElementById("hora");
const btn = document.getElementById("btn");

// PRIMER FORMULARIO - LABELS
const labelsOne = document.getElementById("label_div");
const lab1 = document.getElementById("lab1");
const lab2 = document.getElementById("lab2");
const lab3 = document.getElementById("lab3");
const lab4 = document.getElementById("lab4");

// PRIMER FORMULARIO - VARIABLES Y CONDICIONES

let origenValue;
let destinoValue;
let horaValue;
let cantidadValue;
let fechaValue;
let condition = 0;
let condition2 = 0;
let condition3 = 0;
let pasaje;

// SEGUNDO FORMULARIO
const h2_2 = document.getElementById("h2_2")
const form2 = document.getElementById("form2");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const celular = document.getElementById("celular");
const dni = document.getElementById("dni");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

// SEGUNDO FORMULARIO - LABELS
const labN = document.getElementById("labN");
const labE = document.getElementById("labE");
const labC = document.getElementById("labC");
const labD = document.getElementById("labD");

// SEGUNDO FORMULARIO - VARIABLES Y CONDICIONES
let condition4 = 0;
let datos;
form2.setAttribute("hidden", true);
h2_2.setAttribute("hidden", true);

// TERCER FORMULARIO 
const form3 = document.querySelector("#form3");
const efectivo = document.getElementById("efectivo");
const credito = document.getElementById("credito");
const transferencia = document.getElementById("transferencia");
const btn4 = document.getElementById("btn4");
const h2_3 = document.getElementById("h2_3");
const pago_container = document.getElementById("pago_container");
const btn5 = document.getElementById("btn5");
const labEf = document.getElementById("labEf");
const labCr = document.getElementById("labCr");
const labTr = document.getElementById("labTr");

// TERCER FORMULARIO - VARIABLES Y CONDICIONES
pago_container.setAttribute("hidden", true);
let metodo

// CONFIRMACION FINAL
const confirmar = document.getElementById("confirmar");
const total = document.getElementById("total");
const h2_4 = document.getElementById("h2_4");
const div_final = document.getElementById("div_final");
const btnFinal = document.getElementById("btnFinal");

// CONFIRMACIÓN FINAL - VARIABLES Y CONDICIONES 
h2_4.setAttribute("hidden", true);
div_final.setAttribute("hidden", true);

// FECHA
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear();
if (dd < 10) {
   dd = '0' + dd;
}
if (mm < 10) {
   mm = '0' + mm;
} 
today = yyyy + '-' + mm + '-' + dd;
fecha.setAttribute("min", today);

// OBJETOS
class Lugar {
    constructor(name) {
        this.name = name;
    }
    
}

class Pasaje {
    constructor(origenEl, destinoEl, cantidadEl, fechaEl, horarioEl) {
        this.origenEl = origenEl;
        this.destinoEl = destinoEl;
        this.cantidadEl = cantidadEl;
        this.fechaEl = fechaEl;
        this.horarioEl = horarioEl;
    }
}

class Datos {
    constructor(nombreEl, emailEl, celularEl, dniEl) {
        this.nombreEl = nombreEl;
        this.emailEl = emailEl;
        this.celularEl = celularEl;
        this.dniEl = dniEl;
    }
}

const cordoba = new Lugar ("Córdoba");
const buenosAires = new Lugar ("Buenos Aires");
const santiagoDelEstero = new Lugar ("Santiago del Estero");

origen.innerHTML += `
<option>${cordoba.name}</option>
<option>${buenosAires.name}</option>
<option>${santiagoDelEstero.name}</option>
`;


destino.innerHTML += `
<option>${cordoba.name}</option>
<option>${buenosAires.name}</option>
<option>${santiagoDelEstero.name}</option>
`;


hora.innerHTML += `
<option>8 am</option>
<option>10 am</option>
<option>12 pm</option>
`;

verificarOrigenDestino = () => {
    if (origenValue === undefined) {
        origen.className = ("error");
        lab1.innerText = "Ingrese origen."
        setTimeout(() => {
            lab1.innerText = ""
        }, 2000);
        
    } else {
        origen.classList.remove("error");
    }
    if (destinoValue === undefined) {
        destino.className = ("error");
        lab2.innerText = "Ingrese destino."
        setTimeout(() => {
            lab2.innerText = ""
        }, 2000);
        return;
    } else {
        destino.classList.remove("error");
        condition2 = 1
    }
}

verificarOrigenDestino2 = () => {
    if (origenValue === destinoValue) {
        origen.className = ("error");
        destino.className = ("error");
        lab6.innerText = "Ingrese origen y destino distintos."
        setTimeout(() => {
            lab6.innerText = ""
        }, 2000);
    } else {
        condition3++
    }
}

verificarCantidad = () => {
    if (condition == 0) {
        cantidad.className = ("error");
        lab3.innerText = "Ingrese cantidad."
        setTimeout(() => {
            lab3.innerText = ""
        }, 2000);
    } else {
        cantidad.classList.remove("error");
        condition3++
    }
}

verificarFecha = () => {
    if (fechaValue === undefined) {
        fecha.className = ("error");
        lab4.innerText = "Ingrese fecha."
        setTimeout(() => {
            lab4.innerText = ""
        }, 2000);
    } else {
        fecha.classList.remove("error");
        condition3++
    }
}

verificarHorario = () => {
    if (horaValue === undefined) {
        hora.className = ("error");
        lab5.innerText = "Ingrese horario."
        setTimeout(() => {
            lab5.innerText = ""
        }, 2000);
    } else {
        hora.classList.remove("error");
        condition3++
    }
}

confirmarPasaje = () => {
    if (condition3 >= 4) {
        form2.hidden = false;
        h2_2.hidden = false;
        origen.setAttribute("disabled", true);
        destino.setAttribute("disabled", true);
        cantidad.setAttribute("disabled", true);
        fecha.setAttribute("disabled", true);
        hora.setAttribute("disabled", true);
        labelsOne.style.color = "grey";
        btn.setAttribute("hidden", true);
        h2_1.style.animation = "mymove 2s 1";
        h2_1.style.color = "#48c24e";
        
        nombre.classList.remove("error2")
        email.classList.remove("error2")
        celular.classList.remove("error2")
        dni.classList.remove("error2")
    
    } else {
        return;
    };
    
};

const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

verificarNombre = (input, min, max) => {
    if (re.test(input.value)) {
        input.className = "error2";
        labN.className = "errorLab";
        labN.innerText = "Ingrese nombre válido";
    }
    else if (input.value.length < min) {
        input.className = "error2";
        labN.className = "errorLab";
        labN.innerText = "Ingrese nombre válido";
    } 
    else if (input.value.length > max) {
        input.className = "error2";
        labN.className = "errorLab";
        labN.innerText = "Ingrese nombre válido";
    } else {
      condition4++;
    }
    setTimeout(() => {
        input.classList.remove("error2");
        input.style.marginBottom = "5px";
        labN.classList.remove("errorLab");
        labN.innerText = "Nombre Completo";
    }, 2000);
};



verificarEmail = (input) => {
    if (re.test(input.value.trim())) {
        condition4++;
    } else {
        input.className = "error2";
        labE.className = "errorLab";
        labE.innerText = "Ingrese email válido";
        setTimeout(() => {
            input.classList.remove("error2");
            labE.classList.remove("errorLab");
            input.style.marginBottom = "5px";
            labE.innerText = "Email";
        }, 2000);
        return;
    }  
}

verificarCelular = (input, min) => {
    if (input.value.length != min) {
        input.className = "error2";
        labC.className = "errorLab";
        labC.innerText = "Ingrese celular válido";
        setTimeout(() => {
            input.classList.remove("error2");
            labC.classList.remove("errorLab");
            input.style.marginBottom = "5px";
            labC.innerText = "Teléfono celular";
        }, 2000);
    } else {
        condition4++;
    }
}

verificarDni = (input, min) => {
    if (input.value.length != min) {
        input.className = "error2";
        labD.className = "errorLab";
        labD.innerText = "Ingrese DNI válido"
        setTimeout(() => {
            input.classList.remove("error2");
            labD.classList.remove("errorLab");
            input.style.marginBottom = "5px";
            labD.innerText = "DNI";
        }, 2000);
    } else {
        condition4++;
    }
}

confirmarDatos = () => {
    if (condition4 >= 4) {
        datos = new Datos (nombreValue, emailValue, celularValue, dniValue);
        nombre.disabled = true;
        email.disabled = true;
        celular.disabled = true;
        dni.disabled = true;
        btn2.hidden = true;
        btn3.hidden = true;
        h2_2.style.animation = "mymove 2s 1";
        h2_2.style.color = "#48c24e";
        labE.style.color = "grey";
        labN.style.color = "grey";
        labC.style.color = "grey";
        labD.style.color = "grey";
        pago_container.hidden = false;
    }
    
}

// HANDLERS PRIMER FORMULARIO
origen.addEventListener("change", () => {
    origenValue = origen.value;
})
destino.addEventListener("change", () => {
    destinoValue = destino.value;
})
cantidad.addEventListener("change", () => {
    cantidadValue = cantidad.value;
    condition = 1;
})
fecha.addEventListener("change", () => {
    fechaValue = fecha.value;
})
hora.addEventListener("change", () => {
    horaValue = hora.value;
})

// HANDLERS SEGUNDO FORMULARIO
nombre.addEventListener("change", () => {
    nombreValue = nombre.value;
})
email.addEventListener("change", () => {
    emailValue = email.value;
})
celular.addEventListener("change", () => {
    celularValue = celular.value;
})
dni.addEventListener("change", () => {
    dniValue = dni.value;
})

efectivo.addEventListener("click", () => {
    metodo = "Efectivo";
})
credito.addEventListener("click", () => {
    metodo = "Crédito/Débito";
})
transferencia.addEventListener("click", () => {
    metodo = "Transferencia bancaria";
})

function init() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        verificarOrigenDestino();
        condition2 = 1 ? verificarOrigenDestino2() : "";
        verificarCantidad();
        verificarFecha();
        verificarHorario();
        
        pasaje = new Pasaje (origenValue, destinoValue, cantidadValue, fechaValue, horaValue);
        confirmarPasaje();
    });
    form2.addEventListener("submit", (e) => {
        e.preventDefault();
        verificarNombre(nombre, 8, 50);
        verificarEmail(email);
        verificarCelular(celular, 10);
        verificarDni(dni, 8);
        confirmarDatos();
    })
    btn3.addEventListener("click", function () {
        condition3 = 0;
        form2.hidden = true;
        h2_2.hidden = true;
        btn.hidden = false;
        origen.disabled = false;
        destino.disabled = false;
        cantidad.disabled = false;
        fecha.disabled = false;
        hora.disabled = false;
        btn.disabled = false;
        labelsOne.style.color = "black";
        h2_1.style.animation = "mymove 2s";
        h2_1.style.color = "black";
    })

    // HANDLERS TERCER FORMULARIO
    form3.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    btn4.addEventListener("click", () => {
        div_final.hidden = false;
        h2_4.hidden = false;
        btnFinal.hidden = false;
        efectivo.disabled = true;
        credito.disabled = true;
        transferencia.disabled = true;
        labEf.style.color = "grey"
        labCr.style.color = "grey"
        labTr.style.color = "grey"
        btn4.hidden = true;
        btn5.hidden = true;
        h2_3.style.animation = "mymove 2s 1";
        h2_3.style.color = "#48c24e";
        total.innerHTML = `
        <ul> <h3>PASAJE</h3> <li>Origen: ${pasaje.origenEl}</li> <li>Destino: ${pasaje.destinoEl}</li> <li>Cantidad de Pasajes: ${pasaje.cantidadEl}</li> <li>Fecha: ${pasaje.fechaEl}</li> <li>Hora: ${pasaje.horarioEl}</li> </ul>
        <ul> <h3>TOTAL</h3> <li>Medio de pago: ${metodo}</li> <li>Total: $ ${pasaje.cantidadEl * 1000}</li> <a href="">Confirmar y pagar</a> </ul>
        <ul> <h3>DATOS</h3> <li>Nombre: ${datos.nombreEl}</li> <li>Email: ${datos.emailEl}</li> <li>Celular: ${datos.celularEl}</li> <li>DNI: ${datos.dniEl}</li> </ul>
        `;
    })
    
    btn5.addEventListener("click", () => {
        pago_container.hidden = true;
        nombre.disabled = false;
        email.disabled = false;
        celular.disabled = false;
        dni.disabled = false;
        btn2.hidden = false;
        btn3.hidden = false;
        h2_2.style.color = "black";
        labE.style.color = "black";
        labN.style.color = "black";
        labC.style.color = "black";
        labD.style.color = "black";
    });

    btnFinal.addEventListener("click", () => {
        total.innerHTML = "";
        h2_3.style.color = "black";
        h2_4.hidden = true;
        labEf.style.color = "black";
        labCr.style.color = "black";
        labTr.style.color = "black";
        btn4.hidden = false;
        btn5.hidden = false;
        efectivo.disabled = false;
        credito.disabled = false;
        transferencia.disabled = false;
        div_final.hidden = true;
    })
};

init();