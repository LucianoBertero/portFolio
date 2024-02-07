document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón de descarga
    var downloadBtn = document.getElementById('download-btn');

    // Agrega un evento de clic al botón
    downloadBtn.addEventListener('click', function() {
        // Crea un elemento <a> para descargar el archivo
        var link = document.createElement('a');
        link.href = 'Bertero_Luciano_Cv.pdf'; // Nombre del archivo PDF
        link.download = 'Bertero_Luciano_Cv.pdf'; // Nombre que deseas para el archivo PDF
        document.body.appendChild(link);
        link.click(); // Simula un clic en el enlace para iniciar la descarga
        document.body.removeChild(link); // Elimina el elemento <a> después de la descarga
    });
});
