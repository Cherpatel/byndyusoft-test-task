import { useCallback, useContext } from "react";
import { Fa4 } from "react-icons/fa6";

import { CalcContext } from "@components/Calculator/Calculator";
import KeyButton from "@components/KeyButton/KeyButton";

import { isLastNumberZero } from "@libs/isLastNumberZero";

export default function FourKey() {
    const { setRawExpression } = useContext(CalcContext);

    const onClickHandler = useCallback(() => setRawExpression(prev => {
        return (isLastNumberZero(prev) ? prev.slice(0, prev.length - 1) : prev) + "4";
    }), [ setRawExpression ]);

    return (
        <KeyButton onClick={ onClickHandler }>
            <Fa4 />
        </KeyButton>
    );
}