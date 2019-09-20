import React from 'react';
import { EditBlock, GrayBtn, SecondaryBtn, RowContainer } from './style';

const Edit = (props) => (
    <EditBlock style={{display: (props.i === props.state.currentEdit) ? "flex" : "none"}}
            hidden={props.state.hidden}
            role="region"
            tabIndex={props.state.tabIndex}>
        <label htmlFor={`edit${props.i}`}>Editar post</label>
        <textarea
            className="styled-focus"
            ref={input => input && input.focus()}
            id={`edit${props.i}`}
            value={props.state.editText}
            onChange={props.editStage} />
        <RowContainer>
            <GrayBtn className="styled-focus" onClick={props.handleCancel}>Cancelar</GrayBtn>
            <SecondaryBtn className="styled-focus" onClick={e => props.handleSubmit(e, props.id)}>Editar</SecondaryBtn>
        </RowContainer>
    </EditBlock>
)

export default Edit