import {
  Award,
  Bot,
  Brain,
  BriefcaseBusiness,
  Building2,
  CakeSlice,
  Coffee,
  FileText,
  Globe,
  GraduationCap,
  LayoutDashboard,
  PartyPopper,
  Plug,
  RefreshCcw,
  Rocket,
  Settings2,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  Trophy,
  Wrench,
  Zap,
} from "lucide-react";

const icons = {
  Award,
  Bot,
  Brain,
  BriefcaseBusiness,
  Building2,
  CakeSlice,
  Coffee,
  FileText,
  Globe,
  GraduationCap,
  LayoutDashboard,
  PartyPopper,
  Plug,
  RefreshCcw,
  Rocket,
  Settings2,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  Trophy,
  Wrench,
  Zap,
};

export function Icon({ name, size = 22, strokeWidth = 1.8 }) {
  const Component = icons[name] || Globe;
  return <Component size={size} strokeWidth={strokeWidth} />;
}

export function projectIcon(slug) {
  return {
    "iste-gujarat-awards": "Trophy",
    "erp-system": "Zap",
    "thrill-bazaar": "Target",
    "mindbend-docs": "FileText",
    rennoki: "Coffee",
    sampark: "GraduationCap",
    "mindbend-fest": "PartyPopper",
    "bindis-cupcakery": "CakeSlice",
  }[slug] || "BriefcaseBusiness";
}
