export type personFilterType = {
  label: string;
  emoji: string;
};

export type personProps = {
  options: readonly personFilterType[];
  selected: personFilterType;
  onSelect: (option: personFilterType) => void;
};

export type behaviorFilterType = string;
export type behaviorProps = {
  options: readonly behaviorFilterType[];
  selected: behaviorFilterType;
  onSelect: (option: behaviorFilterType) => void;
};
