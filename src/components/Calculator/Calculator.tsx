import { createContext, useState } from "react";

import Display from "@components/Display/Display";
import Keyboard from "@components/Keyboard/Keyboard";

import styles from "./Calculator.module.scss";

type CalcContextType = {
    activeInput: boolean;
    isError: boolean;
    rawExpression: string;
    previousExpression: string;
    setActiveInput: React.Dispatch<React.SetStateAction<boolean>>;
    setIsError: React.Dispatch<React.SetStateAction<boolean>>;
    setRawExpression: React.Dispatch<React.SetStateAction<string>>;
    setPreviousExpression: React.Dispatch<React.SetStateAction<string>>;
};

export const CalcContext = createContext<CalcContextType>(null);

export default function Calculator() {
    const [previousExpression, setPreviousExpression] = useState<string>("");
    const [rawExpression, setRawExpression] = useState<string>("0");
    const [activeInput, setActiveInput] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    return (
        <div className={ styles.root }>
            <div className={ styles.innerLayer }>
                <CalcContext.Provider
                    value={
                        {
                            activeInput,
                            isError,
                            previousExpression,
                            rawExpression,
                            setActiveInput,
                            setIsError,
                            setPreviousExpression,
                            setRawExpression,
                        }
                    }
                >
                    <Display />
                    <div className={ styles.spliter }></div>
                    <Keyboard />
                </CalcContext.Provider>
            </div>
        </div>
    );
}