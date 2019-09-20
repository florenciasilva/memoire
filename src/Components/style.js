import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Heading = styled.h1`
    align-self: center;
    font-size: 2rem;
    text-transform: lowercase;
    margin-top: 5rem;
    margin-bottom: -5rem;
    letter-spacing: .2rem;

`

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

`

export const Input = styled.input`
    margin: 1rem 0 1rem 0;
    padding: .4rem;
    border: none;
    border-bottom: .1rem solid #27e6be;
    border-radius: 7px;
`

export const TextArea = styled.textarea`
    margin: 1rem 0 .5rem 0;
    width: 20rem;
    height: 7rem;
    padding: .4rem;
    border: .1rem solid #27e6be;
    border-radius: 7px;
    :focus {
        outline: none;
        border: .2rem solid #27e6be;
        margin: 1rem 0 .2rem 0;
        border-radius: 7px;
}
`

export const Submit = styled.button`
    padding: .6rem;
    border: .1rem solid #27e6be;
    border-radius: 7px;
    background-color: #27e6be;
    font-size: 1.1rem;
    color: black;
    :hover {
        color: white;
    }
`


export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const SecondaryBtn = styled.button`
    padding: .6rem;
    border: .1rem solid #27e6be;
    border-radius: 7px;
    background-color: white;
    color: black;
    margin: 0 .2rem .3rem .2rem;
    font-size: .8rem;
    :hover {
        background-color: #27e6be;
        color: black;
        font-weight: bold;
    }
`

export const GrayBtn = styled.button`
    padding: .6rem;
    border: .1rem solid darkslategray;
    border-radius: 7px;
    background-color: white;
    color: darkslategray;
    margin: 0 .2rem .3rem .2rem;
    font-size: .8rem;
    :hover {
        color: black;
        border: .1rem solid red;
    }
`

export const Post = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const PostContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: .1rem solid lightgray;
    border-radius: 7px;
    width: 15rem;
    height: 12rem;
    margin: 1rem;
`

export const Wrapper = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const Links = styled(Link)`
    text-decoration: none;
    color: black;
`

export const Header = styled.header`
    & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .2rem .2rem 0 0rem;
    flex-direction: row;
    }
`

export const Logo = styled.i`
    margin-left: .2rem;
    font-size: 2rem;
    filter: opacity(0.8);
    color: #27e6be;
`

export const Date = styled.p`
    align-self: flex-end;
    margin-right: .2rem;
    font-size: .8rem;
`
export const Text = styled.p`
    margin-top: 1rem;
    font-size: 1rem;
    word-wrap: break-word;
    max-width: 13rem;
    overflow-y: auto;
    align-self: center;
    height: 8rem;
    max-height: 12rem;
    scroll-behavior: smooth;
`

export const Favorite = styled.button`
    background-color: white;
    border: 0;
`

export const EndToEnd = styled.div`
    display: flex;
    & .right {
        align-self: flex-start
    }

    & .left {
        align-self: flex-end
    }
`

export const Register = styled(Link)`
    font-size: .9rem;
    text-decoration: none;
    margin-bottom: .7rem;
    :hover {
        color: #27e6be;
    }
`

export const EditBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -.5rem;
`

