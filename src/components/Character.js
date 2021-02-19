// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div `
    display: flex;
    justify-content: center;
`

const StyledContainer = styled.div `
    color: white;
    background: black;
    width: 30%;
    margin-bottom: 5%;
    display: flex;
    justify-content: space-evenly;
`
const StyledParagraph = styled.p `
    font-family: sans-serif;
    font-size: 1.5rem;
`



const Character = (props) => {
    // This component will receive the characters list from state
    // and render individual character cards.
    // For now, this component will render simply the name and birthdate.
    // If additional time allows after meeting mvp, we will add more data and create a drop down toggle for each card.
    const {character} = props
    console.log(character)
    return (
        <StyledDiv>
            <StyledContainer>
                <StyledParagraph>{character.name}</StyledParagraph>
                <StyledParagraph>{character.birth_year}</StyledParagraph>
            </StyledContainer>

        </StyledDiv>
    );
}

export default Character;