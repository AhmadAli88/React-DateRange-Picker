import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import 'react-calendar/dist/Calendar.css'; 

const CallbackDateRangePicker = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const onChange = (dates) => {
    setDateRange(dates);
  };

  const onCalendarClose = () => {
    console.log('Calendar closed');
  };

  const onCalendarOpen = () => {
    console.log('Calendar opened');
  };

  const onCloseComplete = () => {
    console.log('Close animation completed');
  };

  const onOpenComplete = () => {
    console.log('Open animation completed');
  };

  return (
    <div>
      <DateRangePicker
        onChange={onChange}
        value={dateRange}
        onCalendarClose={onCalendarClose}
        onCalendarOpen={onCalendarOpen}
        onCloseComplete={onCloseComplete}
        onOpenComplete={onOpenComplete}
      />
    </div>
  );
};

export default CallbackDateRangePicker;