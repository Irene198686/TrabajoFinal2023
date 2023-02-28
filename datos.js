async function obtenerDatos (){
    const response = await fetch ("https://randomuser.me");
    const json = await response.json();

    console.log(json);
    console.log(json.género)
    console.log(json.primero.último)
    console.log(json.calle.nombre.número)
    console.log(json.estado.códigopostal.país)


obtenerDatos ();

}