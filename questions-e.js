/* Indiana Permit Quest: question bank, part 6 (wordless sign pictures)
 * Appended to QUESTIONS from questions-d.js. Each question shows the sign
 * exactly as it appears on the knowledge test: shape, color, and symbol,
 * with no English words on the sign. Format matches the original bank. */
QUESTIONS = QUESTIONS.concat([
/* ---------- SIGN PICTURES (wordless signs, as on the test) ---------- */
{ cat: "Sign Pictures", sign: "stop",
  q: "This sign appears at an intersection. What must you do?",
  options: [
    "Slow down but keep rolling if no one is coming",
    "Stop and yield the right of way",
    "Stop only if another car is already waiting",
    "Yield, but stopping is optional"
  ],
  answer: 1,
  why: "An eight-sided (octagonal) sign means you must stop and yield the appropriate right of way at the intersection.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "yield",
  q: "What does this sign require you to do?",
  options: [
    "Come to a complete stop no matter what",
    "Slow down and be ready to stop, yielding to anyone with the right of way",
    "Speed up to merge ahead of traffic",
    "Stop, then treat it like a green light"
  ],
  answer: 1,
  why: "A yield sign means slow down and be prepared to come to a complete stop if a vehicle or pedestrian with the right of way is approaching.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "do-not-enter",
  q: "You see this sign at the end of a ramp. What does it mean?",
  options: [
    "Do not enter; you would be going the wrong way",
    "No parking past this point",
    "The road is closed in both directions",
    "Stop and wait for a green arrow"
  ],
  answer: 0,
  why: "The red circle with a white horizontal bar is the Do Not Enter sign. Red signs convey regulations requiring immediate action, and this one means do not drive past it.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "no-u-turn",
  q: "This sign shows a U-turn arrow with a red slash. What does it prohibit?",
  options: [
    "Left turns",
    "U-turns",
    "Right turns on red",
    "Passing other vehicles"
  ],
  answer: 1,
  why: "A white regulatory sign shows rules drivers must obey; the U-turn arrow inside the red prohibition circle means U-turns are not allowed here.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "no-left-turn",
  q: "This sign shows a left arrow with a red slash. What does it prohibit?",
  options: [
    "Left turns",
    "U-turns",
    "Entering the intersection",
    "Turning around in a driveway"
  ],
  answer: 0,
  why: "A white regulatory sign shows rules drivers must obey; the left arrow inside the red prohibition circle means left turns are not allowed here.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "no-right-turn",
  q: "This sign shows a right arrow with a red slash. What does it prohibit?",
  options: [
    "Right turns on red only",
    "Lane changes",
    "Right turns",
    "Merging right"
  ],
  answer: 2,
  why: "A white regulatory sign shows rules drivers must obey; the right arrow inside the red prohibition circle means right turns are not allowed here.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "one-way",
  q: "What does this sign tell you about the street?",
  options: [
    "Traffic moves in only one direction, following the arrow",
    "You must turn right at the next corner",
    "The street is closed ahead",
    "Passing is allowed on either side"
  ],
  answer: 0,
  why: "A one-way sign means all traffic on the street flows in the direction the arrow points.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "speed-limit-55",
  q: "What does the number on this sign mean?",
  options: [
    "The minimum speed is 55 miles per hour",
    "The maximum speed allowed is 55 miles per hour",
    "You must drive exactly 55 miles per hour",
    "55 is the advisory speed for the next curve"
  ],
  answer: 1,
  why: "White signs display traffic regulations drivers must obey, such as speed limits. The number is the maximum speed allowed.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "railroad-ahead",
  q: "What is this round sign warning you about?",
  options: [
    "A traffic circle is ahead",
    "A railroad crossing is ahead",
    "The road ends in a roundabout",
    "A school zone begins"
  ],
  answer: 1,
  why: "Circular signs alert drivers to upcoming railroad crossings.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "merge",
  q: "What does this sign tell you?",
  options: [
    "Two lanes are merging into one ahead; be ready to merge",
    "A new lane is opening on your left",
    "The road splits into two separate roads",
    "Trucks must merge to the right"
  ],
  answer: 0,
  why: "Diamond-shaped signs warn of upcoming road conditions and hazards. This symbol means traffic lanes are merging ahead.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "lane-ends",
  q: "What does this sign mean?",
  options: [
    "Your lane is ending ahead; merge into the continuing lane",
    "A passing lane is beginning",
    "Two lanes become three ahead",
    "The left lane is for turning only"
  ],
  answer: 0,
  why: "Diamond-shaped signs warn of upcoming road conditions and hazards. This symbol means your lane ends and you must merge.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "curve-right",
  q: "What is ahead, according to this sign?",
  options: [
    "A sharp curve to the right; slow down",
    "A detour to the right",
    "A right-turn-only lane",
    "A winding road with many curves"
  ],
  answer: 0,
  why: "Diamond-shaped signs warn of upcoming road conditions and hazards. This symbol warns of a curve ahead so you can slow down before it.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "winding-road",
  q: "What does this sign warn of?",
  options: [
    "A winding road with a series of curves ahead",
    "A slippery road surface",
    "A steep hill",
    "Road construction"
  ],
  answer: 0,
  why: "Diamond-shaped signs warn of upcoming road conditions and hazards. The winding arrow means a series of curves is ahead.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "slippery-when-wet",
  q: "What does this sign warn you about?",
  options: [
    "The road may be slippery when wet; slow down",
    "Flooding is blocking the road",
    "A car wash is ahead",
    "The bridge ices before the road"
  ],
  answer: 0,
  why: "Yellow signs prepare drivers for road conditions and hazards ahead. This symbol marks pavement that becomes slippery when wet.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "bicycle",
  q: "This sign shows a bicycle symbol. What is it telling you?",
  options: [
    "Bicycles must use the sidewalk here",
    "Watch for bicyclists; a bicycle crossing or shared road is ahead",
    "No bicycles are allowed",
    "A bicycle shop is ahead"
  ],
  answer: 1,
  why: "Warning signs alert drivers to conditions ahead. This symbol means bicyclists may be crossing or sharing the road, so share the road with them.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "pedestrian",
  q: "This sign shows a walking person. What does it mean?",
  options: [
    "Pedestrians may be crossing ahead; be ready to yield",
    "No pedestrians are allowed",
    "A sidewalk is closed",
    "A jogging trail parking lot is ahead"
  ],
  answer: 0,
  why: "Warning signs alert drivers to conditions ahead. This symbol means pedestrians may be crossing, so slow down and be ready to yield.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "stop-ahead",
  q: "This diamond sign shows a small stop sign inside it. What does it tell you?",
  options: [
    "A stop sign is ahead; prepare to stop",
    "You must stop right at this sign",
    "A police checkpoint is ahead",
    "The road is closed"
  ],
  answer: 0,
  why: "Diamond-shaped signs warn of upcoming road conditions and hazards. The small stop-sign symbol inside means a stop sign is coming up.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "signal-ahead",
  q: "This diamond sign shows a traffic light. What does it warn of?",
  options: [
    "A traffic signal is ahead; be prepared to stop",
    "A railroad signal is malfunctioning",
    "Flashing school lights are ahead",
    "A drawbridge signal is ahead"
  ],
  answer: 0,
  why: "Diamond-shaped signs warn of upcoming road conditions and hazards. The traffic light symbol means a signalized intersection is ahead.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "narrow-bridge",
  q: "This sign shows the road getting narrower. What does it mean?",
  options: [
    "The road narrows ahead, such as at a narrow bridge",
    "A tunnel is ahead",
    "The bridge has a weight limit",
    "No trucks are allowed"
  ],
  answer: 0,
  why: "Diamond-shaped signs warn of upcoming road conditions and hazards. The narrowing lines mean the roadway gets narrower ahead.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "divided-highway-begins",
  q: "What is this sign telling you?",
  options: [
    "You are approaching a divided highway",
    "The road becomes one-way",
    "A median is ending",
    "Two roads are merging"
  ],
  answer: 0,
  why: "Diamond-shaped signs warn of upcoming road conditions and hazards. This symbol means the road ahead is divided by a median.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "no-passing-pennant",
  q: "You see this pennant-shaped sign on the left side of the road. What does it mean?",
  options: [
    "Do not pass other vehicles on the left here",
    "Passing is allowed with care",
    "The left lane is ending",
    "A school zone is ahead"
  ],
  answer: 0,
  why: "Pennant-shaped signs are posted on the left-hand side of two-way roads to warn drivers not to pass other vehicles on the left.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "school",
  q: "What does this five-sided sign warn you about?",
  options: [
    "You are entering a school area; watch for children crossing",
    "A playground is closed",
    "School buses stop here",
    "A crosswalk with a signal is ahead"
  ],
  answer: 0,
  why: "Five-sided signs warn drivers they are entering a school area where children may be crossing.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "crossbuck",
  q: "You see this X-shaped sign at a railroad crossing, with no other signs. What should you do?",
  options: [
    "Treat it like a yield sign: you may cross if no train is coming, but you must stop if one is approaching",
    "Stop every time, then cross",
    "Speed up to clear the tracks quickly",
    "Stop only at night"
  ],
  answer: 0,
  why: "Crossbucks mark the location of the tracks. A crossbuck displayed alone should be treated as a yield sign: the decision to stop or cross is yours, but you must stop if a train is approaching.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "slow-moving-vehicle",
  q: "This orange triangle emblem is on the back of a vehicle ahead of you. What does it mean?",
  options: [
    "The vehicle cannot exceed 25 miles per hour; be prepared to slow down",
    "The vehicle is carrying hazardous materials",
    "The vehicle is stopping",
    "The vehicle is wider than normal"
  ],
  answer: 0,
  why: "A slow-moving vehicle emblem has an orange fluorescent center and red reflective borders and indicates a slow-moving vehicle which cannot exceed 25 miles per hour.",
  ref: "Ch. 6, p. 28" },
{ cat: "Sign Pictures", sign: "interstate-shield",
  q: "This shield shape identifies which kind of highway?",
  options: [
    "An Interstate highway",
    "A U.S. numbered highway",
    "A state highway",
    "A county road"
  ],
  answer: 0,
  why: "The red, white, and blue shield is the route marker for the Interstate highway system.",
  ref: "Ch. 6, p. 28" }
]);
