// src/index.ts
import { DiscoDuro } from "./models/DiscoDuro.js";
import { CD } from "./models/CD.js";
const hdd = new DiscoDuro("Mi HDD", "1000", "HDD");
hdd.introducirDisco();
hdd.girarDisco();
hdd.leerDatos();
hdd.escribirDatos();
const cd = new CD("Mi cd", "23000", "cd");
cd.introducirDisco();
cd.girarDisco();
cd.leerDatos();
cd.escribirDatos();
//# sourceMappingURL=index.js.map