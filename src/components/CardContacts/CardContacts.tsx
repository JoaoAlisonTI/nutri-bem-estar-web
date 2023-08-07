import React from 'react';
import { IconBaseProps } from 'react-icons';

interface CardContactsProps {
  icon: React.ComponentType<IconBaseProps>;
  title: string;
  subtitle: string;
}

export default function CardContacts(props: CardContactsProps) {
  const Icon = props.icon;

  return (
    <div className="w-full mt-12 flex flex-col items-center justify-center">
      <span className="w-full flex items-center justify-center text-4xl text-black">
        <Icon />
      </span>
      <h3 className="mt-4 text-xl font-bold text-black">{props.title}</h3>
      <p className="mt-2 font-bold text-lime-700">{props.subtitle}</p>
    </div>
  );
}
