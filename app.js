const routines = [
  {id:'A', title:'Rutina A — Espalda/cifosis', goal:'Extensión torácica, control escapular y fuerza de tracción.', exercises:[
    ['Movilidad torácica en foam roller','Movilidad','2','8-10','45-60 s','Mejorar extensión dorsal y reducir rigidez torácica.','Extiende suavemente la zona dorsal sin arquear la zona lumbar.','No forzar cuello ni hiperextender la región lumbar.','movilidad torácica foam roller técnica'],
    ['Wall slides','Activación','2','10-12','45 s','Mejorar movilidad escapulotorácica y control del hombro.','Mantén costillas bajas y barbilla ligeramente recogida.','No compensar con lordosis lumbar.','wall slides shoulder mobility technique'],
    ['Remo sentado en polea','Fuerza','3','10-12','90 s','Fortalecer dorsales, romboides y trapecio medio.','Tira con codos hacia atrás, pecho estable y cuello neutro.','No adelantar cabeza ni balancear tronco.','seated cable row proper form'],
    ['Jalón al pecho agarre neutro','Fuerza','3','10-12','90 s','Fortalecer dorsal ancho con menor estrés cervical.','Lleva la barra hacia la parte alta del pecho sin inclinarte en exceso.','Evitar jalón tras nuca.','neutral grip lat pulldown proper form'],
    ['Face pull','Fuerza escapular','3','12-15','60-90 s','Activar deltoides posterior, rotadores externos y trapecio medio/inferior.','Tira hacia la cara separando las manos al final.','No extender cuello ni arquear lumbar.','face pull proper form'],
    ['Reverse fly en máquina o polea','Fuerza escapular','3','12-15','60 s','Reforzar hombro posterior y musculatura interescapular.','Movimiento controlado, escápulas estables.','No subir hombros hacia orejas.','reverse fly machine proper form'],
    ['Dead bug','Core anti-extensión','3','8-10/lado','60 s','Mejorar control lumbo-pélvico y reducir compensación en hiperlordosis.','Mantén la zona lumbar estable contra el suelo.','No arquear la espalda.','dead bug exercise proper form'],
    ['Plancha lateral','Core lateral','2-3','20-35 s/lado','60 s','Fortalecer oblicuos y control pélvico.','Alinea hombro, cadera y tobillo.','No dejar caer la pelvis.','side plank proper form']
  ]},
  {id:'B', title:'Rutina B — Glúteo/core/hiperlordosis', goal:'Fortalecer glúteo e isquiosurales, mejorar control lumbo-pélvico.', exercises:[
    ['Glute bridge','Activación glútea','2','12-15','45 s','Activar glúteo mayor sin sobrecargar la región lumbar.','Sube pelvis contrayendo glúteos, costillas bajas.','No hiperextender lumbar al final.','glute bridge proper form'],
    ['Hip thrust','Fuerza glútea','3','8-12','90 s','Desarrollar extensión de cadera con énfasis en glúteo.','Mentón recogido, pelvis en ligera retroversión al final.','No convertirlo en extensión lumbar.','hip thrust proper form'],
    ['Peso muerto rumano ligero','Bisagra de cadera','3','8-10','90 s','Trabajar isquiosurales y patrón de bisagra.','Cadera atrás, columna neutra, carga moderada.','No redondear espalda ni buscar rango excesivo.','romanian deadlift proper form'],
    ['Step-up','Pierna/glúteo','3','8-10/lado','75 s','Mejorar fuerza unilateral y estabilidad pélvica.','Empuja con la pierna de arriba y controla la bajada.','No impulsarte con la pierna de abajo.','step up exercise proper form'],
    ['Pallof press','Core anti-rotación','3','10-12/lado','60 s','Mejorar estabilidad del tronco.','Empuja la polea/banda sin rotar el cuerpo.','No arquear lumbar ni girar pelvis.','pallof press proper form'],
    ['Bird dog','Control motor','3','8-10/lado','45-60 s','Entrenar estabilidad lumbar y coordinación.','Extiende brazo y pierna sin mover pelvis.','No elevar pierna por encima de la línea del tronco.','bird dog exercise proper form']
  ]},
  {id:'C', title:'Rutina C — Hipertrofia segura', goal:'Entrenar estética sin reforzar hombros adelantados ni hiperlordosis.', exercises:[
    ['Remo con apoyo de pecho','Fuerza espalda','3','8-12','90 s','Hipertrofia de espalda minimizando compensación lumbar.','Pecho apoyado y cuello neutro.','No tirar con cuello ni lumbar.','chest supported row proper form'],
    ['Press inclinado con mancuernas','Empuje controlado','3','8-10','90 s','Trabajar pectoral/hombro anterior con control postural.','Escápulas estables, rango cómodo.','No arquear en exceso la espalda.','incline dumbbell press proper form'],
    ['Jalón agarre neutro','Tracción','3','10-12','90 s','Fortalecer dorsal y estabilidad escapular.','Controla la fase excéntrica.','No llevar la barra tras nuca.','neutral grip lat pulldown proper form'],
    ['Elevaciones laterales','Hombro','3','12-15','60 s','Trabajar deltoides medio con baja carga axial.','Sube hasta altura de hombro con control.','No encoger hombros.','lateral raise proper form'],
    ['Tríceps en polea','Brazo','3','10-15','60 s','Trabajo accesorio de tríceps sin carga axial.','Codos estables junto al cuerpo.','No adelantar cabeza.','triceps pushdown proper form'],
    ['Curl bíceps con mancuernas','Brazo','3','10-12','60 s','Trabajo accesorio de bíceps.','Tronco estable y muñeca neutra.','No balancear espalda.','dumbbell biceps curl proper form'],
    ['Dead bug','Core anti-extensión','2-3','8-10/lado','60 s','Cerrar la sesión reforzando control lumbar.','Mantén pelvis estable.','No arquear lumbar.','dead bug exercise proper form']
  ]},
  {id:'R', title:'Rutina rápida — 20 minutos', goal:'Versión breve para días con poco tiempo.', exercises:[
    ['Wall slides','Movilidad','2','10','30 s','Activar control escapular.','Costillas bajas y cuello neutro.','No arquear lumbar.','wall slides shoulder mobility technique'],
    ['Remo sentado','Fuerza','3','10-12','60 s','Priorizar espalda y postura.','Tira con codos hacia atrás.','No adelantar cabeza.','seated cable row proper form'],
    ['Face pull','Fuerza escapular','2','12-15','45 s','Activar hombro posterior y rotadores externos.','Finaliza con manos separadas.','No elevar hombros.','face pull proper form'],
    ['Hip thrust','Glúteo','3','8-12','60 s','Reforzar glúteo para control pélvico.','Bloqueo final con glúteo, no lumbar.','No hiperextender espalda.','hip thrust proper form'],
    ['Dead bug','Core','2','8/lado','45 s','Control lumbo-pélvico.','Espalda estable.','No arquear lumbar.','dead bug exercise proper form']
  ]}
];

