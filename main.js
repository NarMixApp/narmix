var TagSelector = ['TAQ','TBQ','TCQ','TDQ','TEQ','TFQ','TGQ','THQ','TIQ','TJQ']; 
TagSelector = TagSelector[Math.floor(Math.random() * TagSelector.length)];
pfptag = "#0000"
Abeat.volume = .6;
Bbeat.volume = .6;
Cbeat.volume = .6;
Dbeat.volume = .6;
Ebeat.volume = .6;
Fbeat.volume = .6;
Gbeat.volume = .6;
Abeata.volume = .6;
Bbeata.volume = .6;
Cbeata.volume = .6;
Dbeata.volume = .6;
Ebeata.volume = .6;
Fbeata.volume = .6;
Gbeata.volume = .6;

var sw1 = false
var sw2 = false
var sw3 = false
var sw4 = false
var sw5 = false
var sw6 = false
var sw7 = false

var sw1a = false
var sw2a = false
var sw3a = false
var sw4a = false
var sw5a = false
var sw6a = false
var sw7a = false

var zs1 = "zz1t"
var zs2 = "zz2t"
var zs3 = "zz3t"
var zs4 = "zz4t"
var zs5 = "zz5t"
var zs6 = "zz6t"
var zs7 = "zz7t"

var zs1a = "zz1ta"
var zs2a = "zz2ta"
var zs3a = "zz3ta"
var zs4a = "zz4ta"
var zs5a = "zz5ta"
var zs6a = "zz6ta"
var zs7a = "zz7ta"

Check()
function Check(){
if (document.getElementById('TuneShare').value.includes("zz1t2")) {
  sw1 = false
  swa1()
}
if (document.getElementById('TuneShare').value.includes("zz2t2")) {
  sw2 = false
  swa2()
}
if (document.getElementById('TuneShare').value.includes("zz3t2")) {
  sw3 = false
  swa3()
}
if (document.getElementById('TuneShare').value.includes("zz4t2")) {
  sw4 = false
  swa4()
}
if (document.getElementById('TuneShare').value.includes("zz5t2")) {
  sw5 = false
  swa5()
}
if (document.getElementById('TuneShare').value.includes("zz6t2")) {
  sw6 = false
  swa6()
}
if (document.getElementById('TuneShare').value.includes("zz7t2")) {
  sw7 = false
  swa7()
}


if (document.getElementById('TuneShare').value.includes("zx1t2a")) {
  sw1a = false
  swa12()
}
if (document.getElementById('TuneShare').value.includes("zx2t2a")) {
  sw2a = false
  swa22()
}
if (document.getElementById('TuneShare').value.includes("zx3t2a")) {
  sw3a = false
  swa32()
}
if (document.getElementById('TuneShare').value.includes("zx4t2a")) {
  sw4a = false
  swa42()
}
if (document.getElementById('TuneShare').value.includes("zx5t2a")) {
  sw5a = false
  swa52()
}
if (document.getElementById('TuneShare').value.includes("zx6t2a")) {
  sw6a = false
  swa62()
}
if (document.getElementById('TuneShare').value.includes("zx7t2a")) {
  sw7a = false
  swa72()
}

setTimeout(Check,0)
}
var ForVar
Verify()

document.getElementById('For').innerHTML = ForVar

var LoopBooleanVAR = false

function LoopBooleanCheck() {
  setTimeout(LoopBoolean, 4700)
}
DataDel()
function DataDel(){
  document.getElementById('TuneShare').value = ""
  setTimeout(DataDel,20)
}
function LoopData(){
LoopBooleanVAR = false
LoopBooleanVAR = true
setTimeout(LoopBoolean, 0)
}
function LoopBooleanCheckStartUp() {
  setTimeout(LoopBoolean, 0)
}
function LoopBoolean() {
  PlaybackSpeed = document.getElementById('Speedid').value
  PBS = document.getElementById('Speedid2').value
  Abeat.playbackRate = PBS
  Bbeat.playbackRate = PBS
  Cbeat.playbackRate = PBS
  Dbeat.playbackRate = PBS
  Ebeat.playbackRate = PBS
  Fbeat.playbackRate = PBS
  Gbeat.playbackRate = PBS
  if (LoopBooleanVAR == true) {
    if (LoopBooleanVAR == true) {
      Wait0()
    }

  }
  setTimeout(LoopBooleanCheck, 0)
}

function LoopBreak() {
  bOz15 = "zOb"
  Stop()
  LoopBooleanVAR = false
}

function LoopStart() {
  PlaybackSpeed = document.getElementById('Speedid').value
  PBS = document.getElementById('Speedid2').value
  Abeat.playbackRate = PBS
  Bbeat.playbackRate = PBS
  Cbeat.playbackRate = PBS
  Dbeat.playbackRate = PBS
  Ebeat.playbackRate = PBS
  Fbeat.playbackRate = PBS
  Gbeat.playbackRate = PBS
  bOz15 = "bOz"
  LoopBooleanCheckStartUp()
  LoopBooleanVAR = true
}

function Stop() {
  document.getElementById('codeinput1').value = ""
  document.getElementById('codeinput2').value = ""
  document.getElementById('codeinput3').value = ""
  document.getElementById('codeinput4').value = ""
  document.getElementById('codeinput5').value = ""
  document.getElementById('codeinput6').value = ""
  document.getElementById('codeinput7').value = ""
  document.getElementById('codeinput8').value = ""
  document.getElementById('codeinput9').value = ""
  document.getElementById('codeinput10').value = ""
  document.getElementById('codeinput11').value = ""
  document.getElementById('codeinput12').value = ""
  document.getElementById('codeinput13').value = ""
  document.getElementById('codeinput14').value = ""
  document.getElementById('codeinput1a').value = ""
  document.getElementById('codeinput2a').value = ""
  document.getElementById('codeinput3a').value = ""
  document.getElementById('codeinput4a').value = ""
  document.getElementById('codeinput5a').value = ""
  document.getElementById('codeinput6a').value = ""
  document.getElementById('codeinput7a').value = ""
  document.getElementById('codeinput8a').value = ""
  document.getElementById('codeinput9a').value = ""
  document.getElementById('codeinput10a').value = ""
  document.getElementById('codeinput11a').value = ""
  document.getElementById('codeinput12a').value = ""
  document.getElementById('codeinput13a').value = ""
  document.getElementById('codeinput14a').value = ""
}
var aa = "00"
var bb = "00"
var cc = "00"
var dd = "00"
var ee = "00"
var ff = "00"
var gg = "00"
var hh = "00"
var ii = "00"
var jj = "00"
var kk = "00"
var ll = "00"
var mm = "00"
var nn = "00"

var PBS
var PlaybackSpeed
document.getElementById('Speedid').value = 220
document.getElementById('Speedid2').value = 1

function Wait0() {
  PlaybackSpeed = document.getElementById('Speedid').value
  PBS = document.getElementById('Speedid2').value
  Abeat.playbackRate = PBS
  Bbeat.playbackRate = PBS
  Cbeat.playbackRate = PBS
  Dbeat.playbackRate = PBS
  Ebeat.playbackRate = PBS
  Fbeat.playbackRate = PBS
  Gbeat.playbackRate = PBS
  setTimeout(Wait0a, PlaybackSpeed)
  if (document.getElementById('codeinput1').value == "a1") {
    Abeat.play()
    aa = "A1"
  }
  if (document.getElementById('codeinput1').value == "a2") {
    Bbeat.play()
    aa = "A2"
  }
  if (document.getElementById('codeinput1').value == "a3") {
    Cbeat.play()
    aa = "A3"
  }
  if (document.getElementById('codeinput1').value == "a4") {
    Dbeat.play()
    aa = "A4"
  }
  if (document.getElementById('codeinput1').value == "a5") {
    Ebeat.play()
    aa = "A5"
  }
  if (document.getElementById('codeinput1').value == "a6") {
    Fbeat.play()
    aa = "A6"
  }
  if (document.getElementById('codeinput1').value == "a7") {
    Gbeat.play()
    aa = "A7"
  }
  setTimeout(Wait1, PlaybackSpeed)
}

function Wait1() {
  if (document.getElementById('codeinput2').value == "b1") {
    Abeat.play()
    bb = "B1"
  }
  if (document.getElementById('codeinput2').value == "b2") {
    Bbeat.play()
    bb = "B2"
  }
  if (document.getElementById('codeinput2').value == "b3") {
    Cbeat.play()
    bb = "B3"
  }
  if (document.getElementById('codeinput2').value == "b4") {
    Dbeat.play()
    bb = "B4"
  }
  if (document.getElementById('codeinput2').value == "b5") {
    Ebeat.play()
    bb = "B5"
  }
  if (document.getElementById('codeinput2').value == "b6") {
    Fbeat.play()
    bb = "B6"
  }
  if (document.getElementById('codeinput2').value == "b7") {
    Gbeat.play()
    bb = "B7"
  }
  setTimeout(Wait2, PlaybackSpeed)
}

function Wait2() {
  if (document.getElementById('codeinput3').value == "c1") {
    Abeat.play()
    cc = "C1"
  }
  if (document.getElementById('codeinput3').value == "c2") {
    Bbeat.play()
    cc = "C2"
  }
  if (document.getElementById('codeinput3').value == "c3") {
    Cbeat.play()
    cc = "C3"
  }
  if (document.getElementById('codeinput3').value == "c4") {
    Dbeat.play()
    cc = "C4"
  }
  if (document.getElementById('codeinput3').value == "c5") {
    Ebeat.play()
    cc = "C5"
  }
  if (document.getElementById('codeinput3').value == "c6") {
    Fbeat.play()
    cc = "C6"
  }
  if (document.getElementById('codeinput3').value == "c7") {
    Gbeat.play()
    aa = "C7"
  }

  setTimeout(Wait3, PlaybackSpeed)
}

