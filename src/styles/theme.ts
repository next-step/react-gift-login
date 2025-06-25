const theme = {
  colors: {
    // Gray 계열
    gray00: "#ffffff", //흰색
    gray100: "#f7f8f9", //가장 밝은 회색
    gray200: "#f3f4f5", //매우 밝은 회색
    gray300: "#eeeff1", //밝은 회색
    gray400: "#dcdee3", //연한 회색
    gray500: "#d1d3d8", //중간 밝은 회색
    gray600: "#b0b3ba", //중간 회색
    gray700: "#868b94", //진한 회색
    gray800: "#555d6d", //매우 진한 회색
    gray900: "#2a3038", //거의 검은색
    gray1000: "#1a1c20", //검은색

    // Yellow 계열
    yellow00: "#fffef9", //가장 밝은 노란색
    yellow100: "#fffce5", //매우 밝은 노란색
    yellow200: "#fff8b7", //밝은 노란색
    yellow300: "#fff38a", //연한 노란색
    yellow400: "#ffef5c", //중간 밝은 노란색
    yellow500: "#ffea2e", //중간 노란색
    yellow600: "#fee500", //카카오 메인 노란색
    yellow700: "#d5c000", //진한 노란색
    yellow800: "#ac9b00", //매우 진한 노란색
    yellow900: "#847700", //어두운 노란색
    yellow1000: "#5b5200", //가장 어두운 노란색

    // Brown 계열
    brown00: "#fff9f4", //가장 밝은 갈색
    brown100: "#ffeedc", //매우 밝은 갈색
    brown200: "#ffe2c4", //밝은 갈색
    brown300: "#f9d0a8", //연한 갈색
    brown400: "#edbc8a", //중간 밝은 갈색
    brown500: "#cb9a69", //중간 갈색
    brown600: "#a97b4d", //진한 갈색
    brown700: "#875e35", //매우 진한 갈색
    brown800: "#654321", //카카오 브라운
    brown900: "#432a12", //어두운 갈색
    brown1000: "#2d1b08", //가장 어두운 갈색

    // Blue 계열
    blue00: "#f8faff", //가장 밝은 파란색
    blue100: "#eff6ff", //매우 밝은 파란색
    blue200: "#e2edfc", //밝은 파란색
    blue300: "#cbdffa", //연한 파란색
    blue400: "#aacefd", //중간 밝은 파란색
    blue500: "#85b8fd", //중간 파란색
    blue600: "#5e98fe", //진한 파란색
    blue700: "#217cf9", //매우 진한 파란색
    blue800: "#135fcd", //어두운 파란색
    blue900: "#0b4596", //매우 어두운 파란색
    blue1000: "#032451", //가장 어두운 파란색

    // Red 계열
    red00: "#fffafa", //가장 밝은 빨간색
    red100: "#fdf0f0", //매우 밝은 빨간색
    red200: "#fde7e7", //밝은 빨간색
    red300: "#fed4d2", //연한 빨간색
    red400: "#feb7b3", //중간 밝은 빨간색
    red500: "#fe928d", //중간 빨간색
    red600: "#fc6a66", //진한 빨간색
    red700: "#fa342c", //매우 진한 빨간색
    red800: "#ca1d13", //어두운 빨간색
    red900: "#921708", //매우 어두운 빨간색
    red1000: "#4a1209", //가장 어두운 빨간색
  },
  semantic_color: {
    // Brand 컬러
    kakaoYellow: "#fee500", //카카오 메인 노란색
    kakaoYellowHover: "#ffea2e", //카카오 노란색 호버 상태
    kakaoYellowActive: "#d5c000", //카카오 노란색 활성 상태
    kakaoYellowPressed: "#d5c000", //카카오 노란색 눌림 상태
    kakaoBrown: "#654321", //카카오 갈색
    kakaoBrownPressed: "#432a12", //카카오 갈색 눌림 상태
  },
  background_color: {
    default: "#ffffff", //기본 배경색
    disabled: "#f3f4f5", //비활성 배경색
    fill: "#f7f8f9", //채움 배경색
  },
  text_color: {
    default: "#2a3038", //기본 텍스트 색상
    sub: "#b0b3ba", //보조 텍스트 색상
    disabled: "#dcdee3", //비활성 텍스트 색상
    placeholder: "#b0b3ba", //플레이스홀더 텍스트 색상
  },
  border_color: {
    default: "#dcdee3", //기본 테두리 색상
    disabled: "#eeeff1", //비활성 테두리 색상
  },
  state_color: {
    critical: "#fa342c", //경고/에러 색상
    criticalBackground: "#fdf0f0", //경고/에러 배경 색상
    info: "#217cf9", //정보 색상
    infoBackground: "#eff6ff", //정보 배경 색상
  },
  typography: {
    title1Bold: '700 1.25rem/1.6875rem "Pretendard", sans-serif',
    title1Regular: '400 1.25rem/1.6875rem "Pretendard", sans-serif',

    title2Bold: '700 1rem/1.5rem "Pretendard", sans-serif',
    title2Regular: '400 1rem/1.5rem "Pretendard", sans-serif',

    subtitle1Bold: '700 1rem/1.375rem "Pretendard", sans-serif',
    subtitle1Regular: '400 1rem/1.5rem "Pretendard", sans-serif',

    subtitle2Bold: '700 0.875rem/1.1875rem "Pretendard", sans-serif',
    subtitle2Regular: '400 0.875rem/1.1875rem "Pretendard", sans-serif',

    body1Bold: '700 1rem/1.375rem "Pretendard", sans-serif',
    body1Regular: '400 1rem/1.375rem "Pretendard", sans-serif',

    body2Bold: '700 0.875rem/1.1875rem "Pretendard", sans-serif',
    body2Regular: '400 0.875rem/1.1875rem "Pretendard", sans-serif',

    label1Bold: '700 0.875rem/1.1875rem "Pretendard", sans-serif',
    label1Regular: '400 0.875rem/1.1875rem "Pretendard", sans-serif',

    label2Bold: '700 0.75rem/1rem "Pretendard", sans-serif',
    label2Regular: '400 0.75rem/1rem "Pretendard", sans-serif',

    spacing0: "0px", //간격 없음
    spacing1: "4px", //최소 간격
    spacing2: "8px", //작은 간격
    spacing3: "12px", //작은-중간 간격
    spacing4: "16px", //기본 간격
    spacing5: "20px", //중간 간격
    spacing6: "24px", //중간-큰 간격
    spacing7: "28px", //큰 간격
    spacing8: "32px", //매우 큰 간격
    spacing9: "36px", //초대형 간격
    spacing10: "40px", //40px 간격
    spacing11: "44px", //44px 간격
    spacing12: "48px", //48px 간격
    spacing13: "52px", //52px 간격
    spacing14: "56px", //56px 간격
    spacing15: "60px", //60px 간격
    spacing16: "64px", //최대 간격
  },
};

export type ThemeType = typeof theme;
export default theme;
