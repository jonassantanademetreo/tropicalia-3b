document.addEventListener('DOMContentLoaded',function (){
    const aumentaFonteBotao = document.getElementById('aumentear-fonte')

    let tamanohoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanohoAtualFonte += 0.1;
        document.styleSheets.fontSize = `${tamanohoAtualFonte}rem`;
    })
    
})