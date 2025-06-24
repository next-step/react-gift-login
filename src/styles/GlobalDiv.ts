import styled from '@emotion/styled'

export const GlobalDiv = styled.div`
  * {
    max-width: 720px;
    overflow: hidden;
  }
  .flex {
    display: flex;
  }

  .flex_center {
    justify-content: center;
    align-items: center;
  }

  .bg_red {
    background-color: red;
  }
  .bg_blue {
    background-color: blue;
  }
  .bg_white {
    background-color: white;
  }
  .grid5 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  .grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`
