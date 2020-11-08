import React, { useRef, useState} from 'react';
import styled, { keyframes } from "styled-components";

export default ({ value, onChange}) => {

	const textInput = useRef(null)
	const mockInput = useRef(null)

	const [hasFocus, setHasFocus] = useState(false)
	const [newChar, setNewChar] = useState("")
	const [text, setText] = useState(value)

	const HiddenInput = styled.input`
		position:relative;
		left: 20px;
	`

	const MockedInput = styled.div`
		background: #88d8b0;
		position: relative;
		top: -23px;
		height: 65px;
		text-align: center;
		padding: 20px;
		padding-top: 25px;
		border-radius: 15px;
		box-shadow: ${props => props.hasFocus ? "7px 7px 2px #888888" : ""}
	`

	const blink = keyframes`
		from {  
			background: #666666;
			color: #666666;
		}
		to {  
			background: #88d8b0;
			color: #88d8b0;
		}
	`

	const Cursor = styled.span`
		animation: ${blink} 1.05s linear infinite;
		width: 13px;
		margin-left: 2px;
		display:  ${props => props.hasFocus ? "inline" : "none"}
	`

	const textDrop = keyframes`
		from {top: -10px;}
		to {top: 0px;}
	`

	const NewCharacter = styled.span`
		animation: ${textDrop} .5s;
		position: relative;
	`

	const onFocus = () => {
		setHasFocus(true);
		textInput.current.focus();
	}

	const onBlur = () => {
		setHasFocus(false)
		setNewChar("")
		onChange(text)
	}

	const onKeyInput = e => {
		const input = e.key;
		setNewChar(input)
		setText(`${text}${input}`)
	}

	return (
				<>
				  <HiddenInput
				  	value={text}
					onKeyPress={onKeyInput}
					onBlur={onBlur}
					ref={textInput}
					autoFocus={hasFocus}
				/>
				  <MockedInput
					onClick={onFocus}
					onKeyPress={() => { alert() }} 
					hasFocus={hasFocus}  
					ref={mockInput}>
						{newChar !== "" && hasFocus ? text.slice(0, -1) : text}
						{newChar !== "" && hasFocus ? (<NewCharacter>{newChar}</NewCharacter>) : null}
					  <Cursor hasFocus={hasFocus}>||</Cursor>
				  </MockedInput>
				</>
			  );
}
