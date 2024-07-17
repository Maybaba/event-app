import { createContext } from "react";

// 컨텍스트 생성 : 매개변수에 전역상태 관리 할 객체의 기본값
const EventContext = createContext({
  totalEventCount: 0,
  changeTotalEventCount: (count) => {}
});

export default EventContext;