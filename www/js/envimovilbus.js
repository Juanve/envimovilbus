(function() {            
    // ONLOAD
    window.onload = function(){
      // Init Values
      if (localStorage.getItem("deviceuuid") != undefined){
        var deviceuuid = localStorage.getItem("deviceuuid");
      } else {
        var deviceuuid = "nouuid";
      }
      // Firebase links
      var detailsFB = new Firebase("https://envimovilcentral.firebaseio.com/equipos/" + deviceuuid + "/details");
      //++ input Placa ++//
      $("#inputPlaca").on('input',function(){
        // FALTA: Validar el formato del dato
        localStorage.setItem("placa",$("#inputPlaca").val());
        detailsFB.update({
          placa: $("#inputPlaca").val()
        })
      });
      if (localStorage.getItem("placa") != undefined){
        var placaLocal = localStorage.getItem("placa");
      } else {
        var placaLocal = "";
      }
      $("#inputPlaca").val(placaLocal);
      // Este input arranca deshabilitado
      $("#inputPlaca").attr('disabled',true);
      //++ input Ruta ++//
      // oninput event
      $("#inputRuta").on('input',function(){
        // FALTA: Validar el formato del dato
        localStorage.setItem("ruta",$("#inputRuta").val());
        detailsFB.update({
          ruta: $("#inputRuta").val()
        })
      });
      if (localStorage.getItem("ruta") != undefined){
        var rutaLocal = localStorage.getItem("ruta");
      } else {
        var rutaLocal = "";
      }
      $("#inputRuta").html(rutaLocal);
      // Este input arranca deshabilitado
      $("#inputRuta").attr('disabled',true);
      //++ Boton Editar ++//
      $("#botonEditar").click(function(){
        if (inputPlaca.disabled){
          $("#inputPlaca").attr('disabled',false);
          $("#inputRuta").attr('disabled',false);
          $("#botonEditar").html("Grabar");
        } else {
          $("#inputPlaca").attr('disabled',true);
          $("#inputRuta").attr('disabled',true);
          $("#botonEditar").html("Editar");
        }
      });
      var gpsLocationFB = new Firebase("https://envimovilcentral.firebaseio.com/equipos/" + deviceuuid + "/gpsLocation");
      var geoFire1FB = new Firebase("https://envimovilcentral.firebaseio.com/equipos/" + deviceuuid + "/geoFire1");
      var geoFire1 = new GeoFire(geoFire1FB);
      var consoleout = true;
      // For every GeoQuery in the route
      //for (var i = 1, len = 3; i < len; i++){
        // Get GeoQuery coordinates from localStorage
        /*var i = 1;
        if (localStorage.getItem("geoqueryLatitud" + i) != undefined){
          var geoqueryLatitud = parseFloat(localStorage.getItem("geoqueryLatitud" + i));
          var geoqueryLongitud = parseFloat(localStorage.getItem("geoqueryLongitud" + i));
          var geoqueryRadio = parseFloat(localStorage.getItem("geoqueryRadio" + i));
        } else {
          var geoqueryLatitud = 6.0634196;
          var geoqueryLongitud = -75.5054149;
          var geoqueryRadio = 0.05;
        }
        var geoQuery1 = geoFire1.query({
          center: [geoqueryLatitud, geoqueryLongitud],
          radius: geoqueryRadio
        });
        var onReadyRegistration1 = geoQuery1.on("ready", function() {
          if (consoleout){
            console.log("Geoquery" + i + " has loaded and fired all other events for initial data");
          }  
        });
        var onKeyEnteredRegistration1 = geoQuery1.on("key_entered", function(key, location, distance) {
          $("#geoFireEvent").html("Aproximacion");
          $("#geoFireStation").html("Estacion " + i);
          $("#geoFireLocation").html(location);
          $("#geoFireDistance").html(distance);
          if (consoleout){
            console.log(key + " entered Geoquery" + i + " at " + location + " (" + distance + " km from center)");
          }  
        });
        var onKeyExitedRegistration1 = geoQuery1.on("key_exited", function(key, location, distance) {
          $("#geoFireEvent").html("Sale de Paradero");
          $("#geoFireStation").html("Estacion " + i);
          $("#geoFireLocation").html(location);
          $("#geoFireDistance").html(distance);
          if (consoleout){
            console.log(key + " exited Geoquery" + i + " to " + location + " (" + distance + " km from center)");
          }  
        });
        var onKeyMovedRegistration1 = geoQuery1.on("key_moved", function(key, location, distance) {
          if (distance <= 0.010){
            $("#geoFireEvent").html("En el Paradero");
          } else {
            $("#geoFireEvent").html("Cerca al Paradero");
          }
          $("#geoFireStation").html("Estacion " + i);
          $("#geoFireLocation").html(location);
          $("#geoFireDistance").html(distance);
          if (consoleout){
            console.log(key + " moved within Geoquery" + i + " to " + location + " (" + distance + " km from center)");
          }
        });
        var geoFire2FB = new Firebase("https://envimovilcentral.firebaseio.com/equipos/" + deviceuuid + "/geoFire2");
        var geoFire2 = new GeoFire(geoFire2FB);
        var i = 2;
        if (localStorage.getItem("geoqueryLatitud" + i) != undefined){
          var geoqueryLatitud = parseFloat(localStorage.getItem("geoqueryLatitud" + i));
          var geoqueryLongitud = parseFloat(localStorage.getItem("geoqueryLongitud" + i));
          var geoqueryRadio = parseFloat(localStorage.getItem("geoqueryRadio" + i));
        } else {
          var geoqueryLatitud = 6.0634196;
          var geoqueryLongitud = -75.5054149;
          var geoqueryRadio = 0.05;
        }
        var geoQuery2 = geoFire2.query({
          center: [geoqueryLatitud, geoqueryLongitud],
          radius: geoqueryRadio
        });
        var onReadyRegistration2 = geoQuery2.on("ready", function() {
          if (consoleout){
            console.log("Geoquery" + i + " has loaded and fired all other events for initial data");
          }  
        });
        var onKeyEnteredRegistration2 = geoQuery2.on("key_entered", function(key, location, distance) {
          $("#geoFireEvent").html("Aproximacion");
          $("#geoFireStation").html("Estacion " + i);
          $("#geoFireLocation").html(location);
          $("#geoFireDistance").html(distance);
          if (consoleout){
            console.log(key + " entered Geoquery" + i + " at " + location + " (" + distance + " km from center)");
          }  
        });
        var onKeyExitedRegistration2 = geoQuery2.on("key_exited", function(key, location, distance) {
          $("#geoFireEvent").html("Sale de Paradero");
          $("#geoFireStation").html("Estacion " + i);
          $("#geoFireLocation").html(location);
          $("#geoFireDistance").html(distance);
          if (consoleout){
            console.log(key + " exited Geoquery" + i + " to " + location + " (" + distance + " km from center)");
          }  
        });
        var onKeyMovedRegistration2 = geoQuery2.on("key_moved", function(key, location, distance) {
          if (distance <= 0.010){
            $("#geoFireEvent").html("En el Paradero");
          } else {
            $("#geoFireEvent").html("Cerca al Paradero");
          }
          $("#geoFireStation").html("Estacion " + i);
          $("#geoFireLocation").html(location);
          $("#geoFireDistance").html(distance);
          if (consoleout){
            console.log(key + " moved within Geoquery" + i + " to " + location + " (" + distance + " km from center)");
          }  
        });
        var geoFire3FB = new Firebase("https://envimovilcentral.firebaseio.com/equipos/" + deviceuuid + "/geoFire3");
        var geoFire3 = new GeoFire(geoFire3FB);
        var i = 3;
        if (localStorage.getItem("geoqueryLatitud" + i) != undefined){
          var geoqueryLatitud = parseFloat(localStorage.getItem("geoqueryLatitud" + i));
          var geoqueryLongitud = parseFloat(localStorage.getItem("geoqueryLongitud" + i));
          var geoqueryRadio = parseFloat(localStorage.getItem("geoqueryRadio" + i));
        } else {
          var geoqueryLatitud = 6.0634196;
          var geoqueryLongitud = -75.5054149;
          var geoqueryRadio = 0.05;
        }
        var geoQuery3 = geoFire3.query({
          center: [geoqueryLatitud, geoqueryLongitud],
          radius: geoqueryRadio
        });
        var onReadyRegistration3 = geoQuery3.on("ready", function() {
          if (consoleout){
            console.log("Geoquery" + i + " has loaded and fired all other events for initial data");
          }  
        });
        var onKeyEnteredRegistration3 = geoQuery3.on("key_entered", function(key, location, distance) {
          $("#geoFireEvent").html("Aproximacion");
          $("#geoFireStation").html("Estacion " + i);
          $("#geoFireLocation").html(location);
          $("#geoFireDistance").html(distance);
          if (consoleout){
            console.log(key + " entered Geoquery" + i + " at " + location + " (" + distance + " km from center)");
          }  
        });
        var onKeyExitedRegistration3 = geoQuery3.on("key_exited", function(key, location, distance) {
          $("#geoFireEvent").html("Sale de Paradero");
          $("#geoFireStation").html("Estacion " + i);
          $("#geoFireLocation").html(location);
          $("#geoFireDistance").html(distance);
          if (consoleout){
            console.log(key + " exited Geoquery" + i + " to " + location + " (" + distance + " km from center)");
          }  
        });
        var onKeyMovedRegistration3 = geoQuery3.on("key_moved", function(key, location, distance) {
          if (distance <= 0.010){
            $("#geoFireEvent").html("En el Paradero");
          } else {
            $("#geoFireEvent").html("Cerca al Paradero");
          }
          $("#geoFireStation").html("Estacion " + i);
          $("#geoFireLocation").html(location);
          $("#geoFireDistance").html(distance);
          if (consoleout){
            console.log(key + " moved within Geoquery" + i + " to " + location + " (" + distance + " km from center)");
          }  
        });*/
      //} // End for each GeoQuery in the route
      //++ Set Buttons for Update GeoQuerys ++//
      $("#botonUpdateGeoQuery1").click(function(){
        var inputLatitud = parseFloat($("#inputLatitud").val());
        var inputLongitud = parseFloat($("#inputLongitud").val());
        var inputRadio = parseFloat($("#inputRadio").val());
        localStorage.setItem("geoqueryLatitud1", inputLatitud);
        localStorage.setItem("geoqueryLongitud1", inputLongitud);
        localStorage.setItem("geoqueryRadio1",inputRadio);
        gpsLocationFB.child("geoQueries").child("geoQuery1").set({
          latitud: inputLatitud,
          longitud: inputLongitud,
          radio: inputRadio
        },function(){
          console.log("geoQuery1 setted");
        });
      });
      $("#botonUpdateGeoQuery2").click(function(){
        var inputLatitud = parseFloat($("#inputLatitud").val());
        var inputLongitud = parseFloat($("#inputLongitud").val());
        var inputRadio = parseFloat($("#inputRadio").val());
        localStorage.setItem("geoqueryLatitud2", inputLatitud);
        localStorage.setItem("geoqueryLongitud2", inputLongitud);
        localStorage.setItem("geoqueryRadio2",inputRadio);
        gpsLocationFB.child("geoQueries").child("geoQuery2").set({
          latitud: inputLatitud,
          longitud: inputLongitud,
          radio: inputRadio
        },function(){
          console.log("geoQuery2 setted");
        });
      });
      $("#botonUpdateGeoQuery3").click(function(){
        var inputLatitud = parseFloat($("#inputLatitud").val());
        var inputLongitud = parseFloat($("#inputLongitud").val());
        var inputRadio = parseFloat($("#inputRadio").val());
        localStorage.setItem("geoqueryLatitud3", inputLatitud);
        localStorage.setItem("geoqueryLongitud3", inputLongitud);
        localStorage.setItem("geoqueryRadio3",inputRadio);
        gpsLocationFB.child("geoQueries").child("geoQuery3").set({
          latitud: inputLatitud,
          longitud: inputLongitud,
          radio: inputRadio
        },function(){
          console.log("geoQuery3 setted");
        });
      });
      //++ Boton Set Gps Values
      $("#botonSetGpsValues").click(function(){
        inputLatitud.value = localStorage.getItem("latitud");
        inputLongitud.value = localStorage.getItem("longitud");
        inputRadio.value = 0.05;
      });
      //++ Set Time Station Buttons ++//
      $("#botonSetTime1").click(function(){
        var timeRouteFB = new Firebase("https://envimovilcentral.firebaseio.com/estaciones/260/rutas/9200/busesEnRuta/" + deviceuuid);
        timeRouteFB.set(0, function(error){
            if (error){
                console.log("SetTime1 failed");
            } else {
                console.log("SetTime1 succeeded");
            }
        });
      });
      $("#botonSetTime2").click(function(){
        var timeRouteFB = new Firebase("https://envimovilcentral.firebaseio.com/estaciones/261/rutas/9200/busesEnRuta/" + deviceuuid);
        timeRouteFB.set(0, function(error){
            if (error){
                console.log("SetTime2 failed");
            } else {
                console.log("SetTime2 succeeded");
            }
        });
      });
      $("#botonSetTime3").click(function(){
        var timeRouteFB = new Firebase("https://envimovilcentral.firebaseio.com/estaciones/262/rutas/9200/busesEnRuta/" + deviceuuid);
        timeRouteFB.set(0, function(error){
            if (error){
                console.log("SetTime3 failed");
            } else {
                console.log("SetTime3 succeeded");
            }
        });
      });
      /**** Get Tracking Points ****/
      var trackingFB = new Firebase("https://envimovilcentral.firebaseio.com/equipos/" + deviceuuid + "/tracking");
      // reset tracking
      function resetTracking(){
          trackingFB.set(null);
      }
      // Push new gps point in tracking from last local stored coordinates
      function addPoint(){
          trackingFB.push({
            latitud:localStorage.getItem("latitud"),
            longitud:localStorage.getItem("longitud")
          })
      }

      /**** Get Actual Position ***/
      // sets up the interval at the specified frequency
      function setupWatch(freq) {
          // global var here so it can be cleared on logout (or whenever).
          activeWatch = setInterval(watchLocation, freq);
      }

      // this is what gets called on the interval.
      function watchLocation() {
          var gcp = navigator.geolocation.getCurrentPosition(
                  updateUserLoc, onLocationError, {
                      enableHighAccuracy: true
                  });
          //console.log(gcp);
      }

      // do something with the results

      function updateUserLoc(position) {
          var gpsLocationFB = new Firebase("https://envimovilcentral.firebaseio.com/equipos/" + deviceuuid + "/gpsLocation");
          var location = {
             lat : position.coords.latitude,
             lng : position.coords.longitude
          };
          // Update coordinates in localStorage
          localStorage.setItem("latitud",location.lat);
          localStorage.setItem("longitud",location.lng);
          // Update in webview
          $("#latitud").html(location.lat);
          $("#longitud").html(location.lng);
          // Update in FB
          gpsLocationFB.update({
            "latitud": location.lat,
            "longitud": location.lng
          })
          // Set GeoPoint de la siguiente estacion
          geoFire1.set("geoPoint",[location.lat, location.lng]);
      }

      // Cuando hay un error en watchLocation lo muestra y deja de obtener coordenadas

      function onLocationError(e) {
          alert(e.message);
          logout();
      }
      // stop watching

      function logout() {
          clearInterval(activeWatch);
      }
      setupWatch(3000);
      // Se habilita insomnia para que no se apague la aplicacion
      window.plugins.insomnia.keepAware(function(){ console.log("Success Insomnia KeepAwake")},function(){ console.log("Error Insomnia KeepAwake")});
    }; //onload
})();