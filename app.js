const routines = [
  {
    id: 'A',
    type: 'Gimnasio',
    title: 'Rutina A — Tirón/postura + core',
    goal: 'Énfasis en cifosis dorsal: movilidad torácica, control escapular, tracción y cierre con core/glúteo.',
    exercises: [
      ['Movilidad torácica en foam roller','Movilidad torácica','2','8-10','45-60 s','Mejorar extensión dorsal y reducir rigidez torácica.','Extiende suavemente la zona dorsal manteniendo abdomen activo y costillas bajas.','No forzar el cuello ni compensar arqueando la zona lumbar.','thoracic extension foam roller proper form'],
      ['Wall slides / wall angels','Activación escapular','2','10-12','45 s','Mejorar movilidad escapulotorácica y control de hombros adelantados.','Mantén barbilla ligeramente recogida, costillas abajo y pelvis neutra.','No arquear la zona lumbar para intentar subir más los brazos.','Wall Angel to improve thoracic spine mobility'],
      ['Remo sentado en polea','Fuerza de tracción','3','10-12','90 s','Fortalecer dorsales, romboides y trapecio medio.','Tira con los codos hacia atrás, pecho estable y cuello neutro.','No adelantar la cabeza ni balancear el tronco.','seated cable row proper form'],
      ['Jalón al pecho agarre neutro','Tracción vertical','3','10-12','90 s','Fortalecer dorsal ancho y control escapular con menor estrés cervical.','Lleva el agarre hacia la parte alta del pecho sin inclinarte en exceso.','Evitar jalón tras nuca y no sacar la cabeza hacia delante.','neutral grip lat pulldown proper form'],
      ['Face pull','Fuerza escapular','3','12-15','60-90 s','Activar deltoides posterior, rotadores externos y trapecio medio/inferior.','Tira hacia la cara separando las manos al final del movimiento.','No extender el cuello ni arquear la zona lumbar.','face pull proper form'],
      ['Reverse fly en máquina o polea','Hombro posterior','2-3','12-15','60 s','Reforzar hombro posterior y musculatura interescapular.','Movimiento controlado, escápulas estables y cuello relajado.','No subir los hombros hacia las orejas.','reverse fly machine proper form'],
      ['Dead bug','Core anti-extensión','3','8-10/lado','60 s','Mejorar control lumbo-pélvico y reducir compensación en hiperlordosis.','Mantén la zona lumbar estable contra el suelo, respirando de forma controlada.','No arquear la espalda al extender pierna o brazo.','dead bug exercise proper form'],
      ['Glute bridge','Activación glútea','2','12-15','45 s','Cerrar con glúteo mayor para apoyar el control pélvico.','Sube la pelvis contrayendo glúteos, sin empujar desde la zona lumbar.','No hiperextender la espalda al final.','glute bridge proper form'],
      ['Estiramiento de pectoral en pared','Descarga final','2','30 s/lado','30 s','Reducir tensión anterior que favorece hombros adelantados.','Apoya antebrazo en pared y gira suavemente el tronco.','No provocar dolor anterior de hombro.','doorway pec stretch proper form']
    ]
  },
  {
    id: 'B',
    type: 'Gimnasio',
    title: 'Rutina B — Pierna/glúteo + postura',
    goal: 'Énfasis en hiperlordosis: glúteo, bisagra de cadera y core, manteniendo una dosis de movilidad torácica y escápulas.',
    exercises: [
      ['Cat-camel suave + movilidad torácica','Movilidad','1-2','8-10','30-45 s','Preparar columna sin buscar rangos extremos.','Mueve de forma lenta, diferenciando dorsal y lumbar.','No hacer rebotes ni forzar dolor lumbar.','cat camel thoracic mobility exercise'],
      ['Wall slides','Activación escapular','2','10','45 s','Mantener estímulo postural de escápulas y caja torácica.','Costillas bajas, abdomen activo y cuello neutro.','No compensar con hiperlordosis lumbar.','wall slides shoulder mobility technique'],
      ['Face pull ligero','Activación escapular','2','12-15','45-60 s','Activar trapecio medio/inferior y rotadores externos antes del trabajo de pierna.','Carga ligera, control y sensación interescapular.','No convertirlo en ejercicio pesado ni encoger hombros.','face pull light proper form'],
      ['Hip thrust','Fuerza glútea','3','8-12','90 s','Desarrollar extensión de cadera con énfasis en glúteo mayor.','Mentón recogido, pelvis en ligera retroversión al final y costillas bajas.','No convertirlo en extensión lumbar.','hip thrust proper form'],
      ['Peso muerto rumano ligero/moderado','Bisagra de cadera','3','8-10','90 s','Trabajar isquiosurales y patrón de bisagra sin carga excesiva.','Cadera atrás, columna neutra y rango controlado.','No redondear espalda ni buscar rango excesivo.','romanian deadlift proper form'],
      ['Step-up o prensa controlada','Pierna/glúteo','3','8-10/lado','75-90 s','Mejorar fuerza unilateral y estabilidad pélvica.','Empuja con la pierna de arriba y controla la bajada.','No impulsarte con la pierna de abajo ni colapsar rodilla.','step up exercise proper form'],
      ['Pallof press','Core anti-rotación','3','10-12/lado','60 s','Mejorar estabilidad del tronco y control lumbo-pélvico.','Empuja la polea/banda sin rotar el cuerpo.','No arquear lumbar ni girar la pelvis.','pallof press proper form'],
      ['Bird dog','Control motor','3','8-10/lado','45-60 s','Entrenar estabilidad lumbar y coordinación cruzada.','Extiende brazo y pierna sin mover pelvis; pierna alineada con el tronco.','No elevar la pierna por encima de la línea del tronco.','bird dog exercise proper form'],
      ['Estiramiento de flexores de cadera','Descarga final','2','30 s/lado','30 s','Reducir tensión anterior de cadera asociada a anteversión pélvica/hiperlordosis.','Retroversión pélvica suave y glúteo contraído del lado estirado.','No arquear la zona lumbar.','hip flexor stretch posterior pelvic tilt']
    ]
  },
  {
    id: 'C',
    type: 'Gimnasio',
    title: 'Rutina C — Hipertrofia segura equilibrada',
    goal: 'Entrenar estética con equilibrio entre empuje, tracción, hombro posterior y core, evitando reforzar hombros adelantados.',
    exercises: [
      ['Extensión torácica + apertura pectoral','Movilidad','2','8-10','45 s','Preparar la caja torácica y disminuir rigidez anterior antes de cargas.','Extiende dorsal suavemente y abre pectoral sin dolor.','No compensar con hiperlordosis lumbar.','thoracic extension pec opener mobility'],
      ['Band pull-aparts','Activación escapular','2','12-15','45 s','Activar musculatura interescapular antes del torso.','Banda a la altura del pecho, escápulas atrás y abajo.','No elevar hombros ni adelantar cabeza.','band pull apart proper form'],
      ['Remo con apoyo de pecho','Fuerza espalda','3','8-12','90 s','Hipertrofia de espalda minimizando compensación lumbar.','Pecho apoyado, cuello neutro y codos hacia atrás.','No tirar con cuello ni lumbar.','chest supported row proper form'],
      ['Press inclinado con mancuernas','Empuje controlado','3','8-10','90 s','Trabajar pectoral/hombro anterior con control postural.','Escápulas estables, rango cómodo y abdomen activo.','No arquear en exceso la espalda ni adelantar cabeza.','incline dumbbell press proper form'],
      ['Jalón agarre neutro','Tracción vertical','3','10-12','90 s','Compensar el empuje con tracción vertical y control escapular.','Controla la fase excéntrica y evita balanceo.','No llevar la barra tras nuca.','neutral grip lat pulldown proper form'],
      ['Elevaciones laterales','Hombro medio','3','12-15','60 s','Trabajar deltoides medio con baja carga axial.','Sube hasta altura de hombro con control.','No encoger hombros ni arquear lumbar.','lateral raise proper form'],
      ['Reverse fly','Hombro posterior','2-3','12-15','60 s','Aumentar el volumen de hombro posterior para equilibrar el patrón de empuje.','Movimiento lento y controlado.','No usar impulso ni elevar hombros.','reverse fly proper form'],
      ['Tríceps en polea','Brazo','2-3','10-15','60 s','Trabajo accesorio de tríceps sin carga axial.','Codos estables junto al cuerpo.','No adelantar cabeza.','triceps pushdown proper form'],
      ['Curl bíceps con mancuernas','Brazo','2-3','10-12','60 s','Trabajo accesorio de bíceps.','Tronco estable y muñeca neutra.','No balancear espalda.','dumbbell biceps curl proper form'],
      ['Dead bug o bird dog','Core final','2-3','8-10/lado','60 s','Cerrar con control lumbo-pélvico.','Mantén pelvis estable y respiración controlada.','No arquear lumbar.','dead bug bird dog proper form']
    ]
  },
  {
    id: 'R',
    type: 'Gimnasio',
    title: 'Rutina rápida — 20 minutos',
    goal: 'Versión breve e integrada para días con poco tiempo: movilidad, tracción, glúteo y core.',
    exercises: [
      ['Wall slides','Movilidad/escápula','2','10','30 s','Activar control escapular y movilidad torácica.','Costillas bajas y cuello neutro.','No arquear lumbar.','wall slides shoulder mobility technique'],
      ['Remo sentado','Fuerza de tracción','3','10-12','60 s','Priorizar espalda y postura.','Tira con codos hacia atrás.','No adelantar cabeza.','seated cable row proper form'],
      ['Face pull','Fuerza escapular','2','12-15','45 s','Activar hombro posterior y rotadores externos.','Finaliza con manos separadas.','No elevar hombros.','face pull proper form'],
      ['Hip thrust','Glúteo','3','8-12','60 s','Reforzar glúteo para control pélvico.','Bloqueo final con glúteo, no lumbar.','No hiperextender espalda.','hip thrust proper form'],
      ['Dead bug','Core anti-extensión','2','8/lado','45 s','Control lumbo-pélvico.','Espalda estable.','No arquear lumbar.','dead bug exercise proper form']
    ]
  },
  {
    id: 'H',
    type: 'Casa',
    title: 'Extra casa — Cifosis + hiperlordosis',
    goal: 'Rutina corta para hacer en casa 3-5 días/semana: movilidad torácica, escápulas, core y control pélvico.',
    exercises: [
      ['Respiración con costillas bajas y pelvis neutra','Preparación','1-2','5 respiraciones lentas','30 s','Tomar conciencia de caja torácica y pelvis antes de moverse.','Inspira por nariz y espira largo, llevando costillas hacia abajo sin encoger hombros.','No forzar retroversión ni bloquear la respiración.','rib cage breathing posterior pelvic tilt exercise'],
      ['Wall angels / wall slides','Movilidad torácica y hombro','2','8-12','45 s','Mejorar movilidad escapulotorácica y reducir hombros adelantados.','Mantén abdomen activo y costillas bajas; sube solo hasta donde no compenses.','No arquear la zona lumbar ni elevar hombros.','Wall Angel to improve thoracic spine mobility'],
      ['Extensión torácica en toalla enrollada','Movilidad torácica','2','8-10','45 s','Favorecer extensión torácica sin material de gimnasio.','Coloca una toalla enrollada bajo la zona dorsal y extiende suavemente.','No colocarla en zona lumbar ni forzar cervicales.','thoracic extension towel exercise'],
      ['Scapular setting','Control escapular','2','10-12','30-45 s','Activar trapecio medio/inferior y mejorar posición escapular.','Lleva escápulas suavemente atrás y abajo sin rigidez excesiva.','No sacar pecho arqueando la lumbar ni juntar escápulas con dolor.','scapular setting shoulder strengthening'],
      ['Band pull-aparts o apertura con banda','Escápulas','2-3','12-15','45 s','Fortalecer musculatura interescapular y hombro posterior.','Banda a la altura del pecho, movimiento controlado.','No elevar hombros ni adelantar cabeza.','band pull apart proper form posture'],
      ['Prone Y-T-W en el suelo o banco','Trapecio inferior/medio','2','6-8 cada letra','45-60 s','Mejorar fuerza de extensores torácicos y estabilizadores escapulares.','Movimientos pequeños, cuello neutro y sin dolor.','No levantar demasiado los brazos ni arquear lumbar.','prone Y T W exercise proper form'],
      ['Dead bug','Core anti-extensión','3','8-10/lado','45-60 s','Controlar hiperlordosis mediante estabilidad lumbo-pélvica.','Zona lumbar estable y respiración controlada.','No arquear la espalda al extender pierna.','dead bug exercise proper form'],
      ['Bird dog','Control motor lumbar','3','8-10/lado','45-60 s','Entrenar control de pelvis y columna con patrón cruzado.','Extiende brazo y pierna sin rotar la pelvis.','No levantar la pierna por encima del tronco.','Bird Dog The Core Strength and Control Exercise'],
      ['Glute bridge','Glúteo y pelvis','2-3','12-15','45-60 s','Activar glúteo mayor para apoyar el control de la pelvis.','Sube con glúteos y termina con pelvis neutra/ligera retroversión.','No hiperextender la zona lumbar al final.','glute bridge posterior pelvic tilt proper form'],
      ['Estiramiento de pectoral en puerta','Descarga anterior','2','30 s/lado','30 s','Disminuir rigidez anterior que favorece cifosis funcional y hombros adelantados.','Mantén cuello relajado y respiración lenta.','No provocar dolor anterior de hombro.','doorway pec stretch proper form'],
      ['Estiramiento de flexores de cadera','Descarga lumbo-pélvica','2','30 s/lado','30 s','Reducir tensión de psoas/recto femoral asociada a anteversión pélvica.','Glúteo contraído del lado atrasado y pelvis en ligera retroversión.','No arquear la zona lumbar.','hip flexor stretch posterior pelvic tilt']
    ]
  }
];

