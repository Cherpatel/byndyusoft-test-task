import { useCallback, useContext } from "react";
import { BsDot } from "react-icons/bs";

import { CalcContext } from "@components/Calculator/Calculator";
import KeyButton from "@components/KeyButton/KeyButton";

import { getLastNumber } from "@libs/getLastNumber";
import { isLastNumberFloat } from "@libs/isLastNumberFloat";

export default function CommaKey() {
    const { rawExpression, setRawExpression } = useContext(CalcContext);

    const onClickHandler = useCallback(() => {
        if (!isLastNumberFloat(rawExpression)) {
            setRawExpression(prev => {
                const lastNumber = getLastNumber(prev);

                return prev + (lastNumber === "" ? "0." : ".");
            });
        }
    }, [rawExpression, setRawExpression]);

    return (
        <KeyButton onClick={ onClickHandler }>
            <BsDot />
        </KeyButton>
    );
}