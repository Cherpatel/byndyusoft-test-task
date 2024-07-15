import { useCallback, useContext } from "react";
import { FaC } from "react-icons/fa6";

import { CalcContext } from "@components/Calculator/Calculator";
import KeyButton from "@components/KeyButton/KeyButton";

type Props = {
    setSqrtActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ClearKey({ setSqrtActive }: Props) {
    const {
        setIsError,
        setPreviousExpression,
        setRawExpression,
    } = useContext(CalcContext);

    const onClickHandler = useCallback(() => {
        setRawExpression("0");
        setPreviousExpression("");
        setSqrtActive(false);
        setIsError(false);
    }, [setRawExpression, setPreviousExpression, setSqrtActive, setIsError]);

    return (
        <KeyButton
            preventDefault
            onClick={ onClickHandler }
        >
            <FaC />
        </KeyButton>
    );
}