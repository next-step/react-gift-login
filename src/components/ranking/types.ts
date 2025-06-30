export type personFilterType = {
  label: string;
  emoji: string;
};

export type behaviorFilterType = string;

export type personProps = {
  options: readonly personFilterType[]
  selected: string|null;
  onSelect: (option: string) => void;
};

export type behaviorProps = {
  options: readonly behaviorFilterType[];
  selected: behaviorFilterType|null;
  onSelect: (option: behaviorFilterType) => void;
};
