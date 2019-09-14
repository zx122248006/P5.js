var nums = [100, 25, 46, 72]


var num = 23


function setup() {
  createCanvas(400, 400);


}

function draw() {
  background(0);

  ellipse(100, 200, num, num)


  for (var i = 0; i < nums.length; i++) {

    ellipse(100*i,100*i, nums[i], nums[i])
  }
}