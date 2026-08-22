/**
 * Maps icon key strings (from navigation/solutions data) to SVG icon components.
 * Used in Mega Menu, Solution Cards, and Feature Cards.
 */
import {
  IconForkKnife, IconCoffee, IconBowl, IconDrink, IconBread,
  IconBuffet, IconWineGlass, IconTruck, IconBuilding, IconChopsticks,
  IconPOS, IconTable, IconMenu, IconMobile, IconOrderPay,
  IconUsers, IconCalendar, IconQueue, IconTag, IconBox,
  IconChart, IconBranch, IconPlug, IconHeadset,
} from "./Icon";

type IconKey =
  | "forkknife" | "coffee" | "bowl" | "drink" | "bread"
  | "buffet" | "wineglass" | "truck" | "building" | "chopsticks" | "qsr"
  | "pos" | "table" | "menu" | "mobile" | "orderpay"
  | "users" | "calendar" | "queue" | "tag" | "box"
  | "chart" | "branch" | "plug" | "headset";

interface NavIconProps {
  icon: string;
  className?: string;
  strokeWidth?: number;
}

const iconMap: Record<IconKey, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  forkknife: IconForkKnife,
  coffee: IconCoffee,
  bowl: IconBowl,
  drink: IconDrink,
  bread: IconBread,
  buffet: IconBuffet,
  wineglass: IconWineGlass,
  truck: IconTruck,
  building: IconBuilding,
  chopsticks: IconChopsticks,
  qsr: IconPOS,
  pos: IconPOS,
  table: IconTable,
  menu: IconMenu,
  mobile: IconMobile,
  orderpay: IconOrderPay,
  users: IconUsers,
  calendar: IconCalendar,
  queue: IconQueue,
  tag: IconTag,
  box: IconBox,
  chart: IconChart,
  branch: IconBranch,
  plug: IconPlug,
  headset: IconHeadset,
};

export function NavIcon({ icon, className = "w-5 h-5", strokeWidth = 1.5 }: NavIconProps) {
  const Component = iconMap[icon as IconKey];
  if (!Component) return null;
  return <Component className={className} strokeWidth={strokeWidth} />;
}
