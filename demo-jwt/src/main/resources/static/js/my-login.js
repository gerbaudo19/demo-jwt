'use strict';

$(function() {

    // Manejar el formulario de inicio de sesión
    $('#login-form').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        var rememberMe = $('#remember').is(':checked');

        $.ajax({
            url: 'http://localhost:8080/auth/login', // URL del backend para el login
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ username: username, password: password }),
            success: function(response) {
                localStorage.setItem('token', response.token);
                
                // Guardar en cookies si se seleccionó "Remember Me"
                if (rememberMe) {
                    document.cookie = "username=" + encodeURIComponent(username) + "; path=/; max-age=" + (30 * 24 * 60 * 60);
                    document.cookie = "password=" + encodeURIComponent(password) + "; path=/; max-age=" + (30 * 24 * 60 * 60);
                } else {
                    // Limpiar cookies si no se seleccionó "Remember Me"
                    document.cookie = "username=; path=/; max-age=0";
                    document.cookie = "password=; path=/; max-age=0";
                }
                
                window.location.href = '/dashboard.html'; // URL del dashboard después del login exitoso
            },
            error: function(xhr) {
                console.error('Login failed:', xhr);
                alert('Login failed: ' + xhr.responseText);
            }
        });
    });

    // Manejar el formulario de registro
    $('#register-form').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var country = $('#country').val();
        var password = $('#password').val();

        $.ajax({
            url: 'http://localhost:8080/auth/register', // URL del backend para el registro
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ username: username, firstname: firstname, lastname: lastname, country: country, password: password }),
            success: function(response) {
                alert('Registration successful!');
                window.location.href = '/login.html'; // URL de la página de login después del registro exitoso
            },
            error: function(xhr) {
                console.error('Registration failed:', xhr);
                alert('Registration failed: ' + xhr.responseText);
            }
        });
    });

});

