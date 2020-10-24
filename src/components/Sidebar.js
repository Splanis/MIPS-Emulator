import React, { useContext } from "react";

import styled from "styled-components";
import { registers } from "../utils/register";
import { Context } from "../context/Context";
import * as actions from "../context/actionTypes";

const numeralSystemToString = { 2: "bin", 10: "dec", 16: "hex" };
const prefix = { 2: "0b", 10: "", 16: "0x" };

const Sidebar = () => {
    const [state, dispatch] = useContext(Context);

    const { numeralSystem } = state.sidebar;

    const handleNumeraSystem = () => {
        if (numeralSystem === 16)
            return dispatch({ type: actions.CHANGE_NUMERAL_SYSTEM, payload: 10 });
        if (numeralSystem === 10)
            return dispatch({ type: actions.CHANGE_NUMERAL_SYSTEM, payload: 2 });
        if (numeralSystem === 2)
            return dispatch({ type: actions.CHANGE_NUMERAL_SYSTEM, payload: 16 });
    };

    return (
        <StyledSidebar visible={state.sidebar.visible}>
            <Cell>Name</Cell>
            <Cell>Number</Cell>
            <Cell>
                <span style={{ cursor: "pointer" }} onClick={handleNumeraSystem}>
                    Value({numeralSystemToString[numeralSystem]})
                </span>
            </Cell>
            {registers.map((register, index) => (
                <React.Fragment key={index}>
                    <Cell index={index} isCell={true}>
                        {register.name}
                    </Cell>
                    <Cell index={index} isCell={true}>
                        {index}
                    </Cell>
                    <Cell index={index} isCell={true}>
                        {prefix[numeralSystem]}
                        {register.value.toString(numeralSystem)}
                    </Cell>
                </React.Fragment>
            ))}
        </StyledSidebar>
    );
};

const StyledSidebar = styled.div`
    background: #565656;
    display: ${(props) => (props.visible ? "grid" : "none")};
    grid-template-columns: 1fr 1fr 1fr;
    flex: 2;
`;

const Cell = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${(props) => (props.isCell ? "1px solid black" : "")};
    font-size: ${(props) => (props.isCell ? "13px" : "20px")};
    background: ${(props) => (props.index % 2 === 0 ? "#565656" : "#3a3a3a")};
    border-bottom: ${(props) => (props.isCell === false ? "1px solid black" : "")};
`;

export default Sidebar;
