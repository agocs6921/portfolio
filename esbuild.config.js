const { build } = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

(async () => {
    await build({
        entryPoints: {
            "./public/js/bundle": "./src/app.tsx",
            "./public/css/styles": "./src/sass/styles.scss"
        },
        outdir: ".",
        plugins: [ sassPlugin() ],
        bundle: true,
        minify: false,
        sourcemap: true,
        watch: true
    });
})();