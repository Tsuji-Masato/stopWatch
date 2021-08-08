sw_status = 0;
reset_form(); //関数名（引数）;指定した関数名をもつ関数の処理が実行される

function reset_form() {
	if (sw_status == 1) {
	  start_count();
	}
  timer = 0; 
	document.form_sw.counter.value = count_format(0);
}

function start_count() { 
	if (sw_status == 0) { 				
		sw_status = 1;
		timerID = setInterval("count_up()",100); 
	} 
}

function stop_form() { 
	if (sw_status > 0) { 				
		sw_status = 0;
		clearInterval(timerID);
	}
}

function count_up() {
	timer++;
	document.form_sw.counter.value = count_format(timer);
}

function count_format(num) {
	var ts = num / 10;
	var tm = Math.floor(ts / 60);
	ts = (ts % 60).toFixed(1);
	var th = Math.floor(tm / 60);
	tm = tm % 60; 
	return th + ":" + tm + ":" + ts;
}