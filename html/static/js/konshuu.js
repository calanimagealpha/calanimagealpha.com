PDFJS.workerSrc = "/static/js/pdf.worker.js";

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

var konshuu_reader_left = document.getElementById("konshuu-reader-left");
var konshuu_reader_right = document.getElementById("konshuu-reader-right");

var konshuu_pdf = null;
var pageNumber = 1;
var rendering = false;

function renderPage(pdf, newPageNumber) {
    if (rendering) {
        return;
    }

    rendering = pdf.getPage(newPageNumber).then(
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
                    pageNumber = newPageNumber;
                }
            );
        }
    );

    window.scrollTo(0, 0);

    konshuu_reader_left.style.display = "block";
    konshuu_reader_right.style.display = "block";

    if (newPageNumber == 1) {
        konshuu_reader_left.style.display = "none";
    } else if (newPageNumber == konshuu_pdf.numPages) {
        konshuu_reader_right.style.display = "none";
    }
}

function renderPdf(element, filename) {
    PDFJS.getDocument(filename).then(
        function(pdf) {
            konshuu_pdf = pdf;
            renderPage(konshuu_pdf, 1);
        }
    );
    if (element) {
      konshuu_dropdown_button.innerHTML = element.innerHTML;
      hideDropdownContent();
    }
};

function prevPage() {
    if (pageNumber > 1) {
        renderPage(konshuu_pdf, pageNumber - 1);
    }
};

function nextPage() {
    if (pageNumber < konshuu_pdf.numPages) {
      renderPage(konshuu_pdf, pageNumber + 1);
    }
};

function keyupListener(e) {
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
    konshuu_dropdown_content.scrollTop = 0;
    konshuu_dropdown_content.style.display = "none";
};

function initReader() {
    konshuu_dropdown_content.children[0].click();
};

window.addEventListener("load", initReader);
document.addEventListener("keyup", keyupListener);

konshuu_dropdown.addEventListener("mouseover", showDropdownContent);
konshuu_dropdown.addEventListener("mouseleave", hideDropdownContent);
