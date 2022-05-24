const { build } = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const { argv } = require("process")

const STATE = argv[2] == "dev" ? {
    minify: false,
    sourcemap: true,
    watch: true
} : {
    minify: true,
    sourcemap: false,
    watch: false
};

(async () => {
    await build({
        entryPoints: {
            "./public/js/bundle": "./src/App.tsx",
            "./public/css/styles": "./src/sass/styles.scss"
        },
        outdir: ".",
        plugins: [
            sassPlugin()
        ],
        bundle: true,
        ...STATE
    });
})();