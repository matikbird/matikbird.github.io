var MP = require ("mercadopago");

var mp = new MP ("ACCESS_TOKEN");

var doCapture = mp.put ("/v1/payments/PAYMENT_ID",
	{
		"capture": true
	});

doCapture.then (
	function (payment) {
		console.log (payment);
	},
	function (error){
		console.log (error);
	});