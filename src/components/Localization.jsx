import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { es, fr } from 'date-fns/locale';
import 'react-calendar/dist/Calendar.css'; 
const LocalizedDateRangePicker = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [locale, setLocale] = useState('en');

  const onChange = (dates) => {
    setDateRange(dates);
  };

  const handleLocaleChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <div>
      <div>
        <label>Select Locale:</label>
        <select value={locale} onChange={handleLocaleChange}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>

      <DateRangePicker
        onChange={onChange}
        value={dateRange}
        locale={locale === 'es' ? es : locale === 'fr' ? fr : undefined}
        format="yyyy-MM-dd"
      />

      <p>Selected date range: {dateRange[0].toLocaleDateString(locale)} - {dateRange[1].toLocaleDateString(locale)}</p>
    </div>
  );
};

export default LocalizedDateRangePicker;