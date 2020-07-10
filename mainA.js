var LoopBooleanVAR = false

function LoopBooleanCheck() {
  setTimeout(LoopBoolean, 4700)
}

function LoopBooleanCheckStartUp() {
  setTimeout(LoopBoolean, 0)
}

function LoopBoolean() {
  if (LoopBooleanVAR == true) {
    if (LoopBooleanVAR == true) {
      Wait0()
    }

  }
  setTimeout(LoopBooleanCheck, 0)
}

function LoopBreak() {
  Stop()
  LoopBooleanVAR = false
}

function LoopStart() {
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

function Wait0() {
  setTimeout(Wait0a, 220)
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
  setTimeout(Wait1, 330)
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
  setTimeout(Wait2, 330)
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

  setTimeout(Wait3, 330)
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
  setTimeout(Wait4, 330)
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
  setTimeout(Wait5, 330)
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
  setTimeout(Wait6, 330)
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
  setTimeout(Wait7, 330)
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
  setTimeout(Wait8, 330)
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
  setTimeout(Wait9, 330)
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
  setTimeout(Wait10, 330)
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
  setTimeout(Wait11, 330)
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
  setTimeout(Wait12, 330)
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
  setTimeout(Wait13, 330)
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
    Abeat.play()
    aa = "A1"
  }
  if (document.getElementById('codeinput1a').value == "a2") {
    Bbeat.play()
    aa = "A2"
  }
  if (document.getElementById('codeinput1a').value == "a3") {
    Cbeat.play()
    aa = "A3"
  }
  if (document.getElementById('codeinput1a').value == "a4") {
    Dbeat.play()
    aa = "A4"
  }
  if (document.getElementById('codeinput1a').value == "a5") {
    Ebeat.play()
    aa = "A5"
  }
  if (document.getElementById('codeinput1a').value == "a6") {
    Fbeat.play()
    aa = "A6"
  }
  if (document.getElementById('codeinput1a').value == "a7") {
    Gbeat.play()
    aa = "A7"
  }
  setTimeout(Wait1a, 330)
}

function Wait1a() {
  if (document.getElementById('codeinput2a').value == "b1") {
    Abeat.play()
    bb = "B1"
  }
  if (document.getElementById('codeinput2a').value == "b2") {
    Bbeat.play()
    bb = "B2"
  }
  if (document.getElementById('codeinput2a').value == "b3") {
    Cbeat.play()
    bb = "B3"
  }
  if (document.getElementById('codeinput2a').value == "b4") {
    Dbeat.play()
    bb = "B4"
  }
  if (document.getElementById('codeinput2a').value == "b5") {
    Ebeat.play()
    bb = "B5"
  }
  if (document.getElementById('codeinput2a').value == "b6") {
    Fbeat.play()
    bb = "B6"
  }
  if (document.getElementById('codeinput2a').value == "b7") {
    Gbeat.play()
    bb = "B7"
  }
  setTimeout(Wait2a, 330)
}

function Wait2a() {
  if (document.getElementById('codeinput3a').value == "c1") {
    Abeat.play()
    cc = "C1"
  }
  if (document.getElementById('codeinput3a').value == "c2") {
    Bbeat.play()
    cc = "C2"
  }
  if (document.getElementById('codeinput3a').value == "c3") {
    Cbeat.play()
    cc = "C3"
  }
  if (document.getElementById('codeinput3a').value == "c4") {
    Dbeat.play()
    cc = "C4"
  }
  if (document.getElementById('codeinput3a').value == "c5") {
    Ebeat.play()
    cc = "C5"
  }
  if (document.getElementById('codeinput3a').value == "c6") {
    Fbeat.play()
    cc = "C6"
  }
  if (document.getElementById('codeinput3a').value == "c7") {
    Gbeat.play()
    aa = "C7"
  }

  setTimeout(Wait3a, 330)
}

function Wait3a() {
  if (document.getElementById('codeinput4a').value == "d1") {
    Abeat.play()
    dd = "D1"
  }
  if (document.getElementById('codeinput4a').value == "d2") {
    Bbeat.play()
    dd = "D2"
  }
  if (document.getElementById('codeinput4a').value == "d3") {
    Cbeat.play()
    dd = "D3"
  }
  if (document.getElementById('codeinput4a').value == "d4") {
    Dbeat.play()
    dd = "D4"
  }
  if (document.getElementById('codeinput4a').value == "d5") {
    Ebeat.play()
    dd = "D5"

  }
  if (document.getElementById('codeinput4a').value == "d6") {
    Fbeat.play()
    dd = "D6"

  }
  if (document.getElementById('codeinput4a').value == "d7") {
    Gbeat.play()
    aa = "B7"
  }
  setTimeout(Wait4a, 330)
}

