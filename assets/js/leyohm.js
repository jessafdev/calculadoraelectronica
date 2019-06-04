$("document").ready(function(){
    var datovoltaje;
    var datointensidad;
    var datoresistencia;
    var btnd=0;
    reset();
    $("#inputv").keyup(function(){
        datovoltaje = parseFloat($("#inputv").val());              
    })
    $("#inputa").keyup(function(){
        datointensidad = parseFloat($("#inputa").val());      
    })
    $("#inputr").keyup(function(){
        datoresistencia = parseFloat($("#inputr").val());     
    })
    $("#btncalcular").click(function(){        
        if(btnd == 0){
            if(datosvacios("#inputv") == 1){
                var resultadov = datoresistencia * datointensidad;
                $("#inputv").val(resultadov.toString());
            }
            if(datosvacios("#inputa") == 1){
                var resultadoa = datovoltaje / datoresistencia;
                $("#inputa").val(resultadoa.toString());
    
            }
            if(datosvacios("#inputr") == 1){
                var resultador = datovoltaje / datointensidad;
                $("#inputr").val(resultador.toString());
            } 
            btnd=1;
        }
        
    });
    $("#btnreset").click(function(){
        reset();
        btnd=0;
        
    });

});
    /*$("#btncalcular").click(function(){
        var suma = datosvacios("#inputv") + datosvacios("#inputa") + datosvacios("#inputr");
        if(suma != 2 && suma != 3){                      
            
            
            if(datosvacios("#inputv") == 1){
                var resultadov = datoresistencia * datointensidad;
                $("#inputv").val(resultadov.toString());
            }
            if(datosvacios("#inputa") == 1){
                var resultadoa = datovoltaje / datoresistencia;
                $("#inputa").val(resultadoa.toString());

            }
            if(datosvacios("#inputr") == 1){
                var resultador = datovoltaje / datointensidad;
                $("#inputr").val(resultador.toString());
            }
        
          
        }else{
            alert("Datos Insuficientes");
        }*/
    
function reset(){
    $("#inputv").val("");
    $("#inputa").val("");
    $("#inputr").val("");
}
function datosvacios(inputselector){
    var datosvacios;
    if($(inputselector).val() == ""){
        datosvacios = 1;
    }else{
        datosvacios = 0;
    }
    return datosvacios;
}