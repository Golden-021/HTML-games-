if (!pipe.passed && bird.x > pipe.x + pipe.width) {
  pipe.passed = true;
  score++;
}
