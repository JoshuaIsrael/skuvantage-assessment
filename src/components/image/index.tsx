type ButtonProps = {
  src: string;
};

export default function Image({ src }: ButtonProps) {
  return <img alt="" src={src} />;
}
