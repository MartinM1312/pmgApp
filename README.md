# Pmg App

## Requisitos Previos

1. **Node.js**: Tener instalada una versión reciente de Node.js. [nodejs.org](https://nodejs.org/).
2. **React Native CLI**: instalar el CLI de React Native globalmente (en caso no tenerlo instalado):
   ```bash
   npm install -g react-native-cli
   ```
3. **(Android) JDK** Version 17 y [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
4. **(iOS) Xcode** Desarrollo en MacOS utiliza Xcode para ejecutar la aplicación en iOS.

## Descargar y correr el proyecto

### 1. Clonar el repositorio

Clona el repositorio en tu máquina local:

```bash
git clone git@github.com:MartinM1312/pmgApp.git
cd pmgApp
```

### 2. Instalar dependencias

Instalar las dependencias necesarias para el proyecto. Esto incluye dependencias de **React Native**, **Jest**, etc.

```bash
npm install
```

### 3. Configuración de variables de entorno

El proyecto usa la librería `react-native-dotenv` para gestionar las variables de entorno. Crear un archivo `.env` en la raíz del proyecto a partir del archivo `.env.example`

```bash
cp .env.example .env
```

e insertar los bearer token correspondientes.

### 4. Ejecutar el proyecto

#### Android:

```bash
npx react-native run-android
```

#### iOS:

```bash
npx react-native run-ios
```

### 5. Ejecutar pruebas

```bash
npm test
```

### 6. Consideraciones de configuración

#### Dependencias importantes:

- **React Native**: Core del proyecto.
- **TypeScript**: Tipado estático y desarrollo escalable.
- **Jest**: Pruebas unitarias.
- **React Testing Library**: Probar los componentes de React Native.
- **react-native-video**: Manejar la reproducción de videos dentro de componentes.
- **react-native-svg**: Manejar imágenes SVG en los componentes.
- **react-native-dotenv**: Gestionar las variables de entorno.

### 7. Manejando errores comunes

Si existen errores durante la instalación o ejecución de las pruebas:

- **Fallo al instalar dependencias**:
  ```bash
  npm install --legacy-peer-deps
  ```

### Consideraciones adicionales para iOS

#### 1. **Instalar Pods de CocoaPods**

Después de ejecutar `npm install`, ejecutar:

```bash
cd ios
pod install
```

Instala las dependencias necesarias de CocoaPods en el proyecto iOS.

#### 2. **Reiniciar Metro Bundler si cambias de plataforma**

A veces es necesario reiniciar el servidor de Metro Bundler para evitar problemas con la compilación de activos al trabajar en ambas plataformas (Android y IOS).

Reiniciar Metro Bundler:

```bash
npx react-native start --reset-cache
```
