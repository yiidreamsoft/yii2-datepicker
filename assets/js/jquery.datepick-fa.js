/* http://keith-wood.name/datepick.html
   Persian (Farsi) localisation for jQuery Datepicker.
   Javad Mowlanezhad -- jmowla@gmail.com */
(function($) {
	$.datepick.regional['fa'] = {
		monthNames: ['فروردين','ارديبهشت','خرداد','تير','مرداد','شهريور',
		'مهر','آبان','آذر','دي','بهمن','اسفند'],
		monthNamesShort:  ['فروردين','ارديبهشت','خرداد','تير','مرداد','شهريور',
		'مهر','آبان','آذر','دي','بهمن','اسفند'],
		dayNames: ['يکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنجشنبه','جمعه','شنبه'],
		dayNamesShort: ['ي','د','س','چ','پ','ج', 'ش'],
		dayNamesMin: ['ي','د','س','چ','پ','ج', 'ش'],
		dateFormat: 'yyyy-mm-dd', firstDay: 6,
		renderer: $.datepick.defaultRenderer,
		prevText: '&#x3c;قبلي', prevStatus: 'نمايش ماه قبل',
		prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
		nextText: 'بعدي&#x3e;', nextStatus: 'نمايش ماه بعد',
		nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
		currentText: 'امروز', currentStatus: 'نمايش ماه جاري',
		todayText: 'امروز', todayStatus: 'نمايش ماه جاري',
		clearText: 'حذف تاريخ', clearStatus: 'پاک کردن تاريخ جاري',
		closeText: 'بستن', closeStatus: 'بستن بدون اعمال تغييرات',
		yearStatus: 'نمايش سال متفاوت', monthStatus: 'نمايش ماه متفاوت',
		weekText: 'هف', weekStatus: 'هفتهِ سال',
		dayStatus: 'انتخاب D, d M', defaultStatus: 'انتخاب تاريخ',
		isRTL: true
	};
	$.datepick.setDefaults($.datepick.regional['fa']);
})(jQuery);
