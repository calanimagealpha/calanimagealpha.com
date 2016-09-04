// The initial pdf that gets requested when the page is loaded
var initial_pdf = "43/12.pdf";

PDFJS.workerSrc = '../static/js/pdf.worker.js';

var konshuu_canvas = document.getElementById("konshuu-reader-canvas");
konshuu_canvas.textBaseline = "top";
konshuu_canvas.width = konshuu_canvas.clientWidth * window.devicePixelRatio;

var konshuu_canvas_ctx = konshuu_canvas.getContext('2d');
var konshuu_title = document.getElementById("konshuu-title");

var konshuu_dropdown = document.getElementById("konshuu-dropdown");
var konshuu_dropdown_content = document.getElementById(
  "konshuu-dropdown-content"
);

var konshuu_dropdown_button = document.getElementById(
  "konshuu-dropdown-button"
);

var konshuu_pdf = null;
var pageNumber = 1;
var rendering = false;

function renderPage(pdf, pageNumber) {
    if (rendering) {
        return;
    }

    rendering = pdf.getPage(pageNumber).then(
        function(page) {
            var viewport = page.getViewport(1.0);
            var resolution = konshuu_canvas.width / viewport.width;
            var aspectRatio = viewport.height / viewport.width;

            konshuu_canvas.height = konshuu_canvas.width * aspectRatio;
            rendering = page.render(
                {
                    canvasContext: konshuu_canvas_ctx,
                    viewport: page.getViewport(resolution)
                }
            ).then(
                function() {
                    rendering = false;
                }
            );
        }
    );
}

function renderPdf(element, filename) {
    pageNumber = 1;
    PDFJS.getDocument(filename).then(
        function(pdf) {
            konshuu_pdf = pdf;
            renderPage(konshuu_pdf, 1);
        }
    );
    if (element) {
      konshuu_dropdown_button.innerHTML = element.innerHTML;
      konshuu_dropdown_content.style.display = 'none';
    }
};

function prevPage() {
  if (pageNumber > 1) {
      pageNumber--;
      renderPage(konshuu_pdf, pageNumber);
  }
};

function nextPage() {
  if (pageNumber < konshuu_pdf.numPages) {
    pageNumber++;
    renderPage(konshuu_pdf, pageNumber);
  }
};

function keyupListener(e) {
    if (rendering) {
      return;
    }

    if (e.keyCode == 37) {
        prevPage();
    } else if (e.keyCode == 39) {
        nextPage();
    }
};

function showDropdownContent() {
    konshuu_dropdown_content.style.display = "block";
};

function hideDropdownContent() {
    konshuu_dropdown_content.style.display = "none";
};

window.addEventListener("load", renderPdf(null, initial_pdf));
document.addEventListener("keyup", keyupListener);

konshuu_dropdown.addEventListener("mouseover", showDropdownContent);
konshuu_dropdown.addEventListener("mouseout", hideDropdownContent);
