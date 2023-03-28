class Calculadora{
    limpiar(){
        let d=document
        d.getElementById('result').value=""
        d.getElementById('result').textContent=""
    }

    isBuscado(frase,bus){
        let pos=0,enc=0
        while(pos<frase.length && enc==0){
            if (frase[pos]==bus){
               enc=1
            }else{
                pos+=1
            }
        }
        if (enc == 1){
            return pos
        }else{
            return -1
        }
    }
    buscaArreglo(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = cadena.split(",")
        console.log($input)
        console.log(cadena)
        console.log(arreglo)
        let buscado=prompt("Ingrese dato a buscar")
        let pos = this.isBuscado(arreglo,buscado)
        if (pos >= 0){
            $input.value=`[${arreglo}] - ${buscado} se encuentra en la posicion: ${pos}`
        }else{
            $input.value=`[${arreglo}] - ${buscado} no se encuentra en el arreglo`
        } 
        
    }   
     isPalabras(frase){
        let cp=1
        frase = frase.trim()
        for(let pos=0;pos<frase.length;pos++){
            
            if (frase[pos]==' ' && frase[pos+1]!=' ' ){
                cp+=1
            }
        }
        return cp
    }
    contarPalabras(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let cp = this.isPalabras(cadena)
        $input.value=`${cadena} tiene ${cp} palabras`
   
    }
     isCopiarCaracteres(frase,car){
        let copia=""
        frase = frase.trim()
        for(let pos=0;pos<frase.length;pos++){
            if (frase[pos]==car ){
                copia = copia + frase[pos]
            }
        }
        return copia
    }
    copiarCaracteres(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let caracter = prompt("Ingrese caracter")
        let cc = this.isCopiarCaracteres(cadena,caracter)
        $input.value=`${cadena} - ${cc} `
   
    }
    
    isDivisor(arr,divisor){
        let divisores=[]
        for (let pos=0;pos<arr.length;pos++){
            let num=parseInt(arr[pos])
            if (num%divisor==0){
                divisores.push(num)
                //divisores[pos2]=arr[pos]
                //pos2+=1
            }

        }
        return divisores
    }
    
    copiarDivisor(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = cadena.split(";")
        //console.log($input)
        //console.log(cadena)
        //console.log(arreglo)["ana","jose","dan"] jose
        let divisor=parseInt(prompt("Ingrese Divisor"))
        let divisores = this.isDivisor(arreglo,divisor)
        $input.value=`[${arreglo}] - ${divisores}`
        
        
    }
    isExponente(base,exp){
        let res = 1
        for(let i=1;i<=exp;i++){
            res*=base
        }
        return res
    }   
    isDigitos(numero,base){
        let  digitos= []
        while(numero > 0){
            digitos.push(numero%base)
            numero = parseInt(numero/base)
        }
        return digitos
    }
    base10_2(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,2)
        let base2=""
        for(let i=arreglo.length-1;i>=0;i--){
            base2=base2+arreglo[i].toString()
        }
         $input.value=`[Base10=${numero}] ==> Base2=${base2}`
        
    }
    base10_16(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,16)
        let base16=""
        for(let i=arreglo.length-1;i>=0;i--){
            base16=base16+arreglo[i].toString(16)
        }
         $input.value=`[Base10=${numero}] ==> Base16=${base16}`
    }

    base10_8(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,8)
        let base8=""
        for(let i=arreglo.length-1;i>=0;i--){
            base8=base8+arreglo[i].toString(8)
        }
         $input.value=`[Base10=${numero}] ==> Base8=${base8}`
    }
  
    base2_10(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,10)
        let base10=0,limite=arreglo.length-1
        for(let i=arreglo.length-1;i>=0;i--){
            base10= base10 + arreglo[i]*this.isExponente(2,limite)
            limite=limite-1
        }
         $input.value=`[Base2=${numero}] ==> Base10=${base10}`
    }
    base2_8(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,10)
        let base8=0,limite=arreglo.length-1, total=""
        for(let i=arreglo.length-1;i>=0;i--){
            base8= base8 + arreglo[i]*this.isExponente(2,limite)
            limite=limite-1
        }
        let arreglo2=this.isDigitos(base8,8)
            for(let j=arreglo2.length-1;j>=0;j--){
                total = total + arreglo2[j].toString(8)
            }
         $input.value=`[Base2=${numero}] ==> Base8=${total}`
    }
    base2_16(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,10)
        let base16=0,limite=arreglo.length-1, total=""
        for(let i=arreglo.length-1;i>=0;i--){
            base16= base16 + arreglo[i]*this.isExponente(2,limite)
            limite=limite-1
        }
        let arreglo2=this.isDigitos(base16,16)
            for(let j=arreglo2.length-1;j>=0;j--){
                total = total + arreglo2[j].toString(16)
            }
         $input.value=`[Base2=${numero}] ==> Base16=${total}`
    }
    buscarconversor(){
        let base=prompt("Ingrese el numero de la base inicial")
        let base2=prompt("Ingrese a que numero base quiere convertir")
        if (base==2 && base2==8){
            this.base2_8()
        }
        if (base==2 && base2==10){
            this.base2_10()
        }else{
            if (base==2 && base2==16){
                this.base2_16()
            }
        }
        if (base==10 && base2==2){
            this.base10_2()
        }
        if (base==10 && base2==8){
            this.base10_8()
        }else{
            if (base==10 && base2==16){
                this.base10_16()
            }
        }
    }

    calcularDenominaciones(a, b) {
        let j = []
        for (let i = 0; i < b.length; i++) {
            let d = b[i];
            let c = Math.floor(a / d);

            if (c > 0) {
                j.push(`\n${c} = $${d}`);
                a -= c * d;
            }
        }
        return j;
    }

    vuelto(){
        let $input=document.getElementById("result")
        const num = parseInt($input.value)
        let billetes= this.calcularDenominaciones(num, [100, 50,20,10,5,1])
        
        $input.value=` Su costo ${num} en billetes es: ${billetes}`
    }

    resto_divide(a, b, c, d, numero) {

        let u = a[numero % 10];
        let de = b[Math.floor(numero / 10) % 10];
        let ct = c[Math.floor(numero / 100) % 10];
        let dm = d[Math.floor(numero / 1000) % 10];

        return dm + ct + de + u;
    }

    romano(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value) 
        let romanos = this.resto_divide(["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], ["", "M", "MM", "MMM"], numero);
        
        if (numero < 1 || numero > 3999) {
            this.ejecucion(`El número debe estar entre 1 y 3999`, $respuesta);
            return;
        }

        $input.value=`El numero ${numero} en romano se escribe asi: ${romanos}`
    }
    buscacadena(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let buscar=prompt("Ingrese la palabra a buscar")
        let enc = [];
        let pos = 0;
        let repeticiones = 0;
        let nuevo=this.quitaEspacio(cadena)
        
        while (pos < nuevo.length) {
            if (nuevo.slice(pos, pos + buscar.length) == buscar) {
                enc.push(pos + 1);
                repeticiones++;
            }
            pos++;
        }
        $input.value=`La frase es: [${cadena}], La palabra a buscar: [${buscar}] se encuentra en la posicion: ${enc}`
    }

    mayorarr(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        const numero = cadena.split(",").map(valor => Math.abs(parseInt(valor.trim()))); // Convertir valores a positivos con Math.abs()
        let mayor = numero[0];

        for (let i = 0; i < numero.length; i++) {
            if (numero[i] > mayor) {
                mayor = numero[i];
            }
        }
        $input.value=`Del arreglo: [${numero}] el numero mayor es: ${mayor}`
    }

    menorarr(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        const numero = cadena.split(",").map(valor => Math.abs(parseInt(valor.trim()))); // Convertir valores a positivos con Math.abs()
        let menor = numero[0];

        for (let i = 0; i < numero.length; i++) {
            if (numero[i] < menor) {
                menor = numero[i];
            }
        }
        $input.value=`Del arreglo: [${numero}] el numero menor es: ${menor}`
    }

    buscararr(){
        let $input=document.getElementById("result")
        let arreglo = $input.value
        let buscar=prompt("Ingrese la palabra a buscar")
        const numero = arreglo.split(",").map(valor => parseInt(valor.trim())); // Convertir valores a positivos con Math.abs()
        const numero_buscado = parseInt(buscar.trim()); // Convertir valor a positivo con Math.abs()
        let enc = [];
        let busqueda = this.isBuscado(numero, numero_buscado)

        if (busqueda >= 0) {
            enc.push(busqueda);
            $input.value= `La serie es: ${numero}\n El número buscado es ${numero_buscado}\n EL elemento buscado se encuentra en la posición: ${enc}`
        } else {
            $input.value=`¡El elemento a buscar no se encuentra en la serie`
        }
    }

    quitaElemento(a, b) {
        let resultado = [];
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b) {
                resultado.push(a[i]);
            }
        }
        return resultado;
    }

    eliminarr(){
        let $input=document.getElementById("result")
        let arreglo = $input.value
        let buscar=prompt("Ingrese la palabra a buscar")
        const numero = arreglo.split(",").map(valor => parseInt(valor.trim()));
        const numero_buscado = parseInt(buscar.trim());
        let elementos_soloElemento = this.quitaElemento(numero, numero_buscado);

        if (elementos_soloElemento.length > 0) {
            $input.value= `La serie es: ${numero}\n El elemento a eliminar es: ${numero_buscado}\n La serie con el numero eliminado es: ${elementos_soloElemento}`
        } else {
            $input.value= `El elemento a buscar no se encuentra en la serie para eliminarlo`
        }
    }

    insertaElemento(a, b) {
        const resultado = [];
        let i = 0;
        while (i < a.length && a[i] < b) {
            resultado.push(a[i]);
            i += 1;
        }
        resultado.push(b);
        while (i < a.length) {
            resultado.push(a[i]);
            i += 1;
        }
        return resultado;
    }

    insertarr(){
        let $input=document.getElementById("result")
        let arreglo = $input.value
        let buscar=prompt("Ingrese la palabra a buscar")
        const numero = arreglo.split(",").map(valor => parseInt(valor.trim()));
        let insertar = parseInt(Math.abs(buscar.trim()));
        let elementos_serie_con_insertado = this.insertaElemento(numero, insertar);
        
        $input.value= `La serie es: ${numero}\n El elemento a insertar es: ${buscar}\n La serie con el numero a insertar es: ${elementos_serie_con_insertado}`
    }

    cambio_carcter(a, b, c) {
        for (let i = 0; i < a.length; i++) {
            if (c.length > 0) {
                c += b;
            }
            c += a[i];
        }
        return c;
    }

    cadarr(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let caracter=prompt("Ingrese el caracter a reemplazar")
        let numero = cadena.split(";").map(valor => parseInt(valor.trim()))
        let numeros = []
        let car_reemplazo = caracter[0];
        // Reemplazamos el carácter de separación en la serie con el carácter de reemplazo
        let serie_reemplazada = this.cambio_carcter(numero, caracter, "");
        // Eliminamos los elementos que coinciden con el carácter de reemplazo
        for (let i = 0; i < numero.length; i++) {
            if (numero[i] != car_reemplazo) {
                numeros.push(numero[i]);
            }
        }
        $input.value= `La cadena es: ${cadena} \nEl Caracter es: ${car_reemplazo}\n EL arreglo resultante remplazado seria: [${serie_reemplazada}]`
    }

    arrcadena(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let caracter=prompt("Ingrese el caracter a reemplazar")
        let numero = cadena.split(",").map(valor => parseInt(valor.trim()))
        let res = this.cambio_carcter(numero, caracter, "")
        $input.value= `El arreglo es: [${numero}] \nEl Caracter es: ${caracter}\n La cadena resultante sería: ${res}`
    }

    oracion(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        const palabras = cadena.split(" ")
        const convertidas=[]

        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i] !== "") {
                const primeraLetra = palabras[i][0].toUpperCase();
                const restoPalabra = palabras[i].substring(1);
                const palabraConvertida = primeraLetra + restoPalabra;
                convertidas.push(palabraConvertida)
            }
        }
        const cadenaConvertida = convertidas.join(" ")
        if (this.isPalabras(cadena) > 0) {
            $input.value= `La cadena es: ${cadena} \n La cadena convertida es: ${cadenaConvertida}`
        }
    }

    especiales(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let ca_comas = 0
        let ca_puntos = 0
        let ca_puntoycoma = 0
        let ca_dospuntos = 0
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] === ",") {
                ca_comas++;
            } else if (cadena[i] === ".") {
                ca_puntos++;
            } else if (cadena[i] === ";") {
                ca_puntoycoma++;
            } else if (cadena[i] === ":") {
                ca_dospuntos++;
            }
        }
        $input.value= `La cadena: ${cadena}\n tiene:\n${ca_comas} comas,\n${ca_puntos} puntos,\n${ca_puntoycoma} punto y coma,\n${ca_dospuntos} dos puntos.`
    }

    sumarDigitos(a) {
        let suma = 0;
        while (a > 0) {
            suma += a % 10;
            a = Math.floor(a / 10);
        }
        return suma;
    }

    sumadigi(){
        let $input=document.getElementById("result")
        let cadena = parseInt($input.value)
        let digitos = "";
        let numero = cadena;
        let sum = this.sumarDigitos(numero);

        while (numero > 0) {
            let digito = numero % 10;
            digitos += digito + ",";
            numero = Math.floor(numero / 10);
        }
        digitos = digitos.slice(0, -1)
        $input.value= `El numero es: ${cadena}\n y La suma de los digitos es: ${sum} `
    }

    quitaEspacio(cadena){
        let sinEspacio=""
        cadena = cadena.trim()
        for(let i=0;i<cadena.length;i++){
            if (cadena[i]!==' '){
                sinEspacio+=cadena[i]
            } 
        }
        return sinEspacio
    }
    palindroma(){
        let $input=document.getElementById("result")
        let cadena = $input.value // anitalavala  t  i  n  a
        //                           012345678910 11 12 13 14
        // 
        let cadenaPal=this.quitaEspacio(cadena).toLowerCase()                       
        let pi=0,pf=cadenaPal.length-1,pal=1
        while (pi <= pf && pal==1){
            if (cadenaPal[pi]==cadenaPal[pf]){
                pi++
                pf--
            }
            else{
                pal=0
            }
        }
        if (pal==1){
             $input.value=`[${cadena}] Es Palindroma`
        }else{
             $input.value=`[${cadena}] No es Palindroma`
        }
    }
  
}
let cal = new Calculadora()
// console.log(cal.isExponente(5,3))
// console.log(cal.isDigitos(123,10))
// console.log(cal.isDigitos(25,2))
//console.log(cal.quitaEspacio(" anita  lava la tina"))
