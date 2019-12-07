var lastHtmlPage;
var currentHtmlPage;
var lastHtmlPageTitle;
var currentHtmlPageTitle;

$(document).ready(function() 
{
	loadPageContent('home.html', 'Home');
	
    $('#menu-sage > div > a').on('click',function(e){
        e.preventDefault();
        var index = $('#menu-sage > div > a').index(this);
        $('#menu-sage > div > div').eq(index).slideDown();
    });
    
    $('#menu-sage > div').mouseleave(function(e){
        e.preventDefault();
        var index = $('#menu-sage > div').index(this);
        $('#menu-sage > div > div').eq(index).slideUp();
    });
        
    $('#menu-sage > div > div > a').on('click', function(e){
        e.preventDefault();
		
		var nomePagina = $(this).text();
        var htmlPage = $(this).attr('href');
        
        
		loadPageContent(htmlPage, nomePagina);
    });
});

function loadPageContent(htmlPage, pageTitle)
{
	lastHtmlPage = currentHtmlPage;
	currentHtmlPage = htmlPage;
	
	lastHtmlPageTitle = currentHtmlPageTitle;
	currentHtmlPageTitle = pageTitle;
	
	$("#nome-pagina-atual").html(pageTitle);
	
    $("#page-content").load(htmlPage, function(e)
	{
		componentHandler.upgradeDom();
	});
};