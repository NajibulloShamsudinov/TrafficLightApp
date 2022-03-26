const second1 =document.getElementById("second1")
const second2 = document.getElementById("second2")
const second3 = document.getElementById("second3")


function shyochik1(i){    
    second1.innerHTML = i
    if(i==16)  {second1.style.display = "none"}
}

function shyochik2(j){    
    second2.innerHTML = j
    if(j==16)  {second2.style.display = "none"}
}

function shyochik3(x){    
    second3.innerHTML = x
    if(x==16)  {second3.style.display = "none"}
}



for(let i=1; i<=16; i++){
    setTimeout(shyochik1, i*400, i)
}

for(let j=16; j<=31; j++){
    setTimeout(shyochik2, j*400, j-15)
}

for(let x=31; x<=46; x++){
    setTimeout(shyochik3, x*400, x-30)
}
