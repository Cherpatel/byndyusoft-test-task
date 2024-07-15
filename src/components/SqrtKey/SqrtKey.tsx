import { useCallback, useContext } from "react";
import { FaSquareRootVariable } from "react-icons/fa6";

import { CalcContext } from "@components/Calculator/Calculator";
import KeyButton from "@components/KeyButton/KeyButton";

import { isLastNumberZero } from "@libs/isLastNumberZero";

type Props = {
    sqrtActive: boolean;
    setSqrtActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SqrtKey(props: Props) {
    const { setSqrtActive, sqrtActive } = props;

    const { rawExpression, setRawExpression } = useContext(CalcContext);

    const onClickHandler = useCallback(() => {
        if (!sqrtActive) {
            setSqrtActive(true);

            setRawExpression(prev => (!isLastNumberZero(rawExpression) ? prev : "") + "Math.sqrt(");
        } else {
            setSqrtActive(false);

            setRawExpression(prev => prev + ")");
        }
    }, [rawExpression, setRawExpression, sqrtActive, setSqrtActive]);

    return (
        <KeyButton onClick={ onClickHandler }>
            <FaSquareRootVariable />
        </KeyButton>
    );
}