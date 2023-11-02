import { useDynamicSvgImport } from "../utils/useDynamicSvgImport";

interface IProps {
  name: string;
  className?: string;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

function SvgIcon(props: IProps) {
  const { name, className, svgProp } = props;
  const { loading, SvgIcon } = useDynamicSvgImport(name);

  return (
    <>
      {loading && (
        <div className="rounded-xl bg-transparent animate-pulse h-8 w-8"></div>
      )}
      {SvgIcon && (
        <div className={className}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </>
  );
}

export default SvgIcon;
