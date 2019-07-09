(function() {
    var placesAutocomplete = places({
      appId: 'plIU1N4Z9YT7',
      apiKey: 'fac43e9d144b00922b35e7c0118f1e6e',
      container: document.querySelector('#search'),
      templates: {
        value: function(suggestion) {
          return suggestion.name;
        }
      }
    }).configure({
      type: 'city'
    });
    placesAutocomplete.on('change', function resultSelected(e) {
      document.querySelector('#search').value = e.suggestion.administrative || '';
    });
  })();