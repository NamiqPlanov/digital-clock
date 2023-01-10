const hourelem = document.getElementById('hours')
const minelem = document.getElementById('minutes')
const secelem = document.getElementById('seconds')
const ampmelem = document.getElementById('ampm')


function uptclock(){
let h = new Date().getHours()
let m = new Date().getMinutes()
let s = new Date().getSeconds()
let ampm = 'AM'

if(h>12){
    h = h - 12
    ampmelem.textContent = 'PM'
}
h = h < 10 ? '0' + h : h;
 hourelem.textContent = h
 minelem.textContent = m
 secelem.textContent = s
 ampmelem,(textContent = ampm)
 setTimeout(()=>{
    uptclock()
 },1000)
}
uptclock()