let currentRoutine = null;
let currentIndex = 0;
let completed = new Set();
const $ = id => document.getElementById(id);

function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}
function videoUrl(q){ return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`; }

function renderHome(){
  const gym = routines.filter(r => r.type === 'Gimnasio');
  const home = routines.filter(r => r.type === 'Casa');
  $('routineCards').innerHTML = `
    <h3 class="section-title">Gimnasio</h3>
    ${gym.map(cardTemplate).join('')}
    <h3 class="section-title">Extra para casa</h3>
    ${home.map(cardTemplate).join('')}
  `;
}

function cardTemplate(r){
  return `<button class="card" onclick="startRoutine('${r.id}')">
    <span class="pill">${r.type}</span>
    <h3>${r.title}</h3>
    <p>${r.goal}</p>
    <p>${r.exercises.length} ejercicios</p>
  </button>`;
}

function startRoutine(id){
  currentRoutine = routines.find(r=>r.id===id);
  currentIndex = 0;
  completed = new Set();
  renderExercise();
  show('routine');
}

function renderExercise(){
  const e = currentRoutine.exercises[currentIndex];
  $('routineTitle').textContent = currentRoutine.title;
  $('routineGoal').textContent = currentRoutine.goal;
  $('stepCounter').textContent = `Ejercicio ${currentIndex+1} de ${currentRoutine.exercises.length}`;
  $('exerciseName').textContent = e[0];
  $('exerciseBlock').textContent = e[1];
  $('exerciseSets').textContent = e[2];
  $('exerciseReps').textContent = e[3];
  $('exerciseRest').textContent = e[4];
  $('exerciseObjective').textContent = e[5];
  $('exerciseTechnique').textContent = e[6];
  $('exerciseAvoid').textContent = e[7];
  $('exerciseVideo').href = videoUrl(e[8]);
  $('progressBar').style.width = `${(completed.size/currentRoutine.exercises.length)*100}%`;
  $('prevBtn').disabled = currentIndex === 0;
  $('doneBtn').textContent = currentIndex === currentRoutine.exercises.length-1 ? 'Finalizar rutina' : 'Hecho y siguiente';
}

function next(){
  completed.add(currentIndex);
  if(currentIndex < currentRoutine.exercises.length-1){
    currentIndex++;
    renderExercise();
  } else {
    $('progressBar').style.width='100%';
    show('finish');
  }
}
function prev(){
  if(currentIndex > 0){ currentIndex--; renderExercise(); }
}

function saveSession(ev){
  ev.preventDefault();
  const record = {
    date: new Date().toLocaleString('es-ES'),
    routine: currentRoutine.title,
    lumbarPain: $('lumbarPain').value,
    neckPain: $('neckPain').value,
    rpe: $('rpe').value,
    fatigue: $('fatigue').value,
    notes: $('notes').value
  };
  const all = JSON.parse(localStorage.getItem('sessions') || '[]');
  all.unshift(record);
  localStorage.setItem('sessions', JSON.stringify(all));
  ev.target.reset();
  renderHistory();
  show('history');
}

function renderHistory(){
  const all = JSON.parse(localStorage.getItem('sessions') || '[]');
  $('historyList').innerHTML = all.length ? all.map(r=>`<div class="history-item"><strong>${r.date}</strong><br>${r.routine}<br>Lumbar: ${r.lumbarPain}/10 · Cervical: ${r.neckPain}/10 · Esfuerzo: ${r.rpe}/10 · Fatiga: ${r.fatigue}/10<p>${r.notes || ''}</p></div>`).join('') : '<p class="muted">Aún no hay sesiones registradas.</p>';
}

$('backHomeBtn').onclick = ()=>show('home');
$('backHomeFromHistoryBtn').onclick = ()=>show('home');
$('backRoutineBtn').onclick = ()=>show('routine');
$('showHistoryBtn').onclick = ()=>{ renderHistory(); show('history'); };
$('prevBtn').onclick = prev;
$('doneBtn').onclick = next;
$('sessionForm').onsubmit = saveSession;
$('clearHistoryBtn').onclick = ()=>{ if(confirm('¿Borrar todo el historial local?')){ localStorage.removeItem('sessions'); renderHistory(); } };

if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
}
renderHome();