function Wait4a() {
  if (document.getElementById('codeinput5a').value == "e1") {
    Abeat.play()
    ee = "E1"
  }
  if (document.getElementById('codeinput5a').value == "e2") {
    Bbeat.play()
    ee = "E2"
  }
  if (document.getElementById('codeinput5a').value == "e3") {
    ee = "E3"
  }
  if (document.getElementById('codeinput5a').value == "e4") {
    Dbeat.play()
    ee = "E4"
  }
  if (document.getElementById('codeinput5a').value == "e5") {
    Ebeat.play()
    ee = "E5"
  }
  if (document.getElementById('codeinput5a').value == "e6") {
    Fbeat.play()
    ee = "E6"
  }
  if (document.getElementById('codeinput5a').value == "e7") {
    Gbeat.play()
    ee = "E7"
  }
  setTimeout(Wait5a, 330)
}

function Wait5a() {
  if (document.getElementById('codeinput6a').value == "f1") {
    Abeat.play()
    ff = "F1"
  }
  if (document.getElementById('codeinput6a').value == "f2") {
    Bbeat.play()
    ff = "F2"
  }
  if (document.getElementById('codeinput6a').value == "f3") {
    Cbeat.play()
    ff = "F3"
  }
  if (document.getElementById('codeinput6a').value == "f4") {
    Dbeat.play()
    ff = "F4"
  }
  if (document.getElementById('codeinput6a').value == "f5") {
    Ebeat.play()
    ff = "F5"
  }
  if (document.getElementById('codeinput6a').value == "f6") {
    Fbeat.play()
    ff = "F6"
  }
  if (document.getElementById('codeinput6a').value == "f7") {
    Gbeat.play()
    ff = "F7"
  }
  setTimeout(Wait6a, 330)
}

function Wait6a() {
  if (document.getElementById('codeinput7a').value == "g1") {
    Abeat.play()
    gg = "G1"
  }
  if (document.getElementById('codeinput7a').value == "g2") {
    Bbeat.play()
    gg = "G2"
  }
  if (document.getElementById('codeinput7a').value == "g3") {
    Cbeat.play()
    gg = "G3"
  }
  if (document.getElementById('codeinput7a').value == "g4") {
    Dbeat.play()
    gg = "G4"
  }
  if (document.getElementById('codeinput7a').value == "g5") {
    Ebeat.play()
    gg = "G5"
  }
  if (document.getElementById('codeinput7a').value == "g6") {
    Fbeat.play()
    gg = "G6"
  }
  if (document.getElementById('codeinput7a').value == "g7") {
    Gbeat.play()
    gg = "G7"
  }
  setTimeout(Wait7a, 330)
}

function Wait7a() {
  if (document.getElementById('codeinput8a').value == "h1") {
    Abeat.play()
    hh = "H1"
  }
  if (document.getElementById('codeinput8a').value == "h2") {
    Bbeat.play()
    hh = "H2"
  }
  if (document.getElementById('codeinput8a').value == "h3") {
    Cbeat.play()
    hh = "H3"
  }
  if (document.getElementById('codeinput8a').value == "h4") {
    Dbeat.play()
    hh = "H4"
  }
  if (document.getElementById('codeinput8a').value == "h5") {
    Ebeat.play()
    hh = "H5"
  }
  if (document.getElementById('codeinput8a').value == "h6") {
    Fbeat.play()
    hh = "H6"
  }
  if (document.getElementById('codeinput8a').value == "h7") {
    Gbeat.play()
    hh = "H7"
  }
  setTimeout(Wait8a, 330)
}

function Wait8a() {
  if (document.getElementById('codeinput9a').value == "i1") {
    Abeat.play()
    ii = "I1"
  }
  if (document.getElementById('codeinput9a').value == "i2") {
    Bbeat.play()
    ii = "I2"
  }
  if (document.getElementById('codeinput9a').value == "i3") {
    Cbeat.play()
    ii = "I3"
  }
  if (document.getElementById('codeinput9a').value == "i4") {
    Dbeat.play()
    ii = "I4"
  }
  if (document.getElementById('codeinput9a').value == "i5") {
    Ebeat.play()
    ii = "I5"
  }
  if (document.getElementById('codeinput9a').value == "i6") {
    Fbeat.play()
    ii = "I6"
  }
  if (document.getElementById('codeinput9a').value == "i7") {
    Gbeat.play()
    ii = "I7"
  }
  setTimeout(Wait9a, 330)
}

