let idP = 0;
let idF = 0;
let idT = 0;
let projetoArray = [];
let frameArray = [];
let taskArray = [];
let inputP = document.getElementById('inputProjeto');
let projetoPrint = document.getElementById('projeto');
let taskPrint = document.getElementById('task');

// Funções Print

function print(lista, indexP, indexF, local){
    local.innerHTML="";
    let filter = [];
    lista.forEach((e) => {
        if (indexP === null) {filter.push(e)}
        else if (indexP === e.indiceP && indexF === null) {filter.push(e.valor)}
        else if (indexP === e.indiceP && indexF === e.indiceF) {filter.push(e.valor)}
    });        
    filter.forEach((e) => {local.innerHTML += e});
};

// Call funções adicionar

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {

    let a = e.target.name;
    let b = e.target.id;
    let c = parseFloat(b[a.length]);
    let d = document.getElementsByClassName('frameSelected').item(0);
    let indiceP, indiceF;
        
    frameArray.forEach((elemento) => {
        if (d = elemento.valor) {
            indiceP = elemento.indiceP;
            indiceF = elemento.indiceF;
        }
    });
    
        if(a === 'inputProjeto') {adicionarProjeto()}
        else if(a === 'inputFrame') {adicionarFrame(c)}
        else if(a === 'inputTask') {adicionarTarefa(indiceP, indiceF)}
        }
    });    

// Funções show/select

function projetoInputShow() {
    
    let = titleBtn = document.getElementById('titleBtn');
    let = title = document.getElementById('pTitle');

    titleBtn.setAttribute('class', 'hiden');
    inputProjeto.setAttribute('class', 'inputProjeto');
    title.setAttribute('class', 'titleClicked');
    inputP.focus();

    inputP.addEventListener('focusout', () => {
        titleBtn.setAttribute('class', 'icon');
        inputP.setAttribute('class', 'hiden');
        title.setAttribute('class', 'title');
    });

};

function projetoSelect(indice) {
    let projeto = document.getElementById('projeto'+indice);
    let img = document.getElementById('projectImg'+indice);  
    let framePrint = document.getElementById('frame'+indice);
    let task = document.getElementById('task');
    let titulo = document.getElementById('titulo');
    let cross = document.getElementById('cross2');

    projetoPrint.childNodes.forEach((e) => {
        e.setAttribute('class', 'projeto');
        e.children[1].setAttribute('src', 'imagens/menu-down.svg');
    });

    projeto.setAttribute('class', 'projetoSelected');
    img.setAttribute('src', 'imagens/menu-right.svg');
    print(frameArray, indice, null, framePrint);
    framePrint.childNodes.forEach((e) => {
        e.setAttribute('class', 'frame')
    });
    task.innerHTML = "";
    titulo.innerHTML = "";
    cross.setAttribute('class', 'hiden')
};

function frameSelect(indiceP, indiceF) {

    let frameList = document.getElementById('frame'+indiceP);
    let frame = document.getElementById('p'+indiceP+'f'+indiceF);
    let inputValue = document.getElementById('inputp'+indiceP+'f'+indiceF);
    let titulo = document.getElementById('titulo');
    let cross = document.getElementById('cross2');

    frameList.childNodes.forEach((e) => {
        e.setAttribute('class', 'frame')
    });

    frame.setAttribute('class', 'frameSelected');
    titulo.innerHTML = inputValue.innerHTML;
    cross.setAttribute('class', 'cross2')
    print(taskArray, indiceP, indiceF, taskPrint);
    
};

function tarefaShow(){
    
    let cross = document.getElementById('cross2');
    let inputT = document.getElementById('inputTask');

        cross.setAttribute('class', 'hiden');
        inputT.setAttribute('class', 'inputTask');
        inputT.focus();

    inputT.addEventListener('focusout', () => {
        cross.setAttribute('class', 'cross2');
        inputT.setAttribute('class', 'hiden');
    });
};

// Funções adicionar input.value no array

function adicionarProjeto(){
    let projetoPrint = document.getElementById('projeto');
    let projeto = 
        `<div id="projeto${idP}" class="projetoSelected">
            <div id="labelP${idP}" class="label" onclick="projetoSelect(${idP})">${inputP.value}</div>
            <img id="projectImg${idP}" class="arrow" src="imagens/menu-down.svg" onclick="projetoSelect(${idP})">
            <button id="projectBtn${idP}" onclick="apaga(projetoArray, ${idP})" class="projetoDelete">x</button>
            <input id="inputFrame${idP}" type="text" class="inputFrame" name="inputFrame" placeholder="Novo Esocopo" autocomplete="off"/>
            <div id="frame${idP}" class="frameList"></div>
        </div>`;

        if(inputP.value !=="" && inputP.value !==null) {
            projetoArray.push(projeto);
            print(projetoArray, null, null, projetoPrint);
            projetoSelect(idP);
            let input = document.getElementById('inputFrame'+idP);
            inputP.value = "";
            inputP.blur();
            input.focus();
            idP++;
    }
};

