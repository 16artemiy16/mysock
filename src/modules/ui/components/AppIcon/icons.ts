import { FunctionComponent, SVGProps } from 'react';

import { ReactComponent as email } from '../../assets/icons/email.svg';

export type AllowedImg = 'email';
type SvgComponent = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

const imgMap: Record<AllowedImg, SvgComponent> = {
  email,
}

/** Resolves an SVG ReactComponent by {@link AllowedImg image name}. **/
export const resolveIcon = (imgName: AllowedImg): SvgComponent => {
  return imgMap[imgName];
};
