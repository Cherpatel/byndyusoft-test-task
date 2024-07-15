import cn from "classnames";
import { useContext } from "react";

import { CalcContext } from "@components/Calculator/Calculator";

import styles from "./KeyButton.module.scss";

type Props = {
    className?: string;
    children: React.ReactNode;
    onClick: React.MouseEventHandler<Element>;
    preventDefault?: boolean;
    isEqual?: boolean;
};

export default function KeyButton({
    children,
    className,
    isEqual = false,
    onClick,
    preventDefault = false,
}: Props) {
    const { isError, setPreviousExpression } = useContext(CalcContext);

    return (
        <div
            className={ cn(styles.root, className) }
            onClick={
                e => {
                    if (!isEqual && !isError) setPreviousExpression("");
                    if (preventDefault || !isError) onClick(e);
                }
            }
        >
            { children }
        </div>
    );
}