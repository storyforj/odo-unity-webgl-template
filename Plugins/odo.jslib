mergeInto(LibraryManager.library, {
  ODOTrigger: function(triggerName) {
    window.odo.trigger(window.ODO.Triggers[Pointer_stringify(triggerName)]);
  },

  ODOTrack: function(eventName, data) {
    window.odo.track(Pointer_stringify(eventName), JSON.parse(Pointer_stringify(data)));
  },
});
