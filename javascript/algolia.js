(function() {
    var placesAutocomplete = places({
      appId: 'plIU1N4Z9YT7',
      apiKey: 'fac43e9d144b00922b35e7c0118f1e6e',
      container: document.querySelector('#city'),
      templates: {
        value: function(suggestion) {
          return suggestion.name + ', ' + suggestion.administrative;
        }
      }
    }).configure({
      type: 'city',
    });
    placesAutocomplete.on('change', function resultSelected(e) {
      document.querySelector('#city').value = e.suggestion.name + ', ' + e.suggestion.administrative || '';
    });
  })();