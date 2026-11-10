'use client';

import { useState } from 'react';
import { 
  Phone, 
  Send, 
  CheckCircle, 
  Clock, 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight,
  AlertCircle
} from 'lucide-react';

interface InquiryFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function InquiryForm({
  title = "READY TO MAKE YOUR NEXT EVENT PERFECT?",
  subtitle = "Fill out this form and we will get in touch with you within 24 hours",
  className = "",
}: InquiryFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    details: ''
  });

  // Custom Calendar State
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
  const [calendarYear, setCalendarYear] = useState(today.getFullYear());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Days in selected month
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  // Day of week of 1st day of month
  const firstDayOfWeek = new Date(calendarYear, calendarMonth, 1).getDay();

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear(calendarYear - 1);
    } else {
      setCalendarMonth(calendarMonth - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear(calendarYear + 1);
    } else {
      setCalendarMonth(calendarMonth + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    const selectedYear = calendarYear;
    const selectedMonth = String(calendarMonth + 1).padStart(2, '0');
    const selectedDay = String(day).padStart(2, '0');
    const dateStr = `${selectedYear}-${selectedMonth}-${selectedDay}`;
    setFormData(prev => ({ ...prev, date: dateStr }));
    setDateError(false);
    setIsCalendarOpen(false);
  };

  const isDayDisabled = (day: number) => {
    const checkDate = new Date(calendarYear, calendarMonth, day);
    checkDate.setHours(0, 0, 0, 0);
    return checkDate < today;
  };

  const isDaySelected = (day: number) => {
    if (!formData.date) return false;
    const parts = formData.date.split('-').map(Number);
    return parts[0] === calendarYear && parts[1] === calendarMonth + 1 && parts[2] === day;
  };

  const isDayToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === calendarMonth &&
      today.getFullYear() === calendarYear
    );
  };

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return null;
    const parts = dateStr.split('-').map(Number);
    if (parts.length !== 3) return dateStr;
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date) {
      setDateError(true);
      return;
    }
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const telegramMessage = encodeURIComponent(
    `Hello Hiwi Catering, I submitted an event inquiry on your website.\n\n` +
    `Name: ${formData.name}\n` +
    `Phone: ${formData.phone}\n` +
    (formData.email ? `Email: ${formData.email}\n` : '') +
    `Event Date: ${formData.date}\n` +
    `Details: ${formData.details}`
  );

  return (
    <div className={`bg-white p-4 sm:p-7 md:p-8 shadow-2xl border border-gray-200 text-gray-900 ${className}`}>
      {/* Form Heading */}
      <div className="text-center mb-3 sm:mb-4">
        <h2 className="text-sm sm:text-xl md:text-2xl font-black uppercase tracking-wider text-black leading-tight">
          {title}
        </h2>
        <div className="w-8 sm:w-12 h-0.5 bg-black mx-auto my-1.5 sm:my-2" />
        <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
          {subtitle}
        </p>
      </div>

      {formSubmitted ? (
        <div className="text-center py-4 sm:py-6 space-y-3 animate-in fade-in-50 duration-200">
          <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 mx-auto" />
          <h3 className="text-sm sm:text-lg font-bold uppercase tracking-wider text-black">
            Thank You, {formData.name}!
          </h3>
          <p className="text-[11px] sm:text-xs text-gray-600 font-light leading-relaxed max-w-sm mx-auto">
            We have received your event inquiry for <strong>{formatDisplayDate(formData.date) || 'your celebration'}</strong>. Our event team will contact you at <strong>{formData.phone}</strong> shortly.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
            <a
              href="tel:+251963138123"
              className="py-2.5 px-4 bg-black text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 0963 138 123</span>
            </a>
            <a
              href={`https://t.me/hiwicatering?text=${telegramMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-hiwi-primary text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:bg-hiwi-hover transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Confirm on Telegram</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-2.5 sm:space-y-3.5">
          {/* Row 1: Name & Phone - Balanced 2-column grid without placeholders */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <div>
              <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-10 sm:h-11 px-3 border border-gray-300 focus:border-black focus:outline-none text-xs sm:text-sm transition-colors bg-white rounded-none"
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-10 sm:h-11 px-3 border border-gray-300 focus:border-black focus:outline-none text-xs sm:text-sm transition-colors bg-white rounded-none"
              />
            </div>
          </div>

          {/* Row 2: Event Date (Custom Calendar Design) & Email - Balanced 2-column grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {/* Custom Calendar Picker */}
            <div className="relative">
              <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Event Date*
              </label>
              
              <button
                type="button"
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className={`w-full h-10 sm:h-11 px-2.5 sm:px-3 border ${
                  dateError ? 'border-red-500' : 'border-gray-300 hover:border-gray-400 focus:border-black'
                } bg-white flex items-center justify-between text-left text-xs sm:text-sm transition-colors rounded-none cursor-pointer`}
                aria-expanded={isCalendarOpen}
                aria-label="Select Event Date"
              >
                <span className={formData.date ? 'text-black font-semibold truncate' : 'text-gray-400'}>
                  {formData.date ? formatDisplayDate(formData.date) : 'Select Date'}
                </span>
                <CalendarIcon className="w-4 h-4 text-gray-600 shrink-0 ml-1" />
              </button>

              {/* Date validation error alert */}
              {dateError && (
                <div className="absolute -bottom-4 left-0 flex items-center gap-1 text-[9px] text-red-600 font-medium">
                  <AlertCircle className="w-2.5 h-2.5" />
                  <span>Please pick a date</span>
                </div>
              )}

              {/* Calendar Popup Dropdown */}
              {isCalendarOpen && (
                <>
                  {/* Backdrop to close on click outside */}
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsCalendarOpen(false)} 
                    aria-hidden="true" 
                  />
                  
                  <div className="absolute top-[calc(100%+4px)] left-0 z-50 w-68 sm:w-72 bg-white border-2 border-black shadow-2xl p-2.5 sm:p-3 animate-in fade-in-50 duration-150">
                    {/* Header: Month / Year with arrows */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="p-1 hover:bg-gray-100 text-gray-700 transition-colors"
                        aria-label="Previous Month"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-bold uppercase tracking-wider text-black">
                        {monthNames[calendarMonth]} {calendarYear}
                      </span>
                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="p-1 hover:bg-gray-100 text-gray-700 transition-colors"
                        aria-label="Next Month"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Weekday Labels */}
                    <div className="grid grid-cols-7 gap-1 text-center mb-1">
                      {dayNames.map((d) => (
                        <span key={d} className="text-[10px] font-bold uppercase text-gray-400 py-0.5">
                          {d}
                        </span>
                      ))}
                    </div>

                    {/* Days Grid */}
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {/* Empty slots before first day */}
                      {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                        <div key={`empty-${i}`} className="h-6 w-6 sm:h-7 sm:w-7" />
                      ))}

                      {/* Month Days */}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const disabled = isDayDisabled(day);
                        const selected = isDaySelected(day);
                        const isTodayDate = isDayToday(day);

                        return (
                          <button
                            key={day}
                            type="button"
                            disabled={disabled}
                            onClick={() => handleSelectDay(day)}
                            className={`h-6 w-6 sm:h-7 sm:w-7 mx-auto flex items-center justify-center text-[11px] sm:text-xs transition-colors rounded-none ${
                              selected
                                ? 'bg-black text-white font-black'
                                : disabled
                                ? 'text-gray-300 cursor-not-allowed'
                                : isTodayDate
                                ? 'border border-hiwi-primary text-hiwi-primary font-bold hover:bg-gray-100'
                                : 'text-gray-800 hover:bg-gray-100 font-medium'
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>

                    {/* Quick helper buttons */}
                    <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                      <button
                        type="button"
                        onClick={() => {
                          const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
                          setFormData(prev => ({ ...prev, date: todayStr }));
                          setDateError(false);
                          setIsCalendarOpen(false);
                        }}
                        className="text-hiwi-primary hover:underline"
                      >
                        Today
                      </button>
                      {formData.date && (
                        <button
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, date: '' }));
                            setIsCalendarOpen(false);
                          }}
                          className="text-gray-400 hover:text-black"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Email Field without placeholder */}
            <div>
              <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Email <span className="text-gray-400 font-normal lowercase">(optional)</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-10 sm:h-11 px-3 border border-gray-300 focus:border-black focus:outline-none text-xs sm:text-sm transition-colors bg-white rounded-none"
              />
            </div>
          </div>

          {/* Row 3: Event Details Textarea - ONLY this field retains a friendly caption */}
          <div>
            <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Event Details*
            </label>
            <textarea
              rows={2}
              required
              placeholder="Tell us about your event (guest count, location, or menu preferences)..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full p-2.5 sm:p-3 border border-gray-300 focus:border-black focus:outline-none text-xs sm:text-sm transition-colors bg-white rounded-none resize-none h-16 sm:h-20 placeholder:text-gray-400 placeholder:font-light"
            />
          </div>

          {/* Row 4: Submit Button */}
          <div className="pt-1">
            <button
              type="submit"
              className="w-full h-11 sm:h-12 bg-black hover:bg-gray-800 active:bg-hiwi-primary text-white font-extrabold uppercase text-xs sm:text-sm tracking-[0.2em] transition-colors shadow-md cursor-pointer flex items-center justify-center"
            >
              SUBMIT INQUIRY
            </button>
          </div>

          {/* Fast Response Assurance */}
          <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-gray-500 font-medium text-center pt-0.5">
            <Clock className="w-3 h-3 text-hiwi-primary shrink-0" />
            <span>Guaranteed callback or Telegram reply within 24 hours</span>
          </div>
        </form>
      )}
    </div>
  );
}
