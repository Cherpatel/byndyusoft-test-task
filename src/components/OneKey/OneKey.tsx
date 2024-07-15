import { useCallback, useContext } from "react";
import { Fa1 } from "react-icons/fa6";

import { CalcContext } from "@components/Calculator/Calculator";
import KeyButton from "@components/KeyButton/KeyButton";

import { isLastNumberZero } from "@libs/isLastNumberZero";

export default function OneKey() {
    const { setRawExpression } = useContext(CalcContext);

    const onClickHandler = useCallback(() => setRawExpression(prev => {
        return (isLastNumberZero(prev) ? prev.slice(0, prev.length - 1) : prev) + "1";
    }), [ setRawExpression ]);

    return (
        <KeyButton onClick={ onClickHandler }>
            <Fa1 />
        </KeyButton>
    );
}