let countelh = document.getElementById("count-elH")
let countela = document.getElementById("count-elA")
let homecount = 0
let awaycount = 0


function hone() {
 homecount = homecount + 1
 countelh.textContent = homecount
 }

function htwo() {
homecount = homecount +2
countelh.textContent = homecount

}

function hthree() {
    homecount += 3
    countelh.textContent = homecount
}

function aone() {
 awaycount+= 1
 countela.textContent = awaycount
}
function atwo() {
 awaycount+= 2
 countela.textContent = awaycount
}
function athree() {
 awaycount+= 3
 countela.textContent = awaycount
}

function reset() {
    homecount = 0
    awaycount = 0
        countela.textContent = 0
        countelh.textContent = 0
}