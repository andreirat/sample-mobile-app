export interface SectionListProps {
  tabs: string[];
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}
