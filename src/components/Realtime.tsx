/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import theme from '@src/styles/tokens/index';

const Realtime = () => {
    const [selectedTarget, setSelectedTarget] = useState('ALL');
    const [selectedSort, setSelectedSort] = useState('wanted');

    const targets = [
        { key: 'ALL', label: '전체', icon: 'ALL' },
        { key: 'FEMALE', label: '여성이', icon: '👩🏻' },
        { key: 'MALE', label: '남성이', icon: '👨🏻' },
        { key: 'TEEN', label: '청소년이', icon: '👦🏻' },
    ];

    const sortOptions = [
        { key: 'wanted', label: '받고 싶어한' },
        { key: 'gifted', label: '많이 선물한' },
        { key: 'wished', label: '위시로 받은' },
    ];

    const targetButton = css`
    width: 3.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
  `;

    const buttonDivBase = css`
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.1875rem;
    transition: background-color 200ms;
  `;

    const buttonPBase = css`
    font-size: 0.8rem;
    line-height: 1.1875rem;
    margin: 0px;
    text-align: left;
  `;

    const getButtonDivStyle = (key: string) =>
        css`
      ${buttonDivBase};
      color: ${key === selectedTarget ? 'white' : theme.colors.blue400};
      background-color: ${key === selectedTarget
                ? theme.colors.blue700
                : theme.colors.blue100};
    `;

    const getButtonPStyle = (key: string) =>
        css`
      ${buttonPBase};
      font-weight: ${key === selectedTarget ? 700 : 400};
      color: ${key === selectedTarget
                ? theme.colors.blue700
                : theme.colors.gray700};
    `;

    const div1Style = css`height: 24px;`;
    const sectionFighting = css`padding: 0px 16px;`;
    const divFighting = css`
    width: 100%;
    border-radius: 1rem;
    background-color: ${theme.colors.yellow600};
    padding: 16px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  `;
    const pFightingUp = css`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    color: ${theme.colors.gray700};
    margin: 0px;
    text-align: left;
  `;
    const pFightingDown = css`
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.1875rem;
    color: ${theme.colors.textDefault};
    margin: 0px;
    text-align: left;
  `;
    const div2Style = css`height: 40px;`;
    const sectionRealtimeStyle = css`
    padding: 0px 16px;
    width: 100%;
  `;
    const h3Style = css`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6875rem;
    color: ${theme.colors.textDefault};
    margin: 0px;
    width: 100%;
    text-align: left;
  `;
    const div3Style = css`height: 20px;`;
    const buttonList = css`
    display: flex;
    border-radius: 1rem;
    background-color: white;
    width: calc(100% - 32px);
    flex-direction: column;
    justify-content: center;
  `;
    const targetList = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  `;
    const div4Style = css`height: 16px;`;
    const selectBox = css`
    width: calc(100% - 32px);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    border: 1px solid rgba(70, 132, 233, 0.1);
    background-color: ${theme.colors.blue100};
    border-radius: 0.5rem;
    padding: 12px 16px;
    gap: 8px; /* 버튼 사이 간격 추가 */
  `;

    const selectContent = css`
    background: none;
    border: none;
    width: 100%;
    flex: 1 1 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1875rem;
    color: ${theme.colors.blue500};
    transition: color 200ms, font-weight 200ms;
    cursor: pointer;
  `;

    const selectedContent = css`
    background: none;
    border: none;
    width: 100%;
    flex: 1 1 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.1875rem;
    color: ${theme.colors.blue700};
    transition: color 200ms, font-weight 200ms;
    cursor: pointer;
  `;

    return (
        <>
            <div css={div1Style} />
            <section css={sectionFighting}>
                <div css={divFighting}>
                    <p css={pFightingUp}>카카오테크 캠퍼스 3기 여러분</p>
                    <p css={pFightingDown}>프론트엔드 2단계 과제 화이팅! 🎉</p>
                </div>
            </section>
            <div css={div2Style} />
            <section css={sectionRealtimeStyle}>
                <h3 css={h3Style}>실시간 급상승 선물랭킹</h3>
                <div css={div3Style} />
                <div css={buttonList}>
                    <div css={targetList}>
                        {targets.map((target) => (
                            <button
                                key={target.key}
                                css={targetButton}
                                onClick={() => setSelectedTarget(target.key)}
                            >
                                <div css={getButtonDivStyle(target.key)}>{target.icon}</div>
                                <p css={getButtonPStyle(target.key)}>{target.label}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <div css={div4Style} />
                <div css={selectBox}>
                    {sortOptions.map(({ key, label }) => (
                        <button
                            key={key}
                            css={key === selectedSort ? selectedContent : selectContent}
                            onClick={() => setSelectedSort(key)}
                            type="button"
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div css={div4Style}></div>
            </section>
        </>
    );
};

export default Realtime;
