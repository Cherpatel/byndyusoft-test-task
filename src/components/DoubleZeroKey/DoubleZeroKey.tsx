import { useCallback, useContext } from "react";
import { Fa0 } from "react-icons/fa6";

import { CalcContext } from "@components/Calculator/Calculator";
import KeyButton from "@components/KeyButton/KeyButton";

import { isZeroInsertable } from "@libs/isZeroInsertable";

export default function DoubleZeroKey() {
    const { rawExpression, setRawExpression } = useContext(CalcContext);

    const onClickHandler = useCallback(() => {
        if (isZeroInsertable(rawExpression)) {
            if (isZeroInsertable(rawExpression + "0")) {
                setRawExpression(prev => prev + "00");
            } else {
                setRawExpression(prev => prev + "0");
            }
        }
    }, [rawExpression, setRawExpression]);

    return (
        <KeyButton
            className="small"
            onClick={ onClickHandler }
        >
            <Fa0 />
            <Fa0 />
        </KeyButton>
    );
}