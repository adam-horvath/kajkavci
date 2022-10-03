import { FC } from 'react';

export interface MemberProps {
  imageUrl: string;
  subscript: string;
}

export const Member: FC<MemberProps> = ({ imageUrl, subscript }) => (
  <div>
    <div className={'Image'} style={{ backgroundImage: imageUrl }} />
    <div className={'Subscript'}>{subscript}</div>
  </div>
);
