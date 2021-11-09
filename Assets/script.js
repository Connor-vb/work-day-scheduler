$(document).ready(function () {
    $('.btn').on('click', function () {
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, value);
    })
})
$('#d1').val(localStorage.getItem('9'))
$('#d2').val(localStorage.getItem('10'))
$('#d3').val(localStorage.getItem('11'))
$('#d4').val(localStorage.getItem('12'))
$('#d5').val(localStorage.getItem('13'))
$('#d6').val(localStorage.getItem('14'))
$('#d7').val(localStorage.getItem('15'))
$('#d8').val(localStorage.getItem('16'))
$('#d9').val(localStorage.getItem('17'))

$('#currentDay').text(moment().format('dddd, MMMM Do'))

var currentHour = moment().hours()
// 9
if (currentHour > 9) {
    $('#d1').addClass('past')
}
if (currentHour < 9) {
    $('#d1').addClass('future')
}
if (currentHour == 9) {
    $('#d1').addClass('present')
}
// 10
if (currentHour > 10) {
    $('#d2').addClass('past')
}
if (currentHour < 10) {
    $('#d2').addClass('future')
}
if (currentHour == 10) {
    $('#d2').addClass('present')
}
// 11
if (currentHour > 11) {
    $('#d3').addClass('past')
}
if (currentHour < 11) {
    $('#d3').addClass('future')
}
if (currentHour == 11) {
    $('#d3').addClass('present')
}
// 12
if (currentHour > 12) {
    $('#d4').addClass('past')
}
if (currentHour < 12) {
    $('#d4').addClass('future')
}
if (currentHour == 12) {
    $('#d4').addClass('present')
}
// 13
if (currentHour > 13) {
    $('#d5').addClass('past')
}
if (currentHour < 13) {
    $('#d5').addClass('future')
}
if (currentHour == 13) {
    $('#d5').addClass('present')
}
// 14
if (currentHour > 14) {
    $('#d6').addClass('past')
}
if (currentHour < 14) {
    $('#d6').addClass('future')
}
if (currentHour == 14) {
    $('#d6').addClass('present')
}
// 15
if (currentHour > 15) {
    $('#d7').addClass('past')
}
if (currentHour < 15) {
    $('#d7').addClass('future')
}
if (currentHour == 15) {
    $('#d7').addClass('present')
}
// 16
if (currentHour > 16) {
    $('#d8').addClass('past')
}
if (currentHour < 16) {
    $('#d8').addClass('future')
}
if (currentHour == 16) {
    $('#d8').addClass('present')
}
// 17
if (currentHour > 17) {
    $('#d9').addClass('past')
}
if (currentHour < 17) {
    $('#d9').addClass('future')
}
if (currentHour == 17) {
    $('#d9').addClass('present')
}