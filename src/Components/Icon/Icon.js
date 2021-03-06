import React from "react";

import { 
  Login,
  Magnifier,
  Mascot,
  Register,
  NavCircle,
  RobotCircle,
  Smartphone,
  Monitor,
  MascotColor,
  Planet,
  ArrowLeftCircle,
  Threads,
  Pinned,
  Friends,
  Groups,
  Global,
  Plus,
  Cross,
  ChevronCircle,
  ExitCircle,
  CogCircle,
  Sort,
  SortCircle,
  CloseSortCircle,
  CrossCircle,
  MagnifierPlus,
  MagnifierCog,
  MagnifierCross,
  Comments,
  Redirections,
  Upvotes,
  EyeCross,
  Eye,
} from "Components/Icon/Svg";


const Icon = (props) => {

  const Svgs = {
    Mascot: Mascot,
    Login: Login,
    Register: Register,
    Magnifier: Magnifier,
    NavCircle: NavCircle,
    RobotCircle: RobotCircle,
    Smartphone: Smartphone,
    Monitor: Monitor,
    MascotColor: MascotColor,
    Planet: Planet,
    ArrowLeftCircle: ArrowLeftCircle,
    Threads: Threads,
    Pinned: Pinned,
    Friends: Friends,
    Groups: Groups,
    Global: Global,
    Plus: Plus,
    Cross: Cross,
    ChevronCircle: ChevronCircle,
    ExitCircle: ExitCircle,
    CogCircle: CogCircle,
    Sort: Sort,
    SortCircle: SortCircle,
    CloseSortCircle: CloseSortCircle,
    CrossCircle: CrossCircle,
    MagnifierPlus: MagnifierPlus,
    MagnifierCog: MagnifierCog,
    MagnifierCross: MagnifierCross,
    Comments: Comments,
    Redirections: Redirections,
    Upvotes: Upvotes,
    EyeCross: EyeCross,
    Eye: Eye,
  }

  const getSvg = (svgName) => {

    if (!(svgName in Svgs)) {
      return <div className="error-icon">{`Svg '${svgName}' do not match any Svg component name.`}</div>;
    }
    const SvgComponent = Svgs[svgName];
    return <SvgComponent iconColor={props.iconColor || "#000000"} />; 
  }

  return getSvg(props.icon);

};

export default Icon;