var nums = [100, 25, 46, 72]

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);

  // ellipse(100, 200, nums[0], nums[0])
  // ellipse(200, 200, nums[1], nums[1])
  // ellipse(300, 200, nums[2], nums[2])
  // ellipse(400, 200, nums[3], nums[3])

  for (var i = 0; i < nums.length; i++) {
    ellipse(100 * (i + 1), 200, nums[i], nums[i])

  }
}