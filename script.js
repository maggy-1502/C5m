// 1. CONFIGURACIÓN: Coloca aquí el año, mes y día exacto de su aniversario.
// NOTA: Los meses en JavaScript empiezan en 0 (Enero=0, Febrero=1, Marzo=2, Abril=3, Mayo=4, Junio=5...)
// Ejemplo: Si empezaron el 15 de Febrero de 2026, dejas: (2026, 1, 15)
const fechaInicio = new Date(2026, 1, 12, 20, 0, 0);

// TEXTO DE LA CARTA INYECTADO DIRECTAMENTE EN EL CEREBRO
const textoAmor = `Hola, mi amorcito. ❤️

Hoy cumplimos cinco meses juntos, y aunque parezca poco tiempo, siento que has llenado mi vida de una manera que nunca imaginé. Quería hacerte esta pequeña sorpresa para recordarte lo muchísimo que te amo y lo agradecida que estoy con Dios por haberte puesto en mi camino.

Desde que llegaste a mi vida, todo ha ido mejor. Me has dado una paz y una felicidad que jamás había sentido. Contigo todo se siente tan bonito, tan sano, tan tranquilo y tan perfecto, que a veces todavía me cuesta creer la suerte que tengo de tenerte a mi lado.

Gracias por cada risa, por cada abrazo, por cada momento, por escucharme, por cuidarme y por quererme de una forma tan bonita. Gracias por hacerme sentir amada todos los días y por demostrarme que el amor puede ser sincero, respetuoso y lleno de paz.

Eres el hombre más lindo que he conocido, no solo por lo guapo que eres, sino por el corazón tan hermoso que tienes. Eres bueno, noble, paciente y tienes una manera de hacer que cualquier día sea especial con solo estar conmigo.

No sabes cuánto deseo que la vida siempre te regale cosas buenas, porque te las mereces todas y aún más. Mi mayor deseo es verte feliz, verte cumplir tus sueños y poder estar a tu lado para celebrar cada uno de ellos.

Quiero seguir escribiendo esta historia contigo durante muchísimo tiempo. Si Dios nos lo permite, quiero caminar a tu lado por el resto de mi vida, amarte mientras Él me preste vida y seguir eligiéndote todos los días, una y otra vez.

Eres el amor de mi vida y no imagino un futuro en el que no estés tú. No sé qué sería de mí sin ti, porque contigo encontré un hogar, un mejor amigo y el amor más bonito que he conocido.

Le pido a Dios que siempre nos cuide, que bendiga nuestra relación, que nos ayude a superar cualquier dificultad y que nos permita celebrar muchos meses, años y toda una vida juntos.

Gracias por existen, por llegar a mi vida y por convertir estos cinco meses en los más felices que he vivido.

Te amo con todo mi corazón.

Felices cinco meses, mi niño de ojos bonitos. ❤️`;

let corriendo = false;
function iniciarExperienciaAmor() {
    if (corriendo) return;
    corriendo = true;

    const audio = document.getElementById('musica');
    const btnMusica = document.getElementById('btn-musica');
    if (audio) {
        audio.play().then(() => {
            if (btnMusica) btnMusica.innerText = "⏸";
        }).catch(e => console.log("Audio retenido por el navegador"));
    }

    document.getElementById('icono-central').style.display = 'none';
    const txt1 = document.getElementById('txt1');
    const txt2 = document.getElementById('txt2');
    const bienvenida = document.getElementById('bienvenida');

    txt1.style.opacity = 1;
    setTimeout(() => { txt1.style.opacity = 0; }, 2500);
    setTimeout(() => { txt2.style.opacity = 1; }, 3300);
    setTimeout(() => { txt2.style.opacity = 0; }, 5800);
    setTimeout(() => {
        bienvenida.style.opacity = 0;
        setTimeout(() => {
            bienvenida.style.display = 'none';
            iniciarElementosAmbiente();
        }, 1000);
    }, 6600);
}

