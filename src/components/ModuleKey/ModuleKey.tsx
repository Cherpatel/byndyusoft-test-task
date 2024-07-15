import { useCallback, useContext } from "react";
import { FaPercent } from "react-icons/fa6";

import { CalcContext } from "@components/Calculator/Calculator";
import KeyButton from "@components/KeyButton/KeyButton";

import { isLastCharOperator } from "@libs/isLastCharOperator";

export default function ModuleKey() {
    const { setRawExpression } = useContext(CalcContext);

    const onClickHandler = useCallback(() => {
        setRawExpression(prev => {
            return (isLastCharOperator(prev) ? prev.slice(0, prev.length - 1) : prev) + "%";
        });
    }, [ setRawExpression ]);

    return (
        <KeyButton onClick={ onClickHandler }>
            <FaPercent />
        </KeyButton>
    );
}