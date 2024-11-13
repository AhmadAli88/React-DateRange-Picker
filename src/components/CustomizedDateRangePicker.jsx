import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import 'react-calendar/dist/Calendar.css'; 

const CustomizedDateRangePicker = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const onChange = (dates) => {
    setDateRange(dates);
  };

  return (
    <div>
      <DateRangePicker
        onChange={onChange}
        value={dateRange}
        calendarClassName="custom-calendar"
        clearIcon={null}
        formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
        navigationLabel={({ date, label}) => `${label} (${date.getFullYear()})`}
      />
    </div>
  );
};

export default CustomizedDateRangePicker;