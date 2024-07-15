import { useState } from "react";

import ClearKey from "@components/ClearKey/ClearKey";
import CommaKey from "@components/CommaKey/CommaKey";
import DivideKey from "@components/DivideKey/DivideKey";
import DoubleZeroKey from "@components/DoubleZeroKey/DoubleZeroKey";
import EightKey from "@components/EightKey/EightKey";
import EqualKey from "@components/EqualKey/EqualKey";
import FiveKey from "@components/FiveKey/FiveKey";
import FourKey from "@components/FourKey/FourKey";
import MinusKey from "@components/MinusKey/MinusKey";
import ModuleKey from "@components/ModuleKey/ModuleKey";
import MultiplyKey from "@components/MultiplyKey/MultiplyKey";
import NineKey from "@components/NineKey/NineKey";
import OneKey from "@components/OneKey/OneKey";
import PlusKey from "@components/PlusKey/PlusKey";
import SevenKey from "@components/SevenKey/SevenKey";
import SixKey from "@components/SixKey/SixKey";
import SqrtKey from "@components/SqrtKey/SqrtKey";
import ThreeKey from "@components/ThreeKey/ThreeKey";
import TwoKey from "@components/TwoKey/TwoKey";
import ZeroKey from "@components/ZeroKey/ZeroKey";

import styles from "./Keyboard.module.css";

export default function Keyboard() {
    const [sqrtActive, setSqrtActive] = useState<boolean>(false);

    return (
        <div className={ styles.root }>
            <ClearKey setSqrtActive={ setSqrtActive } />
            <SqrtKey
                setSqrtActive={ setSqrtActive }
                sqrtActive={ sqrtActive }
            />
            <ModuleKey />
            <DivideKey />
            <SevenKey />
            <EightKey />
            <NineKey />
            <MultiplyKey />
            <FourKey />
            <FiveKey />
            <SixKey />
            <MinusKey />
            <OneKey />
            <TwoKey />
            <ThreeKey />
            <PlusKey />
            <DoubleZeroKey />
            <ZeroKey />
            <CommaKey />
            <EqualKey />
        </div>
    );
}