function Wait3() {
  if (document.getElementById('codeinput4').value == "d1") {
    Abeat.play()
    dd = "D1"
  }
  if (document.getElementById('codeinput4').value == "d2") {
    Bbeat.play()
    dd = "D2"
  }
  if (document.getElementById('codeinput4').value == "d3") {
    Cbeat.play()
    dd = "D3"
  }
  if (document.getElementById('codeinput4').value == "d4") {
    Dbeat.play()
    dd = "D4"
  }
  if (document.getElementById('codeinput4').value == "d5") {
    Ebeat.play()
    dd = "D5"

  }
  if (document.getElementById('codeinput4').value == "d6") {
    Fbeat.play()
    dd = "D6"

  }
  if (document.getElementById('codeinput4').value == "d7") {
    Gbeat.play()
    aa = "B7"
  }
  setTimeout(Wait4,PlaybackSpeed)
}

function Wait4() {
  if (document.getElementById('codeinput5').value == "e1") {
    Abeat.play()
    ee = "E1"
  }
  if (document.getElementById('codeinput5').value == "e2") {
    Bbeat.play()
    ee = "E2"
  }
  if (document.getElementById('codeinput5').value == "e3") {
    ee = "E3"
  }
  if (document.getElementById('codeinput5').value == "e4") {
    Dbeat.play()
    ee = "E4"
  }
  if (document.getElementById('codeinput5').value == "e5") {
    Ebeat.play()
    ee = "E5"
  }
  if (document.getElementById('codeinput5').value == "e6") {
    Fbeat.play()
    ee = "E6"
  }
  if (document.getElementById('codeinput5').value == "e7") {
    Gbeat.play()
    ee = "E7"
  }
  setTimeout(Wait5,PlaybackSpeed)
}

function Wait5() {
  if (document.getElementById('codeinput6').value == "f1") {
    Abeat.play()
    ff = "F1"
  }
  if (document.getElementById('codeinput6').value == "f2") {
    Bbeat.play()
    ff = "F2"
  }
  if (document.getElementById('codeinput6').value == "f3") {
    Cbeat.play()
    ff = "F3"
  }
  if (document.getElementById('codeinput6').value == "f4") {
    Dbeat.play()
    ff = "F4"
  }
  if (document.getElementById('codeinput6').value == "f5") {
    Ebeat.play()
    ff = "F5"
  }
  if (document.getElementById('codeinput6').value == "f6") {
    Fbeat.play()
    ff = "F6"
  }
  if (document.getElementById('codeinput6').value == "f7") {
    Gbeat.play()
    ff = "F7"
  }
  setTimeout(Wait6,PlaybackSpeed)
}

function Wait6() {
  if (document.getElementById('codeinput7').value == "g1") {
    Abeat.play()
    gg = "G1"
  }
  if (document.getElementById('codeinput7').value == "g2") {
    Bbeat.play()
    gg = "G2"
  }
  if (document.getElementById('codeinput7').value == "g3") {
    Cbeat.play()
    gg = "G3"
  }
  if (document.getElementById('codeinput7').value == "g4") {
    Dbeat.play()
    gg = "G4"
  }
  if (document.getElementById('codeinput7').value == "g5") {
    Ebeat.play()
    gg = "G5"
  }
  if (document.getElementById('codeinput7').value == "g6") {
    Fbeat.play()
    gg = "G6"
  }
  if (document.getElementById('codeinput7').value == "g7") {
    Gbeat.play()
    gg = "G7"
  }
  setTimeout(Wait7,PlaybackSpeed)
}

function Wait7() {
  if (document.getElementById('codeinput8').value == "h1") {
    Abeat.play()
    hh = "H1"
  }
  if (document.getElementById('codeinput8').value == "h2") {
    Bbeat.play()
    hh = "H2"
  }
  if (document.getElementById('codeinput8').value == "h3") {
    Cbeat.play()
    hh = "H3"
  }
  if (document.getElementById('codeinput8').value == "h4") {
    Dbeat.play()
    hh = "H4"
  }
  if (document.getElementById('codeinput8').value == "h5") {
    Ebeat.play()
    hh = "H5"
  }
  if (document.getElementById('codeinput8').value == "h6") {
    Fbeat.play()
    hh = "H6"
  }
  if (document.getElementById('codeinput8').value == "h7") {
    Gbeat.play()
    hh = "H7"
  }
  setTimeout(Wait8,PlaybackSpeed)
}

function Wait8() {
  if (document.getElementById('codeinput9').value == "i1") {
    Abeat.play()
    ii = "I1"
  }
  if (document.getElementById('codeinput9').value == "i2") {
    Bbeat.play()
    ii = "I2"
  }
  if (document.getElementById('codeinput9').value == "i3") {
    Cbeat.play()
    ii = "I3"
  }
  if (document.getElementById('codeinput9').value == "i4") {
    Dbeat.play()
    ii = "I4"
  }
  if (document.getElementById('codeinput9').value == "i5") {
    Ebeat.play()
    ii = "I5"
  }
  if (document.getElementById('codeinput9').value == "i6") {
    Fbeat.play()
    ii = "I6"
  }
  if (document.getElementById('codeinput9').value == "i7") {
    Gbeat.play()
    ii = "I7"
  }
  setTimeout(Wait9,PlaybackSpeed)
}

function Wait9() {
  if (document.getElementById('codeinput10').value == "j1") {
    Abeat.play()
    jj = "J1"
  }
  if (document.getElementById('codeinput10').value == "j2") {
    Bbeat.play()
    jj = "J2"
  }
  if (document.getElementById('codeinput10').value == "j3") {
    Cbeat.play()
    jj = "J3"
  }
  if (document.getElementById('codeinput10').value == "j4") {
    Dbeat.play()
    jj = "J4"
  }
  if (document.getElementById('codeinput10').value == "j5") {
    Ebeat.play()
    jj = "J5"
  }
  if (document.getElementById('codeinput10').value == "j6") {
    Fbeat.play()
    jj = "J6"
  }
  if (document.getElementById('codeinput10').value == "j7") {
    Gbeat.play()
    jj = "J7"
  }
  setTimeout(Wait10,PlaybackSpeed)
}

function Wait10() {
  if (document.getElementById('codeinput11').value == "k1") {
    Abeat.play()
    kk = "K1"
  }
  if (document.getElementById('codeinput11').value == "k2") {
    Bbeat.play()
    kk = "K2"
  }
  if (document.getElementById('codeinput11').value == "k3") {
    Cbeat.play()
    kk = "K3"
  }
  if (document.getElementById('codeinput11').value == "k4") {
    Dbeat.play()
    kk = "K4"
  }
  if (document.getElementById('codeinput11').value == "k5") {
    Ebeat.play()
    kk = "K5"
  }
  if (document.getElementById('codeinput11').value == "k6") {
    Fbeat.play()
    kk = "K6"
  }
  if (document.getElementById('codeinput11').value == "k7") {
    Gbeat.play()
    kk = "K7"
  }
  setTimeout(Wait11,PlaybackSpeed)
}

function Wait11() {
  if (document.getElementById('codeinput12').value == "l1") {
    Abeat.play()
    ll = "L1"
  }
  if (document.getElementById('codeinput12').value == "l2") {
    Bbeat.play()
    ll = "L2"
  }
  if (document.getElementById('codeinput12').value == "l3") {
    Cbeat.play()
    ll = "L3"
  }
  if (document.getElementById('codeinput12').value == "l4") {
    Dbeat.play()
    ll = "L4"
  }
  if (document.getElementById('codeinput12').value == "l5") {
    Ebeat.play()
    ll = "L5"
  }
  if (document.getElementById('codeinput12').value == "l6") {
    Fbeat.play()
    ll = "L6"
  }
  if (document.getElementById('codeinput12').value == "l7") {
    Gbeat.play()
    ll = "L7"
  }
  setTimeout(Wait12,PlaybackSpeed)
}

function Wait12() {
  if (document.getElementById('codeinput13').value == "m1") {
    Abeat.play()
    mm = "M1"
  }
  if (document.getElementById('codeinput13').value == "m2") {
    Bbeat.play()
    mm = "M2"
  }
  if (document.getElementById('codeinput13').value == "m3") {
    Cbeat.play()
    mm = "M3"
  }
  if (document.getElementById('codeinput13').value == "m4") {
    Dbeat.play()
    mm = "M4"
  }
  if (document.getElementById('codeinput13').value == "m5") {
    Ebeat.play()
    mm = "M5"
  }
  if (document.getElementById('codeinput13').value == "m6") {
    Fbeat.play()
    mm = "M6"
  }
  if (document.getElementById('codeinput13').value == "m7") {
    Gbeat.play()
    mm = "M7"
  }
  setTimeout(Wait13,PlaybackSpeed)
}

function Wait13() {
  if (document.getElementById('codeinput14').value == "n1") {
    Abeat.play()
    nn = "N1"
  }
  if (document.getElementById('codeinput14').value == "n2") {
    Bbeat.play()
    nn = "N2"
  }
  if (document.getElementById('codeinput14').value == "n3") {
    Cbeat.play()
    nn = "N3"
  }
  if (document.getElementById('codeinput14').value == "n4") {
    Dbeat.play()
    nn = "N4"
  }
  if (document.getElementById('codeinput14').value == "n5") {
    Ebeat.play()
    nn = "N5"
  }
  if (document.getElementById('codeinput14').value == "n6") {
    Fbeat.play()
    nn = "N6"
  }
  if (document.getElementById('codeinput14').value == "n7") {
    Gbeat.play()
    nn = "N7"
  }
}

function Wait0a() {
  if (document.getElementById('codeinput1a').value == "a1") {
    Abeata.play()
    aa = "A1"
  }
  if (document.getElementById('codeinput1a').value == "a2") {
    Bbeata.play()
    aa = "A2"
  }
  if (document.getElementById('codeinput1a').value == "a3") {
    Cbeata.play()
    aa = "A3"
  }
  if (document.getElementById('codeinput1a').value == "a4") {
    Dbeata.play()
    aa = "A4"
  }
  if (document.getElementById('codeinput1a').value == "a5") {
    Ebeata.play()
    aa = "A5"
  }
  if (document.getElementById('codeinput1a').value == "a6") {
    Fbeata.play()
    aa = "A6"
  }
  if (document.getElementById('codeinput1a').value == "a7") {
    Gbeata.play()
    aa = "A7"
  }
  setTimeout(Wait1a, PlaybackSpeed)
}

