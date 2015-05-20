$(function() {
  $('#dialog').dialog({
    modal: true,
    closeOnEscape: true,
    autoOpen: false,
    position: { my: 'center top', at: 'center top', of: '#container' },
    open: function() {
      $('.ui-widget-overlay').bind('click', function() {
        $('#dialog').dialog('close');
      })
    }
  });

  $('li.submit_story').bind('click', function() {
    $('#dialog').dialog('open');
  });

  $('.popup__button').bind('click', function() {
    $('#dialog').dialog('close');
  });
});
