let froit = ['olma', 'shaftoli', 'banan', 'gilos',]
alert(`Boshlanishida Arryning uzunligi ${froit.length} `)
let tasdiq = confirm("sizning arrayingizdan malumolarni olib tashlamoqchimiz")
if (tasdiq === true){
    froit.pop();
    alert(`sizda arrayda qoldi:${froit.length} ta`)
}
else{
    alert(`Sizda array qoldi: ${froit.length}`)
}
