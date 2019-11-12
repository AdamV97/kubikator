$("#racunaj").click(function () {

    var promjer = $('#promjer').val();
    var duzina = $('#duzina').val();

    if (promjer == 0 || duzina == 0) {

        alert('Promjer ili dužina su prazni')

    } else {

        promjer = (promjer / 2) / 100;
        rezultat = (promjer * promjer * 3.14159265359 * duzina) / 100;
        $('#iznos').val(rezultat.toFixed(2));
        // var area2 = document.getElementById("rezultatPm").value = (rezultat * 1.13).toFixed(2);

    }

});

var wholeList = [];
var counter = 0;
$('#add').click(function () {

    var list = parseFloat($('#iznos').val());

    if (list > 0) {
        counter++
        $('#total').empty();

        wholeList.push(list);

        $('#ol_lista').append('<li><label>' + list + '</label><button class="deleteButtons" id="' + counter + '"' + '>X</button></li>');

        $('#promjer').val('');
        $('#duzina').val('');
        $('#iznos').val('');


        var sum = 0;

        for (var i = 0; i < wholeList.length; i++) {
            var a = wholeList[i]
            sum = sum + a;

        }
        $('#total').append('<p>' + 'Total: ' + sum.toFixed(2) + ' m3</p>');

    } else {



    }



});

$("ol").on("click", "button", function (e) {

    e.preventDefault();
    $(this).parent().remove();

    wholeList.splice(($(this).attr('id')) - 1, 1);
    
    var sum = 0;

    for (var i = 0; i < wholeList.length; i++) {
        var a = wholeList[i]
        sum = sum + a;

    }
    $('#total').empty();
    $('#total').append('<p>' + 'Total: ' + sum.toFixed(2) + ' m3</p>');
    console.log(wholeList);
    
});