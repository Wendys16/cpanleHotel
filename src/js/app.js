function openModal(accion) {
    if (accion == 'eliminarHotel') {
        document.getElementById("modalEliminarHotel").style.display = "block";
    } else if (accion == 'editarHotel' || accion == 'agregarHotel') {
        document.getElementById("modalEditarHotel").style.display = "block";
    } else if (accion == 'eliminarHabitacion') {
        document.getElementById("modalEliminarHabitacion").style.display = "block";
    } else if (accion == 'editarHabitacion' || accion == 'agregarHabitacion') {
        document.getElementById("modalEditarHabitacion").style.display = "block";
    }
}

// Función para cerrar la modal
function closeModal(accion) {
    if (accion == 'eliminarHotel') {
        document.getElementById("modalEliminarHotel").style.display = "none";
    } else if (accion == 'editarHotel' || accion == 'agregarHotel') {
        document.getElementById("modalEditarHotel").style.display = "none";
    }else if (accion == 'eliminarHabitacion') {
        document.getElementById("modalEliminarHabitacion").style.display = "none";
    } else if (accion == 'editarHabitacion' || accion == 'agregarHabitacion') {
        document.getElementById("modalEditarHabitacion").style.display = "none";
    }
}