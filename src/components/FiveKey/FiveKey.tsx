import { useCallback, useContext } from "react";
import { Fa5 } from "react-icons/fa6";

import { CalcContext } from "@components/Calculator/Calculator";
import KeyButton from "@components/KeyButton/KeyButton";

import { isLastNumberZero } from "@libs/isLastNumberZero";

export default function FiveKey() {
    const { setRawExpression } = useContext(CalcContext);

    const onClickHandler = useCallback(() => setRawExpression(prev => {
        return (isLastNumberZero(prev) ? prev.slice(0, prev.length - 1) : prev) + "5";
    }), [ setRawExpression ]);

    return (
        <KeyButton onClick={ onClickHandler }>
            <Fa5 />
        </KeyButton>
    );
}