function Wait9a() {
  if (document.getElementById('codeinput10a').value == "j1") {
    Abeat.play()
    jj = "J1"
  }
  if (document.getElementById('codeinput10a').value == "j2") {
    Bbeat.play()
    jj = "J2"
  }
  if (document.getElementById('codeinput10a').value == "j3") {
    Cbeat.play()
    jj = "J3"
  }
  if (document.getElementById('codeinput10a').value == "j4") {
    Dbeat.play()
    jj = "J4"
  }
  if (document.getElementById('codeinput10a').value == "j5") {
    Ebeat.play()
    jj = "J5"
  }
  if (document.getElementById('codeinput10a').value == "j6") {
    Fbeat.play()
    jj = "J6"
  }
  if (document.getElementById('codeinput10a').value == "j7") {
    Gbeat.play()
    jj = "J7"
  }
  setTimeout(Wait10a, 330)
}

function Wait10a() {
  if (document.getElementById('codeinput11a').value == "k1") {
    Abeat.play()
    kk = "K1"
  }
  if (document.getElementById('codeinput11a').value == "k2") {
    Bbeat.play()
    kk = "K2"
  }
  if (document.getElementById('codeinput11a').value == "k3") {
    Cbeat.play()
    kk = "K3"
  }
  if (document.getElementById('codeinput11a').value == "k4") {
    Dbeat.play()
    kk = "K4"
  }
  if (document.getElementById('codeinput11a').value == "k5") {
    Ebeat.play()
    kk = "K5"
  }
  if (document.getElementById('codeinput11a').value == "k6") {
    Fbeat.play()
    kk = "K6"
  }
  if (document.getElementById('codeinput11a').value == "k7") {
    Gbeat.play()
    kk = "K7"
  }
  setTimeout(Wait11a, 330)
}

function Wait11a() {
  if (document.getElementById('codeinput12a').value == "l1") {
    Abeat.play()
    ll = "L1"
  }
  if (document.getElementById('codeinput12a').value == "l2") {
    Bbeat.play()
    ll = "L2"
  }
  if (document.getElementById('codeinput12a').value == "l3") {
    Cbeat.play()
    ll = "L3"
  }
  if (document.getElementById('codeinput12a').value == "l4") {
    Dbeat.play()
    ll = "L4"
  }
  if (document.getElementById('codeinput12a').value == "l5") {
    Ebeat.play()
    ll = "L5"
  }
  if (document.getElementById('codeinput12a').value == "l6") {
    Fbeat.play()
    ll = "L6"
  }
  if (document.getElementById('codeinput12a').value == "l7") {
    Gbeat.play()
    ll = "L7"
  }
  setTimeout(Wait12a, 330)
}

function Wait12a() {
  if (document.getElementById('codeinput13a').value == "m1") {
    Abeat.play()
    mm = "M1"
  }
  if (document.getElementById('codeinput13a').value == "m2") {
    Bbeat.play()
    mm = "M2"
  }
  if (document.getElementById('codeinput13a').value == "m3") {
    Cbeat.play()
    mm = "M3"
  }
  if (document.getElementById('codeinput13a').value == "m4") {
    Dbeat.play()
    mm = "M4"
  }
  if (document.getElementById('codeinput13a').value == "m5") {
    Ebeat.play()
    mm = "M5"
  }
  if (document.getElementById('codeinput13a').value == "m6") {
    Fbeat.play()
    mm = "M6"
  }
  if (document.getElementById('codeinput13a').value == "m7") {
    Gbeat.play()
    mm = "M7"
  }
  setTimeout(Wait13a, 330)
}

function Wait13a() {
  if (document.getElementById('codeinput14a').value == "n1") {
    Abeat.play()
    nn = "N1"
  }
  if (document.getElementById('codeinput14a').value == "n2") {
    Bbeat.play()
    nn = "N2"
  }
  if (document.getElementById('codeinput14a').value == "n3") {
    Cbeat.play()
    nn = "N3"
  }
  if (document.getElementById('codeinput14a').value == "n4") {
    Dbeat.play()
    nn = "N4"
  }
  if (document.getElementById('codeinput14a').value == "n5") {
    Ebeat.play()
    nn = "N5"
  }
  if (document.getElementById('codeinput14a').value == "n6") {
    Fbeat.play()
    nn = "N6"
  }
  if (document.getElementById('codeinput14a').value == "n7") {
    Gbeat.play()
    nn = "N7"
  }
}
