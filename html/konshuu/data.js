// HACK JOB: clean up later

var pdf_start = 42;
var pdfs_limits = [13, 12, 8, 6, 12, 11, 13, 8];

var available_pdfs = [];
var display_pdfs = [];

for (let i = 0; i < pdfs_limits.length; i += 1) {
  for (let j = 1; j <= pdfs_limits[i]; j += 1) {
    available_pdfs.push("./" + (pdf_start + i) + "/" + j + ".pdf");
    display_pdfs.push("Volume " + (pdf_start + i) + " Issue " + j);
  }
}
