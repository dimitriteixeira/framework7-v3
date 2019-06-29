//COMANDO PARA "OUVIR" QUANDO O DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady.bind(this), false);

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Framework7 v.3',
    // App id
    id: 'br.com.meuapp',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/index/',
            url: 'index.html',
            on: {
                pageInit: function (event, page) {
					
					//DESATIVAR PAINEL ESQUERDO NA ABERTURA
                    app.panel.disableSwipe('left');
					
                    //REMOVER ANIMACAO DE "CORACAO BATENDO" 2 SEGUNDOS
                    setTimeout(function () {
                        $(".Aligner").removeClass("animated lightSpeedIn");
                    }, 2000);
					
					//ANIMAÇÃO DE BATER CORACAO 2 SEGUNDOS E MEIO
					setTimeout(function () {
                        $(".Aligner").addClass("animated heartBeat");
                    }, 2500);

					//REMOVER ANIMACAO DE "CORACAO BATENDO" 3 SEGUNDOS E MEIO
					setTimeout(function () {
                        $(".Aligner").removeClass("animated heartBeat");
                    }, 3500);
					
                    //FAZER NOVAMENTE ANIMACAO DO CORACAO BATENDO 4 SEGUNDOS E MEIO
                    setTimeout(function () {
                        $(".Aligner").addClass("animated lightSpeedOut");
                    }, 4500);


                    //REDIRECIONAR PARA HOME EM 5 SEGUNDOS
                    setTimeout(function () {
						
                        app.views.main.router.navigate('/home/');
                    	
                    }, 5500);
					
					

                    }
               }
        },
		{
            path: '/home/',
            url: 'home.html',
            on: {
                pageInit: function (event, page) {
					
						//CONTEÚDO DA PÁGINA PRINCIPAL AQUI
		
				}	
               }
        },
        {
            path: '/new/',
            url: 'new.html',
            on: {
                pageInit: function (event, page) {
				
						//MODELO DE ROTA PRONTA PARA COPIAR

                    }
               }
        },
    ],
    // ... other parameters
});

var $$=Dom7;

//QUANDO O DISPOSITIVO ESTIVER PRONTO
function onDeviceReady() {
	
	//DISPOSITIVO PRONTO INICIALIZAR POR ESSA ROTA
    var mainView = app.views.create('.view-main', {
        url: '/index/'
    });
	
	 //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID 	
	 document.addEventListener("backbutton", onBackKeyDown, false);

//FUNCÃO QUANDO CLICAR NO BOTAO VOLTAR NATIVO
function onBackKeyDown() {
	
	//VARIAVEL PARA VER EM QUE ROTA ESTAMOS
	var nome=app.views.main.router.url;
    
	//EXEMPLO DE VOLTAR:	
	//if (nome=='/home/'){
	//app.views.main.router.navigate('/index/');	
	//}
	
	
	
}

}