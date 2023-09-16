import { FC } from "react";
import { KeyValueFlex } from "../styled/Flex";
import { TextDesktopLight, TextDesktopMain } from "../styled/Typography";

const KeyValue: FC<{ label: string; value: string | string[] | number }> = ({
    label,
    value,
}) => {
    return (
        <KeyValueFlex>
            <TextDesktopMain>{label}</TextDesktopMain>
            <TextDesktopLight>{value}</TextDesktopLight>
        </KeyValueFlex>
    );
};

export default KeyValue;
