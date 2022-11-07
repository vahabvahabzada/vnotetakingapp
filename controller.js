let inputPanel=document.querySelector('.inputPanel');
let add=document.querySelector('button');
let sort=document.querySelector('.sort');

//give event listeners to first delete icon
document.getElementById('b0').addEventListener('mouseover',function(){
    document.getElementById('b0').style.background='url(\'/assets/delete.png\')';   
});
document.getElementById('b0').addEventListener('mouseout',function(){
    document.getElementById('b0').style.background='url(\'/assets/default.png\')';
})
let objs=[];
document.getElementById('b0').addEventListener('click',function(){
    document.getElementById('note0').remove();
    document.getElementById('b0').remove();
    for(let i=0;i<objs.length;i++){
        if(objs[i].txt.getAttribute('id')==='note0' && objs[i].ico.getAttribute('id')==='b0'){
            objs.splice(i,1);
        }
    }
    checkIfInputPanelIsEmpety();
});
objs.push({txt:document.getElementById('note0'),ico:document.getElementById('b0')});

//check if inputPanel id empety and if it is,then display:none
function checkIfInputPanelIsEmpety(){
    if(getComputedStyle(inputPanel).height==='0px'){
        inputPanel.style.display='none';
        console.log(getComputedStyle(sort).background);
        console.log(getComputedStyle(sort).background.match("/assets/yuxariaktiv.png"));
        console.log(getComputedStyle(sort).background.match("/assets/asagiaktiv.png"));
        if(getComputedStyle(sort).background.match('/assets/yuxariaktiv.png')!==null&&getComputedStyle(sort).background.match('/assets/yuxariaktiv.png')[0]==='/assets/yuxariaktiv.png'){
            sort.style.background='url(\'/assets/yuxarideaktiv.png\')'
        }
        if(getComputedStyle(sort).background.match('/assets/asagiaktiv.png')!==null&&getComputedStyle(sort).background.match('/assets/asagiaktiv.png')[0]==='/assets/asagiaktiv.png'){
            sort.style.background='url(\'/assets/asagideaktiv.png\')';
        }
    }
}

//create new notes and add event listeners to new created notes and delete icons
let counter=1;
add.addEventListener('click',function(){
    inputPanel.style.display='block';
    document.querySelector('.sort').style.background='url(\'/assets/asagiaktiv.png\')';
    
    let text=document.createElement('textarea');
    text.setAttribute('class','default');
    text.setAttribute('id',('note'+counter));

    let icon=document.createElement('span');
    icon.setAttribute('class','icon');
    icon.setAttribute('id','b'+counter);
    icon.addEventListener('mouseover',function(){
        icon.style.background='url(\'/assets/delete.png\')';
    });
    icon.addEventListener('mouseout',function(){
        icon.style.background='url(\'/assets/default.png\')';
    });
    icon.addEventListener('click',function(){
        icon.remove();
        text.remove();
        for(let i=0;i<objs.length;i++){
            if(objs[i].txt.getAttribute('id')===text.getAttribute('id')&&objs[i].ico.getAttribute('id')===icon.getAttribute('id')){
                objs.splice(i,1);
            }
        }
        checkIfInputPanelIsEmpety();
    })

    let ob={txt:text,ico:icon};
    objs.push(ob);
    console.log(objs);
    inputPanel.append(text);
    inputPanel.append(icon);

    counter++;
});

//add event listener to sort button
let sortCounter=0;
sort.addEventListener('click',function(){
    let aToZ;
    if(sortCounter%2===0){
        sort.style.background='url(\'/assets/yuxariaktiv.png\')';
        aToZ=objs.sort((a,b)=>(a.txt.value.toLowerCase()>b.txt.value.toLowerCase())?1:(a.txt.value.toLowerCase()<b.txt.value.toLowerCase())?-1:0);
        console.log(aToZ);
    }
    if(sortCounter%2!==0){
        sort.style.background='url(\'/assets/asagiaktiv.png\')'
        aToZ=objs.sort((a,b)=>(a.txt.value.toLowerCase()<b.txt.value.toLowerCase())?1:(a.txt.value.toLowerCase()>b.txt.value.toLowerCase())?-1:0);
        console.log(aToZ);
    }
    inputPanel.innerHTML='';
    for(let i=0;i<aToZ.length;i++){
        inputPanel.append(aToZ[i].txt);
        inputPanel.append(aToZ[i].ico);
    }
    sortCounter++;
});