function Wait1a() {
  if (document.getElementById('codeinput2a').value == "b1") {
    Abeata.play()
    bb = "B1"
  }
  if (document.getElementById('codeinput2a').value == "b2") {
    Bbeata.play()
    bb = "B2"
  }
  if (document.getElementById('codeinput2a').value == "b3") {
    Cbeata.play()
    bb = "B3"
  }
  if (document.getElementById('codeinput2a').value == "b4") {
    Dbeata.play()
    bb = "B4"
  }
  if (document.getElementById('codeinput2a').value == "b5") {
    Ebeata.play()
    bb = "B5"
  }
  if (document.getElementById('codeinput2a').value == "b6") {
    Fbeata.play()
    bb = "B6"
  }
  if (document.getElementById('codeinput2a').value == "b7") {
    Gbeata.play()
    bb = "B7"
  }
  setTimeout(Wait2a, PlaybackSpeed)
}

function Wait2a() {
  if (document.getElementById('codeinput3a').value == "c1") {
    Abeata.play()
    cc = "C1"
  }
  if (document.getElementById('codeinput3a').value == "c2") {
    Bbeata.play()
    cc = "C2"
  }
  if (document.getElementById('codeinput3a').value == "c3") {
    Cbeata.play()
    cc = "C3"
  }
  if (document.getElementById('codeinput3a').value == "c4") {
    Dbeata.play()
    cc = "C4"
  }
  if (document.getElementById('codeinput3a').value == "c5") {
    Ebeata.play()
    cc = "C5"
  }
  if (document.getElementById('codeinput3a').value == "c6") {
    Fbeata.play()
    cc = "C6"
  }
  if (document.getElementById('codeinput3a').value == "c7") {
    Gbeata.play()
    aa = "C7"
  }

  setTimeout(Wait3a, PlaybackSpeed)
}

function Wait3a() {
  if (document.getElementById('codeinput4a').value == "d1") {
    Abeata.play()
    dd = "D1"
  }
  if (document.getElementById('codeinput4a').value == "d2") {
    Bbeata.play()
    dd = "D2"
  }
  if (document.getElementById('codeinput4a').value == "d3") {
    Cbeata.play()
    dd = "D3"
  }
  if (document.getElementById('codeinput4a').value == "d4") {
    Dbeata.play()
    dd = "D4"
  }
  if (document.getElementById('codeinput4a').value == "d5") {
    Ebeata.play()
    dd = "D5"

  }
  if (document.getElementById('codeinput4a').value == "d6") {
    Fbeata.play()
    dd = "D6"

  }
  if (document.getElementById('codeinput4a').value == "d7") {
    Gbeata.play()
    aa = "B7"
  }
  setTimeout(Wait4a, PlaybackSpeed)
}

function Wait4a() {
  if (document.getElementById('codeinput5a').value == "e1") {
    Abeata.play()
    ee = "E1"
  }
  if (document.getElementById('codeinput5a').value == "e2") {
    Bbeata.play()
    ee = "E2"
  }
  if (document.getElementById('codeinput5a').value == "e3") {
    Cbeata.play()
    ee = "E3"
  }
  if (document.getElementById('codeinput5a').value == "e4") {
    Dbeata.play()
    ee = "E4"
  }
  if (document.getElementById('codeinput5a').value == "e5") {
    Ebeata.play()
    ee = "E5"
  }
  if (document.getElementById('codeinput5a').value == "e6") {
    Fbeata.play()
    ee = "E6"
  }
  if (document.getElementById('codeinput5a').value == "e7") {
    Gbeata.play()
    ee = "E7"
  }
  setTimeout(Wait5a, PlaybackSpeed)
}

function Wait5a() {
  if (document.getElementById('codeinput6a').value == "f1") {
    Abeata.play()
    ff = "F1"
  }
  if (document.getElementById('codeinput6a').value == "f2") {
    Bbeata.play()
    ff = "F2"
  }
  if (document.getElementById('codeinput6a').value == "f3") {
    Cbeata.play()
    ff = "F3"
  }
  if (document.getElementById('codeinput6a').value == "f4") {
    Dbeata.play()
    ff = "F4"
  }
  if (document.getElementById('codeinput6a').value == "f5") {
    Ebeata.play()
    ff = "F5"
  }
  if (document.getElementById('codeinput6a').value == "f6") {
    Fbeata.play()
    ff = "F6"
  }
  if (document.getElementById('codeinput6a').value == "f7") {
    Gbeata.play()
    ff = "F7"
  }
  setTimeout(Wait6a, PlaybackSpeed)
}

function Wait6a() {
  if (document.getElementById('codeinput7a').value == "g1") {
    Abeata.play()
    gg = "G1"
  }
  if (document.getElementById('codeinput7a').value == "g2") {
    Bbeata.play()
    gg = "G2"
  }
  if (document.getElementById('codeinput7a').value == "g3") {
    Cbeata.play()
    gg = "G3"
  }
  if (document.getElementById('codeinput7a').value == "g4") {
    Dbeata.play()
    gg = "G4"
  }
  if (document.getElementById('codeinput7a').value == "g5") {
    Ebeata.play()
    gg = "G5"
  }
  if (document.getElementById('codeinput7a').value == "g6") {
    Fbeata.play()
    gg = "G6"
  }
  if (document.getElementById('codeinput7a').value == "g7") {
    Gbeata.play()
    gg = "G7"
  }
  setTimeout(Wait7a, PlaybackSpeed)
}

function Wait7a() {
  if (document.getElementById('codeinput8a').value == "h1") {
    Abeata.play()
    hh = "H1"
  }
  if (document.getElementById('codeinput8a').value == "h2") {
    Bbeata.play()
    hh = "H2"
  }
  if (document.getElementById('codeinput8a').value == "h3") {
    Cbeata.play()
    hh = "H3"
  }
  if (document.getElementById('codeinput8a').value == "h4") {
    Dbeata.play()
    hh = "H4"
  }
  if (document.getElementById('codeinput8a').value == "h5") {
    Ebeata.play()
    hh = "H5"
  }
  if (document.getElementById('codeinput8a').value == "h6") {
    Fbeata.play()
    hh = "H6"
  }
  if (document.getElementById('codeinput8a').value == "h7") {
    Gbeata.play()
    hh = "H7"
  }
  setTimeout(Wait8a, PlaybackSpeed)
}

function Wait8a() {
  if (document.getElementById('codeinput9a').value == "i1") {
    Abeata.play()
    ii = "I1"
  }
  if (document.getElementById('codeinput9a').value == "i2") {
    Bbeata.play()
    ii = "I2"
  }
  if (document.getElementById('codeinput9a').value == "i3") {
    Cbeata.play()
    ii = "I3"
  }
  if (document.getElementById('codeinput9a').value == "i4") {
    Dbeata.play()
    ii = "I4"
  }
  if (document.getElementById('codeinput9a').value == "i5") {
    Ebeata.play()
    ii = "I5"
  }
  if (document.getElementById('codeinput9a').value == "i6") {
    Fbeata.play()
    ii = "I6"
  }
  if (document.getElementById('codeinput9a').value == "i7") {
    Gbeata.play()
    ii = "I7"
  }
  setTimeout(Wait9a, PlaybackSpeed)
}

function Wait9a() {
  if (document.getElementById('codeinput10a').value == "j1") {
    Abeata.play()
    jj = "J1"
  }
  if (document.getElementById('codeinput10a').value == "j2") {
    Bbeata.play()
    jj = "J2"
  }
  if (document.getElementById('codeinput10a').value == "j3") {
    Cbeata.play()
    jj = "J3"
  }
  if (document.getElementById('codeinput10a').value == "j4") {
    Dbeata.play()
    jj = "J4"
  }
  if (document.getElementById('codeinput10a').value == "j5") {
    Ebeata.play()
    jj = "J5"
  }
  if (document.getElementById('codeinput10a').value == "j6") {
    Fbeata.play()
    jj = "J6"
  }
  if (document.getElementById('codeinput10a').value == "j7") {
    Gbeata.play()
    jj = "J7"
  }
  setTimeout(Wait10a, PlaybackSpeed)
}

function Wait10a() {
  if (document.getElementById('codeinput11a').value == "k1") {
    Abeata.play()
    kk = "K1"
  }
  if (document.getElementById('codeinput11a').value == "k2") {
    Bbeata.play()
    kk = "K2"
  }
  if (document.getElementById('codeinput11a').value == "k3") {
    Cbeata.play()
    kk = "K3"
  }
  if (document.getElementById('codeinput11a').value == "k4") {
    Dbeata.play()
    kk = "K4"
  }
  if (document.getElementById('codeinput11a').value == "k5") {
    Ebeata.play()
    kk = "K5"
  }
  if (document.getElementById('codeinput11a').value == "k6") {
    Fbeata.play()
    kk = "K6"
  }
  if (document.getElementById('codeinput11a').value == "k7") {
    Gbeata.play()
    kk = "K7"
  }
  setTimeout(Wait11a, PlaybackSpeed)
}

function Wait11a() {
  if (document.getElementById('codeinput12a').value == "l1") {
    Abeata.play()
    ll = "L1"
  }
  if (document.getElementById('codeinput12a').value == "l2") {
    Bbeata.play()
    ll = "L2"
  }
  if (document.getElementById('codeinput12a').value == "l3") {
    Cbeata.play()
    ll = "L3"
  }
  if (document.getElementById('codeinput12a').value == "l4") {
    Dbeata.play()
    ll = "L4"
  }
  if (document.getElementById('codeinput12a').value == "l5") {
    Ebeata.play()
    ll = "L5"
  }
  if (document.getElementById('codeinput12a').value == "l6") {
    Fbeata.play()
    ll = "L6"
  }
  if (document.getElementById('codeinput12a').value == "l7") {
    Gbeata.play()
    ll = "L7"
  }
  setTimeout(Wait12a, PlaybackSpeed)
}

