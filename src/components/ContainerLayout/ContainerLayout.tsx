import getFullClassName from '../../utils/getFullClassName';

interface Props {
  children: JSX.Element;
  className?: string;
}

const ContainerLayout = ({ children, className }: Props): JSX.Element => {
  const fullClassName = getFullClassName('container', className);

  return <div className={fullClassName}>{children}</div>;
};

export default ContainerLayout;
