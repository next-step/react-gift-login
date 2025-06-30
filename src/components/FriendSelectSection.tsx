import IconTextButton from '@/components/common/IconTextButton';

const FriendSelectSection = () => {
  return (
    <section
      style={{
        boxSizing: 'border-box',
        height: '106px',
        padding: '16px 12px',
        backgroundColor: '#f2f3f6',
        marginBottom: '16px',
      }}
    >
      <IconTextButton
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2a3038"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        }
        text="선물할 친구를 선택해 주세요."
      />
    </section>
  );
};

export default FriendSelectSection;
