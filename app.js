let funciones = require('./funciones');

let accion = process.argv[2];

switch (accion){
    case 'listar':
        const tareas = funciones.leerJSON();
        tareas.forEach(tarea => console.log(tarea.titulo));
        break;
    case 'crear':
        if(process.argv[3] === undefined){
            console.log("escribir el nombre de la tarea");
        }
        else{
            console.log(funciones.crear(process.argv[3]));
        }
      
        break;
        case 'filtrar':
            if(process.argv[3] === undefined){
                console.log("escribir el estado");
            }
            else{
                console.log("Tarea(s) :"+process.argv[3] );
                funciones.filtrarPorEstado(process.argv[3]).forEach(tarea => console.log(tarea.titulo));
            }
            break;
    default:
        console.log('Listado de acciones');
        break;
}
