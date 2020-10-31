$(function(){
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
    $('.carousel').carousel({
        interval: 5000
    })
    $('#reserveModal').on('show.bs.modal', function (e){
        console.log('Esto se esta mostrando ahora mismo');
        $("#testmodal").removeClass('btn-primary');
        $("#testmodal").addClass('btn-success');
        $("#testmodal").prop('disabled', true);
        
    });
    $('#reserveModal').on('shown.bs.modal', function (e){
        console.log('Esto se termino de mostrar');

    });
    $('#reserveModal').on('hide.bs.modal', function (e){
        console.log('Esto se esta ocultando ahora mismo')
    });
    $('#reserveModal').on('hidden.bs.modal', function (e){
        console.log('Esto se esta oculto')
        $("#testmodal").removeClass('btn-success');
        $("#testmodal").addClass('btn-primary');
        $("#testmodal").prop('disabled', false);

    });
});
