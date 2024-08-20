# Sistema de Autenticación JWT

Este repositorio contiene un sistema de autenticación basado en JSON Web Tokens (JWT) desarrollado con Spring Boot. El proyecto incluye funcionalidades para el registro y inicio de sesión de usuarios, así como la generación y validación de tokens JWT para autenticar solicitudes.

![image](https://github.com/user-attachments/assets/51a25445-6e5c-46ae-8bb6-439da984693a)


## Descripción

Este sistema proporciona una API RESTful para manejar la autenticación de usuarios utilizando JWT. Los usuarios pueden registrarse, iniciar sesión y acceder a recursos protegidos mediante tokens JWT. El sistema está diseñado para ser modular y fácil de extender, con una configuración de seguridad robusta y opciones de personalización.

## Características

- Registro de usuarios
- Inicio de sesión con autenticación JWT
- Gestión de usuarios y roles
- Protección de rutas con JWT
- Implementación de `JwtAuthenticationFilter` para validar tokens

## Requisitos

- Java 17 o superior
- Maven 3.8.4 o superior
- MySQL (para almacenamiento de datos)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu_usuario/jwt-auth-system.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd jwt-auth-system
    ```

3. Configura tu base de datos en `src/main/resources/application.properties`:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/tu_base_de_datos
    spring.datasource.username=tu_usuario
    spring.datasource.password=tu_contraseña
    ```

4. Construye el proyecto:

    ```bash
    mvn clean install
    ```

5. Ejecuta la aplicación:

    ```bash
    mvn spring-boot:run
    ```

## Uso

- **Registro de Usuario**: `POST /auth/register`
- **Inicio de Sesión**: `POST /auth/login`
- **Acceso a Recursos Protegidos**: `GET /protected/resource` (requiere token JWT en el encabezado `Authorization`)


## Contacto

Mateo Gerbaudo  
[tu_correo@ejemplo.com](mailto:tu_mgerbaudo02@gmail.com)  
[GitHub](https://github.com/gerbaudo19)

