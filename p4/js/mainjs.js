
var largo = prompt("Largo de la figura");

var contarY=0;
while (contarY<largo) {
    var imprimir=""
    var contarX=0;
    while (contarX<largo) {
        if(contarY==0 || contarY==(largo-1) || contarX==0 || contarX==(largo-1))
            imprimir=imprimir+"*";
        else
            imprimir=imprimir+" ";
        
        contarX++;
    }

    console.log(contarY+1,imprimir);
    contarY++;
}