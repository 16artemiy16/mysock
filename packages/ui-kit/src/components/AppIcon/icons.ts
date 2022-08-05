import { FunctionComponent, SVGProps } from 'react';

import { ReactComponent as email } from '../../assets/icons/email.svg';
import { ReactComponent as lock } from '../../assets/icons/lock.svg';

export type AllowedImg = 'email' | 'lock';
type SvgComponent = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

const imgMap: Record<AllowedImg, SvgComponent> = {
  email,
  lock,
}

/** Resolves an SVG ReactComponent by {@link AllowedImg image name}. **/
export const resolveIcon = (imgName: AllowedImg): SvgComponent => {
  return imgMap[imgName];
};
