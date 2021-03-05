import { css, keyframes } from 'styled-components'

export const fadeInKeyframes = keyframes`
from {
  filter: blur(5px);
  opacity:0;
}

to {
  filter: blur(0);
  opacity: 1;
}
`
export const fadeIn = () =>
  css`
  animation: 0.5s ${fadeInKeyframes} ease;
  `