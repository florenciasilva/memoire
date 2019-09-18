import React from 'react';
import { EditBlock, Post, GrayBtn, SecondaryBtn } from './style';

const Edit = (props) => (
    <EditBlock style={{display: (props.i === props.state.currentEdit) ? "flex" : "none"}}
            hidden={props.state.hidden}
            role="region"
            tabIndex={props.state.tabIndex}>
        <label htmlFor={`edit${props.i}`}>Editar post</label>
        <textarea
            ref={input => input && input.focus()}
            id={`edit${props.i}`}
            value={props.state.editText}
            onChange={e => props.editStage(e)} />
        <Post>
            <GrayBtn onClick={e => props.handleCancel()}>Cancelar</GrayBtn>
            <SecondaryBtn onClick={e => props.handleSubmit(e, props.id)}>Editar</SecondaryBtn>
        </Post>
    </EditBlock>
)

export default Edit