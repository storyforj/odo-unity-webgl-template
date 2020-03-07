mergeInto(LibraryManager.library, {
  ODOTrigger: function(triggerName) {
    window.odo.trigger(window.ODO.Triggers[Pointer_stringify(triggerName)]);
  },

  ODOTrack: function(eventName, data) {
    window.odo.track(Pointer_stringify(eventName), JSON.parse(Pointer_stringify(data)));
  },

  ODOSave: function(key, data, callback) {
    function getPtrFromString(str) {
      var buffer = _malloc(lengthBytesUTF8(str) + 1);
      writeStringToMemory(str, buffer);
      return buffer;
    }

    return window.odo.data.save(Pointer_stringify(key), JSON.parse(Pointer_stringify(data))).then(function (response) {
      if (callback) {
        var buffer = getPtrFromString(JSON.stringify(response));
        Runtime.dynCall('v', callback, [buffer]);
      }
    });
  },

  ODOSaveForPlayer: function(key, data, callback) {
    function getPtrFromString(str) {
      var buffer = _malloc(lengthBytesUTF8(str) + 1);
      writeStringToMemory(str, buffer);
      return buffer;
    }

    return window.odo.data.saveForPlayer(Pointer_stringify(key), JSON.parse(Pointer_stringify(data))).then(function (response) {
      if (callback) {
        var buffer = getPtrFromString(JSON.stringify(response));
        Runtime.dynCall('v', callback, [buffer]);
      }
    });
  },

  ODOGet: function(key, callback) {
    function getPtrFromString(str) {
      var buffer = _malloc(lengthBytesUTF8(str) + 1);
      writeStringToMemory(str, buffer);
      return buffer;
    }

    return window.odo.data.get(Pointer_stringify(key)).then(function (response) {
      if (callback) {
        var buffer = getPtrFromString(JSON.stringify(response));
        Runtime.dynCall('v', callback, [buffer]);
      }
    });
  },

  ODOGetForPlayer: function(key, callback) {
    function getPtrFromString(str) {
      var buffer = _malloc(lengthBytesUTF8(str) + 1);
      writeStringToMemory(str, buffer);
      return buffer;
    }

    return window.odo.data.getForPlayer(Pointer_stringify(key)).then(function (response) {
      if (callback) {
        var buffer = getPtrFromString(JSON.stringify(response));
        Runtime.dynCall('v', callback, [buffer]);
      }
    });
  },
});
