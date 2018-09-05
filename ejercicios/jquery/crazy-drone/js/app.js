$(document).ready(init);

function init(){
    console.log('Se inicio guachin');
}

$(document).on('mousemove', function(e){   
    $('#drone').offset({
        left: e.pageX + 40,
        top: e.pageY + 20
    });

    $('#pilot').offset({
        left: e.pageX
    });

}); 