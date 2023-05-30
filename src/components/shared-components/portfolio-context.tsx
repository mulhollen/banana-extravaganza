import React, { createContext, SetStateAction, useState, Dispatch, useEffect } from 'react';

interface PortfolioContext {
  topic: string | null;
  setTopic: Dispatch<SetStateAction<string | null>>;
}

export const PortfolioContext = createContext<PortfolioContext>({
  topic: 'All',
  setTopic: () => {}
});

export function PortfolioManager(props: React.PropsWithChildren<{}>) {
  const [topic, setTopic] = useState<string|null>('All');
  console.log('setTopicManager', topic);


  useEffect(()=> {
    console.log('topic', topic)
  })

  return (
    <PortfolioContext.Provider value={{ topic, setTopic }}>
      {props.children}
    </PortfolioContext.Provider>
  );
}