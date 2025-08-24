import {
  SCalendarContent,
  SCalendarDaysNames,
  SCalendarDayName,
  SCalendarDayNameWeekend,
  SCalendarCells,
  SCalendarCellOtherMonth,
  SCalendarCellDay,
  SCurrentDay,
  SCalendarCellDayWeekend,
} from "./Calendar.styled";

const Calendar = () => {
  return (
    <SCalendarContent>
      <SCalendarDaysNames>
        <SCalendarDayName>пн</SCalendarDayName>
        <SCalendarDayName>вт</SCalendarDayName>
        <SCalendarDayName>ср</SCalendarDayName>
        <SCalendarDayName>чт</SCalendarDayName>
        <SCalendarDayName>пт</SCalendarDayName>
        <SCalendarDayNameWeekend>сб</SCalendarDayNameWeekend>
        <SCalendarDayNameWeekend>вс</SCalendarDayNameWeekend>
      </SCalendarDaysNames>
      <SCalendarCells>
        <SCalendarCellOtherMonth>28</SCalendarCellOtherMonth>
        <SCalendarCellOtherMonth>29</SCalendarCellOtherMonth>
        <SCalendarCellOtherMonth>30</SCalendarCellOtherMonth>
        <SCalendarCellOtherMonth>31</SCalendarCellOtherMonth>
        <SCalendarCellDay>1</SCalendarCellDay>

        <SCalendarCellDayWeekend>2</SCalendarCellDayWeekend>
        <SCalendarCellDayWeekend>3</SCalendarCellDayWeekend>

        <SCalendarCellDay>4</SCalendarCellDay>
        <SCalendarCellDay>5</SCalendarCellDay>
        <SCalendarCellDay>6</SCalendarCellDay>
        <SCalendarCellDay>7</SCalendarCellDay>

        <SCurrentDay>8</SCurrentDay>
        <SCalendarCellDayWeekend>9</SCalendarCellDayWeekend>
        <SCalendarCellDayWeekend>10</SCalendarCellDayWeekend>

        <SCalendarCellDay>11</SCalendarCellDay>
        <SCalendarCellDay>12</SCalendarCellDay>
        <SCalendarCellDay>13</SCalendarCellDay>
        <SCalendarCellDay>14</SCalendarCellDay>
        <SCalendarCellDay>15</SCalendarCellDay>

        <SCalendarCellDayWeekend>16</SCalendarCellDayWeekend>
        <SCalendarCellDayWeekend>17</SCalendarCellDayWeekend>

        <SCalendarCellDay>18</SCalendarCellDay>
        <SCalendarCellDay>19</SCalendarCellDay>
        <SCalendarCellDay>20</SCalendarCellDay>
        <SCalendarCellDay>21</SCalendarCellDay>
        <SCalendarCellDay>22</SCalendarCellDay>

        <SCalendarCellDayWeekend>23</SCalendarCellDayWeekend>
        <SCalendarCellDayWeekend>24</SCalendarCellDayWeekend>
        <SCalendarCellDay>25</SCalendarCellDay>
        <SCalendarCellDay>26</SCalendarCellDay>
        <SCalendarCellDay>27</SCalendarCellDay>
        <SCalendarCellDay>28</SCalendarCellDay>
        <SCalendarCellDay>29</SCalendarCellDay>
        <SCalendarCellDayWeekend>30</SCalendarCellDayWeekend>

        <SCalendarCellOtherMonth>1</SCalendarCellOtherMonth>
      </SCalendarCells>
    </SCalendarContent>
  );
};

export default Calendar;
