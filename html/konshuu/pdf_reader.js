
var DOWN_TRIANGLE = "&#9662;"

let pdfContainer = document.getElementById("page-container");
let pdfCanvas = document.getElementById("page");
let pdfContext = pdfCanvas.getContext('2d');

let currentIssue = available_pdfs.length - 1;
let currentPage = 1; // 1-indexed
let zoomFactor = "Fit to container"; 

let currentPdf = available_pdfs[currentIssue];

let currentPdfObject = null;

const changeIssue = function goToIssueNumber(issueNum) {
  currentIssue = issueNum;
  currentPdf = available_pdfs[currentIssue];
  currentPage = 1;
  loadPdf();
}

const changePage = function goToPageOfCurrentIssue(pageNum) {
  currentPage = pageNum;
  drawPage();
}

const prevPage = function goToPreviousPageOfCurrentIssue() {
  if (currentPage <= 1) {
    currentPage = 1;
    return;
  }
  currentPage -= 1;
  drawPage();
}

const nextPage = function goToNextPageOfCurrentIssue() {
  if (currentPage >= currentPdfObject.numPages) {
    currentPage = currentPdfObject.numPages;
    return;
  }
  currentPage += 1;
  drawPage();
}

const loadPdf = function loadPDFFileIntoPage() {
  inputLock = true;
  pdfjsLib.getDocument(currentPdf).promise.then((pdf) => {
    currentPdfObject = pdf;
    initializeSettingsMenu(currentPdfObject.numPages);
    drawPage();
  });
}

const drawPage = function loadPDFPageIntoCanvas() {
  inputLock = true;
  document.getElementById("current-reading").innerHTML = display_pdfs[currentIssue] + " " + DOWN_TRIANGLE;
  document.getElementById("page-selector").innerHTML = "Page " + currentPage + " " + DOWN_TRIANGLE;

  currentPdfObject.getPage(currentPage).then((page) => {
    let zoomAmount = {"scale": 1.0};
    if (zoomFactor === "Fit to width") {
      zoomAmount.scale = (window.innerWidth - 24) / page.getViewport(zoomAmount).width;
    } else if (zoomFactor === "Fit to height") {
      zoomAmount.scale = window.innerHeight / page.getViewport(zoomAmount).height;
    } else if (zoomFactor === "Fit to container") {
      zoomAmount.scale = Math.min((window.innerWidth - 24) / page.getViewport(zoomAmount).width, 
                                  window.innerHeight / page.getViewport(zoomAmount).height);
    } else if (zoomFactor) {
      let percentage = parseInt(zoomFactor.slice(0, -1));
      zoomAmount.scale = percentage / 100;
    }
    let viewport = page.getViewport(zoomAmount);
    
    pdfCanvas.width = viewport.width;
    pdfCanvas.height = viewport.height;
    
    let renderTask = page.render({
      canvasContext: pdfContext,
      viewport: viewport
    });
    
    renderTask.promise.then(() => {
      inputLock = false;
    });
  });
}

loadPdf();
