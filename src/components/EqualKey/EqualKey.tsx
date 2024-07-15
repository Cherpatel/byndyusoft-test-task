import { useCallback, useContext } from "react";
import { FaEquals } from "react-icons/fa6";

import { CalcContext } from "@components/Calculator/Calculator";
import KeyButton from "@components/KeyButton/KeyButton";

export default function EqualKey() {
    const {
        rawExpression,
        setIsError,
        setPreviousExpression,
        setRawExpression,
    } = useContext(CalcContext);

    const onClickHandler = useCallback(() => {
        let res: string;

        try {
            const value: number = eval(rawExpression);

            if (Math.abs(value) === Infinity) throw new Error("Division by zero");
            if (isNaN(value)) throw new Error("Something went wrong");

            res = value.toString();
        } catch {
            setIsError(true);
            res = "Error";
        }

        setPreviousExpression(rawExpression);
        setRawExpression(res);
    }, [rawExpression, setRawExpression, setPreviousExpression, setIsError]);

    return (
        <KeyButton
            isEqual
            className="white"
            onClick={ onClickHandler }
        >
            <FaEquals />
        </KeyButton>
    );
}