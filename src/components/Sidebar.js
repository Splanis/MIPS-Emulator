import React, { useContext } from "react";

import styled from "styled-components";
import { registers } from "./register";
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
        <StyledSidebar>
            <FlexDiv>Name</FlexDiv>
            <FlexDiv>Number</FlexDiv>
            <FlexDiv>
                <span style={{ cursor: "pointer" }} onClick={handleNumeraSystem}>
                    Value({numeralSystemToString[numeralSystem]})
                </span>
            </FlexDiv>
            {registers.map((register, index) => (
                <>
                    <FlexDiv index={index} isCell={true}>
                        {register.name}
                    </FlexDiv>
                    <FlexDiv index={index} isCell={true}>
                        {index}
                    </FlexDiv>
                    <FlexDiv index={index} isCell={true}>
                        {prefix[numeralSystem]}
                        {register.value.toString(numeralSystem)}
                    </FlexDiv>
                </>
            ))}
        </StyledSidebar>
    );
};

const StyledSidebar = styled.div`
    grid-area: sidebar;
    background: #565656;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const FlexDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${(props) => (props.isCell ? "1px solid black" : "")};
    font-size: ${(props) => (props.isCell ? "16px" : "20px")};
    background: ${(props) => (props.index % 2 === 0 ? "#565656" : "#3a3a3a")};
    border-bottom: ${(props) => (props.isCell === false ? "1px solid black" : "")};
`;

export default Sidebar;
