# 📘 Manual de Supervivencia Git (Flujo Multi-PC)

Este manual contiene las instrucciones exactas para trabajar de forma aislada con mis tres identidades sin que se mezclen los correos y esquivando los bloqueos de red de la empresa.

---

## 🛠️ PUESTA A PUNTO DEL PORTÁTIL (Solo se hace una vez)
Cuando abras el portátil por primera vez para configurar Git, haz exactamente lo mismo que hicimos en el PC de casa:

1. **Generar las llaves en local:** Abre la terminal del portátil y crea las llaves sin contraseña (dando a Enter de golpe) en la carpeta local `~/.ssh/`:
   * **Estudios:** `ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_estudios -N ""`
   * **Personal:** `ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_personal -N ""`
2. **Crear el archivo `config`:** Crea el archivo de texto `config` (sin extensión) en `C:\Users\TuUsuario\.ssh\config` con las mismas tres rutas e identidades que usas en casa.
3. **Subir los "DNIs" a la web:** Copia el contenido de los archivos `.pub` del portátil y añádelos a tus perfiles de GitHub correspondientes (en *Settings -> SSH and GPG keys*).

---

## 🔂 LA REGLA DE ORO DIARIA (Los 3 Pasos Lógicos)
Como soy el único desarrollador de mis proyectos, mi flujo es una línea recta. Sigo este orden estricto cada vez que cambio de ordenador para evitar que el código se pise:

1. **Al llegar al PC (Antes de programar):** Me descargo lo que subí el día anterior desde el otro ordenador:
   ```bash
   git pull
   ```
2. **Al terminar de programar (Guardar progreso):** Empaqueto mis cambios locales:
   ```bash
   git add .
   git commit -m "Explicación breve de lo que he hecho hoy"
   ```
3. **Al marcharme del PC (Subir a la nube):** Envío el trabajo a GitHub para tenerlo disponible en mis otros dispositivos:
   ```bash
   git push
   ```

---

## 🚀 ACCIONES RÁPIDAS (Copiar y Pegar)

### 📌 Caso A: Nueva Tarea del Ciclo (En el PC del Trabajo)
Cada vez que empiece una unidad nueva (ej: UD03), me descargo el proyecto del profesor, abro la terminal en esa carpeta y **copio y pego esta única línea combinada** para inicializarlo todo sin fallos de red:

```bash
git init && git -c safe.directory=* config user.name "xlasa" && git -c safe.directory=* config user.email "tu_correo_estudios@instituto.com"
```

Inmediatamente después, borro el enlace web por defecto y conecto mi alias de estudios sin contraseña:
```bash
git -c safe.directory=* remote remove origin
git -c safe.directory=* remote add origin git@github.com-estudios:xabilasa/NOMBRE_NUEVO_REPO.git
```

### 📌 Caso B: Nueva Tarea del Ciclo (En Casa o Portátil)
Como mis ordenadores de casa y portátil no tienen las restricciones de la red de la empresa, el comando es el estándar y va directo:
```bash
git init
git config user.name "xlasa"
git config user.email "tu_correo_estudios@instituto.com"
git remote add origin git@github.com-estudios:xabilasa/NOMBRE_NUEVO_REPO.git
```

### 📌 Caso C: Subir cambios del Trabajo / Personal (Fuerza Bruta)
Si estoy en la carpeta de la empresa (`Y:\flores_asifune`) y el ordenador del trabajo se vuelve a poner tonto con la red o las contraseñas falsas, uso el comando de fuerza bruta apuntando a mi llave definitiva del disco `C:` y al repositorio correcto:

```bash
git -c safe.directory=* -c core.sshCommand="ssh -i C:/Users/Contratacion/.ssh/id_final_flores -F /dev/null" push -u git@github.com:xabifune/Flores-Asifune.git main
```

---

## 🧹 LIMPIEZA FINAL (Al recibir la nota del profesor)
Para mantener mi perfil de GitHub reluciente y sin repositorios basura temporales:
1. Copio la carpeta de la tarea calificada y la pego físicamente dentro de mi repositorio general (ej: `Z:\Desarrollo\BIRT\DWEC\UD02\Tarea_Evaluacion`).
2. Entro en la terminal de mi repositorio general (`DWEC`) y subo los archivos de forma definitiva:
   ```bash
   git add .
   git commit -m "archive: guardada la tarea de la UD02 calificada"
   git push
   ```
3. Voy a la web de GitHub, entro en los ajustes del repositorio temporal de la tarea (ej: `DWEC02-TE01`) y le doy a **"Delete this repository"** para borrarlo de internet.