function adicionarFrame(indexP) {
   
    let framePrint = document.getElementById('frame'+indexP);
    let inputF = document.getElementById('inputFrame'+indexP);
    let frame = `<div id="p${indexP}f${idF}" onclick="frameSelect(${indexP}, ${idF})" class="frameSelected">
    <div id="inputp${indexP}f${idF}">${inputF.value}</div>
    <img id="imgSelected${idF}" class="imgFrame" src="imagens/arrow-right-thick.svg"></div>`;
    let a = {indiceP: indexP, indiceF: idF, valor: frame};

    if(inputF.value !== "" && inputF.value !== null) {
    frameArray.push(a);    
    print(frameArray, indexP, null, framePrint);
    frameSelect(indexP, idF);
    idF++;
    inputF.value = "";
    }
};

function adicionarTarefa(indexP, indexF){

    let inputT = document.getElementById('inputTask');
    let task = 
    `<div class="check" id="p${indexP}f${indexF}task${idT}">
        <img id="imgT${idT}" onclick="checkTask(${indexP},${indexF},${idT})" class="circle" src="imagens/circle-outline.svg">
        <div id="task${idT}" onclick="checkTask(${indexP},${indexF},${idT})" class="task">${inputT.value}</div>
        <button id="taskBtn${idT}" onclick="apaga(taskArray, ${indexP}, ${indexF}, ${idT})" class="btnDelete"><img src="imagens/delete.svg"></button>
    </div>`;
    let a = {indiceP: indexP,indiceF: indexF, indiceT: idT, indiceCheck: 1, valor: task};
    
    if(inputT.value !=="" && inputT.value !==null) {
        taskArray.push(a)};
    
    print(taskArray, indexP, indexF, taskPrint);

    inputT.value = "";
    inputT.focus();
    idT++;

};

// Função checklist

function checkTask(indiceP, indiceF, indiceT){
    let taskInput = document.getElementById('task'+indiceT);
    let task = 
    `<div class="check" id="p${indiceP}f${indiceF}task${indiceT}">
        <img id="imgT${indiceT}" onclick="checkTask(${indiceP},${indiceF},${indiceT})" class="circle" src="imagens/circle-outline.svg">
        <div id="task${indiceT}" onclick="checkTask(${indiceP},${indiceF},${indiceT})" class="task">${taskInput.innerHTML}</div>
        <button id="taskBtn${indiceT}" onclick="apaga(taskArray, ${indiceP}, ${indiceF}, ${indiceT})" class="btnDelete"><img src="imagens/delete.svg"></button>
    </div>`;

    let taskChecked = 
    `<div class="checked check" id="p${indiceP}f${indiceF}task${indiceT}">
        <img id="imgT${indiceT}" onclick="checkTask(${indiceP},${indiceF},${indiceT})" class="circle" src="imagens/check-circle.svg">
        <div id="task${indiceT}" onclick="checkTask(${indiceP},${indiceF},${indiceT})" class="task">${taskInput.innerHTML}</div>
        <button id="taskBtn${indiceT}" onclick="apaga(taskArray, ${indiceP}, ${indiceF}, ${indiceT})" class="btnDelete"><img src="imagens/delete.svg"></button>
    </div>`;

    taskArray.forEach((e) => {
        if (e.indiceP === indiceP && e.indiceF === indiceF && e.indiceT === indiceT) {
            if(e.valor === task){taskArray.splice(taskArray.indexOf(e),1,{indiceP: indiceP, indiceF: indiceF, indiceT: indiceT, indiceCheck: 2, valor: taskChecked})}
            else if (e.valor === taskChecked) {taskArray.splice(taskArray.indexOf(e),1,{indiceP: indiceP, indiceF: indiceF, indiceT: indiceT, indiceCheck: 2,valor: task})}
        }
    });
    taskArray.sort((a,b) => (a.indiceCheck > b.indiceCheck) ? 1 : -1);
    print(taskArray, indiceP, indiceF, taskPrint);
};

// Função delete

function apaga(array, indiceP, indiceF, indiceT){
    let index;
    let local;
    if (indiceF === undefined) {index = indiceP; indiceP = null; local = projetoPrint}
    else {(array.forEach((e) =>{
         if (e.indiceP === indiceP && e.indiceF === indiceF && e.indiceT === indiceT) {index = array.indexOf(e)}
    })); local = taskPrint};
    array.splice(index,1);
    print(array, indiceP, indiceF, local);
    
};
