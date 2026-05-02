const routines = [
  {
    "id": "A",
    "type": "Gimnasio",
    "title": "Rutina A — Journée 1 integrada: Full body + postura",
    "goal": "Incluye todos los ejercicios de la Journée 1 del programa original y añade control lumbo-pélvico/descarga para cifosis e hiperlordosis.",
    "exercises": [
      [
        "Calentamiento general",
        "Preparación",
        "1",
        "6 min cardio + movilidad articular",
        "—",
        "Preparar sistema cardiovascular y articulaciones antes de la carga.",
        "6 min de cardio suave en máquina a elección; después moviliza hombros, cuello, pelvis, rodillas y tobillos. Sube la carga progresivamente solo en el primer ejercicio de fuerza.",
        "No empezar con carga alta ni hacer movilidad balística del cuello.",
        "general warm up cardio joint mobility gym"
      ],
      [
        "Seated Cable Row / Remo sentado en polea",
        "Fuerza de tracción",
        "4",
        "15",
        "1m30",
        "Fortalecer dorsales, romboides y trapecio medio; ejercicio clave para compensar cifosis/hombros adelantados.",
        "Espalda recta, pecho abierto. Lleva el agarre triangular al ombligo. Extiende completamente los brazos en la bajada y mantén ligera flexión de rodillas.",
        "No balancear el tronco, no adelantar la cabeza y no encoger hombros hacia las orejas.",
        "https://www.youtube.com/watch?v=GZbfZ033f74"
      ],
      [
        "Développé couché Smith Machine / Press banca en Smith",
        "Empuje controlado",
        "4",
        "12",
        "1m30",
        "Trabajo de pectoral y tríceps manteniendo control escapular; se conserva del programa original, pero con adaptación postural.",
        "Coloca el banco para que la barra baje hacia el medio-bajo del pectoral. Mantén escápulas retraídas durante todo el movimiento y desciende controlado hasta el pecho o hasta rango cómodo.",
        "Evita arco lumbar excesivo; abdomen activo, pies firmes y cuello neutro. No rebotes la barra.",
        "https://www.youtube.com/watch?v=z_r6hDOYtO0"
      ],
      [
        "Leg Extension",
        "Cuádriceps",
        "4",
        "12",
        "1m30",
        "Fortalecer cuádriceps de forma analítica, útil para equilibrar trabajo de pierna sin mucha carga axial.",
        "Ajusta el respaldo para que la parte posterior de la rodilla quede pegada al asiento. Coloca los pies detrás de los rodillos. Extiende las piernas al máximo controlado con puntas hacia arriba.",
        "No golpear las placas, no bloquear agresivamente la rodilla y no despegar la pelvis del asiento.",
        "leg extension machine proper form video"
      ],
      [
        "Lying Bench Cable Face Pull",
        "Escápulas/hombro posterior",
        "4",
        "15",
        "1m30",
        "Reforzar deltoides posterior, rotadores externos y trapecio medio/inferior; muy pertinente para cifosis postural.",
        "Coloca un banco frente a la polea con la polea alta. Usa cuerda y tira hacia la cara separando las manos al final.",
        "No hiperextender cuello ni arquear lumbar; carga moderada y movimiento limpio.",
        "lying bench cable face pull proper form"
      ],
      [
        "Dips Machine",
        "Empuje accesorio",
        "4",
        "15",
        "1m30",
        "Trabajo de tríceps/pectoral incluido en el programa original; mantener con prudencia por posible tensión anterior de hombro.",
        "Empuja las barras con brazos extendidos antes de sentarte. No pegues todo el cuerpo al respaldo; inclínate ligeramente hacia delante. Sube hasta formar aproximadamente 90° de codo.",
        "No bajes más si hay dolor anterior de hombro. Mantén escápulas estables y cuello neutro.",
        "dips machine proper form"
      ],
      [
        "Dead bug",
        "Core anti-extensión",
        "2-3",
        "8-10/lado",
        "45-60 s",
        "Añadido correctivo para controlar hiperlordosis y mejorar estabilidad lumbo-pélvica.",
        "Mantén zona lumbar estable, costillas bajas y respiración controlada mientras alternas brazo/pierna.",
        "No arquear la espalda al extender la pierna.",
        "dead bug exercise proper form"
      ],
      [
        "Estiramiento de pectoral en pared/puerta",
        "Descarga anterior",
        "2",
        "30 s/lado",
        "30 s",
        "Reducir tensión anterior tras press/dips y favorecer mejor alineación escapular.",
        "Antebrazo apoyado en pared o marco de puerta; gira suavemente el tronco y respira.",
        "No provocar dolor anterior de hombro ni forzar el cuello.",
        "doorway pec stretch proper form"
      ],
      [
        "Vélo Elliptique / Elíptica",
        "Cardio final",
        "1",
        "15 min",
        "—",
        "Trabajo aeróbico final de bajo impacto; puede ayudar a tolerancia general y gasto energético.",
        "Usa elíptica con brazos móviles si está disponible. Mantén postura erguida, mirada al frente y abdomen activo.",
        "No colapsar hombros hacia delante ni arquear la zona lumbar por fatiga.",
        "elliptical machine proper form posture"
      ]
    ]
  },
  {
    "id": "B",
    "type": "Gimnasio",
    "title": "Rutina B — Journée 2 integrada: pierna, dorsal y core",
    "goal": "Incluye todos los ejercicios de la Journée 2 y añade movilidad/escápulas para mantener equilibrio postural durante el día de pierna-empuje.",
    "exercises": [
      [
        "Calentamiento general",
        "Preparación",
        "1",
        "6 min cardio + movilidad articular",
        "—",
        "Preparar articulaciones y activar antes de la prensa/pull-down.",
        "6 min de cardio suave y movilidad de hombros, cuello, pelvis, rodillas y tobillos. Sube carga progresivamente solo en el primer ejercicio de fuerza del día.",
        "No iniciar la leg press con carga alta sin series de aproximación.",
        "general warm up cardio joint mobility gym"
      ],
      [
        "Wall slides / Wall angels",
        "Movilidad-activación",
        "2",
        "10",
        "45 s",
        "Añadido para que el día B no pierda trabajo torácico/escapular.",
        "Costillas bajas, abdomen activo, pelvis neutra y cuello largo. Sube brazos solo hasta donde no compenses.",
        "No arquear lumbar ni sacar la cabeza hacia delante.",
        "Wall Angel to improve thoracic spine mobility"
      ],
      [
        "Leg Press",
        "Fuerza pierna",
        "4",
        "12",
        "1m30",
        "Ejercicio principal de tren inferior; trabaja cuádriceps, glúteos e isquiosurales según colocación y profundidad.",
        "Pies a anchura de pelvis, en zona media de la plataforma, puntas ligeramente hacia fuera. Baja hasta donde puedas sin que el glúteo se levante del asiento. Aumenta carga progresivamente por series si la técnica se mantiene.",
        "No extiendas completamente/bloquees rodillas y no dejes despegar la pelvis.",
        "https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/leg-press/vid-20084684"
      ],
      [
        "Lat Pulldown Supination / Jalón supino",
        "Tracción vertical",
        "4",
        "15",
        "1m30",
        "Fortalecer dorsal ancho y flexores del codo con patrón de tracción vertical.",
        "Manos con palmas hacia ti, no demasiado separadas. Pecho abierto y lleva la barra a la parte alta del pecho. Estira bien los brazos al subir.",
        "No llevar barra tras nuca, no balancear el tronco y no adelantar la cabeza.",
        "lat pulldown supinated grip proper form"
      ],
      [
        "Push Smith Machine / Flexiones inclinadas en Smith",
        "Empuje con core",
        "4",
        "12-15",
        "1m15",
        "Empuje relativamente seguro y modulable; cuanto más alta la barra, más fácil.",
        "Coloca la barra a la altura adecuada. Manos a anchura de hombros. Contrae abdomen y glúteos, manteniendo cuerpo en bloque.",
        "No hundir la zona lumbar ni adelantar cabeza; baja solo hasta rango controlado.",
        "smith machine incline push up proper form"
      ],
      [
        "Military Press prise neutre / Press militar neutro",
        "Empuje vertical controlado",
        "4",
        "12",
        "1m30",
        "Trabajo de hombro con agarre neutro; útil si se ejecuta sin compensación lumbar.",
        "Mancuernas a nivel de hombros, codos hacia delante. Eleva por encima de la cabeza y vuelve controlado. Mantén glúteos y abdomen activos.",
        "Con hiperlordosis: no arquear la zona lumbar; reduce carga o hazlo sentado con respaldo si compensa.",
        "neutral grip dumbbell shoulder press proper form"
      ],
      [
        "Planche / Plancha",
        "Core anti-extensión",
        "4",
        "30-40 s",
        "1 min",
        "Ejercicio del programa original muy útil para control lumbo-pélvico.",
        "Glúteos al mismo nivel que hombros, abdomen contraído y respiración mantenida.",
        "No hundir la zona lumbar ni elevar excesivamente la pelvis.",
        "plank exercise proper form no arch back"
      ],
      [
        "Bird dog",
        "Control motor lumbar",
        "2-3",
        "8-10/lado",
        "45-60 s",
        "Añadido para reforzar estabilidad lumbopélvica sin carga axial.",
        "Extiende brazo y pierna contrarios sin rotar pelvis. Mantén cuello neutro.",
        "No levantar la pierna por encima del tronco ni arquear lumbar.",
        "Bird Dog The Core Strength and Control Exercise"
      ],
      [
        "Rameur / Remoergómetro",
        "Cardio final",
        "1",
        "10 min",
        "—",
        "Cardio final con patrón de tracción y extensión de cadera. Objetivo original: aproximarse progresivamente a 2 km.",
        "Secuencia: piernas, cadera, brazos; vuelve brazos, cadera, piernas. Mantén tronco largo y ritmo controlado.",
        "No redondear espalda de forma repetida ni tirar solo con brazos.",
        "rowing machine proper form beginner"
      ]
    ]
  },
  {
    "id": "C",
    "type": "Gimnasio",
    "title": "Rutina C — Journée 3 integrada: torso, posterior y cardio",
    "goal": "Incluye todos los ejercicios de la Journée 3 y añade compensación escapular/core para proteger hombro y zona lumbar.",
    "exercises": [
      [
        "Calentamiento general",
        "Preparación",
        "1",
        "6 min cardio + movilidad articular",
        "—",
        "Preparar hombros, cadera y columna antes de press con mancuernas y tirage TRX.",
        "6 min de cardio suave y movilidad de hombros, cuello, pelvis, rodillas y tobillos. Progresión de carga solo en el primer ejercicio fuerte.",
        "No empezar press pesado sin series de aproximación.",
        "general warm up cardio joint mobility gym"
      ],
      [
        "Bench Press Dumbbell / Press banca con mancuernas",
        "Empuje horizontal",
        "4",
        "12",
        "1m30",
        "Trabajo de pectoral con mayor libertad escapular que barra, incluido en programa original.",
        "Retrae escápulas y abre pecho. Coloca brazos como en press clásico y sube mancuernas sobre pectorales. Los codos pueden bajar ligeramente por debajo del busto si no hay molestia.",
        "El PDF menciona crear arco: en tu caso evita arco lumbar excesivo; costillas controladas y glúteos activos.",
        "dumbbell bench press proper form"
      ],
      [
        "Tirage TRX / Remo en TRX",
        "Tracción horizontal",
        "4",
        "15",
        "1m15",
        "Compensa el press y refuerza musculatura interescapular.",
        "Cuerpo alineado, pecho abierto. Lleva las manos hacia costillas/ombligo. Extiende brazos en la bajada y mantén ligera flexión de rodillas.",
        "No colapsar hombros ni adelantar cabeza; ajusta inclinación para controlar dificultad.",
        "TRX row proper form"
      ],
      [
        "Seated Leg Curl",
        "Isquiosurales",
        "4",
        "12",
        "1m30",
        "Fortalecer isquiosurales, importante para equilibrio posterior de pierna y control pélvico.",
        "Ajusta respaldo para que el pad quede en la base del gemelo. Piernas bien bloqueadas dentro de la máquina. Lleva el pad hacia atrás controlando el movimiento.",
        "No despegar cadera del asiento ni hacer rebotes.",
        "seated leg curl proper form"
      ],
      [
        "Elevation Menton / Remo al mentón modificado",
        "Hombro-trapecio con precaución",
        "4",
        "12",
        "1m30",
        "Ejercicio del programa original; puede ser útil para deltoides/trapecio, pero debe modificarse para proteger hombro.",
        "Usa carga ligera-moderada, agarre algo más ancho si es posible, codos sin subir excesivamente. Detén la barra al nivel bajo-medio del pecho, como indica el programa.",
        "Si hay dolor o pinzamiento, sustitúyelo por elevaciones laterales o face pull. Evita codos muy altos y muñecas forzadas.",
        "https://www.youtube.com/watch?v=nwkLwMRHMQo"
      ],
      [
        "Face pull o reverse fly ligero",
        "Compensación escapular",
        "2-3",
        "12-15",
        "60 s",
        "Añadido para equilibrar el trabajo de press y upright row con hombro posterior/rotadores externos.",
        "Movimiento lento; escápulas atrás-abajo sin rigidez.",
        "No encoger hombros ni arquear lumbar.",
        "face pull reverse fly proper form"
      ],
      [
        "Biceps Curl Poulie / Curl bíceps en polea",
        "Brazo",
        "4",
        "12",
        "1m30",
        "Trabajo accesorio de bíceps del programa original.",
        "Polea lo más baja posible. Usa barra recta o Z. Brazos pegados al torso. Flexiona codo sin balanceo.",
        "No hacer swings con tronco ni adelantar hombros.",
        "cable biceps curl proper form"
      ],
      [
        "Dead bug",
        "Core anti-extensión",
        "2-3",
        "8-10/lado",
        "45-60 s",
        "Añadido para cerrar con control lumbar tras press, TRX y cardio inclinado.",
        "Costillas bajas, pelvis estable, movimiento alterno de brazo/pierna.",
        "No arquear lumbar al extender la pierna.",
        "dead bug exercise proper form"
      ],
      [
        "Tapis de course / Cinta inclinada",
        "Cardio final",
        "1",
        "15 min",
        "—",
        "Cardio final según programa original: marcha rápida inclinada.",
        "Velocidad 5-6 km/h; pendiente 5-6%. Mantén postura erguida, mirada al frente y zancada cómoda.",
        "No agarrarte fuerte a la cinta ni caminar con hiperlordosis marcada por fatiga.",
        "incline treadmill walking proper form"
      ]
    ]
  },
  {
    "id": "R",
    "type": "Gimnasio",
    "title": "Rutina rápida — 20 minutos",
    "goal": "Versión breve e integrada para días con poco tiempo: movilidad, tracción, glúteo y core.",
    "exercises": [
      [
        "Wall slides",
        "Movilidad/escápula",
        "2",
        "10",
        "30 s",
        "Activar control escapular y movilidad torácica.",
        "Costillas bajas y cuello neutro.",
        "No arquear lumbar.",
        "wall slides shoulder mobility technique"
      ],
      [
        "Remo sentado",
        "Fuerza de tracción",
        "3",
        "10-12",
        "60 s",
        "Priorizar espalda y postura.",
        "Tira con codos hacia atrás.",
        "No adelantar cabeza.",
        "seated cable row proper form"
      ],
      [
        "Face pull",
        "Fuerza escapular",
        "2",
        "12-15",
        "45 s",
        "Activar hombro posterior y rotadores externos.",
        "Finaliza con manos separadas.",
        "No elevar hombros.",
        "face pull proper form"
      ],
      [
        "Hip thrust",
        "Glúteo",
        "3",
        "8-12",
        "60 s",
        "Reforzar glúteo para control pélvico.",
        "Bloqueo final con glúteo, no lumbar.",
        "No hiperextender espalda.",
        "hip thrust proper form"
      ],
      [
        "Dead bug",
        "Core anti-extensión",
        "2",
        "8/lado",
        "45 s",
        "Control lumbo-pélvico.",
        "Espalda estable.",
        "No arquear lumbar.",
        "dead bug exercise proper form"
      ]
    ]
  },
  {
    "id": "H",
    "type": "Casa",
    "title": "Extra casa — Cifosis + hiperlordosis",
    "goal": "Rutina corta para casa 3-5 días/semana: movilidad torácica, escápulas, core y control pélvico.",
    "exercises": [
      [
        "Respiración con costillas bajas y pelvis neutra",
        "Preparación",
        "1-2",
        "5 respiraciones lentas",
        "30 s",
        "Tomar conciencia de caja torácica y pelvis antes de moverse.",
        "Inspira por nariz y espira largo, llevando costillas hacia abajo sin encoger hombros.",
        "No forzar retroversión ni bloquear respiración.",
        "rib cage breathing posterior pelvic tilt exercise"
      ],
      [
        "Wall angels / wall slides",
        "Movilidad torácica y hombro",
        "2",
        "8-12",
        "45 s",
        "Mejorar movilidad escapulotorácica y reducir hombros adelantados.",
        "Mantén abdomen activo y costillas bajas; sube solo hasta donde no compenses.",
        "No arquear lumbar ni elevar hombros.",
        "Wall Angel to improve thoracic spine mobility"
      ],
      [
        "Extensión torácica en toalla enrollada",
        "Movilidad torácica",
        "2",
        "8-10",
        "45 s",
        "Favorecer extensión torácica sin material de gimnasio.",
        "Toalla enrollada bajo zona dorsal y extensión suave.",
        "No colocarla en zona lumbar ni forzar cervicales.",
        "thoracic extension towel exercise"
      ],
      [
        "Scapular setting",
        "Control escapular",
        "2",
        "10-12",
        "30-45 s",
        "Activar trapecio medio/inferior y mejorar posición escapular.",
        "Escápulas suavemente atrás y abajo sin rigidez excesiva.",
        "No sacar pecho arqueando lumbar ni juntar escápulas con dolor.",
        "scapular setting shoulder strengthening"
      ],
      [
        "Band pull-aparts",
        "Escápulas",
        "2-3",
        "12-15",
        "45 s",
        "Fortalecer musculatura interescapular y hombro posterior.",
        "Banda a altura de pecho, movimiento controlado.",
        "No elevar hombros ni adelantar cabeza.",
        "band pull apart proper form posture"
      ],
      [
        "Prone Y-T-W",
        "Trapecio inferior/medio",
        "2",
        "6-8 cada letra",
        "45-60 s",
        "Mejorar extensores torácicos y estabilizadores escapulares.",
        "Movimientos pequeños, cuello neutro y sin dolor.",
        "No levantar demasiado brazos ni arquear lumbar.",
        "prone Y T W exercise proper form"
      ],
      [
        "Dead bug",
        "Core anti-extensión",
        "3",
        "8-10/lado",
        "45-60 s",
        "Controlar hiperlordosis mediante estabilidad lumbo-pélvica.",
        "Zona lumbar estable y respiración controlada.",
        "No arquear espalda al extender pierna.",
        "dead bug exercise proper form"
      ],
      [
        "Bird dog",
        "Control motor lumbar",
        "3",
        "8-10/lado",
        "45-60 s",
        "Entrenar control de pelvis y columna con patrón cruzado.",
        "Extiende brazo y pierna sin rotar pelvis.",
        "No levantar pierna por encima del tronco.",
        "Bird Dog The Core Strength and Control Exercise"
      ],
      [
        "Glute bridge",
        "Glúteo y pelvis",
        "2-3",
        "12-15",
        "45-60 s",
        "Activar glúteo mayor para apoyar control pélvico.",
        "Sube con glúteos y termina con pelvis neutra/ligera retroversión.",
        "No hiperextender lumbar al final.",
        "glute bridge posterior pelvic tilt proper form"
      ],
      [
        "Estiramiento de pectoral en puerta",
        "Descarga anterior",
        "2",
        "30 s/lado",
        "30 s",
        "Disminuir rigidez anterior que favorece cifosis funcional y hombros adelantados.",
        "Cuello relajado y respiración lenta.",
        "No provocar dolor anterior de hombro.",
        "doorway pec stretch proper form"
      ],
      [
        "Estiramiento de flexores de cadera",
        "Descarga lumbo-pélvica",
        "2",
        "30 s/lado",
        "30 s",
        "Reducir tensión de psoas/recto femoral asociada a anteversión pélvica.",
        "Glúteo contraído del lado atrasado y pelvis en ligera retroversión.",
        "No arquear lumbar.",
        "hip flexor stretch posterior pelvic tilt"
      ]
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
function videoUrl(q){
  if(/^https?:\/\//i.test(q)) return q;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
}

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
