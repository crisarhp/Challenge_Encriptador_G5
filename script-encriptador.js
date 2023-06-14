// Llaves de encriptación y desencriptación
var enigmo_keys = {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat",
};

// Variables para recoger elementos de la página
var user_text = document.getElementById("input");
var output_value = document.getElementById("output");
var user_entry = user_text.value.toLowerCase();
var encrypt_button = document.getElementById("button1");
var decrypt_button = document.getElementById("button2");
var copy_button = document.getElementById("button3");

// Función para encriptar el texto de entrada
function encrypt_function(user_entry) {
  var encrypted_text = "";
  for (var z = 0; z < user_entry.length; z++) {
    var word_entry = user_entry[z];
    if (enigmo_keys[word_entry]) { 
      encrypted_text += enigmo_keys[word_entry];
      } else {
        encrypted_text += word_entry;
      }
  }

  return encrypted_text;
}

// Función para desencriptar el texto de entrada
function decrypt_function(user_entry) {
  var decrypted_text = "";
  var i = 0;
  while (i < user_entry.length) {
    var word_entry = user_entry[i];

    if (enigmo_keys[word_entry]) {
      var valor = enigmo_keys[word_entry];
      var longitud = valor.length;
      var posibleValor = user_entry.substring(i, i + longitud);
      if (posibleValor == valor) {
        decrypted_text += word_entry;
        i += longitud;
      } else {
        decrypted_text += word_entry;
        i++;
      }
    } 
    
    else {
      decrypted_text += word_entry;
      i++;
    }
  }

  return decrypted_text;
}

// Función para copiar el texto de salida
copy_button.addEventListener("click", function() {
  let text_to_copy = output_value.value;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text_to_copy).then(function() {
      alert("Texto copiado al portapapeles");
    }).catch(function(error) {
      alert("Error al copiar el texto: " + error);
    });
  } 
  else {
    output_value.select();
    document.execCommand('copy');
  }

  output_value.value = "";
  user_text.value = "";
});

// Botón de encriptar
encrypt_button.addEventListener("click", function() {
  var user_entry = user_text.value.toLowerCase();
  var enigmo_anwser = encrypt_function(user_entry);
  output_value.value = enigmo_anwser;

  if (output_value.value != "") {// Mostrar el botón copiar
    copy_button.style.display = "block";
  }
  });

// Botón de desencriptar
decrypt_button.addEventListener("click", function() {
  var user_entry = user_text.value.toLowerCase();
  var enigmo_anwser = decrypt_function(user_entry);
  output_value.value = enigmo_anwser;

  if (output_value.value != "") {// Mostrar el botón copiar
    copy_button.style.display = "block";
  }

});

