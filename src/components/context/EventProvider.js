import React, { useState } from 'react'
import EventContext from './event-context'

const EventProvider = () => {

  const [totalEventCount, setTotalEventCount] = useState(0);


  return (
    <EventContext.Provider 
    //프롭스 전달이 아닌 바로 값을 받아서 쓸 수 있다. 
    value={{
      totalEventCount: totalEventCount,
      changeTotalEventCount: (count) => setTotalEventCount(count),
    }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider