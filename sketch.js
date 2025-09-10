function setup() {
  createCanvas(400, 269);
  noStroke();
}

function draw() {
  background(255);

  // Palette
  const Y = color(246, 223, 20);
  const LG = color(210);
  const DG = color(125);
  const B  = color(0);
  const W  = color(255);

  // ===== LEFT GRAY FIELD =====
  fill(LG);
  triangle(0, 0, 120, 0, 120, 269);
  triangle(0, 0, 0, 269, 120, 269);

  // halftone dots (ellipses)
  fill(DG);
  for (let yy = 12; yy < height; yy += 16) {
    for (let xx = 12; xx < 116; xx += 16) {
      ellipse(xx, yy, 5, 5);
    }
  }

  // ===== TOP BLACK SWEEP =====
  fill(B);
  triangle(0, 0, width, 0, 215, 105);
  triangle(215, 105, width, 0, width, 68);
  triangle(360, 0, width, 0, width, 34); // right cap

  // ===== BOTTOM-LEFT BLACK CURVE (off-canvas ellipse) =====
  fill(B);
  ellipse(-42, 300, 300, 260);

  // ===== YELLOW BODY =====
  fill(Y);
  ellipse(318, 206, 360, 236);         // big right yellow base
  triangle(68, 124, 258, 104, 245, 184); // mid yellow shard

  // ===== BLACK OVAL "6" OVER YELLOW =====
  fill(B);
  ellipse(332, 208, 260, 160);
  fill(Y);
  ellipse(332, 208, 110, 120);

  // ===== WHITE HORIZONTAL LINE =====
  stroke(W);
  strokeWeight(6.5);
  line(0, 134, 360, 134);
  noStroke();

  // ===== TOP WHITE/BLACK CIRCLE DETAIL =====
  fill(B);
  ellipse(292, 8, 116, 116);   // behind rim
  fill(W);
  ellipse(292, 28, 78, 78);
  fill(B);
  ellipse(316, 24, 46, 46);
  fill(W);
  ellipse(300, 28, 22, 22);

  // ===== BLACK BLOBS ON SHARD (ellipses only) =====
  fill(B);
  ellipse(114, 161, 28, 20);
  ellipse(165, 173, 72, 26);
  ellipse(207, 202, 56, 22);
  ellipse(248, 233, 58, 24);

  // ===== YELLOW LIGHTNING ACCENTS (triangles) =====
  fill(Y);
  triangle(58, 72, 86, 86, 58, 92);
  triangle(206, 90, 244, 106, 212, 116);
  triangle(230, 100, 268, 116, 236, 126);

  // ====== NEW: SKETCHY STRAIGHT LINES ======
  // Yellow sketch lines (upper-left & mid, parallel pairs)
  stroke(Y);
  strokeWeight(4);
  line(48, 50, 100, 82);
  line(42, 62, 92, 96);

  line(192, 86, 252, 114);
  line(206, 92, 265, 121);

  // Black sketch lines (requested) — placed to match the reference look
  stroke(B);
  strokeWeight(5);
  // small stubs near the white circle (top-right) pointing inward
  line(352, 38, 376, 32);
  line(342, 54, 372, 46);

  // black dashes along the right edge of the yellow wedge (lower-right cluster)
  line(286, 246, 326, 258);
  line(300, 224, 340, 236);
  line(272, 232, 308, 242);

  // short black sketch marks near the mid white line to suggest comic texture
  strokeWeight(4);
  line(128, 120, 148, 116);
  line(156, 118, 176, 114);

  // tiny black ticks near left halftone to mimic the small brush marks
  line(18, 106, 30, 100);
  line(26, 118, 38, 112);

  noLoop();
}