function iniciarElementosAmbiente() {
    const capaEstrellas = document.getElementById('capa-estrellas');
    if (capaEstrellas) {
        for (let i = 0; i < 50; i++) {
            let estrella = document.createElement('div');
            estrella.className = 'estrella';
            estrella.style.width = estrella.style.height = Math.random() * 3 + 'px';
            estrella.style.top = Math.random() * 100 + '%';
            estrella.style.left = Math.random() * 100 + '%';
            estrella.style.animationDelay = Math.random() * 2 + 's';
            capaEstrellas.appendChild(estrella);
        }
    }
    setInterval(() => {
        let corazon = document.createElement('div');
        corazon.className = 'corazon-flotante';
        corazon.innerText = '❤️';
        corazon.style.left = Math.random() * 90 + 'vw';
        corazon.style.fontSize = Math.random() * 15 + 10 + 'px';
        corazon.style.animationDuration = Math.random() * 4 + 4 + 's';
        let b = document.getElementById('scroll-area');
        if (b) b.appendChild(corazon);
        setTimeout(() => corazon.remove(), 8000);
    }, 900);
}

function toggleMusica() {
    const audio = document.getElementById('musica');
    const btnMusica = document.getElementById('btn-musica');
    if (audio && audio.paused) {
        audio.play().catch(e => console.log(e));
        if (btnMusica) btnMusica.innerText = "⏸";
    } else if (audio) {
        audio.pause();
        if (btnMusica) btnMusica.innerText = "▶";
    }
}

function toggleModoNoche() {
    document.body.classList.toggle('modo-noche-activo');
    const btn = document.getElementById('btn-noche');
    if (btn) btn.innerText = document.body.classList.contains('modo-noche-activo') ? "☀️" : "🌙";
}

let cartaAbierta = false;
function abrirCarta() {
    if (cartaAbierta) return;
    cartaAbierta = true;
    if (navigator.vibrate) navigator.vibrate(40);

    document.getElementById('sello-carta').style.transform = 'scale(0)';
    document.getElementById('sobre').classList.add('abierto');

    setTimeout(() => {
        const contenedorTexto = document.getElementById('texto-tipeado');
        contenedorTexto.innerHTML = ""; 

        const caracteres = Array.from(textoAmor);
        let i = 0;

        function escribir() {
            if (i < caracteres.length) {
                contenedorTexto.innerHTML += caracteres[i];
                let actual = caracteres[i];
                i++;
                
                let delay = 35;
                if (actual === '.' || actual === ',') delay = 250;
                
                setTimeout(escribir, delay);
            } else {
                document.getElementById('firma-carta').style.display = 'block';
                document.getElementById('btn-cerrar-carta').style.display = 'block'; // Muestra el botón aquí de forma segura
                document.getElementById('seccion-contador').style.opacity = 1;
                document.getElementById('seccion-galeria').style.opacity = 1;
                document.getElementById('seccion-final').style.opacity = 1;
                iniciarContador();
            }
        }
        escribir();
    }, 1600);
}

function cerrarCarta() {
    document.getElementById('sobre').classList.remove('abierto');
}

function iniciarContador() {
    setInterval(() => {
        const ahora = new Date();
        let diferencia = ahora - fechaInicio;
        let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        document.getElementById('c-dias').innerText = dias < 10 ? '0' + dias : dias;
        document.getElementById('c-horas').innerText = horas < 10 ? '0' + horas : horas;
    }, 1000);
}

let lluviaActivada = false;
window.addEventListener('scroll', () => {
    const seccionFinal = document.getElementById('seccion-final');
    if (seccionFinal) {
        const posicion = seccionFinal.getBoundingClientRect().top;
        const pantallaAltura = window.innerHeight;
        if (posicion < pantallaAltura && !lluviaActivada && cartaAbierta) {
            lluviaActivada = true;
            activarLluviaFinal();
        }
    }
});

function activarLluviaFinal() {
    setInterval(() => {
        let gota = document.createElement('div');
        gota.className = 'gota-corazon';
        gota.innerText = ['❤️', '💖', '✨', '💕'][Math.floor(Math.random() * 4)];
        gota.style.left = Math.random() * 100 + 'vw';
        gota.style.fontSize = Math.random() * 20 + 15 + 'px';
        gota.style.animationName = 'caidaCorazones';
        document.body.appendChild(gota);
        setTimeout(() => gota.remove(), 3500);
    }, 200);
}

document.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
        let touch = e.touches[0];
        let chispa = document.createElement('div');
        chispa.className = 'chispa';
        chispa.style.top = touch.pageY + 'px';
        chispa.style.left = touch.pageX + 'px';
        document.body.appendChild(chispa);
        setTimeout(() => chispa.remove(), 500);
    }
}, { passive: true });
