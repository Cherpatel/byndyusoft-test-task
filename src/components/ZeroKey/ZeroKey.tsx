import { useCallback, useContext } from "react";
import { Fa0 } from "react-icons/fa6";

import { CalcContext } from "@components/Calculator/Calculator";
import KeyButton from "@components/KeyButton/KeyButton";

import { isZeroInsertable } from "@libs/isZeroInsertable";

export default function ZeroKey() {
    const { rawExpression, setRawExpression } = useContext(CalcContext);

    const onClickHandler = useCallback(() => {
        if (isZeroInsertable(rawExpression)) {
            setRawExpression(prev => prev + "0");
        }
    }, [rawExpression, setRawExpression]);

    return (
        <KeyButton onClick={ onClickHandler }>
            <Fa0 />
        </KeyButton>
    );
}