function Wait12a() {
  if (document.getElementById('codeinput13a').value == "m1") {
    Abeata.play()
    mm = "M1"
  }
  if (document.getElementById('codeinput13a').value == "m2") {
    Bbeata.play()
    mm = "M2"
  }
  if (document.getElementById('codeinput13a').value == "m3") {
    Cbeata.play()
    mm = "M3"
  }
  if (document.getElementById('codeinput13a').value == "m4") {
    Dbeata.play()
    mm = "M4"
  }
  if (document.getElementById('codeinput13a').value == "m5") {
    Ebeata.play()
    mm = "M5"
  }
  if (document.getElementById('codeinput13a').value == "m6") {
    Fbeata.play()
    mm = "M6"
  }
  if (document.getElementById('codeinput13a').value == "m7") {
    Gbeata.play()
    mm = "M7"
  }
  setTimeout(Wait13a, PlaybackSpeed)
}

function Wait13a() {
  if (document.getElementById('codeinput14a').value == "n1") {
    Abeata.play()
    nn = "N1"
  }
  if (document.getElementById('codeinput14a').value == "n2") {
    Bbeata.play()
    nn = "N2"
  }
  if (document.getElementById('codeinput14a').value == "n3") {
    Cbeata.play()
    nn = "N3"
  }
  if (document.getElementById('codeinput14a').value == "n4") {
    Dbeata.play()
    nn = "N4"
  }
  if (document.getElementById('codeinput14a').value == "n5") {
    Ebeata.play()
    nn = "N5"
  }
  if (document.getElementById('codeinput14a').value == "n6") {
    Fbeata.play()
    nn = "N6"
  }
  if (document.getElementById('codeinput14a').value == "n7") {
    Gbeata.play()
    nn = "N7"
  }
}
function Verify(){

  if (document.getElementById('TuneShare').value.includes("TAQ")){
    pfptag = ("#2819")
  }
  if (document.getElementById('TuneShare').value.includes("TBQ")){
    pfptag = ("#1473")
  }
  if (document.getElementById('TuneShare').value.includes("TCQ")){
    pfptag = ("#9840")
  }
  if (document.getElementById('TuneShare').value.includes("TDQ")){
    pfptag = ("#7490")
  }
  if (document.getElementById('TuneShare').value.includes("TEQ")){
    pfptag = ("#5450")
  }
  if (document.getElementById('TuneShare').value.includes("TFQ")){
    pfptag = ("#6039")
  }
  if (document.getElementById('TuneShare').value.includes("TGQ")){
    pfptag = ("#8360")
  }
  if (document.getElementById('TuneShare').value.includes("THQ")){
    pfptag = ("#2130")
  }
  if (document.getElementById('TuneShare').value.includes("TIQ")){
    pfptag = ("#8134")
  }
  if (document.getElementById('TuneShare').value.includes("TJQ")){
    pfptag = ("#7849")
  }

  if (document.getElementById('TuneShare').value.includes("a1")) {
    document.getElementById('codeinput1').value = "a1"
  }

  if (document.getElementById('TuneShare').value.includes("a2")) {
    document.getElementById('codeinput1').value = "a2"
  }

  if (document.getElementById('TuneShare').value.includes("a3")) {
    document.getElementById('codeinput1').value = "a3"
  }

  if (document.getElementById('TuneShare').value.includes("a4")) {
    document.getElementById('codeinput1').value = "a4"
  }

  if (document.getElementById('TuneShare').value.includes("a5")) {
    document.getElementById('codeinput1').value = "a5"
  }

  if (document.getElementById('TuneShare').value.includes("a6")) {
    document.getElementById('codeinput1').value = "a6"
  }

  if (document.getElementById('TuneShare').value.includes("a7")) {
    document.getElementById('codeinput1').value = "a7"
  }

  if (document.getElementById('TuneShare').value.includes("a7")) {
    document.getElementById('codeinput1').value = "a7"
  }


  if (document.getElementById('TuneShare').value.includes("b1")) {
    document.getElementById('codeinput2').value = "b1"
  }

  if (document.getElementById('TuneShare').value.includes("b2")) {
    document.getElementById('codeinput2').value = "b2"
  }

  if (document.getElementById('TuneShare').value.includes("b3")) {
    document.getElementById('codeinput2').value = "b3"
  }

  if (document.getElementById('TuneShare').value.includes("b4")) {
    document.getElementById('codeinput2').value = "b4"
  }

  if (document.getElementById('TuneShare').value.includes("b5")) {
    document.getElementById('codeinput2').value = "b5"
  }

  if (document.getElementById('TuneShare').value.includes("b6")) {
    document.getElementById('codeinput2').value = "b6"
  }

  if (document.getElementById('TuneShare').value.includes("b7")) {
    document.getElementById('codeinput2').value = "b7"
  }


  if (document.getElementById('TuneShare').value.includes("c1")) {
    document.getElementById('codeinput3').value = "c1"
  }

  if (document.getElementById('TuneShare').value.includes("c2")) {
    document.getElementById('codeinput3').value = "c2"
  }

  if (document.getElementById('TuneShare').value.includes("c3")) {
    document.getElementById('codeinput3').value = "c3"
  }

  if (document.getElementById('TuneShare').value.includes("c4")) {
    document.getElementById('codeinput3').value = "c4"
  }

  if (document.getElementById('TuneShare').value.includes("c5")) {
    document.getElementById('codeinput3').value = "c5"
  }

  if (document.getElementById('TuneShare').value.includes("c6")) {
    document.getElementById('codeinput3').value = "c6"
  }

  if (document.getElementById('TuneShare').value.includes("c7")) {
    document.getElementById('codeinput3').value = "c7"
  }


  if (document.getElementById('TuneShare').value.includes("d1")) {
    document.getElementById('codeinput4').value = "d1"
  }

  if (document.getElementById('TuneShare').value.includes("d2")) {
    document.getElementById('codeinput4').value = "d2"
  }

  if (document.getElementById('TuneShare').value.includes("d3")) {
    document.getElementById('codeinput4').value = "d3"
  }

  if (document.getElementById('TuneShare').value.includes("d4")) {
    document.getElementById('codeinput4').value = "d4"
  }

  if (document.getElementById('TuneShare').value.includes("d5")) {
    document.getElementById('codeinput4').value = "d5"
  }

  if (document.getElementById('TuneShare').value.includes("d6")) {
    document.getElementById('codeinput4').value = "d6"
  }

  if (document.getElementById('TuneShare').value.includes("d7")) {
    document.getElementById('codeinput4').value = "d7"
  }


  if (document.getElementById('TuneShare').value.includes("e1")) {
    document.getElementById('codeinput5').value = "e1"
  }

  if (document.getElementById('TuneShare').value.includes("e2")) {
    document.getElementById('codeinput5').value = "e2"
  }

  if (document.getElementById('TuneShare').value.includes("e3")) {
    document.getElementById('codeinput5').value = "e3"
  }

  if (document.getElementById('TuneShare').value.includes("e4")) {
    document.getElementById('codeinput5').value = "e4"
  }

  if (document.getElementById('TuneShare').value.includes("e5")) {
    document.getElementById('codeinput5').value = "e5"
  }

  if (document.getElementById('TuneShare').value.includes("e6")) {
    document.getElementById('codeinput5').value = "e6"
  }

  if (document.getElementById('TuneShare').value.includes("e7")) {
    document.getElementById('codeinput5').value = "e7"
  }


  if (document.getElementById('TuneShare').value.includes("f1")) {
    document.getElementById('codeinput6').value = "f1"
  }

  if (document.getElementById('TuneShare').value.includes("f2")) {
    document.getElementById('codeinput6').value = "f2"
  }

  if (document.getElementById('TuneShare').value.includes("f3")) {
    document.getElementById('codeinput6').value = "f3"
  }

  if (document.getElementById('TuneShare').value.includes("f4")) {
    document.getElementById('codeinput6').value = "f4"
  }

  if (document.getElementById('TuneShare').value.includes("f5")) {
    document.getElementById('codeinput6').value = "f5"
  }

  if (document.getElementById('TuneShare').value.includes("f6")) {
    document.getElementById('codeinput6').value = "f6"
  }

  if (document.getElementById('TuneShare').value.includes("f7")) {
    document.getElementById('codeinput6').value = "f7"
  }


  if (document.getElementById('TuneShare').value.includes("g1")) {
    document.getElementById('codeinput7').value = "g1"
  }

  if (document.getElementById('TuneShare').value.includes("g2")) {
    document.getElementById('codeinput7').value = "g2"
  }

  if (document.getElementById('TuneShare').value.includes("g3")) {
    document.getElementById('codeinput7').value = "g3"
  }

  if (document.getElementById('TuneShare').value.includes("g4")) {
    document.getElementById('codeinput7').value = "g4"
  }

  if (document.getElementById('TuneShare').value.includes("g5")) {
    document.getElementById('codeinput7').value = "g5"
  }

  if (document.getElementById('TuneShare').value.includes("g6")) {
    document.getElementById('codeinput7').value = "g6"
  }

  if (document.getElementById('TuneShare').value.includes("g7")) {
    document.getElementById('codeinput7').value = "g7"
  }


  if (document.getElementById('TuneShare').value.includes("h1")) {
    document.getElementById('codeinput8').value = "h1"
  }

  if (document.getElementById('TuneShare').value.includes("h2")) {
    document.getElementById('codeinput8').value = "h2"
  }

  if (document.getElementById('TuneShare').value.includes("h3")) {
    document.getElementById('codeinput8').value = "h3"
  }

  if (document.getElementById('TuneShare').value.includes("h4")) {
    document.getElementById('codeinput8').value = "h4"
  }

  if (document.getElementById('TuneShare').value.includes("h5")) {
    document.getElementById('codeinput8').value = "h5"
  }

  if (document.getElementById('TuneShare').value.includes("h6")) {
    document.getElementById('codeinput8').value = "h6"
  }

  if (document.getElementById('TuneShare').value.includes("h7")) {
    document.getElementById('codeinput8').value = "h7"
  }


  if (document.getElementById('TuneShare').value.includes("i1")) {
    document.getElementById('codeinput9').value = "i1"
  }

  if (document.getElementById('TuneShare').value.includes("i2")) {
    document.getElementById('codeinput9').value = "i2"
  }

  if (document.getElementById('TuneShare').value.includes("i3")) {
    document.getElementById('codeinput9').value = "i3"
  }

  if (document.getElementById('TuneShare').value.includes("i4")) {
    document.getElementById('codeinput9').value = "i4"
  }

  if (document.getElementById('TuneShare').value.includes("i5")) {
    document.getElementById('codeinput9').value = "i5"
  }

  if (document.getElementById('TuneShare').value.includes("i6")) {
    document.getElementById('codeinput9').value = "i6"
  }

  if (document.getElementById('TuneShare').value.includes("i7")) {
    document.getElementById('codeinput9').value = "i7"
  }


  if (document.getElementById('TuneShare').value.includes("j1")) {
    document.getElementById('codeinput10').value = "j1"
  }

  if (document.getElementById('TuneShare').value.includes("j2")) {
    document.getElementById('codeinput10').value = "j2"
  }

  if (document.getElementById('TuneShare').value.includes("j3")) {
    document.getElementById('codeinput10').value = "j3"
  }

  if (document.getElementById('TuneShare').value.includes("j4")) {
    document.getElementById('codeinput10').value = "j4"
  }

  if (document.getElementById('TuneShare').value.includes("j5")) {
    document.getElementById('codeinput10').value = "j5"
  }

  if (document.getElementById('TuneShare').value.includes("j6")) {
    document.getElementById('codeinput10').value = "j6"
  }

  if (document.getElementById('TuneShare').value.includes("j7")) {
    document.getElementById('codeinput10').value = "j7"
  }



  if (document.getElementById('TuneShare').value.includes("k1")) {
    document.getElementById('codeinput11').value = "k1"
  }

  if (document.getElementById('TuneShare').value.includes("k2")) {
    document.getElementById('codeinput11').value = "k2"
  }

  if (document.getElementById('TuneShare').value.includes("k3")) {
    document.getElementById('codeinput11').value = "k3"
  }

  if (document.getElementById('TuneShare').value.includes("k4")) {
    document.getElementById('codeinput11').value = "k4"
  }

  if (document.getElementById('TuneShare').value.includes("k5")) {
    document.getElementById('codeinput11').value = "k5"
  }

  if (document.getElementById('TuneShare').value.includes("k6")) {
    document.getElementById('codeinput11').value = "k6"
  }

  if (document.getElementById('TuneShare').value.includes("k7")) {
    document.getElementById('codeinput11').value = "k7"
  }


  if (document.getElementById('TuneShare').value.includes("l1")) {
    document.getElementById('codeinput12').value = "l1"
  }

  if (document.getElementById('TuneShare').value.includes("l2")) {
    document.getElementById('codeinput12').value = "l2"
  }

  if (document.getElementById('TuneShare').value.includes("l3")) {
    document.getElementById('codeinput12').value = "l3"
  }

  if (document.getElementById('TuneShare').value.includes("l4")) {
    document.getElementById('codeinput12').value = "l4"
  }

  if (document.getElementById('TuneShare').value.includes("l5")) {
    document.getElementById('codeinput12').value = "l5"
  }

  if (document.getElementById('TuneShare').value.includes("l6")) {
    document.getElementById('codeinput12').value = "l6"
  }

  if (document.getElementById('TuneShare').value.includes("l7")) {
    document.getElementById('codeinput12').value = "l7"
  }


  if (document.getElementById('TuneShare').value.includes("m1")) {
    document.getElementById('codeinput13').value = "m1"
  }

  if (document.getElementById('TuneShare').value.includes("m2")) {
    document.getElementById('codeinput13').value = "m2"
  }

  if (document.getElementById('TuneShare').value.includes("m3")) {
    document.getElementById('codeinput13').value = "m3"
  }

  if (document.getElementById('TuneShare').value.includes("m4")) {
    document.getElementById('codeinput13').value = "m4"
  }

  if (document.getElementById('TuneShare').value.includes("m5")) {
    document.getElementById('codeinput13').value = "m5"
  }

  if (document.getElementById('TuneShare').value.includes("m6")) {
    document.getElementById('codeinput13').value = "m6"
  }

  if (document.getElementById('TuneShare').value.includes("m7")) {
    document.getElementById('codeinput13').value = "m7"
  }


  if (document.getElementById('TuneShare').value.includes("n1")) {
    document.getElementById('codeinput14').value = "n1"
  }

  if (document.getElementById('TuneShare').value.includes("n2")) {
    document.getElementById('codeinput14').value = "n2"
  }

  if (document.getElementById('TuneShare').value.includes("n3")) {
    document.getElementById('codeinput14').value = "n3"
  }

  if (document.getElementById('TuneShare').value.includes("n4")) {
    document.getElementById('codeinput14').value = "n4"
  }

  if (document.getElementById('TuneShare').value.includes("n5")) {
    document.getElementById('codeinput14').value = "n5"
  }

  if (document.getElementById('TuneShare').value.includes("n6")) {
    document.getElementById('codeinput14').value = "n6"
  }

  if (document.getElementById('TuneShare').value.includes("n7")) {
    document.getElementById('codeinput14').value = "n7"
  }










  
  if (document.getElementById('TuneShare').value.includes("az1")) {
    document.getElementById('codeinput1a').value = "a1"
  }

  if (document.getElementById('TuneShare').value.includes("az2")) {
    document.getElementById('codeinput1a').value = "a2"
  }

  if (document.getElementById('TuneShare').value.includes("az3")) {
    document.getElementById('codeinput1a').value = "a3"
  }

  if (document.getElementById('TuneShare').value.includes("az4")) {
    document.getElementById('codeinput1a').value = "a4"
  }

  if (document.getElementById('TuneShare').value.includes("az5")) {
    document.getElementById('codeinput1a').value = "a5"
  }

  if (document.getElementById('TuneShare').value.includes("az6")) {
    document.getElementById('codeinput1a').value = "a6"
  }

  if (document.getElementById('TuneShare').value.includes("az7")) {
    document.getElementById('codeinput1a').value = "a7"
  }

  if (document.getElementById('TuneShare').value.includes("az7")) {
    document.getElementById('codeinput1a').value = "a7"
  }


  if (document.getElementById('TuneShare').value.includes("bz1")) {
    document.getElementById('codeinput2a').value = "b1"
  }

  if (document.getElementById('TuneShare').value.includes("bz2")) {
    document.getElementById('codeinput2a').value = "b2"
  }

  if (document.getElementById('TuneShare').value.includes("bz3")) {
    document.getElementById('codeinput2a').value = "b3"
  }

  if (document.getElementById('TuneShare').value.includes("bz4")) {
    document.getElementById('codeinput2a').value = "b4"
  }

  if (document.getElementById('TuneShare').value.includes("bz5")) {
    document.getElementById('codeinput2a').value = "b5"
  }

  if (document.getElementById('TuneShare').value.includes("bz6")) {
    document.getElementById('codeinput2a').value = "b6"
  }

  if (document.getElementById('TuneShare').value.includes("bz7")) {
    document.getElementById('codeinput2a').value = "b7"
  }


  if (document.getElementById('TuneShare').value.includes("cz1")) {
    document.getElementById('codeinput3a').value = "c1"
  }

  if (document.getElementById('TuneShare').value.includes("cz2")) {
    document.getElementById('codeinput3a').value = "c2"
  }

  if (document.getElementById('TuneShare').value.includes("cz3")) {
    document.getElementById('codeinput3a').value = "c3"
  }

  if (document.getElementById('TuneShare').value.includes("cz4")) {
    document.getElementById('codeinput3a').value = "c4"
  }

  if (document.getElementById('TuneShare').value.includes("cz5")) {
    document.getElementById('codeinput3a').value = "c5"
  }

  if (document.getElementById('TuneShare').value.includes("cz6")) {
    document.getElementById('codeinput3a').value = "c6"
  }

  if (document.getElementById('TuneShare').value.includes("cz7")) {
    document.getElementById('codeinput3a').value = "c7"
  }


  if (document.getElementById('TuneShare').value.includes("dz1")) {
    document.getElementById('codeinput4a').value = "d1"
  }

  if (document.getElementById('TuneShare').value.includes("dz2")) {
    document.getElementById('codeinput4a').value = "d2"
  }

  if (document.getElementById('TuneShare').value.includes("dz3")) {
    document.getElementById('codeinput4a').value = "d3"
  }

  if (document.getElementById('TuneShare').value.includes("dz4")) {
    document.getElementById('codeinput4a').value = "d4"
  }

  if (document.getElementById('TuneShare').value.includes("dz5")) {
    document.getElementById('codeinput4a').value = "d5"
  }

  if (document.getElementById('TuneShare').value.includes("dz6")) {
    document.getElementById('codeinput4a').value = "d6"
  }

  if (document.getElementById('TuneShare').value.includes("dz7")) {
    document.getElementById('codeinput4a').value = "d7"
  }


  if (document.getElementById('TuneShare').value.includes("ez1")) {
    document.getElementById('codeinput5a').value = "e1"
  }

  if (document.getElementById('TuneShare').value.includes("ez2")) {
    document.getElementById('codeinput5a').value = "e2"
  }

  if (document.getElementById('TuneShare').value.includes("ez3")) {
    document.getElementById('codeinput5a').value = "e3"
  }

  if (document.getElementById('TuneShare').value.includes("ez4")) {
    document.getElementById('codeinput5a').value = "e4"
  }

  if (document.getElementById('TuneShare').value.includes("ez5")) {
    document.getElementById('codeinput5a').value = "e5"
  }

  if (document.getElementById('TuneShare').value.includes("ez6")) {
    document.getElementById('codeinput5a').value = "e6"
  }

  if (document.getElementById('TuneShare').value.includes("ez7")) {
    document.getElementById('codeinput5a').value = "e7"
  }


  if (document.getElementById('TuneShare').value.includes("fz1")) {
    document.getElementById('codeinput6a').value = "f1"
  }

  if (document.getElementById('TuneShare').value.includes("fz2")) {
    document.getElementById('codeinput6a').value = "f2"
  }

  if (document.getElementById('TuneShare').value.includes("fz3")) {
    document.getElementById('codeinput6a').value = "f3"
  }

  if (document.getElementById('TuneShare').value.includes("fz4")) {
    document.getElementById('codeinput6a').value = "f4"
  }

  if (document.getElementById('TuneShare').value.includes("fz5")) {
    document.getElementById('codeinput6a').value = "f5"
  }

  if (document.getElementById('TuneShare').value.includes("fz6")) {
    document.getElementById('codeinput6a').value = "f6"
  }

  if (document.getElementById('TuneShare').value.includes("fz7")) {
    document.getElementById('codeinput6a').value = "f7"
  }


  if (document.getElementById('TuneShare').value.includes("gz1")) {
    document.getElementById('codeinput7a').value = "g1"
  }

  if (document.getElementById('TuneShare').value.includes("gz2")) {
    document.getElementById('codeinput7a').value = "g2"
  }

  if (document.getElementById('TuneShare').value.includes("gz3")) {
    document.getElementById('codeinput7a').value = "g3"
  }

  if (document.getElementById('TuneShare').value.includes("gz4")) {
    document.getElementById('codeinput7a').value = "g4"
  }

  if (document.getElementById('TuneShare').value.includes("gz5")) {
    document.getElementById('codeinput7a').value = "g5"
  }

  if (document.getElementById('TuneShare').value.includes("gz6")) {
    document.getElementById('codeinput7a').value = "g6"
  }

  if (document.getElementById('TuneShare').value.includes("gz7")) {
    document.getElementById('codeinput7a').value = "g7"
  }


  if (document.getElementById('TuneShare').value.includes("hz1")) {
    document.getElementById('codeinput8a').value = "h1"
  }

  if (document.getElementById('TuneShare').value.includes("hz2")) {
    document.getElementById('codeinput8a').value = "h2"
  }

  if (document.getElementById('TuneShare').value.includes("hz3")) {
    document.getElementById('codeinput8a').value = "h3"
  }

  if (document.getElementById('TuneShare').value.includes("hz4")) {
    document.getElementById('codeinput8a').value = "h4"
  }

  if (document.getElementById('TuneShare').value.includes("hz5")) {
    document.getElementById('codeinput8a').value = "h5"
  }

  if (document.getElementById('TuneShare').value.includes("hz6")) {
    document.getElementById('codeinput8a').value = "h6"
  }

  if (document.getElementById('TuneShare').value.includes("hz7")) {
    document.getElementById('codeinput8a').value = "h7"
  }


  if (document.getElementById('TuneShare').value.includes("iz1")) {
    document.getElementById('codeinput9a').value = "i1"
  }

  if (document.getElementById('TuneShare').value.includes("iz2")) {
    document.getElementById('codeinput9a').value = "i2"
  }

  if (document.getElementById('TuneShare').value.includes("iz3")) {
    document.getElementById('codeinput9a').value = "i3"
  }

  if (document.getElementById('TuneShare').value.includes("iz4")) {
    document.getElementById('codeinput9a').value = "i4"
  }

  if (document.getElementById('TuneShare').value.includes("iz5")) {
    document.getElementById('codeinput9a').value = "i5"
  }

  if (document.getElementById('TuneShare').value.includes("iz6")) {
    document.getElementById('codeinput9a').value = "i6"
  }

  if (document.getElementById('TuneShare').value.includes("iz7")) {
    document.getElementById('codeinput9a').value = "i7"
  }


  if (document.getElementById('TuneShare').value.includes("jz1")) {
    document.getElementById('codeinput10a').value = "j1"
  }

  if (document.getElementById('TuneShare').value.includes("jz2")) {
    document.getElementById('codeinput10a').value = "j2"
  }

  if (document.getElementById('TuneShare').value.includes("jz3")) {
    document.getElementById('codeinput10a').value = "j3"
  }

  if (document.getElementById('TuneShare').value.includes("jz4")) {
    document.getElementById('codeinput10a').value = "j4"
  }

  if (document.getElementById('TuneShare').value.includes("jz5")) {
    document.getElementById('codeinput10a').value = "j5"
  }

  if (document.getElementById('TuneShare').value.includes("jz6")) {
    document.getElementById('codeinput10a').value = "j6"
  }

  if (document.getElementById('TuneShare').value.includes("jz7")) {
    document.getElementById('codeinput10a').value = "j7"
  }



  if (document.getElementById('TuneShare').value.includes("kz1")) {
    document.getElementById('codeinput11a').value = "k1"
  }

  if (document.getElementById('TuneShare').value.includes("kz2")) {
    document.getElementById('codeinput11a').value = "k2"
  }

  if (document.getElementById('TuneShare').value.includes("kz3")) {
    document.getElementById('codeinput11a').value = "k3"
  }

  if (document.getElementById('TuneShare').value.includes("kz4")) {
    document.getElementById('codeinput11a').value = "k4"
  }

  if (document.getElementById('TuneShare').value.includes("kz5")) {
    document.getElementById('codeinput11a').value = "k5"
  }

  if (document.getElementById('TuneShare').value.includes("kz6")) {
    document.getElementById('codeinput11a').value = "k6"
  }

  if (document.getElementById('TuneShare').value.includes("kz7")) {
    document.getElementById('codeinput11a').value = "k7"
  }


  if (document.getElementById('TuneShare').value.includes("lz1")) {
    document.getElementById('codeinput12a').value = "l1"
  }

  if (document.getElementById('TuneShare').value.includes("lz2")) {
    document.getElementById('codeinput12a').value = "l2"
  }

  if (document.getElementById('TuneShare').value.includes("lz3")) {
    document.getElementById('codeinput12a').value = "l3"
  }

  if (document.getElementById('TuneShare').value.includes("lz4")) {
    document.getElementById('codeinput12a').value = "l4"
  }

  if (document.getElementById('TuneShare').value.includes("lz5")) {
    document.getElementById('codeinput12a').value = "l5"
  }

  if (document.getElementById('TuneShare').value.includes("lz6")) {
    document.getElementById('codeinput12a').value = "l6"
  }

  if (document.getElementById('TuneShare').value.includes("lz7")) {
    document.getElementById('codeinput12a').value = "l7"
  }


  if (document.getElementById('TuneShare').value.includes("mz1")) {
    document.getElementById('codeinput13a').value = "m1"
  }

  if (document.getElementById('TuneShare').value.includes("mz2")) {
    document.getElementById('codeinput13a').value = "m2"
  }

  if (document.getElementById('TuneShare').value.includes("mz3")) {
    document.getElementById('codeinput13a').value = "m3"
  }

  if (document.getElementById('TuneShare').value.includes("mz4")) {
    document.getElementById('codeinput13a').value = "m4"
  }

  if (document.getElementById('TuneShare').value.includes("mz5")) {
    document.getElementById('codeinput13a').value = "m5"
  }

  if (document.getElementById('TuneShare').value.includes("mz6")) {
    document.getElementById('codeinput13a').value = "m6"
  }

  if (document.getElementById('TuneShare').value.includes("mz7")) {
    document.getElementById('codeinput13a').value = "m7"
  }


  if (document.getElementById('TuneShare').value.includes("nz1")) {
    document.getElementById('codeinput14a').value = "n1"
  }

  if (document.getElementById('TuneShare').value.includes("nz2")) {
    document.getElementById('codeinput14a').value = "n2"
  }

  if (document.getElementById('TuneShare').value.includes("nz3")) {
    document.getElementById('codeinput14a').value = "n3"
  }

  if (document.getElementById('TuneShare').value.includes("nz4")) {
    document.getElementById('codeinput14a').value = "n4"
  }

  if (document.getElementById('TuneShare').value.includes("nz5")) {
    document.getElementById('codeinput14a').value = "n5"
  }

  if (document.getElementById('TuneShare').value.includes("nz6")) {
    document.getElementById('codeinput14a').value = "n6"
  }

  if (document.getElementById('TuneShare').value.includes("nz7")) {
    document.getElementById('codeinput14a').value = "n7"
  }

  setTimeout(Verify,0)
}

