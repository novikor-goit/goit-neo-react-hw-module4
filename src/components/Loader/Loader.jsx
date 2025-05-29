import { ThreeDots } from 'react-loader-spinner';

export default function Loader({ size = 300 }) {
  return <ThreeDots height={size} width={size} />;
}
