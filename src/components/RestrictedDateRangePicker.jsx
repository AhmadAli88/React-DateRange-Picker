import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import 'react-calendar/dist/Calendar.css'; 
const RestrictedDateRangePicker = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const onChange = (dates) => {
    setDateRange(dates);
  };

  const isWithinRange = (date) => {
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    return date >= minDate && date <= maxDate;
  };

  return (
    <div>
      <DateRangePicker
        onChange={onChange}
        value={dateRange}
        maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)}
        minDate={new Date()}
        filterDate={isWithinRange}
      />
      <p>Selected date range: {dateRange[0].toLocaleDateString()} - {dateRange[1].toLocaleDateString()}</p>
    </div>
  );
};

export default RestrictedDateRangePicker;