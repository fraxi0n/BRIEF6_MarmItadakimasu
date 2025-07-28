import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import autoprefixer from "autoprefixer";
import sass from "rollup-plugin-sass";
import postcss from "postcss";

const isProduction = process.env.NODE_ENV === "production";

export default {
  // Configuration de Rollup
  input: "src/ts/index.ts",
  output: [
    {
      dir: "public/js",
      format: "umd"
    }
  ],
  plugins: [
    typescript({
      compilerOptions: { module: "esnext" },
      outDir: "public/js",
    }),
    isProduction && terser({
      // À vous de le configurer pour supprimer les console
      // (console.log)
      compress: { drop_console: true },
    }),
    // TODO : Pour le moment, le module ne fonctionne pas
    // TODO : À corriger par la suite ;)
    sass({
      // src/scss/index.scss, 
      // src/scss/toto/tata/tutu/titi.scss, 
      // ...
      // ** -> tous les dossiers (dossier actuel et ses enfants)
      // * -> tous les fichiers
      // *.scss -> tous les fichiers qui ont l'extension .scss
      // ** :
      // .
      // ./components
      // ./navbar
      include: ["src/scss/**/*.scss", "src/scss/**/*.css"],
      output: "public/css/style.css",
			api: "modern",
    })
  ],
}