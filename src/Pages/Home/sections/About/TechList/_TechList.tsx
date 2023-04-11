import { FC } from 'react';

interface TechListProps {
  title: string;
  items: string[];
}

const TechList: FC<TechListProps> = ({ title, items }) => {
  return (
    <li className={`col-4`} data-testid="tech-list">
      <h4>{title}</h4>
      <ul className={`ft-wt-norm`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
};

export default TechList;