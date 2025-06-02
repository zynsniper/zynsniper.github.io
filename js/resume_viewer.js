document.addEventListener("DOMContentLoaded", function () {
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js";
  const resumePath = "../assets/Resume.pdf";

  pdfjsLib.getDocument(resumePath).promise.then(pdf => {
    pdf.getPage(1).then(page => {
      const scale = 1.5;
      const viewport = page.getViewport({ scale });

      const canvas = document.getElementById('pdf-canvas');
      const context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      page.render({
        canvasContext: context,
        viewport: viewport
      });
    });
  }).catch(error => {
    console.error("Error loading PDF: ", error);
  });
});
