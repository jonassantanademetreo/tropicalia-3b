document.addEventListener('DOMContentLoaded', function () {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminui-fonte');
    let tamanohoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanohoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanohoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function () {
        tamanohoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanohoAtualFonte}rem`;
    });
    
});