import styled from "@emotion/styled";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.spacing2};
  height: 44px;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const Img = styled.img`
  width: 150px;
  height: auto;
`;

const BackSvg = styled.svg`
  cursor: pointer;
`;

const UserSvg = styled.svg`
  cursor: pointer;
`;

const TheHeader = () => {
  return (
    <Header>
      <BackSvg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m15 18-6-6 6-6"></path>
      </BackSvg>
      <Img
        alt="카카오 선물하기 로고"
        src="data:image/webp;base64,UklGRhwGAABXRUJQVlA4WAoAAAAIAAAAKwEAVwAAVlA4IDwFAADwIQCdASosAVgAPmEwlUekIyIhIlYJgIAMCWlu4XNBG+wr/qvbH/X/xG7AXzJ7LZOZ73/RP2Y+SP6b/gPkA9s9pX+u/k7wQXKf51/jfzF/pvOZ3jv6X/oOO8+gf6H2AP49/Q/+D6Uf+d/lfQB9D/9H3C/5N/Rf+F/e/bA9avoSfr2LSwhIbYv3zsfvnY9UA0ER3Xnq1FSrxxa5Q/TWUYEOPE8YJR0xfvnYeH1DeAMKL8AIs2mnZW/VFiwAql+++OWqolxQJpHo4jGNEiXil/lcpWA9mBuvjCawhIbW/t327FV+wEsXo9oWOvAb/pRaPh7TsOSHCk7dqvmOgvRKiNIIWbd++dj99tb/K2EJDbF++dj987H750QAAP7/lQAFMsOip+WSb+6Y8kGhQEQv2rODgJCcExnUQX+FWytArqAW/evjRpyE3gUUuW4bLQH9VKKA8izzZElTyaoNqOSgEFV0zv0lX+YeLexofwo8KHfr6miZeCMPO4jXOSyMz1wcntdudncGf7jeKyrelNLk6tTy5Muov/qDKtr+FhxAJ//43w/5W3/+UceR+Wmw3qk3hHAw/u/Q6B1AVd+3vvWelFpNdcbFJsvMTyYhxipBpIv8XEWuCVExAGu4B/seKHbOAI/P7cD4d2OR9SAmBUPBdH2BfikuDcxrOFczL/PGtLwMwBVWLfpDC1lXCumHLZ+DLsQJqb+LWK9ejU/GUjpnpeQoW+sS3kJaYRRWf2auJXrr1GtIgasDlFIqhg8/jNEQG501Q+d9JPxX0d2IdZEeO/yF74wxg8vA6DljUfxqkSab2bDnu34A+P9Zr69DxiqrQlwyL6+lZc3qA/UN14HzWvFtOT7/dgq47BOnofDiW0B7z5M899SzeB7u3jJCjMdfqYPYcJviBar548bzhREC6YKbwDZKLdcYvhXVRfer7/3Kulz4nxauMLSy1caKju2O8P5pmSY6AsRxwdi3f4SfFgA79phKk7fpfCyu5uRh3Zsiokv1oYxwS2eMkrF75dMb+cLDB8rptlw8erkvXOAHEoAU5VBeWJb42q0j8V7odU9Cg30fCH2qn5XjbRaxNEwQnppKoeo3zN8lmbAaB1SR+Qk+5UcmsGY11xJf1Xlk/SOsyr9CuXliYURSEzo/f6C3clbENtE7aOlsrk/3oePy46xYBfX1CqWeOF2geKibX25v9VJ49xtTUEGz9zxyDWZiF/2Gi1zYaEec2SDh9hsXw8QuFJJQT62wthbFw+3w7ZUiPPqtAmRny2MUPWwDk4+sIRHUrp6G72aJ7TYJcX6qMtuUmQzAbv+0mEUwZj6Iex8hSW46nfOD+o3i3FnhW7U9NVDbm7XuHlht1Y/8hJbc2xP8MI81WEGYo07ihcKwdY3+4WG8WXzm1hfk1BA/MXiE5Wggh4YvhPasUdE6V6xB9KfdpB1J8z8iAS4ucpXeJAILIqu2XODl/cE4jN2Ak0qJi3+zj9Gei+EknlxzE342NP7njYu6WtV7UROt7kw7TyGDcd0c+UzJxdDuzuHdT++07WIfbksgQ/SGFp3VmzHJ89DIvjP99OLu2H37ftSme8oUEblGBxh+As+OmGCaADsptlUnvLHxSXUI2KGvaCRin9JkBhq6pC78yvX8i5oiaDnD55w/vbPGOT+9B8jNF/bgrwQ3sQE8EEori+Rvmf6KyHqqARrdDIO2Pim1BJJt0am24pKKXWrD+9Y0cSePhTJLnlmoNY4hZq3bw2+WJsaCxJsWdfWO1X0V/Nx+ngATOBPOrwYrNMrkir0AAAAAAEVYSUa6AAAARXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAADBSwMA6AMAAMFLAwDoAwAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAACwBAAADoAQAAQAAAFgAAAAAAAAA"
      ></Img>
      <UserSvg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="5"></circle>
        <path d="M20 21a8 8 0 0 0-16 0"></path>
      </UserSvg>
    </Header>
  );
};

export default TheHeader;
