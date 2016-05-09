/*---------------------------------------------------------------------------*/
/* konshuu.js                                                                */
/*---------------------------------------------------------------------------*/

PDFJS.workerSrc = 'https://calanimagealpha.com/pdfjs/build/pdf.worker.js';

var konshuu_selection = document.getElementById("konshuu-header-select")
var konshuu_canvas = document.getElementById("pdf-canvas");
konshuu_canvas.textBaseline = "top";

var curr_pdf = null;
var curr_page_number = null;
var rendering = null;
var listener = null;
var select_focused = false;

function defocus_selection() {
  
  if (select_focused) {
    konshuu_selection.blur();
  }
  
  select_focused = !select_focused;
  
}

function renderPage(pdf, page_number) {
  
  function render(pdf, page_number) {
    
    rendering = pdf.getPage(page_number).then(function(page) {
    var viewport = page.getViewport(1.0);
    var aspect = viewport.height / viewport.width;

    konshuu_canvas.width = konshuu_canvas.clientWidth * window.devicePixelRatio;
    konshuu_canvas.height = konshuu_canvas.width * aspect;

    rendering = page.render({
      canvasContext: konshuu_canvas.getContext('2d'),
      viewport: page.getViewport(konshuu_canvas.width / viewport.width)
    }).then (function() {
      
        rendering = null;
        
        var ctx = konshuu_canvas.getContext('2d');
        ctx.font = '1em Verdana';
        
        var text_string = "Page " + page_number + " of " + pdf.numPages;
        var text_width = ctx.measureText(text_string).width;
        var text_x = (konshuu_canvas.width - text_width) / 2;
        var text_y = 4;
        
        ctx.fillText(text_string, text_x, text_y);
        
      });
    });
  }

  if (!rendering) {
    render(pdf, page_number);
  }
  
}

function prev_page() {
  if (curr_page_number != 1) {
    curr_page_number--;
    renderPage(curr_pdf, curr_page_number);
  }
}

function next_page() {
  if (curr_page_number != curr_pdf.numPages) {
    curr_page_number++;
    renderPage(curr_pdf, curr_page_number);
  }
}

function keyupListener(e) {
      
  if (rendering) {
    return;
  }

  if (e.keyCode == 37) {
    prev_page();
  } else if (e.keyCode == 39) {
    next_page();
  }
    
}

function swap_pdf() {
  
  curr_page_number = 1;
  var file = konshuu_selection.value;
  
  filename = file;
  // filename = 'https://calanimagealpha.com/konshuu/' + file;

  PDFJS.getDocument(filename).then(function(pdf) {
    renderPage(pdf, curr_page_number);
    curr_pdf = pdf;
  });
  
}

document.addEventListener("keyup", keyupListener);
konshuu_selection.onchange = swap_pdf;
konshuu_selection.onclick = defocus_selection;
swap_pdf();

