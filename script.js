function tabuada() {
    var inicio = document.getElementById('txtinicio')
    var tab = document.getElementById('seltab')
    var i = Number(inicio.value)
    var con = 1
    
   if (inicio.value.length == 0) {
        window.alert('Falta o Valor')
        
    } else { 
        
        //res.innerHTML = `Tabuada do <strong><font size=5 em>${i}</font></strong>`

        tab.innerHTML = ''
   
        for (var c = i ; con <= 10 ; con++) {
            var item = document.createElement('option')
            //tab.innerHTML += `${c} x ${con} = ${con * c} `
            item.text += `${c} x ${con} = ${con * c}`
            tab.appendChild(item)
            
        }
    }
}