let hm1 = document.getElementById("add1-hm")
let hm2 = document.getElementById("add2-hm")
let hm3 = document.getElementById("add3-hm")
let gst1 = document.getElementById("add1-gst")
let gst2 = document.getElementById("add2-gst")
let gst3 = document.getElementById("add3-gst")
let hm = document.getElementById("hm-scr")
let gst = document.getElementById("gst-scr")

let a = 0
let b = 0

function home1(){
    a += 1
    hm.textContent = a 
}

function home2(){
    a += 2
    hm.textContent = a 
}

function home3(){
    a += 3
    hm.textContent = a 
}

function guest1(){
    b += 1
    gst.textContent = b 
}

function guest2(){
    b += 2
    gst.textContent = b 
}

function guest3(){
    b += 3
    gst.textContent = b 
}

function reset(){
    hm.textContent = 0
    gst.textContent = 0
}