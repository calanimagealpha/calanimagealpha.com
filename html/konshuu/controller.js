var inputLock = false;
var settingsOpen = false;

var DOWN_TRIANGLE = "&#9662;"
var LEFT_TRIANGLE = "&#9654;";
var RIGHT_TRIANGLE = "&#9664;"

const input = function userInputManager(signal) {
  if (inputLock) {
    return;
  }
  if (settingsOpen) {
    return;
  }
  if (inputSettings[signal]) {
    inputSettings[signal]();
  }
}

const onKeyDown = function keyDownEventManager(e) {
  let key = String.fromCharCode(e.keyCode);
  input(key);
}

const onClick = function mouseUpEventManager(e) {
  let containerWidth = document.getElementById("page-container").offsetWidth;
  let canvasWidth = document.getElementById("page").offsetWidth;
  let mouseX = e.clientX;
  if (e.target.id === "page") {
    if (mouseX < (containerWidth - canvasWidth) / 2
      || mouseX > (containerWidth + canvasWidth) / 2) {
      return;
    }
    if (mouseX < containerWidth / 2) {
      input("left");
    } else if (mouseX > containerWidth / 2) {
      input("right");
    }
  }
  
  // close setting dropdowns
  let dropdowns = [
    "issue-selector-content",
    "page-selector-content",
    "resize-selector-content",
  ];
  for (let i = 0; i < dropdowns.length; i += 1) {
    if (e.target.id === dropdowns[i]) {
      continue;
    }
    if (document.getElementById(dropdowns[i]).classList.contains('show')) {
      document.getElementById(dropdowns[i]).classList.remove('show');
    }
  }
}

const openSettings = function openSettingsOverlayMenu() {
  document.getElementById("collapsible-button").innerHTML = RIGHT_TRIANGLE;
  document.getElementById("collapsible-button").onclick = closeSettings;
  document.getElementById("overlay-settings").style.width = "100%";
  settingsOpen = true;
}

const closeSettings = function closeSettingsOverlayMenu() {
  document.getElementById("collapsible-button").innerHTML = LEFT_TRIANGLE;
  document.getElementById("collapsible-button").onclick = openSettings;
  document.getElementById("overlay-settings").style.width = "0%";
  settingsOpen = false;
}

const toggleIssueDropdown = function toggleVolumeIssueSelectorDropdown() {
  document.getElementById("issue-selector-content").classList.toggle("show");
}

const togglePageDropdown = function togglePageNumberSelectorDropdown() {
  document.getElementById("page-selector-content").classList.toggle("show");
}

const toggleResizeDropdown = function toggleResizeOptionSelectorDropdown() {
  document.getElementById("resize-selector-content").classList.toggle("show");
}

const changePdfIssue = function changeCurrentIssueForPdfReader(issue) {
  changeIssue(issue);
  closeSettings();
}

const changePdfPage = function changeCurrentPageForPdfReader(pagenum) {
  changePage(pagenum);
  closeSettings();
}

const resize = function resizeReader(size) {
  zoomFactor = size;
  document.getElementById("resize-settings").innerHTML = size + " " + DOWN_TRIANGLE;
  closeSettings();
  drawPage();
}

const initializeSettingsMenu = function dynamicallyConstructSettingsMenuDropdowns(pageCount) {
  let issueSelectorContent = '';
  for (let i = 0; i < available_pdfs.length; i += 1) {
    issueSelectorContent += '<a href=\"#\" onclick=\"changePdfIssue(' + i + ')\">' + display_pdfs[i] +'</a>';
  }
  document.getElementById("issue-selector-content").innerHTML = issueSelectorContent;
  
  let pageSelectorContent = '';
  for (let i = 1; i <= pageCount; i += 1) {
    pageSelectorContent += '<a href=\"#\" onclick=\"changePdfPage(' + i + ')\">' + "Page " + i + '</a>';
  }
  document.getElementById("page-selector-content").innerHTML = pageSelectorContent;

  let resizeSelectorContent = '';
  let resizeOptions = [
    "Fit to width",
    "Fit to height",
    "Fit to container",
    "50%",
    "75%",
    "100%",
    "125%",
    "150%",
    "200%",
    "300%",
    "400%",
    "1000%",
  ];
  for (let i = 0; i < resizeOptions.length; i += 1) {
    resizeSelectorContent += '<a href=\"#\" onclick=\"resize(\'' + resizeOptions[i] + '\')\">' + resizeOptions[i] + '</a>';
  }
  document.getElementById("resize-selector-content").innerHTML = resizeSelectorContent;
  
}

let inputSettings = {
  'A': prevPage,
  'D': nextPage,
  '%': prevPage,
  '\'': nextPage,
  'left': prevPage,
  'right': nextPage,
};

window.addEventListener('keydown', onKeyDown, false);
window.addEventListener('mouseup', onClick, false);

closeSettings();
