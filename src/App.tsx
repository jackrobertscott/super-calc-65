import React, {ReactNode, useState} from 'react'
import {css} from '@emotion/css'
import './App.css'

function App() {
  const [text, textSet] = useState('')
  const addValue = (val: string) => {
    let currentText = text
    const lastChar = currentText.slice(-1)
    if (lastChar === 'R') {
      currentText = ''
    }
    if (lastChar === '.' && val === '.') return textSet('')
    if (val === '=') {
      try {
        const i = eval(currentText)
        if (typeof i === 'number') return textSet(i + '')
        else throw new Error()
      } catch (e) {
        console.log(e)
        return textSet('ERROR')
      }
    }
    textSet(currentText + val)
  }
  return (
    <div
      className={css({
        height: '100vh',
        width: '100%',
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <div
        className={css({
          gap: 20,
          width: 300,
          padding: 20,
          fontSize: 20,
          borderRadius: 13,
          color: 'hsl(0, 0%, 40%)',
          border: '1px solid hsl(0, 0%, 70%)',
          background:
            'linear-gradient(to bottom, hsl(0, 0%, 90%), hsl(0, 0%, 80%))',
          boxShadow: '0 0 15px 0 hsla(0, 0%, 0%, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontWeight: 'bold',
        })}
      >
        <div>Super Calc 65</div>
        <div
          className={css({
            width: '100%',
            display: 'flex',
          })}
        >
          <div
            className={css({
              flexGrow: 1,
              padding: 10,
              height: '1.2em',
              borderRadius: 8,
              textAlign: 'right',
              background: 'white',
              border: '1px solid hsl(0, 0%, 50%)',
              boxShadow: 'inset 3px 3px 5px 0 hsla(0, 0%, 0%, 0.15)',
              whiteSpace: 'nowrap',
              overflowX: 'auto',
              overflowY: 'hidden',
            })}
          >
            {text}
          </div>
        </div>
        <div
          className={css({
            gap: 10,
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          })}
        >
          <ButtonCol>
            <Button label="1" click={() => addValue('1')} />
            <Button label="4" click={() => addValue('4')} />
            <Button label="7" click={() => addValue('7')} />
            <Button label="0" click={() => addValue('0')} />
          </ButtonCol>
          <ButtonCol>
            <Button label="2" click={() => addValue('2')} />
            <Button label="5" click={() => addValue('5')} />
            <Button label="8" click={() => addValue('8')} />
            <Button
              label="."
              equals={text.slice(-1) === '.'}
              click={() => addValue('.')}
            />
          </ButtonCol>
          <ButtonCol>
            <Button label="3" click={() => addValue('3')} />
            <Button label="6" click={() => addValue('6')} />
            <Button label="9" click={() => addValue('9')} />
            <Button label="=" equals={true} click={() => addValue('=')} />
          </ButtonCol>
          <ButtonCol>
            <Button label="+" click={() => addValue('+')} operator={true} />
            <Button label="-" click={() => addValue('-')} operator={true} />
            <Button label="*" click={() => addValue('*')} operator={true} />
            <Button label="/" click={() => addValue('/')} operator={true} />
          </ButtonCol>
        </div>
        <div>Made in Australia</div>
      </div>
    </div>
  )
}

function Button(props: {
  label: string
  operator?: boolean
  equals?: boolean
  click?: () => void
}) {
  return (
    <div
      onClick={() => props.click?.()}
      className={css({
        padding: '8px 0',
        borderRadius: 8,
        userSelect: 'none',
        cursor: 'pointer',
        transition: '200ms',
        textAlign: 'center',
        fontSize: '1.2em',
        color: 'hsl(0, 0%, 10%)',
        background: props.equals
          ? 'linear-gradient(to bottom, hsl(60, 100%, 50%), hsl(60, 100%, 40%))'
          : props.operator
          ? 'linear-gradient(to bottom, hsl(300, 100%, 50%), hsl(300, 100%, 40%))'
          : 'linear-gradient(to bottom, hsl(0, 0%, 100%), hsl(0, 0%, 90%))',
        border: '1px solid hsl(0, 0%, 50%)',
        boxShadow: '3px 3px 5px 0 hsla(0, 0%, 0%, 0.1)',
        '&:active': {boxShadow: '3px 3px 5px 0 hsla(0, 0%, 0%, 0)'},
      })}
    >
      {props.label}
    </div>
  )
}

function ButtonCol(props: {children: ReactNode}) {
  return (
    <div
      className={css({
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      })}
    >
      {props.children}
    </div>
  )
}

export default App
