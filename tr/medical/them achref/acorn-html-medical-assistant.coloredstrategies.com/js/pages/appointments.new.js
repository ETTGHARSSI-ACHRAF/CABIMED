class NewAppointment{constructor(){this._initWizard(),this._initBarrating(),this._initDatepicker(),this._initTimepicker()}_initWizard(){null!==document.getElementById("appointmentsWizard")&&new Wizard(document.getElementById("appointmentsWizard"))}_initBarrating(){jQuery().barrating&&jQuery(".rating").each((function(){const i=jQuery(this).data("initialRating"),t=jQuery(this).data("readonly"),e=jQuery(this).data("showSelectedRating"),a=jQuery(this).data("showValues");jQuery(this).barrating({initialRating:i,readonly:t,showValues:a,showSelectedRating:e,onSelect:function(i,t){},onClear:function(i,t){}})}))}_initDatepicker(){jQuery("#datePickerEmbed").datepicker()}_initTimepicker(){jQuery("#selectTopLabel").select2({minimumResultsForSearch:1/0,placeholder:""})}}