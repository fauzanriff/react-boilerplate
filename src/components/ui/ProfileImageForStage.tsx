import { cn, isInteger } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export type ProfileImageForStageProps = {
  index?: number;
  activeIndex?: number;
  fallback?: string;
  url?: string;
  style?: React.CSSProperties;
};

function ProfileImageForStage({ index, activeIndex, fallback, url, style }: ProfileImageForStageProps) {
  const COMPONENT_WIDTH = 40;
  const COMPONENT_MARGIN = 5;
  const COMPONENT_ACTIVE_WIDTH = 62;

  let distanceToLeftComponent = COMPONENT_WIDTH + COMPONENT_MARGIN;
  let distanceOfActiveComponent = COMPONENT_ACTIVE_WIDTH;
  let actualDistance = (((index ?? 0) - 1) * distanceToLeftComponent); // distance to left is calculated to make the animation
  let zIndex: string|number = 'auto';
  let top = 0;

  const isAbsoluteActive = isInteger(index) && isInteger(activeIndex);
  const isActive = index === activeIndex;

  if (!isActive) {
    actualDistance += distanceOfActiveComponent;
    if ((index ?? 0) < (activeIndex ?? 0)) {
      actualDistance += distanceToLeftComponent;
    }
  } else {
    actualDistance = 0;
    zIndex = 19;
  }

  const styleForAbsoluteComponent = {
    left: actualDistance,
    zIndex,
    top,
    ...style,
  };


  return (
    <div
      className={cn(`transition-all ease-in duration-500 w-[40px] h-[40px]`, {'w-[70px] h-[40px]': isActive, 'absolute': isAbsoluteActive})}
      style={isAbsoluteActive ? styleForAbsoluteComponent : style}
    >
      <Avatar className={cn('transition-all ease-in duration-500 h-[40px] w-[40px] top-0', { 'h-[70px] w-[70px] top-[-60px]': isActive})}>
        <AvatarImage src={url} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default ProfileImageForStage;