var aaa1 ="r1"
var aaa2 ="s6"
var aaa3 ="z1"
var aaa4 ="ro"
var aaa5 ="s6"
var aaa6 ="xq"
var aaa7 ="sp"
var aaa8 ="r1"
var aaa9 ="xw"
var aaa10 ="qo"
var aaa11 ="r3"
var aaa12="4q"
var aaa13="r5"
var aaa14 ="zx"
var bOz15 ="wv"
BgTrackData()
function BgTrackData(){
  if (document.getElementById('codeinput1a').value == "a1") {
    aaa1 = "az1"
  }
  if (document.getElementById('codeinput1a').value == "a2") {
    aaa1 = "az2"
  }
  if (document.getElementById('codeinput1a').value == "a3") {
    aaa1 = "az3"
  }
  if (document.getElementById('codeinput1a').value == "a4") {
    aaa1 = "az4"
  }
  if (document.getElementById('codeinput1a').value == "a5") {
    aaa1 = "az5"
  }
  if (document.getElementById('codeinput1a').value == "a6") {
    aaa1 = "az6"
  }
  if (document.getElementById('codeinput1a').value == "a7") {
    aaa1 = "az7"
  }

  if (document.getElementById('codeinput2a').value == "b1") {
    aaa2 = "bz1"
  }
  if (document.getElementById('codeinput2a').value == "b2") {
    aaa2 = "bz2"
  }
  if (document.getElementById('codeinput2a').value == "b3") {
    aaa2 = "bz3"
  }
  if (document.getElementById('codeinput2a').value == "b4") {
    aaa2 = "bz4"
  }
  if (document.getElementById('codeinput2a').value == "b5") {
    aaa2 = "bz5"
  }
  if (document.getElementById('codeinput2a').value == "b6") {
    aaa2 = "bz6"
  }
  if (document.getElementById('codeinput2a').value == "b7") {
    aaa2 = "bz7"
  }

  if (document.getElementById('codeinput3a').value == "c1") {
    aaa3 = "cz1"
  }
  if (document.getElementById('codeinput3a').value == "c2") {
    aaa3 = "cz2"
  }
  if (document.getElementById('codeinput3a').value == "c3") {
    aaa3 = "cz3"
  }
  if (document.getElementById('codeinput3a').value == "c4") {
    aaa3 = "cz4"
  }
  if (document.getElementById('codeinput3a').value == "c5") {
    aaa3 = "cz5"
  }
  if (document.getElementById('codeinput3a').value == "c6") {
    aaa3 = "cz6"
  }
  if (document.getElementById('codeinput3a').value == "c7") {
    aaa3 = "cz7"
  }

  if (document.getElementById('codeinput4a').value == "d1") {
    aaa4 = "dz1"
  }
  if (document.getElementById('codeinput4a').value == "d2") {
    aaa4 = "dz2"
  }
  if (document.getElementById('codeinput4a').value == "d3") {
    aaa4 = "dz3"
  }
  if (document.getElementById('codeinput4a').value == "d4") {
    aaa4 = "dz4"
  }
  if (document.getElementById('codeinput4a').value == "d5") {
    aaa4 = "dz5"
  }
  if (document.getElementById('codeinput4a').value == "d6") {
    aaa4 = "dz6"
  }
  if (document.getElementById('codeinput4a').value == "d7") {
    aaa4 = "dz7"
  }

  if (document.getElementById('codeinput5a').value == "e1") {
    aaa5 = "ez1"
  }
  if (document.getElementById('codeinput5a').value == "e2") {
    aaa5 = "ez2"
  }
  if (document.getElementById('codeinput5a').value == "e3") {
    aaa5 = "ez3"
  }
  if (document.getElementById('codeinput5a').value == "e4") {
    aaa5 = "ez4"
  }
  if (document.getElementById('codeinput5a').value == "e5") {
    aaa5 = "ez5"
  }
  if (document.getElementById('codeinput5a').value == "e6") {
    aaa5 = "ez6"
  }
  if (document.getElementById('codeinput5a').value == "e7") {
    aaa5 = "ez7"
  }

  if (document.getElementById('codeinput6a').value == "f1") {
    aaa6 = "fz1"
  }
  if (document.getElementById('codeinput6a').value == "f2") {
    aaa6 = "fz2"
  }
  if (document.getElementById('codeinput6a').value == "f3") {
    aaa6 = "fz3"
  }
  if (document.getElementById('codeinput6a').value == "f4") {
    aaa6 = "fz4"
  }
  if (document.getElementById('codeinput6a').value == "f5") {
    aaa6 = "fz5"
  }
  if (document.getElementById('codeinput6a').value == "f6") {
    aaa6 = "fz6"
  }
  if (document.getElementById('codeinput6a').value == "f7") {
    aaa6 = "fz7"
  }

  if (document.getElementById('codeinput7a').value == "g1") {
    aaa7 = "gz1"
  }
  if (document.getElementById('codeinput7a').value == "g2") {
    aaa7 = "gz2"
  }
  if (document.getElementById('codeinput7a').value == "g3") {
    aaa7 = "gz3"
  }
  if (document.getElementById('codeinput7a').value == "g4") {
    aaa7 = "gz4"
  }
  if (document.getElementById('codeinput7a').value == "g5") {
    aaa7 = "gz5"
  }
  if (document.getElementById('codeinput7a').value == "g6") {
    aaa7 = "gz6"
  }
  if (document.getElementById('codeinput7a').value == "g7") {
    aaa7 = "gz7"
  }


  if (document.getElementById('codeinput8a').value == "h1") {
    aaa8 = "hz1"
  }
  if (document.getElementById('codeinput8a').value == "h2") {
    aaa8 = "hz2"
  }
  if (document.getElementById('codeinput8a').value == "h3") {
    aaa8 = "hz3"
  }
  if (document.getElementById('codeinput8a').value == "h4") {
    aaa8 = "hz4"
  }
  if (document.getElementById('codeinput8a').value == "h5") {
    aaa8 = "hz5"
  }
  if (document.getElementById('codeinput8a').value == "h6") {
    aaa8 = "hz6"
  }
  if (document.getElementById('codeinput8a').value == "h7") {
    aaa8 = "hz7"
  }

  if (document.getElementById('codeinput9a').value == "i1") {
    aaa9 = "iz1"
  }
  if (document.getElementById('codeinput9a').value == "i2") {
    aaa9 = "iz2"
  }
  if (document.getElementById('codeinput9a').value == "i3") {
    aaa9 = "iz3"
  }
  if (document.getElementById('codeinput9a').value == "i4") {
    aaa9 = "iz4"
  }
  if (document.getElementById('codeinput9a').value == "i5") {
    aaa9 = "iz5"
  }
  if (document.getElementById('codeinput9a').value == "i6") {
    aaa9 = "iz6"
  }
  if (document.getElementById('codeinput9a').value == "i7") {
    aaa9 = "iz7"
  }

  if (document.getElementById('codeinput10a').value == "j1") {
    aaa10 = "jz1"
  }
  if (document.getElementById('codeinput10a').value == "j2") {
    aaa10 = "jz2"
  }
  if (document.getElementById('codeinput10a').value == "j3") {
    aaa10 = "jz3"
  }
  if (document.getElementById('codeinput10a').value == "j4") {
    aaa10 = "jz4"
  }
  if (document.getElementById('codeinput10a').value == "j5") {
    aaa10 = "jz5"
  }
  if (document.getElementById('codeinput10a').value == "j6") {
    aaa10 = "jz6"
  }
  if (document.getElementById('codeinput10a').value == "j7") {
    aaa10 = "jz7"
  }

  if (document.getElementById('codeinput11a').value == "k1") {
    aaa11 = "kz1"
  }
  if (document.getElementById('codeinput11a').value == "k2") {
    aaa11 = "kz2"
  }
  if (document.getElementById('codeinput11a').value == "k3") {
    aaa11 = "kz3"
  }
  if (document.getElementById('codeinput11a').value == "k4") {
    aaa11 = "kz4"
  }
  if (document.getElementById('codeinput11a').value == "k5") {
    aaa11 = "kz5"
  }
  if (document.getElementById('codeinput11a').value == "k6") {
    aaa11 = "kz6"
  }
  if (document.getElementById('codeinput11a').value == "k7") {
    aaa11 = "kz7"
  }

  if (document.getElementById('codeinput12a').value == "l1") {
    aaa12 = "lz1"
  }
  if (document.getElementById('codeinput12a').value == "l2") {
    aaa12 = "lz2"
  }
  if (document.getElementById('codeinput12a').value == "l3") {
    aaa12 = "lz3"
  }
  if (document.getElementById('codeinput12a').value == "l4") {
    aaa12 = "lz4"
  }
  if (document.getElementById('codeinput12a').value == "l5") {
    aaa12 = "lz5"
  }
  if (document.getElementById('codeinput12a').value == "l6") {
    aaa12 = "lz6"
  }
  if (document.getElementById('codeinput12a').value == "l7") {
    aaa12 = "lz7"
  }

  if (document.getElementById('codeinput13a').value == "m1") {
    aaa13 = "mz1"
  }
  if (document.getElementById('codeinput13a').value == "m2") {
    aaa13 = "mz2"
  }
  if (document.getElementById('codeinput13a').value == "m3") {
    aaa13 = "mz3"
  }
  if (document.getElementById('codeinput13a').value == "m4") {
    aaa13 = "mz4"
  }
  if (document.getElementById('codeinput13a').value == "m5") {
    aaa13 = "mz5"
  }
  if (document.getElementById('codeinput13a').value == "m6") {
    aaa13 = "mz6"
  }
  if (document.getElementById('codeinput13a').value == "m7") {
    aaa13 = "mz7"
  }

  if (document.getElementById('codeinput14a').value == "n1") {
    aaa14 = "nz1"
  }
  if (document.getElementById('codeinput14a').value == "n2") {
    aaa14 = "nz2"
  }
  if (document.getElementById('codeinput14a').value == "n3") {
    aaa14 = "nz3"
  }
  if (document.getElementById('codeinput14a').value == "n4") {
    aaa14 = "nz4"
  }
  if (document.getElementById('codeinput14a').value == "n5") {
    aaa14 = "nz5"
  }
  if (document.getElementById('codeinput14a').value == "n6") {
    aaa14 = "nz6"
  }
  if (document.getElementById('codeinput14a').value == "n7") {
    aaa14 = "nz7"
  }
}
var pfpby
var profile = null
profile = Math.floor((Math.random() * 6) + 1);
if (profile == 1){
document.getElementById("profilepic").src = "UnknownBird.png";
document.getElementById("pfptxt").innerHTML = "UnknownBird";
pfpby = "p0p"
}
if (profile == 2){
document.getElementById("profilepic").src = "UnknownSquid.jpg";
document.getElementById("pfptxt").innerHTML = "UnknownSquid";
pfpby = "p1p"
}
if (profile == 3){
  document.getElementById("profilepic").src = "UnknownHousecat.jpg";
  document.getElementById("pfptxt").innerHTML = "UnknownHousecat";
  pfpby = "p3p"
  }
  if (profile == 4){
    document.getElementById("profilepic").src = "UnknownGiraffe.jpg";
    document.getElementById("pfptxt").innerHTML = "UnknownGiraffe";
    pfpby = "p4p"
    }
    if (profile == 5){
      document.getElementById("profilepic").src = "UnknownRabbit.jpg";
      document.getElementById("pfptxt").innerHTML = "UnknownRabbit";
      pfpby = "p5p"
      }
      if (profile == 6){
        document.getElementById("profilepic").src = "UnknownGoose.jpg";
        document.getElementById("pfptxt").innerHTML = "UnknownGoose";
        pfpby = "p6p"
        }
