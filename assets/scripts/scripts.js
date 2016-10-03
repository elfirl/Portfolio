$(document).ready(function() {
    
    var pageName = $('body').attr('class');
    $('.page-name').text(pageName);

    var date = new Date();
    var copyYear = date.getFullYear();
    $('.copy-date').text(copyYear);



});