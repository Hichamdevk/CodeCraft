

window.onload = function () {
    loadCodes();
}

function loadCodes() {
    var savedHtmlCode = localStorage.getItem('htmlCode') 
    var savedCssCode = localStorage.getItem('cssCode') 
    var savedJsCode = localStorage.getItem('jsCode') 


    document.getElementById('html-input').value = savedHtmlCode || '' ;
    document.getElementById('css-input').value = savedCssCode || '';
    document.getElementById('js-input').value = savedJsCode || '';
}




function runCode() {
    var htmlCode = document.getElementById('html-input').value;
    var cssCode = document.getElementById('css-input').value;
    var jsCode = document.getElementById('js-input').value;

    var resultFrame = document.getElementById('result-frame');
    var resultDocument = resultFrame.contentDocument || resultFrame.contentWindow.document;

    resultDocument.open();
    resultDocument.write(`
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
        </html>
    `);
    resultDocument.close();

    localStorage.setItem('htmlCode' , htmlCode )
    localStorage.setItem('cssCode' ,cssCode )
    localStorage.setItem('jsCode' , jsCode)
}



