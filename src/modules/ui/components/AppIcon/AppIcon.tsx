import { FC, SVGProps } from 'react';
import { AllowedImg, resolveIcon } from './icons';

interface Props extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  img: AllowedImg;
  size?: number;
}

const AppIcon: FC<Props> = ({ img, size, ...rest }) => {
  const RequiredIcon = resolveIcon(img);

  const props: SVGProps<SVGSVGElement> = { ...rest };

  if (size) {
    props.width = size;
    props.height = size;
  }

  return <RequiredIcon {...props} />
};

export default AppIcon;
