import React from 'react'
import styled from 'styled-components'

const Toggle = styled.div`
  touch-action: pan-x;
  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`

const ToggleInput = styled.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const ToggleUncheck = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  opacity: 0;
  transition: opacity 0.25s ease;
  span {
    align-items: center;
    display: flex;
    height: 10px;
    justify-content: center;
    position: relative;
    width: 10px;
    opacity: 1;
    right: 10px;
  }
`

const ToggleCheck = styled.div`
  left: 8px;
  span {
    align-items: center;
    display: flex;
    height: 10px;
    justify-content: center;
    position: relative;
    width: 10px;
  }
`

const ToggleContainer = styled.div`
  width: 40px;
  height: 15px;
  padding: 0;
  border-radius: 30px;
  background-color: #4d4d4d;
  transition: all 0.2s ease;
`

const ToggleCircle = styled.div`
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  border: 1px solid #4d4d4d;
  border-radius: 50%;
  background-color: #fafafa;
  box-sizing: border-box;
  transition: all 0.25s ease;
`

const ToggleButton = () => {
  return (
    <Toggle>
      <ToggleContainer>
        <ToggleCheck>
          <span>🌜</span>
        </ToggleCheck>
        <ToggleUncheck>
          <span>🌞</span>
        </ToggleUncheck>
      </ToggleContainer>
      <ToggleCircle />
      <ToggleInput type='checkbox' aria-label='Toggle Button' />
    </Toggle>
  )
}

export default ToggleButton
