import cn from "classnames";
import { useContext } from "react";

import { CalcContext } from "@components/Calculator/Calculator";

import styles from "./Display.module.scss";

export default function Display() {
    const {
        previousExpression,
        rawExpression,
    } = useContext(CalcContext);

    const displayedExpression = rawExpression;

    return (
        <div className={ styles.root }>
            <span className={ styles.expression }>
                { previousExpression }
            </span>
            <span className={ cn(styles.expression, styles.result) }>
                { displayedExpression }
            </span>
        </div>
    );
}