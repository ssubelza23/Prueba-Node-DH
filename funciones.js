let fs = require('fs');
module.exports ={
    archivo: './tareas.json',
    leerJSON: function(){
        return JSON.parse(fs.readFileSync('./tareas.json','utf-8'));
    },
    escribirJSON: function(tarea){
        let tareas = this.leerJSON();
        tareas.push(tarea);
        fs.writeFileSync(this.archivo,JSON.stringify(tareas));
    },
    crear: function(titulo,estado="pendiente"){
        let tareas = this.leerJSON();
        if(tareas.filter(function (tarea){
            return tarea.titulo === titulo}).length == 0){
                let t ={
                    titulo:titulo,
                    estado:estado
                }
                this.escribirJSON(t);
            return "tarea creada"
          }else{
            return "la tarea ya existe"
          }
    },
    filtrarPorEstado: function(estado){
        let tareas = this.leerJSON();
        return tareas.filter(function(tarea){
            return tarea.estado == estado;
        });
    }

}