$(document).ready(function() {
    $('#example').DataTable().destroy();
    $('#example').DataTable( {
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        },
        responsive: true,
    } );
    } );