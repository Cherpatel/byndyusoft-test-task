import { assetsLoader } from "./assetsLoader";
import { fontsLoader } from "./fontsLoader";
import { scssLoader } from "./scssLoader";
import { svgrLoader } from "./svgrLoader";
import { tsLoader } from "./tsLoader";

import type { BuildOptions } from "@config/build/types/types";
import type { ModuleOptions } from "webpack";

export default function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
    return [
        fontsLoader(),
        svgrLoader(),
        assetsLoader(),
        tsLoader(options),
        scssLoader(options),
    ];
}