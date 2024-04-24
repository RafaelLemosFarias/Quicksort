function abrirAba(titulo) {
  var win = window.open('', '_blank');
  var htmlContent = '<html><head><title>' + titulo + '</title>';
  htmlContent += '<link rel="stylesheet" type="text/css" href="styles.css">';
  htmlContent += '</head><body>';

  switch (titulo) {
    case 'Quicksort':
      htmlContent += '<div class="content">';
      htmlContent += '<h1>Quicksort</h1>';
      htmlContent += '<div class="button-container">';
      htmlContent += '<a class="button" href="/codigos/quicksort/index.html">Javascript</a>';
      htmlContent += '<a class="button" target="_blank" href="https://replit.com/@RAFAELLEMOS17/Quicksort#main.py">Python</a>';
      htmlContent += '</div>';
      htmlContent += '</div>';
      break;
    case 'Máximo Divisor':
      htmlContent += '<div class="content">';
      htmlContent += '<h1>MDC</h1>';
      htmlContent += '<div class="button-container">';
      htmlContent += '<a class="button" href="/codigos/mdc/index.html">Javascript</a>';
      htmlContent += '<a class="button" target="_blank" href="https://replit.com/@RAFAELLEMOS17/Maximo-Divisor-Comum#main.py">Python</a>';
      htmlContent += '</div>';
      htmlContent += '</div>';
      break;
    case 'Contagem':
      htmlContent += '<div class="content">';
      htmlContent += '<h1>Contagem</h1>';
      htmlContent += '<div class="button-container">';
      htmlContent += '<a class="button" href="/codigos/contagem/index.html">Javascript</a>';
      htmlContent += '<a class="button" target="_blank" href="https://replit.com/@RAFAELLEMOS17/Contagem#main.py">Python</a>';
      htmlContent += '</div>';
      htmlContent += '</div>';
      break;
    case 'Fibonacci':
      htmlContent += '<div class="content">';
      htmlContent += '<h1>Fibonacci</h1>';
      htmlContent += '<div class="button-container">';
      htmlContent += '<a class="button" href="/codigos/fibonacci/index.html">Javascript</a>';
      htmlContent += '<a class="button" target="_blank" href="https://replit.com/@RAFAELLEMOS17/Fibonacci#main.py">Python</a>';
      htmlContent += '</div>';
      htmlContent += '</div>';
      break;
    case 'Somatório':
      htmlContent += '<div class="content">';
      htmlContent += '<h1>Somatório</h1>';
      htmlContent += '<div class="button-container">';
      htmlContent += '<a class="button" href="/codigos/somatorio/index.html">Javascript</a>';
      htmlContent += '<a class="button" target="_blank" href="https://replit.com/@RAFAELLEMOS17/Somatorio#main.py">Python</a>';
      htmlContent += '</div>';
      htmlContent += '</div>';
      break;
    case 'Número Primo':
      htmlContent += '<div class="content">';
      htmlContent += '<h1>Número Primo</h1>';
      htmlContent += '<div class="button-container">';
      htmlContent += '<a class="button" href="/codigos/numeroprimo/index.html">Número Primo</a>';
      htmlContent += '<a class="button" target="_blank" href="https://replit.com/@RAFAELLEMOS17/Numero-Primo#main.py">Python</a>';
      htmlContent += '</div>';
      htmlContent += '</div>';
      break;
    default:
      break;
  }

  htmlContent += '</body></html>';

  win.document.write(htmlContent);
  win.document.close();
}
