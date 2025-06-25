// styles/theme.ts
const theme = {
    colors: {
      gray: {
        100: '#f7f8f9',
        200: '#f3f4f5',
        300: '#eeeff1',
        400: '#dcdee3',
        500: '#d1d3d8',
        600: '#b0b3ba',
        700: '#868b94',
        800: '#555d6d',
        900: '#2a3038',
        1000: '#1a1c20',
      },
      yellow: {
        600: '#fee500', // 카카오 메인
        hover: '#ffea2e',
        active: '#d5c000',
      },
      kakaoBrown: '#654321',
      critical: '#fa342c',
      info: '#217cf9',
    },
    text: {
      default: '#2a3038',
      sub: '#b0b3ba',
      disabled: '#dcdee3',
      placeholder: '#b0b3ba',
    },
    background: {
      default: '#ffffff',
      disabled: '#f3f4f5',
      fill: '#f7f8f9',
    },
    border: {
      default: '#dcdee3',
      disabled: '#eeeff1',
    },
    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
    },
    typography: {
      title1Bold: {
        fontSize: '1.25rem',
        fontWeight: 700,
        lineHeight: '1.6875rem',
      },
      body2Regular: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.1875rem',
      },
    },
  };
  
  export default theme;
  