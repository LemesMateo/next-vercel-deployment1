import { FC } from "react";
type Props = {
  children?: React.ReactNode
};
export const LightLayout: FC<Props> = ({ children }) => {
  return (
  <div style={{
    backgroundColor: '#ede9e9c5',
    borderRadius: '5px',
    padding: '10px',
  }} >
    <h3>Light-Layout</h3>
    <div>
        { children }
    </div>
  </div>  
  );
};
