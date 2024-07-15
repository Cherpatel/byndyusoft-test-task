import type { BuildOptions } from "./types/types";
import type { Configuration } from "webpack";

export default function buildResolvers(options: BuildOptions): Configuration["resolve"] {
    const {
        paths: {
            assets,
            components,
            config,
            libs,
        },
    } = options;

    return {
        alias: {
            "@assets": assets,
            "@components": components,
            "@config": config,
            "@libs": libs,
        },
        extensions: [".tsx", ".jsx", ".ts", ".js"],
    };
}