import styled from "styled-components";

// .calendar__content
export const SCalendarContent = styled.div`
  margin-bottom: 12px;
`;

//.calendar__days-names
export const SCalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

// calendar__day-name
export const SCalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const SCalendarDayNameWeekend = styled(SCalendarDayName)`
  color: #ff5050;
`;

//calendar__cells
export const SCalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;

// calendar__cell
export const SCalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
`;

export const SCalendarCellOtherMonth = styled(SCalendarCell)`
  opacity: 0;
`;

// _cell-day;
export const SCalendarCellDay = styled(SCalendarCell)`
  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
`;

// _current
export const SCurrentDay = styled(SCalendarCellDay)`
  font-weight: 700;
`;

// _weekend;
export const SCalendarCellDayWeekend = styled(SCalendarCellDay)`
  color: #ff1212;
`;
