'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Phone,
  Send,
  CheckCircle,
  Clock,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Loader2,
} from 'lucide-react';

interface InquiryFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function InquiryForm({
  title = 'GET A CUSTOM CATERING QUOTE IN 24 HOURS',
  subtitle = 'Share your event date, guest estimate, and Addis Ababa venue area for a transparent menu proposal.',
  className = '',
}: InquiryFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    details: '',
  });
  const submitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current) clearTimeout(submitTimerRef.current);
    };
  }, []);

  // Custom Calendar State
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
  const [calendarYear, setCalendarYear] = useState(today.getFullYear());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
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
    setFormData((prev) => ({ ...prev, date: dateStr }));
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
      year: 'numeric',
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!formData.date) {
      setDateError(true);
      setIsCalendarOpen(true);
      return;
    }
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    submitTimerRef.current = setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 480);
  };

  const telegramMessage = encodeURIComponent(
    `Hello Hiwi Catering! My name is ${formData.name || 'a prospective client'}. I am planning an event on ${formData.date ? formatDisplayDate(formData.date) : 'an upcoming date'}. My phone is ${formData.phone || '0963138123'}. Details: ${formData.details}`
  );

  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 shadow-card-hover border border-hiwi-border text-left relative ${className}`}
    >
      <div className="text-center mb-6 space-y-2">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-hiwi-dark leading-snug text-balance">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-normal max-w-md mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {formSubmitted ? (
        <div className="bg-hiwi-cream border border-hiwi-border rounded-xl p-6 text-center space-y-4 animate-feedback-in">
          <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mx-auto">
            <CheckCircle className="w-6 h-6" strokeWidth={1.75} />
          </div>
          <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-hiwi-dark">
            Thank You, {formData.name}!
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 font-normal leading-relaxed max-w-sm mx-auto">
            We have received your catering inquiry for{' '}
            <strong className="text-hiwi-dark">{formatDisplayDate(formData.date) || 'your celebration'}</strong>. Our
            team will call you at <strong className="text-hiwi-dark tabular-nums">{formData.phone}</strong> within 24
            hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
            <a
              href="tel:+251963138123"
              className="py-2.5 px-4 rounded-lg bg-hiwi-dark text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors tabular-nums"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>Call 0963 138 123</span>
            </a>
            <a
              href={`https://t.me/hiwicatering?text=${telegramMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-lg bg-hiwi-primary text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-hiwi-hover transition-colors shadow-warm"
            >
              <Send className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>Confirm on Telegram</span>
            </a>
          </div>
          <button
            type="button"
            onClick={() => {
              setFormSubmitted(false);
              setFormData({ name: '', phone: '', email: '', date: '', details: '' });
            }}
            className="text-xs font-semibold text-stone-600 hover:text-hiwi-primary underline underline-offset-2 transition-colors"
          >
            Submit another event inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label
                htmlFor="inquiry-name"
                className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5"
              >
                Full Name*
              </label>
              <input
                id="inquiry-name"
                type="text"
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-11 px-3.5 border border-stone-300 rounded-lg focus:border-hiwi-primary focus:outline-none text-sm transition-colors bg-white text-hiwi-dark disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="inquiry-phone"
                className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5"
              >
                Phone Number*
              </label>
              <input
                id="inquiry-phone"
                type="tel"
                required
                disabled={isSubmitting}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-11 px-3.5 border border-stone-300 rounded-lg focus:border-hiwi-primary focus:outline-none text-sm transition-colors bg-white text-hiwi-dark tabular-nums disabled:opacity-60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {/* Custom Calendar Picker */}
            <div className="relative">
              <span className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                Event Date*
              </span>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className={`w-full h-11 px-3.5 border rounded-lg ${
                  dateError
                    ? 'border-red-600 bg-red-50/40 animate-error-nudge'
                    : 'border-stone-300 hover:border-stone-400 focus:border-hiwi-primary bg-white'
                } flex items-center justify-between text-left text-sm transition-colors cursor-pointer disabled:opacity-60`}
                aria-expanded={isCalendarOpen}
                aria-label="Select Event Date"
              >
                <span className={formData.date ? 'text-hiwi-dark font-semibold truncate tabular-nums' : 'text-stone-500'}>
                  {formData.date ? formatDisplayDate(formData.date) : 'Select Date'}
                </span>
                <CalendarIcon className="w-4 h-4 text-stone-600 shrink-0 ml-2" strokeWidth={1.75} />
              </button>

              {dateError && (
                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700 font-medium animate-feedback-in">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} />
                  <span>Please pick an event date</span>
                </div>
              )}

              {/* Calendar Popup Dropdown (outer rounded-xl - p-2 (8px) => rounded (4px) inner cells) */}
              {isCalendarOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsCalendarOpen(false)}
                    aria-hidden="true"
                  />

                  <div className="absolute top-[calc(100%+6px)] left-0 z-50 w-72 bg-white border border-stone-300 rounded-xl shadow-warm-lg p-2 animate-feedback-in">
                    {/* Month / Year Header */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-hiwi-border">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="p-1.5 rounded hover:bg-hiwi-stone text-stone-700 transition-colors"
                        aria-label="Previous Month"
                      >
                        <ChevronLeft className="w-4 h-4" strokeWidth={1.75} />
                      </button>
                      <span className="text-xs font-bold uppercase tracking-wider text-hiwi-dark tabular-nums">
                        {monthNames[calendarMonth]} {calendarYear}
                      </span>
                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="p-1.5 rounded hover:bg-hiwi-stone text-stone-700 transition-colors"
                        aria-label="Next Month"
                      >
                        <ChevronRight className="w-4 h-4" strokeWidth={1.75} />
                      </button>
                    </div>

                    {/* Weekday Labels */}
                    <div className="grid grid-cols-7 gap-1 text-center mb-1">
                      {dayNames.map((d) => (
                        <span key={d} className="text-[11px] font-bold uppercase text-stone-600 py-0.5">
                          {d}
                        </span>
                      ))}
                    </div>

                    {/* Days Grid */}
                    <div className="grid grid-cols-7 gap-1 text-center tabular-nums">
                      {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                        <div key={`empty-${i}`} className="h-7 w-7" />
                      ))}

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
                            className={`h-7 w-7 mx-auto flex items-center justify-center text-xs transition-colors rounded ${
                              selected
                                ? 'bg-hiwi-primary text-white font-extrabold'
                                : disabled
                                ? 'text-stone-300 cursor-not-allowed'
                                : isTodayDate
                                ? 'border border-hiwi-primary text-hiwi-primary font-bold hover:bg-hiwi-cream'
                                : 'text-stone-800 hover:bg-hiwi-stone font-medium'
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>

                    {/* Quick Helpers */}
                    <div className="mt-2 pt-2 border-t border-hiwi-border flex items-center justify-between text-xs font-bold uppercase tracking-wider px-1">
                      <button
                        type="button"
                        onClick={() => {
                          const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
                          setFormData((prev) => ({ ...prev, date: todayStr }));
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
                            setFormData((prev) => ({ ...prev, date: '' }));
                            setIsCalendarOpen(false);
                          }}
                          className="text-stone-600 hover:text-hiwi-dark"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div>
              <label
                htmlFor="inquiry-email"
                className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5"
              >
                Your Email (Optional)
              </label>
              <input
                id="inquiry-email"
                type="email"
                disabled={isSubmitting}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-11 px-3.5 border border-stone-300 rounded-lg focus:border-hiwi-primary focus:outline-none text-sm transition-colors bg-white text-hiwi-dark disabled:opacity-60"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="inquiry-details"
              className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5"
            >
              Event Type, Sub-City &amp; Estimated Guests*
            </label>
            <textarea
              id="inquiry-details"
              required
              rows={3}
              disabled={isSubmitting}
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full p-3.5 border border-stone-300 rounded-lg focus:border-hiwi-primary focus:outline-none text-sm transition-colors resize-none bg-white text-hiwi-dark disabled:opacity-60"
            />
          </div>

          <div className="pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-lg bg-hiwi-primary hover:bg-hiwi-hover active:scale-[0.99] text-white font-extrabold uppercase text-xs sm:text-sm tracking-wider transition-all shadow-warm cursor-pointer flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-wait"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />
                  <span>SENDING INQUIRY...</span>
                </>
              ) : (
                <>
                  <span>SUBMIT EVENT INQUIRY</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* Quick Contacts */}
      <div className="mt-5 pt-4 border-t border-hiwi-border text-xs text-stone-700 flex flex-wrap items-center justify-between gap-2">
        <a
          href="tel:+251963138123"
          className="inline-flex items-center gap-1.5 hover:text-hiwi-primary font-bold transition-colors tabular-nums"
        >
          <Phone className="w-3.5 h-3.5 text-hiwi-primary" strokeWidth={1.75} />
          <span>0963 138 123</span>
        </a>
        <a
          href="https://t.me/hiwicatering"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-hiwi-primary font-bold transition-colors"
        >
          <Send className="w-3.5 h-3.5 text-hiwi-primary" strokeWidth={1.75} />
          <span>@hiwicatering</span>
        </a>
        <span className="inline-flex items-center gap-1.5 text-stone-600 tabular-nums">
          <Clock className="w-3.5 h-3.5 text-hiwi-primary" strokeWidth={1.75} />
          <span>24h Quote Response</span>
        </span>
      </div>
    </div>
  );
}