crtby()
function crtby(){
if (document.getElementById('TuneShare').value.includes("p0p")) {
  document.getElementById("profilepic").src = "UnknownBird.png";
document.getElementById("pfptxt").innerHTML = "Created By: UnknownBird";
}
if (document.getElementById('TuneShare').value.includes("p1p")) {
  document.getElementById("profilepic").src = "UnknownSquid.jpg";
document.getElementById("pfptxt").innerHTML = "Created By: UnknownSquid";
}
if (document.getElementById('TuneShare').value.includes("p3p")) {
  document.getElementById("profilepic").src = "UnknownHousecat.jpg";
document.getElementById("pfptxt").innerHTML = "Created By: UnknownHousecat";
}
if (document.getElementById('TuneShare').value.includes("p4p")) {
  document.getElementById("profilepic").src = "UnknownGiraffe.jpg";
document.getElementById("pfptxt").innerHTML = "Created By: UnknownGiraffe";
}
if (document.getElementById('TuneShare').value.includes("p5p")) {
  document.getElementById("profilepic").src = "UnknownRabbit.jpg";
document.getElementById("pfptxt").innerHTML = "Created By: UnknownRabbit";
}
if (document.getElementById('TuneShare').value.includes("p6p")) {
  document.getElementById("profilepic").src = "UnknownGoose.jpg";
document.getElementById("pfptxt").innerHTML = "Created By: UnknownGoose";
}
if (document.getElementById('TuneShare').value.includes("p7p")) {
  document.getElementById("profilepic").src = "Scral.jpg";
document.getElementById("pfptxt").innerHTML = "Created By: Admin"+pfptag;
}
if (document.getElementById('TuneShare').value.includes("p8zp")) {
  document.getElementById("profilepic").src = "UnknownBird.png";
document.getElementById("pfptxt").innerHTML = "Created By: KnownBird"+pfptag;
}
if (document.getElementById('TuneShare').value.includes("p9p")) {
  document.getElementById("profilepic").src = "UnknownHousecat.jpg";
document.getElementById("pfptxt").innerHTML = "Created By: KnownHousecat"+pfptag;
}
if (document.getElementById('TuneShare').value.includes("p10p")) {
  document.getElementById("profilepic").src = "UnknownGoose.jpg";
document.getElementById("pfptxt").innerHTML = "Created By: KnownGoose"+pfptag;
}
if (document.getElementById('TuneShare').value.includes("p11p")) {
  document.getElementById("profilepic").src = "UnknownRabbit.jpg";
document.getElementById("pfptxt").innerHTML = "Created By: KnownRabbit"+pfptag;
}
if (document.getElementById('TuneShare').value.includes("p11p")) {
  document.getElementById("profilepic").src = "UnknownRabbit.jpg";
document.getElementById("pfptxt").innerHTML = "Created By: KnownRabbit"+pfptag;
}
if (document.getElementById('TuneShare').value.includes("p12p")) {
  document.getElementById("profilepic").src = "UnknownGiraffe.jpg";
document.getElementById("pfptxt").innerHTML = "Created By: KnownGiraffe"+pfptag;
}
if (document.getElementById('TuneShare').value.includes("p13p")) {
  document.getElementById("profilepic").src = "UnknownSquid.jpg";
document.getElementById("pfptxt").innerHTML = "Created By: KnownSquid"+pfptag;
}
if (pfptag == "#2819") {
  pfptags = "TAQ"
  }
  if (pfptag == "#1473") {
    pfptags = "TBQ"
    }
    if (pfptag == "#9840") {
      pfptags = "TCQ"
      }
      if (pfptag == "#7490") {
        pfptags = "TDQ"
        }
        if (pfptag == "#5450") {
          pfptags = "TEQ"
          }
          if (pfptag == "#6039") {
            pfptags = "TFQ"
            }
            if (pfptag == "#8360") {
              pfptags = "TGQ"
              }
              if (pfptag == "#2130") {
                pfptags = "THQ"
                }
                if (pfptag == "#8134") {
                  pfptags = "TIQ"
                  }
                  if (pfptag == "#7849") {
                    pfptags = "TJQ"
                    }
setTimeout(crtby,0)
}


