$(document).ready(function() {	

	$('#changeButton').click(function() {
		var salesValue = $('#salesValue').val();
		var paidValue = $('#paidValue').val();
		var changeValue = paidValue % salesValue;

		// var changeValue = paidValue - salesValue;
		var changeBills = Math.floor(changeValue);
		var changeCoins = changeValue-changeBills;

		$('#dollarsChange').text('Dollars '+ changeBills);

		do {
			if (changeCoins >= 0.25) {
				var quarterCount = Math.floor(changeCoins/0.25);
				changeCoins = changeCoins % 0.25;
				$('#quartersChange').text('Quarters '+ quarterCount);
			} 	else if (changeCoins >= 0.10) {
					var dimeCount = Math.floor(changeCoins/0.10);
					changeCoins = changeCoins % 0.10;
					$('#dimesChange').text('Dimes ' + dimeCount);
				}	else if (changeCoins >= 0.05) {
						var nickelCount = Math.floor(changeCoins/0.05);
						changeCoins = changeCoins % 0.05;
						$('#nickelsChange').text('Nickels ' + nickelCount);
					}	else if (changeCoins >= 0.01) {
							var pennieCount = Math.round(changeCoins/0.01);
							changeCoins = changeCoins % 0.01;
							$('#penniesChange').text('Pennies ' + pennieCount);
						} 
		}
		while (changeCoins >= .01);	
		})

})