let currentRoutine = null;
let currentIndex = 0;
let completed = new Set();
const $ = id => document.getElementById(id);
function show(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); $(id).classList.add('active'); }
function videoUrl(q){ return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`; }
function renderHome(){
  $('routineCards').innerHTML = routines.map(r=>`<button class="card" onclick="startRoutine('${r.id}')"><h3>${r.title}</h3><p>${r.goal}</p><p>${r.exercises.length} ejercicios</p></button>`).join('');
}
function startRoutine(id){ currentRoutine=routines.find(r=>r.id===id); currentIndex=0; completed=new Set(); renderExercise(); show('routine'); }
function renderExercise(){
  const e=currentRoutine.exercises[currentIndex];
  $('routineTitle').textContent=currentRoutine.title; $('routineGoal').textContent=currentRoutine.goal;
  $('stepCounter').textContent=`Ejercicio ${currentIndex+1} de ${currentRoutine.exercises.length}`;
  $('exerciseName').textContent=e[0]; $('exerciseBlock').textContent=e[1]; $('exerciseSets').textContent=e[2]; $('exerciseReps').textContent=e[3]; $('exerciseRest').textContent=e[4]; $('exerciseObjective').textContent=e[5]; $('exerciseTechnique').textContent=e[6]; $('exerciseAvoid').textContent=e[7];
  $('exerciseVideo').href=videoUrl(e[8]);
  $('progressBar').style.width=`${(completed.size/currentRoutine.exercises.length)*100}%`;
  $('prevBtn').disabled=currentIndex===0;
  $('doneBtn').textContent=currentIndex===currentRoutine.exercises.length-1?'Finalizar rutina':'Hecho y siguiente';
}
function next(){ completed.add(currentIndex); if(currentIndex<currentRoutine.exercises.length-1){ currentIndex++; renderExercise(); } else { $('progressBar').style.width='100%'; show('finish'); } }
function prev(){ if(currentIndex>0){ currentIndex--; renderExercise(); }}
function saveSession(ev){ ev.preventDefault(); const record={date:new Date().toLocaleString('es-ES'), routine:currentRoutine.title, lumbarPain:$('lumbarPain').value, neckPain:$('neckPain').value, rpe:$('rpe').value, fatigue:$('fatigue').value, notes:$('notes').value}; const all=JSON.parse(localStorage.getItem('sessions')||'[]'); all.unshift(record); localStorage.setItem('sessions',JSON.stringify(all)); ev.target.reset(); renderHistory(); show('history'); }
function renderHistory(){ const all=JSON.parse(localStorage.getItem('sessions')||'[]'); $('historyList').innerHTML=all.length?all.map(r=>`<div class="history-item"><strong>${r.date}</strong><br>${r.routine}<br>Lumbar: ${r.lumbarPain}/10 · Cervical: ${r.neckPain}/10 · Esfuerzo: ${r.rpe}/10 · Fatiga: ${r.fatigue}/10<p>${r.notes||''}</p></div>`).join(''):'<p class="muted">Aún no hay sesiones registradas.</p>'; }
$('backHomeBtn').onclick=()=>show('home'); $('backHomeFromHistoryBtn').onclick=()=>show('home'); $('backRoutineBtn').onclick=()=>show('routine'); $('showHistoryBtn').onclick=()=>{renderHistory();show('history')}; $('prevBtn').onclick=prev; $('doneBtn').onclick=next; $('sessionForm').onsubmit=saveSession; $('clearHistoryBtn').onclick=()=>{ if(confirm('¿Borrar todo el historial local?')){localStorage.removeItem('sessions');renderHistory();}};
if('serviceWorker' in navigator){ window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{})); }
renderHome();