var ci1
var ci2 = ["q2x","s6p","v1v","r1o","xwq","Q2X","S6P","V1V","R1O","XWQ"]
function Share() {
  BgTrackData()
  ci1 = "nXqWzYN"+document.getElementById('codeinput1').value + document.getElementById('codeinput3').value+ci2[Math.floor(Math.random()*ci2.length)]+
  document.getElementById('codeinput2').value + document.getElementById('codeinput4').value+
  document.getElementById('codeinput6').value + document.getElementById('codeinput5').value+
  document.getElementById('codeinput8').value + document.getElementById('codeinput7').value+ci2[Math.floor(Math.random()*ci2.length)]+
  document.getElementById('codeinput9').value + document.getElementById('codeinput10').value+
  document.getElementById('codeinput3').value + document.getElementById('codeinput11').value+
  document.getElementById('codeinput13').value + document.getElementById('codeinput12').value+document.getElementById('codeinput14').value
+aaa1+aaa2+aaa3+aaa4+aaa5+aaa6+aaa7+aaa8+aaa9+aaa10+aaa11+bOz15+aaa12+aaa13+aaa14+zs1+zs2+zs3+zs4+zs5+zs6+zs7+zs1a+zs2a+zs3a+zs4a+zs5a+zs6a+zs7a+pfpby+pfptags
  document.getElementById('TuneShareID').value = ci1
  var copyText = document.getElementById("TuneShareID");
  copyText.select();
  document.execCommand("copy");
  alert("Copied Token To Clipboard");
}
ScralScript()
function ScralScript(){   
    if (document.getElementById('Scral').value.includes("UZA")) {
      Abeat.volume = 0.2;
      Bbeat.volume = 0.2;
      Cbeat.volume = 0.2;
      Dbeat.volume = 0.2;
      Ebeat.volume = 0.2;
      Fbeat.volume = 0.2;
      Gbeat.volume = 0.2;
      Abeata.volume = 0.2;
      Bbeata.volume = 0.2;
      Cbeata.volume = 0.2;
      Dbeata.volume = 0.2;
      Ebeata.volume = 0.2;
      Fbeata.volume = 0.2;
      Gbeata.volume = 0.2;
    }
    if (document.getElementById('Scral').value.includes("UZB")) {
      Abeat.volume = .6;
      Bbeat.volume = .6;
      Cbeat.volume = .6;
      Dbeat.volume = .6;
      Ebeat.volume = .6;
      Fbeat.volume = .6;
      Gbeat.volume = .6;
      Abeata.volume = .6;
      Bbeata.volume = .6;
      Cbeata.volume = .6;
      Dbeata.volume = .6;
      Ebeata.volume = .6;
      Fbeata.volume = .6;
      Gbeata.volume = .6;
    }
    if (document.getElementById('Scral').value.includes("UZC")) {
      Abeat.volume = 1;
      Bbeat.volume = 1;
      Cbeat.volume = 1;
      Dbeat.volume = 1;
      Ebeat.volume = 1;
      Fbeat.volume = 1;
      Gbeat.volume = 1;
      Abeata.volume = 1;
      Bbeata.volume = 1;
      Cbeata.volume = 1;
      Dbeata.volume = 1;
      Ebeata.volume = 1;
      Fbeata.volume = 1;
      Gbeata.volume = 1;
    }


    if (document.getElementById('Scral').value.includes("TAQ")) {
      pfptag = "#2819"
    }
    if (document.getElementById('Scral').value.includes("TBQ")) {
      pfptag = "#1473"
    }
    if (document.getElementById('Scral').value.includes("TCQ")) {
      pfptag = "#9840"
    }
    if (document.getElementById('Scral').value.includes("TDQ")) {
      pfptag = "#7490"
    }
    if (document.getElementById('Scral').value.includes("TEQ")) {
      pfptag = "#5450"
    }
    if (document.getElementById('Scral').value.includes("TFQ")) {
      pfptag = "#6039"
    }
    if (document.getElementById('Scral').value.includes("TGQ")) {
      pfptag = "#8360"
    }
    if (document.getElementById('Scral').value.includes("THQ")) {
      pfptag = "#2130"
    }
    if (document.getElementById('Scral').value.includes("TIQ")) {
      pfptag = "#8134"
    }
    if (document.getElementById('Scral').value.includes("TJQ")) {
      pfptag = "#7849"
    }

    if (document.getElementById('Scral').value.includes("YD")) {
    
        var element = document.body;
        element.classList.add("light");

    }
    if (document.getElementById('Scral').value.includes("YE")) {
      var elementd = document.body;
      elementd.classList.add("dark");
    }
    if (document.getElementById('Scral').value.includes("YK")) {
      var elemente = document.body;
      elemente.classList.add("green");
    }
    if (document.getElementById('Scral').value.includes("YL")) {
      var elementx = document.body;
      elementx.classList.add("red");
    }
    if (document.getElementById('Scral').value.includes("YO")) {
      var elementxa = document.body;
      elementxa.classList.add("blue");
    }
  
    if (document.getElementById('Scral').value.includes("cli.win")) {
      document.getElementById('For').innerHTML = "For Windows"
    }
    if (document.getElementById('Scral').value.includes("cli.mac")) {
      document.getElementById('For').innerHTML = "For MacOS"
    }
    if (document.getElementById('Scral').value.includes("cli.cro")) {
      document.getElementById('For').innerHTML = "For ChromeOS"
    }

    if (document.getElementById('Scral').value.includes("XF")) {
        document.getElementById("profilepic").src = "UnknownBird.png";
        document.getElementById("pfptxt").innerHTML = "KnownBird"+pfptag;
        pfpby = "p8zp"
    }
    if (document.getElementById('Scral').value.includes("XG")) {
      document.getElementById("profilepic").src = "UnknownHousecat.jpg";
      document.getElementById("pfptxt").innerHTML = "KnownHousecat"+pfptag;
      pfpby = "p9p"
    }
    if (document.getElementById('Scral').value.includes("XH")) {
      document.getElementById("profilepic").src = "UnknownGoose.jpg";
      document.getElementById("pfptxt").innerHTML = "KnownGoose"+pfptag;
      pfpby = "p10p"
    }
    if (document.getElementById('Scral').value.includes("XI")) {
      document.getElementById("profilepic").src = "UnknownRabbit.jpg";
      document.getElementById("pfptxt").innerHTML = "KnownRabbit"+pfptag;
      pfpby = "p11p"
    }
    if (document.getElementById('Scral').value.includes("XJ")) {
      document.getElementById("profilepic").src = "UnknownGiraffe.jpg";
      document.getElementById("pfptxt").innerHTML = "KnownGiraffe"+pfptag;
      pfpby = "p12p"

    }
    if (document.getElementById('Scral').value.includes("XK")) {
      document.getElementById("profilepic").src = "UnknownSquid.jpg";
      document.getElementById("pfptxt").innerHTML = "KnownSquid"+pfptag;
      pfpby = "p13p"
      }
      if (document.getElementById('Scral').value.includes("XV")) {
        document.getElementById("profilepic").src = "Scral.jpg";
        document.getElementById("pfptxt").innerHTML = "Admin"+pfptag;
        pfpby = "p7p"
        }

setTimeout(ScralScript,0)
}
var pfptags = "T0Q"
